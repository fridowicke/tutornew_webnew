#!/bin/bash
# Verification script for the tutor.new site.

echo "Verifying tutor.new setup..."
echo ""

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

ERRORS=0
WARNINGS=0

echo "Checking build setup..."
if npm run build:tutor-new > /dev/null 2>&1; then
        echo -e "${GREEN}[ok]${NC} tutor.new builds successfully"
else
        echo -e "${RED}[error]${NC} tutor.new build failed"
    ERRORS=$((ERRORS + 1))
fi

echo ""
echo "Checking required files..."

REQUIRED_FILES=(
    "sites/tutor.new/.eleventy.js"
    "sites/tutor.new/CNAME"
    ".github/workflows/deploy-tutor-new.yml"
)

for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}[ok]${NC} $file exists"
    else
        echo -e "${RED}[error]${NC} $file missing"
        ERRORS=$((ERRORS + 1))
    fi
done

echo ""
echo "Checking build output..."

if [ -d "_site-tutor-new" ] && [ "$(ls -A _site-tutor-new 2>/dev/null)" ]; then
    FILE_COUNT=$(find _site-tutor-new -type f | wc -l)
    echo -e "${GREEN}[ok]${NC} tutor.new build output exists ($FILE_COUNT files)"
else
    echo -e "${YELLOW}[warn]${NC} tutor.new build output not found (run: npm run build:tutor-new)"
    WARNINGS=$((WARNINGS + 1))
fi

echo ""
echo "Checking CNAME file in build output..."

if [ -f "_site-tutor-new/CNAME" ]; then
    CNAME_CONTENT=$(cat _site-tutor-new/CNAME)
    if [ "$CNAME_CONTENT" = "tutor.new" ]; then
        echo -e "${GREEN}[ok]${NC} tutor.new CNAME correct: $CNAME_CONTENT"
    else
        echo -e "${RED}[error]${NC} tutor.new CNAME incorrect: $CNAME_CONTENT (expected: tutor.new)"
        ERRORS=$((ERRORS + 1))
    fi
else
    echo -e "${YELLOW}[warn]${NC} tutor.new CNAME not found in build output"
    WARNINGS=$((WARNINGS + 1))
fi

echo ""
echo "----------------------------------------"
if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}All checks passed!${NC}"
    exit 0
elif [ $ERRORS -eq 0 ]; then
    echo -e "${YELLOW}Setup looks good, but some warnings: $WARNINGS${NC}"
    exit 0
else
    echo -e "${RED}Found $ERRORS error(s) and $WARNINGS warning(s)${NC}"
    exit 1
fi

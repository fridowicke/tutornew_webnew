#!/bin/bash
# Verification script for multi-site setup

echo "🔍 Verifying Multi-Site Setup..."
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

ERRORS=0
WARNINGS=0

# Check if both sites build
echo "📦 Checking build setup..."
if npm run build:tutor-new > /dev/null 2>&1; then
    echo -e "${GREEN}✓${NC} tutor.new builds successfully"
else
    echo -e "${RED}✗${NC} tutor.new build failed"
    ERRORS=$((ERRORS + 1))
fi

if npm run build:open-tutor-new > /dev/null 2>&1; then
    echo -e "${GREEN}✓${NC} open.tutor.new builds successfully"
else
    echo -e "${RED}✗${NC} open.tutor.new build failed"
    ERRORS=$((ERRORS + 1))
fi

# Check for required files
echo ""
echo "📁 Checking required files..."

REQUIRED_FILES=(
    "sites/tutor.new/.eleventy.js"
    "sites/tutor.new/CNAME"
    "sites/open.tutor.new/.eleventy.js"
    "sites/open.tutor.new/CNAME"
    ".github/workflows/shared-build.yml"
    ".github/workflows/deploy-tutor-new.yml"
    ".github/workflows/deploy-open-tutor-new.yml"
)

for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $file exists"
    else
        echo -e "${RED}✗${NC} $file missing"
        ERRORS=$((ERRORS + 1))
    fi
done

# Check workflow configuration
echo ""
echo "⚙️  Checking workflow configuration..."

if grep -q "external_repository:" .github/workflows/deploy-open-tutor-new.yml && ! grep -q "^[[:space:]]*#.*external_repository:" .github/workflows/deploy-open-tutor-new.yml; then
    echo -e "${GREEN}✓${NC} External repository configured in workflow"
else
    echo -e "${YELLOW}⚠${NC}  External repository not configured (expected if setup not complete)"
    WARNINGS=$((WARNINGS + 1))
fi

# Check for build outputs
echo ""
echo "📤 Checking build outputs..."

if [ -d "_site-tutor-new" ] && [ "$(ls -A _site-tutor-new 2>/dev/null)" ]; then
    FILE_COUNT=$(find _site-tutor-new -type f | wc -l)
    echo -e "${GREEN}✓${NC} tutor.new build output exists ($FILE_COUNT files)"
else
    echo -e "${YELLOW}⚠${NC}  tutor.new build output not found (run: npm run build:tutor-new)"
    WARNINGS=$((WARNINGS + 1))
fi

if [ -d "_site-open-tutor-new" ] && [ "$(ls -A _site-open-tutor-new 2>/dev/null)" ]; then
    FILE_COUNT=$(find _site-open-tutor-new -type f | wc -l)
    echo -e "${GREEN}✓${NC} open.tutor.new build output exists ($FILE_COUNT files)"
else
    echo -e "${YELLOW}⚠${NC}  open.tutor.new build output not found (run: npm run build:open-tutor-new)"
    WARNINGS=$((WARNINGS + 1))
fi

# Check CNAME in build outputs
echo ""
echo "🌐 Checking CNAME files in build outputs..."

if [ -f "_site-tutor-new/CNAME" ]; then
    CNAME_CONTENT=$(cat _site-tutor-new/CNAME)
    if [ "$CNAME_CONTENT" = "tutor.new" ]; then
        echo -e "${GREEN}✓${NC} tutor.new CNAME correct: $CNAME_CONTENT"
    else
        echo -e "${RED}✗${NC} tutor.new CNAME incorrect: $CNAME_CONTENT (expected: tutor.new)"
        ERRORS=$((ERRORS + 1))
    fi
else
    echo -e "${YELLOW}⚠${NC}  tutor.new CNAME not found in build output"
    WARNINGS=$((WARNINGS + 1))
fi

if [ -f "_site-open-tutor-new/CNAME" ]; then
    CNAME_CONTENT=$(cat _site-open-tutor-new/CNAME)
    if [ "$CNAME_CONTENT" = "open.tutor.new" ]; then
        echo -e "${GREEN}✓${NC} open.tutor.new CNAME correct: $CNAME_CONTENT"
    else
        echo -e "${RED}✗${NC} open.tutor.new CNAME incorrect: $CNAME_CONTENT (expected: open.tutor.new)"
        ERRORS=$((ERRORS + 1))
    fi
else
    echo -e "${YELLOW}⚠${NC}  open.tutor.new CNAME not found in build output"
    WARNINGS=$((WARNINGS + 1))
fi

# Summary
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}✓ All checks passed!${NC}"
    exit 0
elif [ $ERRORS -eq 0 ]; then
    echo -e "${YELLOW}⚠ Setup looks good, but some warnings: $WARNINGS${NC}"
    exit 0
else
    echo -e "${RED}✗ Found $ERRORS error(s) and $WARNINGS warning(s)${NC}"
    exit 1
fi


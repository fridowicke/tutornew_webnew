# Deployment Guide

This repository deploys the tutor.new website to GitHub Pages.

## Prerequisites

- GitHub Pages is enabled for the repository.
- The custom domain is `tutor.new`, configured through `sites/tutor.new/CNAME`.
- Node.js 20 is used in CI.

## Local Build

```bash
npm install
npm run build
```

The generated site is written to `_site-tutor-new/`.

## Local Development

```bash
npm run serve:tutor-new
```

For watch mode:

```bash
npm run dev:tutor-new
```

## Automatic Deployment

The workflow `.github/workflows/deploy-tutor-new.yml` runs on pushes to `main` when tutor.new files, shared assets, or package files change.

It builds `sites/tutor.new` and deploys `_site-tutor-new/` to GitHub Pages.

## Verification

Run:

```bash
./scripts/verify-setup.sh
```

The script builds tutor.new, checks required deployment files, and verifies the generated CNAME.

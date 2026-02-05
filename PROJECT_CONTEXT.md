# GPI Fee Analyzer - Project Context

**IMPORTANT: Read this file at the start of every session to maintain continuity.**

## Live Production URL

🔗 **https://venut100-ai.github.io/gpi-fee-analyzer/**

This is the live, shareable tool that the team uses. Always push updates here.

## GitHub Repository

- **Repo:** https://github.com/venut100-ai/gpi-fee-analyzer
- **Branch:** main
- **Hosting:** GitHub Pages (auto-deploys from main branch)

## Deployment Workflow

To deploy updates to production:

```bash
cd "/path/to/Claud Cost Comparison Files"
git add index.html
git commit -m "Description of changes"
git push origin main
```

Changes appear at the live URL within 1-2 minutes after push.

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | **THE PRODUCTION TOOL** - This is what gets deployed |
| `test_suite/pattern_validation_tests.js` | Automated tests for extraction patterns |
| `knowledgebase/MASTER_KNOWLEDGEBASE.md` | Processor format documentation |
| `PRODUCTION_READINESS_REPORT.md` | QA test results and certification |

## Current Version

- **Version:** v8.5 (Legendary Edition)
- **Last Updated:** February 5, 2026
- **Test Results:** 100% accuracy (20/20 tests pass)

## Recent Changes Log

| Date | Change |
|------|--------|
| Feb 5, 2026 | Fixed VPS/EVO Net Sales pattern false positive bug |
| Feb 5, 2026 | Added `^TOTAL\s+[\d,]+\s+\$([\d,]+\.\d{2})` pattern for VPS Card Summary format |
| Feb 5, 2026 | 20-bot research army knowledgebase compiled |
| Feb 4, 2026 | v8.5 released with enhanced extraction patterns |

## Testing

Run tests before pushing:

```bash
node test_suite/pattern_validation_tests.js
```

Expected: 10/10 PASS (100% accuracy)

## Session Continuity Notes

When starting a new session:
1. **READ THIS FILE FIRST**
2. Check git status: `git status`
3. Pull latest: `git pull origin main`
4. Run tests before making changes
5. Always push to GitHub after completing work

---
*This file exists to maintain project continuity across Cowork sessions.*

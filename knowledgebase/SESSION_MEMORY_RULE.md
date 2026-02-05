# SESSION MEMORY RULE
## Mandatory Protocol for All Future Sessions

**Effective Date:** February 5, 2026
**Status:** ACTIVE - MUST FOLLOW

---

## 📋 THE RULE

> **At the END of every session, Claude MUST save a session summary to the knowledgebase folder before concluding.**

This is NON-NEGOTIABLE. Every session builds on previous work, and without persistent memory, context is lost.

---

## 📁 WHERE TO SAVE

**Location:** `knowledgebase/sessions/`

**Filename Format:** `SESSION_YYYY-MM-DD_[brief-topic].md`

**Examples:**
- `SESSION_2026-02-05_exclusion-rules.md`
- `SESSION_2026-02-06_heartland-patterns.md`
- `SESSION_2026-02-07_bug-fix-volume-extraction.md`

---

## 📝 SESSION SUMMARY TEMPLATE

```markdown
# Session Summary: [DATE]
## Topic: [Brief Description]

### What Was Done
- [Bullet list of completed tasks]

### Files Modified
| File | Changes |
|------|---------|
| `filename` | Description of changes |

### New Patterns Added
[If applicable - list new CONTROLLABLE or PASSTHROUGH patterns]

### Bugs Fixed
[If applicable]

### Key Decisions Made
- [Important choices and reasoning]

### Test Results
- [Test suite status after changes]

### Git Commits
- `[commit hash]` - [commit message summary]

### Next Steps / Open Items
- [What should be done next session]

### Context for Future Sessions
[Any important context that would be lost without this note]

---
*Session ended: [timestamp]*
```

---

## 🔄 WORKFLOW

### At Session Start:
1. Read `knowledgebase/PROJECT_MEMORY.md` for project context
2. Check `knowledgebase/sessions/` for recent session summaries
3. Review `SESSION_HISTORY_AND_CONTEXT.md` if needed

### During Session:
1. Use TodoWrite to track progress
2. Commit changes frequently with descriptive messages
3. Run tests after modifications

### At Session End (MANDATORY):
1. Create session summary using template above
2. Save to `knowledgebase/sessions/SESSION_YYYY-MM-DD_[topic].md`
3. Update `PROJECT_MEMORY.md` if major changes were made
4. Commit the session summary
5. Remind user to `git push origin main`

---

## 🎯 WHY THIS MATTERS

1. **Context Preservation** - Future sessions start with full knowledge
2. **Pattern Building** - Each session adds to the fee categorization KB
3. **Decision History** - Understand WHY things were done
4. **Bug Prevention** - Don't repeat solved problems
5. **Progress Tracking** - See the evolution of the tool

---

## ⚠️ FAILURE TO COMPLY

If a session ends without saving a summary:
- Critical context may be lost
- Next session starts from scratch
- Duplicate work may occur
- Pattern improvements may be forgotten

**This rule exists because Cowork sessions don't persist memory between conversations.**

---

*This rule is part of the GPI Fee Analyzer project knowledge base.*

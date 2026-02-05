# GPI Fee Analyzer - Project Memory & Context
## Persistent Knowledge Base for All Sessions

**Last Updated:** February 5, 2026
**Version:** 8.5.2
**Status:** Production Ready ✅

---

## 🎯 PROJECT OVERVIEW

### What This Tool Does
The **GPI Fee Analyzer** is a browser-based merchant processing statement analyzer that:
- Extracts volume and fee data from ANY processor's PDF statement
- Categorizes fees as **PASS_THROUGH** (non-negotiable) or **CONTROLLABLE** (negotiable)
- Calculates effective rates for accurate comparison
- Generates professional proposals for GPI sales team
- Works 100% offline with zero data retention

### Live URL
**https://venut100-ai.github.io/gpi-fee-analyzer/**

### GitHub Repository
**https://github.com/venut100-ai/gpi-fee-analyzer**

---

## 👤 USER INFORMATION

- **Name:** Ben
- **Email:** venut100@gmail.com
- **GitHub:** venut100-ai
- **Company:** GPI (Global Payments Integrated)

---

## 🏗️ ARCHITECTURE

### Core File
`index.html` - Single-file application containing:
- PDF.js for PDF parsing
- Pattern-based extraction engine
- Fee categorization logic
- UI components
- Proposal generator

### Key Code Sections (Line References)
| Section | Approximate Lines | Purpose |
|---------|-------------------|---------|
| CONTROLLABLE_PATTERNS | 3027-3230 | Patterns for negotiable fees |
| PASSTHROUGH_PATTERNS | 3230-3500 | Patterns for non-negotiable fees |
| HIDDEN_FEE_PATTERNS | 3500-3600 | Fees disguised as pass-through |
| extractVolumeAndFees() | 2400-2800 | Main extraction logic |
| categorizeFeeName() | 3580-3700 | Fee categorization engine |

---

## 📊 FEE CATEGORIZATION RULES

### PASS_THROUGH (Cannot be negotiated)
- **Interchange Fees** - Set by card-issuing banks
- **Assessment Fees** - Set by card networks (Visa, MC, Discover, Amex)
- **Network Access Fees** - Mandated network processing fees
- **FANF** - Fixed Acquirer Network Fee (Visa)
- **NABU** - Network Access and Brand Usage (MasterCard)

### CONTROLLABLE (CAN be negotiated)
- **Processor Markup/Discount Fees** - Processor's profit margin
- **Platform Fees** - Monthly service charges
- **Per-Transaction Fees** - Processor's per-item charges
- **PCI Fees** - Often inflated, should be $0 if compliant
- **Statement Fees** - Should be $0 with online statements
- **Batch Fees** - Can often be negotiated to $0

### HIDDEN FEES (Look like pass-through but are CONTROLLABLE)
- Risk Assessment Fee
- Security Assessment Fee
- Technology Fee
- Interchange Management Fee
- Processor Transaction Risk Fee
- Network & Processor Access Fee

---

## 🔧 PROCESSOR-SPECIFIC PATTERNS

### CardConnect/Fiserv
- **Identifier:** "YOUR CARD PROCESSING STATEMENT", CardPointe
- **PASS_THROUGH:** "Interchange charges" section
- **CONTROLLABLE:** "Service charges" section
- **Pattern:** `VI-`, `MC-` prefixes for interchange

### First Data/Fiserv Express
- **Identifier:** "First Data | Express", BusinessTrack portal
- **Pricing:** Tiered (QUAL/MID-QUAL/NON-QUAL)
- **CONTROLLABLE:** All "SALES DISCOUNT" fees with `.XXXX DISC RATE`
- **PASS_THROUGH:** "ACCESS FEE" with "TRANSACTIONS AT" format

### WorldPay/FIS
- **Identifier:** WorldPay logo, "Processing Statement"
- **CONTROLLABLE:** "PROCESSING FEES" section, "Processing Fee" suffix
- **PASS_THROUGH:** Interchange section, Assessment section

### Heartland/TSYS
- **Identifier:** "ONE HEARTLAND WAY JEFFERSONVILLE"
- **Unique:** Uses "(24)" suffix on interchange codes
- **CONTROLLABLE:** "Base P/I Discount", NON-EMV fees, TRANSLINK
- **PASS_THROUGH:** All fees with "(24)" suffix

### EVO/Omega Processing
- **Identifier:** OMEGA Processing POS Rewards, omegap.com
- **Unique:** 4-digit numeric fee codes
- **Code Rules:**
  - 8xxx = Usually PASS_THROUGH (assessments/network)
  - 6xxx/7xxx = Usually CONTROLLABLE (processor fees)
- **Sections:** "Settlement/Discount" (markup), "Pass Through" (interchange)

### Paysafe/Riverside
- **CONTROLLABLE:** "DISC 1", "DATAWIRE"
- **PASS_THROUGH:** "INTERCHANGE", "DUES & ASSESSMENTS"

---

## 📈 EFFECTIVE RATE BENCHMARKS

| Processor | Typical Rate | Pass-Through | Controllable |
|-----------|--------------|--------------|--------------|
| CardConnect | 1.80-2.00% | 1.50-1.70% | 0.10-0.15% |
| WorldPay | 2.00-2.50% | 1.60-1.80% | 0.30-0.50% |
| Heartland | 3.00-3.50% | 2.00-2.50% | 0.70-1.00% |
| Paysafe | 1.80-2.20% | 1.40-1.60% | 0.30-0.50% |
| EVO/TSYS | 1.00-1.50% | 0.80-1.20% | 0.15-0.25% |

---

## 🧪 TEST SUITE

Located in: `test_suite/pattern_validation_tests.js`

Run with:
```bash
cd "Claud Cost Comparison Files"
node test_suite/pattern_validation_tests.js
```

Current Status: **10/10 PASS (100% accuracy)**

---

## 🚀 DEPLOYMENT

### To Deploy Changes
```bash
cd "Claud Cost Comparison Files"
git add index.html
git commit -m "Description of changes"
git push origin main
```

**Note:** Push must be done manually from local machine (Cowork can't push).

Live site updates automatically within 1-2 minutes via GitHub Pages.

---

## 📝 VERSION HISTORY

| Date | Version | Changes |
|------|---------|---------|
| Feb 5, 2026 | v8.5.2 | Statement deep-dive: First Data, EVO/Omega, Heartland patterns |
| Feb 5, 2026 | v8.5.1 | Fixed VPS Net Sales false positive bug |
| Feb 5, 2026 | v8.5 | 20-bot research army integration |
| Feb 4, 2026 | v8.0 | Priority-based pattern extraction |
| Feb 4, 2026 | v7.0 | Training mode, anomaly detection |
| Feb 3, 2026 | v6.0 | Enhanced UI, batch processing |

---

## 🔑 KEY LEARNINGS

### Pattern Priority
1. **Processor-specific patterns** take precedence over generic patterns
2. **Section context** matters (same fee name can be different categories)
3. **Hidden fees** require special detection - they LOOK like pass-through

### Common Pitfalls
1. "ACCESS FEE" can be either category - check context
2. "ASSESSMENT" is usually pass-through EXCEPT when prefixed with processor name
3. Tiered pricing (QUAL/NON-QUAL) is always CONTROLLABLE markup
4. Per-transaction fees with "AT $X.XX" format are usually CONTROLLABLE

### Statement Analysis Strategy
1. Identify processor from header/branding
2. Look for section labels (Interchange, Service Charges, etc.)
3. Apply processor-specific patterns first
4. Fall back to generic patterns
5. Flag ambiguous fees for manual review

---

## 📁 KEY FILES

| File | Purpose |
|------|---------|
| `index.html` | Main application (single file) |
| `knowledgebase/FEE_CATEGORIZATION_MASTER.md` | Comprehensive fee patterns |
| `knowledgebase/PROJECT_MEMORY.md` | This file - session context |
| `SESSION_HISTORY_AND_CONTEXT.md` | Detailed project history |
| `test_suite/pattern_validation_tests.js` | Automated tests |

---

## 🎯 CURRENT PRIORITIES

1. **Accuracy** - Fee categorization must be correct
2. **Coverage** - Support all major processor formats
3. **Usability** - Zero learning curve for GPI sales team
4. **Performance** - Sub-second extraction time

---

## 💡 TIPS FOR FUTURE SESSIONS

1. **Always run tests** after modifying patterns
2. **Check git status** before making changes
3. **Read processor statements** to understand format before adding patterns
4. **Use the knowledgebase** - patterns are documented there
5. **Commit frequently** with descriptive messages

---

*This knowledge base should be read at the start of each session to maintain context.*

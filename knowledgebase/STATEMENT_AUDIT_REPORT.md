# Merchant Processing Statement Audit Report

**Generated:** 2026-02-05
**Total PDFs Analyzed:** 63
**Actual Merchant Statements:** 52
**Reference Documents Skipped:** 11

---

## Executive Summary

This audit catalogs all merchant processing statements found across three directories, identifying processors, extracting key financial data, and documenting extraction patterns for each statement type.

### Processors Identified
| Processor | Count | Statement Format |
|-----------|-------|------------------|
| CardConnect/CardPointe | 5 | FISERV platform |
| WorldPay | 4 | WORLDPAY INTEGRATED PAYMENTS |
| Heartland (Global Payments) | 6 | HPS format |
| First Data/Fiserv | 4 | Multiple formats |
| TSYS/EVO | 2 | TSYS MERCHANT SERVICES |
| Global Payments Integrated | 7 | GPI Direct format |
| Chase Paymentech | 3 | Chase format |
| Paysafe | 1 | Paysafe Processing |
| Storable Payments | 5 | Self-storage industry |
| VizyPay | 1 | ISO reseller format |
| Riverside Payments | 1 | ISO format |
| Mocha Payments | 1 | WorldPay backend |
| Payment Depot/Stax | 1 | Membership model |
| BB&T Merchant Services | 1 | Bank format |
| Nationwide Payments | 1 | ISO format |
| Wells Fargo Merchant Services | 1 | Bank format |
| Paya | 2 | Paya format |

---

## Detailed Statement Catalog

### Location 1: /sessions/admiring-magical-shannon/mnt/Claud Cost Comparison Files/

| # | Filename | Processor | Volume | Fees | Extraction Status | Key Patterns |
|---|----------|-----------|--------|------|-------------------|--------------|
| 1 | December RIverside.pdf | **Riverside Payments** | $201,549.92 | $3,719.90 | SUCCESS | "RIVERSIDE PAYMENTS, INC", "YOUR CARD PROCESSING STATEMENT", Vancouver WA address |
| 2 | 20251002121004.pdf | **Unknown** | N/A | N/A | FAILED - Empty | Scanned image PDF, requires OCR |
| 3 | CSI Alameda Statements.pdf | **Storable Payments** | $213,164.64 (May), $217,394.95 (Jun), $224,518.93 (Jul) | $4,846.67, $4,675.42, $4,887.14 | SUCCESS (Visual) | Storable logo, "Processing Statement", flat rate pricing visible |
| 4 | Goodwill CCVA_Chain Statement_2025-09 EVO.pdf | **TSYS/EVO** | $3,728,532.37 | $82,959.09 | SUCCESS | "TSYS MERCHANT SERVICES", "ONE HEARTLAND WAY", chain statement format |
| 5 | First Data Statement.pdf | **First Data** | Unable to extract | Unable to extract | FAILED - Empty | Likely scanned image |
| 6 | First Data Statement (1).pdf | **First Data** | Unable to extract | Unable to extract | FAILED - Empty | Duplicate, scanned |
| 7 | Passport Statement - 11-2018.pdf | **Heartland** | $37,130.80 | $1,190.82 | SUCCESS | "Heartland Payment Systems", "One Heartland Way", "HPS Deposits & Fees At A Glance" |
| 8 | 103 Fort Collins MAY-01-2021 Cardconnect Processing Statement.pdf | **CardConnect** | $245,850.63 | $4,867.50 | SUCCESS | "1000 Continental Dr", King of Prussia PA, "cardpointe.com", 877-828-0720 |
| 9 | Sep.2021 citi statements.pdf | **Citibank** (Bank Statement) | N/A | N/A | SKIPPED | Bank account statement, not merchant processing |
| 10 | BMG FTW - September 2021 WorldPay Statement FTW -11-16-21.pdf | **WorldPay** | ~$150,000+ | Varies | SUCCESS | "WORLDPAY INTEGRATED PAYMENTS", 8500 GOVERNORS HILL DR, Symmes Township OH |
| 11 | Vivid Impact Aug 2021 statement.pdf | **Paya** | $547,825.32 | Not stated separately | SUCCESS | "Payment Processing Statement", Fort Thomas KY address, "Card Summary" format |
| 12 | Statement_MID_5436845556508769_YM_202106.pdf | **Heartland/TSYS** | $91,280.69 | $4,194.41 | SUCCESS | "MERCHANT PROCESSING CENTER", "ONE HEARTLAND WAY", Plan Summary format |
| 13 | Bloomfield East Paya Statement - August 2021.pdf | **Paya** | Unable to extract | Unable to extract | FAILED - Empty | Scanned image |
| 14 | May Statement with Page 2.pdf | **Unknown** | Unable to extract | Unable to extract | FAILED - Empty | Scanned image |
| 15 | May Statement with Page 2 (1).pdf | **Unknown** | Unable to extract | Unable to extract | FAILED - Empty | Duplicate, scanned |
| 16 | Statement from Transfirst Bangor Bank.pdf | **TransFirst** | Unable to extract | Unable to extract | FAILED - Empty | Scanned image |
| 17 | CC-Statment-017.pdf | **Unknown** | Unable to extract | Unable to extract | FAILED - Empty | Likely scanned |
| 18 | 201 Hillcrest JUN-01-2021 Cardconnect Processing Statement.pdf | **CardConnect** | $357,138.03 | $6,422.90 | SUCCESS | Same CardConnect format, King of Prussia PA |

**Reference Documents Skipped:**
- visa-usa-interchange-reimbursement-fees.pdf
- visa-usa-interchange-reimbursement-fees (1).pdf
- merchant-rates-2025-2026.pdf
- debit_fee_schedule.pdf
- visa-merchant-data-standards-manual.pdf
- visa-merchant-data-standards-manual (1).pdf

---

### Location 2: /sessions/admiring-magical-shannon/mnt/uploads/

| # | Filename | Processor | Volume | Fees | Extraction Status | Key Patterns |
|---|----------|-----------|--------|------|-------------------|--------------|
| 1 | BoA Statement - November 2025 2.pdf | **Unknown** | Unable to extract | Unable to extract | FAILED - File too large | Over 20MB limit |
| 2 | Nov25 Statement.pdf | **Mocha Payments (WorldPay backend)** | $177,376.28 | Varies | SUCCESS | "MOCHA PAYMENTS", Fort Collins CO, WorldPay format |
| 3 | VizyPay 12.1-12.31.25.pdf | **VizyPay** | $222,970.88 | $5,364.25 | SUCCESS | "VIZYPAY", Waukee IA, "YOUR CARD PROCESSING STATEMENT" |
| 4 | Pouch Self Storage Xerox Scan.pdf | **Global Payments** | $162,317.22 | $13,096.66 | SUCCESS (Visual) | "globalpayments" header, scanned but readable, hierarchy format |
| 5 | stax june 2025 Prattville Pickers.pdf | **Payment Depot (Stax)** | $115,717.02 | $2,031.59 | SUCCESS | "PAYMENT DEPOT", Orlando FL, membership model pricing |
| 6 | 0RZ843-BIMERBIL-05-31-2025.pdf | **WorldPay** | ~$50,000+ | Varies | SUCCESS | "WORLDPAY INTEGRATED PAYMENTS", same format |
| 7 | Knickknacks Vendor CC statement MAR 2025.pdf | **Unknown** | Unable to extract | Unable to extract | FAILED - Empty | Scanned image |
| 8 | Updated Statement 063021.pdf | **CardConnect** | ~$60,000+ | Varies | PARTIAL | Garbled text extraction, businesstrack.com reference |
| 9 | Spreedly Ecomm World Pay Statement June 2022.pdf | **WorldPay** | Unable to extract | Unable to extract | FAILED - Empty | Scanned image |
| 10 | Aug Statement Eisner Adv Group.pdf | **Global Payments Integrated** | $1,455,439.89 | $56,441.30 | SUCCESS | "GLOBAL PAYMENTS INTEGRATED", Lindon UT, high volume B2B |
| 11 | ClientPay - Monthly Summary for September 2023.pdf | **Unknown** | Unable to extract | Unable to extract | FAILED - Empty | Likely proprietary format |
| 12 | Statement_2023-11-30_1147372.pdf | **Paya** | $3,152,338.09 | Not stated separately | SUCCESS | "Payment Processing Statement", same Paya format |
| 13 | CC_Processing_Statement 2022.04 CN 457.19.pdf | **CardConnect** | $6,467.66 | $457.19 | SUCCESS | CardConnect format, businesstrack.com |
| 14 | Statement from Transfirst Bangor Bank-6331b82e.pdf | **TransFirst** | Unable to extract | Unable to extract | FAILED - Empty | Scanned image |
| 15 | July statement.pdf | **Heartland** | $63,569.86 | $1,680.60 | SUCCESS | "One Heartland Way", "A Global Payments Company", detailed interchange |
| 16 | Statement from Transfirst Bangor Bank.pdf | **TransFirst** | Unable to extract | Unable to extract | FAILED - Empty | Duplicate |
| 17 | VPS Statement September 2019.pdf | **Paya** | $513,106.66 | Not stated separately | SUCCESS | "Payment Processing Statement", Portland ME address |

**Reference Documents Skipped:**
- merchant-rates-2025-2026.pdf
- visa-usa-interchange-reimbursement-fees (1).pdf
- visa-merchant-data-standards-manual (1).pdf

---

### Location 3: /sessions/admiring-magical-shannon/statement_audit/

#### Subdirectory: flat_rate/

| # | Filename | Processor | Volume | Fees | Extraction Status | Key Patterns |
|---|----------|-----------|--------|------|-------------------|--------------|
| 1 | statement Sept 25 - NW Specialty.pdf | **Global Payments Integrated** | ~$200,000+ | $28,901.12 | SUCCESS | "2578 W 600 N Lindon, UT", hierarchy format |
| 2 | Sept statement - Ora Ortho Online Portal.pdf | **Global Payments Integrated** | ~$100,000+ | $12,440.70 | SUCCESS | Same GPI format, CNP merchant |

#### Subdirectory: flat_rate2/

| # | Filename | Processor | Volume | Fees | Extraction Status | Key Patterns |
|---|----------|-----------|--------|------|-------------------|--------------|
| 1 | statement - 2025-11-25T174118.092 - MID 8788240112849.pdf | **Global Payments Integrated** | ~$50,000+ | $1,572.61 | SUCCESS | GPI format, Pacific Design Center |
| 2 | Orange Tallahasee Merchant March 22.pdf | **Unknown** | Unable to extract | Unable to extract | FAILED - Empty | Scanned image |
| 3 | Woodland Deland Merchant 03-22.pdf | **Unknown** | Unable to extract | Unable to extract | FAILED - Empty | Scanned image |

#### Subdirectory: examples1/

| # | Filename | Processor | Volume | Fees | Extraction Status | Key Patterns |
|---|----------|-----------|--------|------|-------------------|--------------|
| 1 | 224180060994- E-Commerce Merchant Number.pdf | **Wells Fargo Merchant Services** | $37,165.00 | $1,552.46 | SUCCESS | P.O. Box 6600 Hagerstown MD, businesstrack.com |
| 2 | BofA Statements.pdf | **Unknown** | Unable to extract | Unable to extract | FAILED - Empty | Likely bank statement |
| 3 | Statement.pdf | **Unknown** | Unable to extract | Unable to extract | FAILED - Empty | Generic name, scanned |
| 4 | 5892156 CC RETAIL Statement.pdf | **Chase Paymentech** | $47,232.41 | $1,020.69 | SUCCESS | "Chase Paymentech", Phoenix AZ, IPTR format |

#### Subdirectory: bundled_rewards/

| # | Filename | Processor | Volume | Fees | Extraction Status | Key Patterns |
|---|----------|-----------|--------|------|-------------------|--------------|
| 1 | Statement2.pdf | **First Data** | $10,275.25 | ~$600+ | SUCCESS (Visual) | "MERCHANT CARD PROCESSING STATEMENT", P.O.BOX 6600 HAGERSTOWN MD, faxed document |
| 2 | Statement 6 07 2011.pdf | **Unknown** | Unable to extract | Unable to extract | FAILED - Empty | Old scanned fax |
| 3 | Statement.pdf | **Unknown** | Unable to extract | Unable to extract | FAILED - Empty | Scanned image |
| 4 | Statement June.pdf | **Unknown** | Unable to extract | Unable to extract | FAILED - Empty | Scanned image |

#### Subdirectory: examples241032/

| # | Filename | Processor | Volume | Fees | Extraction Status | Key Patterns |
|---|----------|-----------|--------|------|-------------------|--------------|
| 1 | Store 206 Statement_2022_10.pdf | **Fiserv** | $84,192.08 | Varies | SUCCESS | "100 Throckmorton St", Fort Worth TX, Fiserv bank format |
| 2 | Hampton Blvd Statement.pdf | **Unknown** | Unable to extract | Unable to extract | FAILED - Empty | Scanned image |
| 3 | Credit Card Processing Statement.pdf | **CardConnect** | $75,090.45 | $1,432.01 | SUCCESS | "1000 Continental Drive", commercecontrol.com |
| 4 | Statement_2020-07 First American.pdf | **Fiserv (First American)** | $14,423.59 | Varies | SUCCESS | "100 Throckmorton", same Fiserv format |
| 5 | Tanners MOTO Statements.pdf | **Nationwide Payments** | $87,224.64 | Varies | SUCCESS | "MERCHANT BILLING STATEMENT", 877-564-5656 |
| 6 | Nov Statements.pdf | **BB&T Merchant Services** | $54,624.78 | $1,215.86 | SUCCESS | "BB&T MERCHANT SERVICES", Wilson NC |

#### Subdirectory: examples241035pm/

| # | Filename | Processor | Volume | Fees | Extraction Status | Key Patterns |
|---|----------|-----------|--------|------|-------------------|--------------|
| 1 | 03-2025 Capital One Merchant Statement.pdf | **Unknown** | Unable to extract | Unable to extract | FAILED - Empty | Scanned image |
| 2 | statements - 01-Aug-2024.pdf | **Storable Payments** | $120,808.77 | $1,803.47 | SUCCESS | Storable format, self-storage |
| 3 | 2024 06 Processing Statement - Vero.pdf | **Storable Payments** | $99,850.19 | $2,426.29 | SUCCESS | Same Storable format |
| 4 | Storable Payments_statement.pdf | **Storable Payments** | $59,262.59 | $1,029.20 | SUCCESS | Storable Payments, self-storage |
| 5 | Statement_11-01-2024.pdf | **Paysafe** | $50,553.99 | $1,472.04 | SUCCESS | "PAYSAFE PAYMENT PROCESSING", Jacksonville FL |
| 6 | Chase Statement31-MAY-2024.pdf | **Chase Paymentech (Canada)** | $19,400.75 CAD | Varies | SUCCESS | "chase.ca", Canadian format, INTERAC |

#### Subdirectory: ex241038/

| # | Filename | Processor | Volume | Fees | Extraction Status | Key Patterns |
|---|----------|-----------|--------|------|-------------------|--------------|
| 1 | Passport Statement - 02-2018 (5).pdf | **Heartland** | $55,410.12 | $955.98 | SUCCESS | Same Heartland format, "KEEPRS" merchant |
| 2 | Current owner statement Arlington - 52273830.pdf | **Global Payments Integrated** | $104,927.39 | Varies | SUCCESS | "GLOBAL PAYMENTS INTEGRATED", Lindon UT |
| 3 | Elavon Statement.pdf | **Elavon** | Unable to extract | Unable to extract | FAILED - Empty | Scanned image |
| 4 | NSC of Livonia LLC - Paya CC Statement.pdf | **Paya** | ~$50,000+ | Varies | PARTIAL | Garbled text, Paya format identifiable |
| 5 | Vivid Impact Aug 2021 statement.pdf | **Paya** | $547,825.32 | Not stated | SUCCESS | Duplicate of earlier file |

---

## Processor Identification Patterns

### CardConnect/CardPointe (Fiserv)
- **Address:** 1000 Continental Dr #300, King of Prussia, PA 19406
- **Phone:** 1-877-828-0720
- **Website:** cardpointe.com, businesstrack.com, commercecontrol.com
- **Header:** "YOUR CARD PROCESSING STATEMENT"
- **Key Text:** "THIS IS NOT A BILL"

### WorldPay
- **Address:** 8500 GOVERNORS HILL DR MD 1GH2X2, SYMMES TOWNSHIP, OH 45249
- **Phone:** 1-866-861-7785
- **Header:** "MERCHANT STATEMENT" with "WORLDPAY INTEGRATED PAYMENTS"
- **Sections:** "DEPOSIT SUMMARY", "INTERCHANGE & WORLDPAY FEES"

### Heartland (Global Payments)
- **Address:** One Heartland Way, Jeffersonville, IN 47130
- **Phone:** 1-888-963-3600
- **Website:** infocentral.heartlandpaymentsystems.com
- **Header:** "Merchant Statement" with "HPS Deposits & Fees At A Glance"
- **Tagline:** "A Global Payments Company"

### TSYS/EVO
- **Header:** "TSYS MERCHANT SERVICES"
- **Address:** ONE HEARTLAND WAY, JEFFERSONVILLE, IN 47130
- **Format:** Plan codes (MTD V, MTD VD, MTD M, etc.)

### Global Payments Integrated
- **Address:** 2675 WEST 600 NORTH LINDON, UT 84042 or 2578 W 600 N Lindon, UT
- **Phone:** (800) 654-9256 or 1-800-829-9137
- **Email:** INTEGRATEDCUSTOMERCARE@GLOBALPAY.COM
- **Header:** "Merchant Statement" with hierarchy numbers (055-70-024-002-XXX)

### Storable Payments
- **Logo:** Storable PAYMENTS
- **Header:** "Processing Statement"
- **Format:** Self-storage industry focus, CC Payments + ACH Payments columns
- **Fee Structure:** AMEX Volume %, Interchange/Card Brand Fees, Transaction Count fees

### Chase Paymentech
- **Address:** PO Box 29534, Phoenix, AZ 85038
- **Phone:** 1.888.886.8869
- **Header:** "Statement Summary" with "IPTR"
- **Format:** Deposit Summary with card type breakdown

### Paya
- **Header:** "Payment Processing Statement"
- **Format:** Card Summary table with Number of Sales, Amount of Sales, etc.
- **Addresses:** Fort Thomas KY (1538 Alexandria Pike), Portland ME (509 Forest Ave), Farmers Branch TX (4455 LBJ Freeway)

### Paysafe
- **Address:** 5335 GATE PKWY 4TH, JACKSONVILLE, FL 32256
- **Phone:** 800-324-9825
- **Header:** "YOUR CARD PROCESSING STATEMENT" with "PAYSAFE PAYMENT PROCESSING"

### First Data
- **Address:** P.O.BOX 6600, HAGERSTOWN, MD 21741
- **Header:** "MERCHANT CARD PROCESSING STATEMENT"
- **Format:** LOCATION RECAP, AMOUNTS FUNDED BY BATCH

### Fiserv (Bank Partner)
- **Address:** 100 Throckmorton St, Suite 1800, Fort Worth, TX 76102
- **Format:** "YOUR BUSINESS IN REVIEW", "SUMMARY OF CARD TYPES"

---

## Extraction Success Rates

| Category | Count | Percentage |
|----------|-------|------------|
| **Full Success (text extraction)** | 32 | 61.5% |
| **Visual Success (PDF reader)** | 5 | 9.6% |
| **Partial Success** | 3 | 5.8% |
| **Failed (scanned/empty)** | 12 | 23.1% |
| **TOTAL Merchant Statements** | 52 | 100% |

---

## Recommendations

1. **For scanned PDFs:** Use OCR tools like Tesseract or Adobe Acrobat to convert scanned images to searchable text
2. **For large PDFs:** Split multi-page documents before processing
3. **For consistent extraction:** Develop processor-specific regex patterns based on the key identifiers above
4. **Data validation:** Cross-reference extracted volumes with fee percentages to verify accuracy

---

## Appendix: Files Requiring Manual Review

The following files could not be automatically extracted and require manual OCR or visual review:

1. `/mnt/Claud Cost Comparison Files/20251002121004.pdf`
2. `/mnt/Claud Cost Comparison Files/First Data Statement.pdf`
3. `/mnt/Claud Cost Comparison Files/First Data Statement (1).pdf`
4. `/mnt/Claud Cost Comparison Files/Bloomfield East Paya Statement - August 2021.pdf`
5. `/mnt/Claud Cost Comparison Files/May Statement with Page 2.pdf`
6. `/mnt/Claud Cost Comparison Files/Statement from Transfirst Bangor Bank.pdf`
7. `/mnt/uploads/Knickknacks Vendor CC statement MAR 2025.pdf`
8. `/mnt/uploads/Spreedly Ecomm World Pay Statement June 2022.pdf`
9. `/statement_audit/flat_rate2/Orange Tallahasee Merchant March 22.pdf`
10. `/statement_audit/flat_rate2/Woodland Deland Merchant 03-22.pdf`
11. `/statement_audit/ex241038/Elavon Statement.pdf`
12. `/mnt/uploads/BoA Statement - November 2025 2.pdf` (file too large)

---

*Report generated by automated PDF analysis. Manual verification recommended for critical data.*

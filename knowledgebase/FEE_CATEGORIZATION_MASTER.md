# Master Fee Categorization Knowledgebase
## Pass-Through vs Controllable Fee Identification

**Last Updated:** February 5, 2026
**Source:** Deep analysis of 52 real merchant statements across 18 processors

---

## Understanding Fee Categories

### PASS_THROUGH (Cannot be negotiated - set by card brands)
- **Interchange Fees** - Paid to card-issuing banks
- **Assessment Fees** - Paid to card networks (Visa, MC, Discover, Amex)
- **Network Access Fees** - Mandated network processing fees
- **Cross-Border Fees** - International transaction fees

### CONTROLLABLE (CAN be negotiated with processor)
- **Processor Markup/Discount Fees** - Processor's profit margin
- **Platform Fees** - Monthly service charges
- **Per-Transaction Fees** - Processor's per-item charges
- **PCI Fees** - Compliance fees (often inflated)
- **Statement Fees** - Administrative charges
- **Batch Fees** - Settlement charges

---

## PASS_THROUGH FEE PATTERNS (Exact names from real statements)

### INTERCHANGE FEES (Always Pass-Through)

#### Visa Interchange Categories
```
VI-REST SIG SIGN PRF INF CP
VI-REST SIG SIGN PRF INF CNP
VI-REST TRAD REWARDS CP
VI-REST TRAD REWARDS CNP
VI-US REGULATED (DB)
VI-US REGULATED COMM (DB)
VI-US REGULATED NON-CPS (DB)
VI-US REG NON CPS COMM (DB)
VI-REG CONSUMER MQ (DB)
VI-US CPS/SMALL TCKT REG (DB)
VI-CPS/RESTAURANT (DB)
VI-CPS/RESTAURANT (PP)
VI-CPS/ECOMM-BASIC (DB)
VI-CPS/ECOMM-BASIC (PP)
VI-CPS SMALL TICKET (DB)
VI-CPS SMALL TICKET (PP)
VI-BUSINESS CARD CP (DB)
VI-BUSINESS CARD CNP (DB)
VI-US BUS TR1 TRVL
VI-US BUS TR2 TRVL
VI-US BUS TR3 TRVL
VI-US BUS TR4 TRVL
VI-CORPORATE TRAVEL SVC
VI-PURCHASING TRAVEL SVC
VI-ELECTRONIC (US ACQ)
VI-PRIVATE LABEL ENHANCED
VI-INTER PREM AP ISS US ACQ
VI-INTER PREM CEMEA ISS US ACQ
VI-INTER PREM LAC ISS US ACQ
VI-SUPER PREMIUM AP ISS US ACQ
VI-SUPER PREMIUM CEMEA ISS US
VI-SUPER PREMIUM LAC ISS US AC
VI-NON QUAL CONSUMER CR
VI-EIRF NON CPS ALL OTHER (DB)
VI-BUS PURCH RTL (PP)
VS CPS RESTAURANT - CK
VS CPS RESTAURANT - CK-DURBIN
VS CPS RESTAURANT - DEBIT
VS CPS SMALL TICKET - CK
VS CPS SMALL TICKET - CK-DURBIN
VS CPS SMALL TICKET - DEBIT
VS RESTAURANT PRODUCT 2 RETAIL
VS RESTAURANT SIGNATURE PROD 2 RETAIL
VS BUSINESS CARD - CARD PRESENT DEBIT
VS BUSINESS CARD CARD PRESENT DURBIN FRAUD
VS BUSINESS ENHANCED - ELECTRONIC
VS BUSINESS TIER 4 ELECTRONIC
VS COMMERCIAL CARD ELECTRONIC BUSINESS
VS COMMERCIAL CARD RETAIL - PREPAID
VS CORPORATE CARD - TRAVEL SERVICE
VS PURCHASING CARD - TRAVEL SERVICE
VS EIRF - CK-DURBIN
VS EIRF DEBIT
VS NON QUALIFIED CONSUMER CREDIT
VS PREPAID EIRF
VS SIGNATURE BUSINESS - ELECTRONIC
VS INTERNATIONAL ELECTRONIC (US TERRITORY)
VS ISSUER CHIP
VS CR Bus Tier 2 Electronic
VS CR Bus Tier 3 Standard
VS CR Bus Tier 4 Electronic
VS CR CPS/Hotel-Car Rent CP
VS CR CPS/Rewards 2
VS CR Intl Electronic
VS CR Intl Issuer Chip
VS CR Intl Premium Card
VS CR Intl Standard
VS CR Purchasing Card Travel Service
VS CR Sig Pref Ele
VS CR Sig Pref Std
VS CR Signature Cards
VS CR Standard
VS CR Super Premium Card
VS DB CPS/Hotel & Car Rent CP
VS DB Intl Issuer Chip
VS DB Intl Visa Corporate card
VS DB US Regulated
```

#### MasterCard Interchange Categories
```
MC-ENHANCED MERIT I
MC-ENHANCED MERIT III
MC-ENHANCED MERIT III BASE
MC-DOMESTIC MERIT I PREPAID
MC-DOMESTIC MERIT III
MC-DOMESTIC MERIT III (DB)
MC-MERIT I ELECTRONIC COMMERCE
MC-MERIT I ECOMM (DB)
MC-MERIT I - DEBIT
MC-MERIT 3 - DEBIT
MC-MERIT III - PREPAID
MC-FOREIGN ELECTRONIC PLUS
MC-INT SPR PREM ELECTRONIC(US)
MC-PREM CON ELEC ACQUSISSLAC
MC-WORLDCARD - OTHER
MC-WORLDCARD RESTAURANT
MC-WORLD ELITE - OTHER
MC-WORLD ELITE RESTAURANT
MC-WORLD ELITE SMALL TICKET CP
MC-HIGH VAL RESTAURANT
MC-HIGH VAL T & E
MC-RESTAURANT (DB)
MC-SMALL TICKET (DB)
MC-REG INCENTIVE POS (DB)
MC-REG INCENT FRF ADJ POS (DB)
MC-REGULATED UST POS (DB)
MC-REGULATED FRD ADJ COMM (DB)
MC-REG CONSMR US MQ (DB)
MC-REG CONSM WFRAUD ADJ MC(DB)
MC-CORP T & E (US) BUS
MC-CORP T & E (US) CORP
MC-COMMERCIAL T&E FLEET
MC-COM T & E (US) PURCH
MC-BUS LEVEL 2 T&E
MC-BUS LEVEL 3 T&E
MC-BUS LEVEL 4 T&E
MC-BUS LEVEL 5 T & E
MC BUSINESS LEVEL 1 T&E
MC BUSINESS LEVEL 2 T&E
MC BUSINESS LEVEL 3 T&E
MC BUSINESS LEVEL 4 T&E
MC BUSINESS LEVEL 5 T&E
MC DC CPS RESTAURANT-DURBIN FRAUD
MC DC MERIT 1-DURBIN FRAUD
MC DC MERIT 3 BASE-DURBIN
MC DC MERIT 3 BASE-DURBIN FRAUD
MC DC SMALL TICKET-DURBIN FRAUD
MC ENHANCED MERIT I
MC ENHANCED MERIT III
MC ENHANCED STANDARD
MC INTERREGIONAL ELECTRONIC
MC MERIT 3 - DEBIT
MC MERIT I
MC MERIT I - DEBIT
MC MERIT III
MC MERIT III - PREPAID
MC RESTAURANT - DEBIT
MC RESTAURANT - PREPAID
MC SMALL TICKET-DEBIT
MC SMALL TICKET-PREPAID
MC T&E BUSINESS DEBIT
MC T&E II BUSINESS DEBIT DURBIN FRAUD
MC T&E LARGE MARKET
MC WORLD ELITE MASTERCARD T&E
MC WORLD ELITE RESTAURANT
MC WORLD ELITE T&E LARGE TICKET
MC WORLD HIGH VALUE RESTAURANT
MC WORLD HIGH VALUE T&E
MC WORLD HIGH VALUE T&E LARGE TICKET
MC WORLD MASTERCARD T&E
MC WORLD RESTAURANT
MC CR Foreign Electronic
MC CR Foreign Standard
MC CR Intl Consumer Prem Elect
MC CR Lodging and Auto Rental
MC CR World Elite T & E
MC CR World HV T & E
MC CR World T & E
MC DB Intl Consumer Prem Elect
MC DB Lodging and Auto Rental
MC DB Merit I
MC DB Regulated-Issuer FR Cert
```

#### Discover Interchange Categories
```
DSCVR PSLECOMMERCE(RW)
DSCVR PSLECOMMERCE(DB)
DSCVR PSLECOMMERCE(PREM)
DSCVR PSL REST RW
DSCVR PSL REST DB
DSCVR PSL REST PR
DSCVR PSL REST PP
DSCVR PSL EXP SVC RW
DSCVR COMML ELECT OTHER
DSCVR KEY ENTRY RW
DS COMMERCIAL ELECTRONIC
DS PSL - EXPRESS SERVICES (REWARDS)
DS PSL - KEY ENTRY (PREMIUM)
DS PSL - RESTAURANTS (DEBIT)
DS PSL - RESTAURANTS (PREMIUM PLUS)
DS PSL - RESTAURANTS (PREMIUM)
DS PSL - RESTAURANTS (REWARDS)
DS CR Commercial Electronic
DS CR PSL - HTL/Car Rentals Rewards
DS CR PSL-Hotels/Car Rentals-PremPs
```

#### American Express Interchange
```
AMEX PASS-THRU
Amex - Lodging Tier 1 Fee
Amex - Lodging Tier 2 Fee
```

### ASSESSMENT FEES (Always Pass-Through)
```
VISA ASSESSMENT FEE CR
VISA ASSESSMENT FEE DB
MASTERCARD ASSESSMENT FEE
DISCOVER ASSESSMENT FEE
VS Assessment Fee
MC Assessment Fee
DS Assessment Fee
DUES & ASSESSMENTS
DUE/ASMT >= 1000
VISACREDIT ASSESSMENT
VISADEBIT ASSESSMENT
```

### NETWORK ACCESS FEES (Always Pass-Through)
```
# Visa Network Fees
VI NTWK ACQ PROC FEE US CR
VI NTWK ACQ PROC FEE US DB/PP
VI NTWK ACQ PROC FEE INTL D/P
VI NTWK ACQ PROC FEE INTL CR
VI BASE II SYSTEM FILE FEE
VI BASE II CR VCHER FEE US CR
VI BASE II CR VCHER FEE US D/P
VISA ACQUIRER PROCESSING FEE
VISA APF SIG DEBIT
VISA APF SIG DEBIT RETURNS
VISA APF SIGNATURE CREDIT INTER
VISA APF SIGNATURE DEBIT INTER
VISA BASE II TRAN FEE
VISA CREDIT TRANSACTION INTEGRITY FEE
VISA DEBIT TRANSACTION INTEGRITY FEE
VISA MISUSE OF AUTH FEE
VISA MISUSE FEE
VS FANF HIGH VOLUME CUST PRESENT
VS Financial Transaction Fee
VS Int Acquirer Fee
VS Intl Serv Fee-Purch
VS Network Acquirer Proc Fee Sig Debit Adj
VS Network Acquiring Processing Fee
FIXED NETWORK CP FEE
FIXED NETWORK CNP FEE
ACQR PROCESSOR FEES
ACQ ISA FEE
FILE TRANSMISSION FEE
ACQ DATA PROC RTN C
ACQ DATA PROC RTN D
INTRNTL ACQ PROC FEE CR
INTRNTL ACQ PROC FEE DB
INTERNTL ACQUIRER FEE
VISA NETWORK FEE CP
VISA NETWORK FEE CNP
VISA INTL SERVICE FEE - BASE
VS INTL ACQUIRER FEE
US CROSS BORDER FEE
VI TRANSACTION INTEGRITY FEE
Transaction Integrity Fee
Visa Auth Misuse Fee
Visa Issuer Settlement Fee

# MasterCard Network Fees
MC NETWORK ACCESS AUTH FEE
MC NTWRK ACCESS SETTLEMENT FEE
MC LICENSE VOLUME FEE
MC CVC2 TRANSACTION FEE
MC ACQUIRER AVS BILLING
MC MONTHLY LOCATION FEE
MC GLOBAL ACQUIRER FEE
MASTERCARD KILOBYTE TRANS FEE
NABU FEES
MC NABU FEE
MC FILE TRANSMISSION FEE
MC ACQ POS PROGRAM SUPPORT
MC ADDITIONAL ASSESSMENT TRANS > $1000
MC-AVS - CARD PRESENT
MC Cross Border Fee
MC Intl Support Fee
MC Issuer Settlement Fee
MC License Fee
MC Merchant Location Fee
MC Not Rev/Clr Pre-auth
KILOBYTE CLEARING FEE US
BIN ICA FEE
CROSS BORDER FEE
ACQ SUPPORT FEE
LICENSE RATE
MC PROC INTEG PRE AUTH

# Discover Network Fees
NETWORK AUTHORIZATION FEE
DISCOVER DATA USAGE FEE
DSCV DATA USAGE FEE
DISC NETWORK AUTH FEE
DS Data Usage Fee
DS Network Authorization Fee

# American Express Network Fees
American Express - Access Fee
American Express - Network Fee
AMEX AUTH FEE
NETWORK FEE
PROGRAM FEES
```

---

## CONTROLLABLE FEE PATTERNS (Exact names from real statements)

### PROCESSOR MARKUP/DISCOUNT FEES (Always Controllable)
```
# CardConnect/Fiserv
VISA SALES DISCOUNT
VISA DEBIT SALES DISCOUNT
MASTERCARD SALES DISCOUNT
MASTERCARD DEBIT SALES DISC
DISCOVER SALES DISCOUNT
DISCOVER DEBIT SALES DISCOUNT
CARDPOINTE PLATFORM FEE

# WorldPay
MONTHLY DISCOUNT ADJUSTMENT
NETWORK & PROCESSOR ACCESS FEE
PROCESSOR TRANSACTION RISK FEE,DS
PROCESSOR TRANSACTION RISK FEE,MC
PROCESSOR TRANSACTION RISK FEE,VS

# Heartland/Passport
VS Discount Fee
MC Discount Fee
DS Discount Fee
American Express Discount Fee
Visa Transaction Fee
MC Transaction Fee
Discover Transaction Fee
American Express Transaction Fee

# Paysafe/Riverside
DISC 1
DATAWIRE
```

### PLATFORM/MONTHLY FEES (Always Controllable)
```
CARDPOINTE PLATFORM FEE
MONTHLY STATEMENT FEE
REGULATORY PRODUCT FEE
Service & Regulatory Mandate
PCI NON-VALIDATION
PCI NON-VALIDATION PER ITEM
SAFERPAYMENTS BASIC
BATCH SETTLE FEE
CHARGEBACK FEE
CHARGEBACK SERVICE FEE
DIGITAL ENABLEMENT FEE
LOCATION FEE
RETURNS
```

### PER-TRANSACTION FEES (Often Controllable)
```
VISA AUTH FEE
MASTERCARD AUTH FEE
DISCOVER AUTH FEE
AMEX AUTH FEE
AVS WATS AUTHORIZATION FEE
CNP AVS FEE
AVS POS
VISA ECR ADDRESS VERIFICATION
MASTERCARD ECR ADDRESS VERIF
DISCOVER ECR ADDR VERIFICATION
AMEX ECR ADDRESS VERIFICATION
```

### PROCESSING FEES (Always Controllable - WorldPay Format)
```
DISCOVER Processing Fee
DISCOVERDEBIT Processing Fee
MASTERCARD Processing Fee
MCDEBIT Processing Fee
MCDEBITCAP Processing Fee
VISA Processing Fee
VISADEBIT Processing Fee
VISADEBITCAP Processing Fee
```

---

## PROCESSOR-SPECIFIC IDENTIFICATION PATTERNS

### CardConnect/Fiserv Statement Identifiers
- **Header:** "YOUR CARD PROCESSING STATEMENT"
- **Processor ID:** "cardconnect" or "cardpointe"
- **Fee Section:** "FEES" with "Type" column (Interchange charges, Service charges, Fees)
- **Summary:** "Total (Service Charges, Interchange Charges, and Fees)"

**Key CardConnect Fee Categories:**
| Type Label | Category |
|------------|----------|
| "Interchange charges" | PASS_THROUGH |
| "Service charges" | CONTROLLABLE |
| "Fees" | REVIEW (varies) |

### WorldPay/FIS Statement Identifiers
- **Header:** "Processing Statement" or WorldPay logo
- **Sections:** "PROCESSING FEES", "INTERCHANGE & WORLDPAY FEES", "OTHER FEES"
- **Summary:** "Deposits [count] [amount]" format

**Key WorldPay Fee Categories:**
| Section | Category |
|---------|----------|
| "PROCESSING FEES" | CONTROLLABLE |
| "Interchange" fees | PASS_THROUGH |
| "Assessment" fees | PASS_THROUGH |
| "Network Fees" | PASS_THROUGH |
| Fees ending in "Processing Fee" | CONTROLLABLE |

### Heartland/Passport Statement Identifiers
- **Header:** "Heartland" logo or "Passport"
- **Sections:** "Pass-thru Interchange & Fees", "HPS Processing Fees"
- **Summary:** "Total Deposits" and "Total Credit Card Fees"

**Key Heartland Fee Categories:**
| Section | Category |
|---------|----------|
| "Pass-thru" anything | PASS_THROUGH |
| "HPS Processing Fees" | CONTROLLABLE |
| "Value Added Services" | CONTROLLABLE |
| Discount Fee | CONTROLLABLE |
| Transaction Fee | CONTROLLABLE |

### Paysafe/Riverside Statement Identifiers
- **Header:** "Paysafe" or merchant services logo
- **Sections by card type:** "MASTERCARD", "VISA", "VS OFLN DB", "MC OFLN DB", "DCVR ACQ", "AMEXCT043"
- **Summary:** Card Fees + Miscellaneous Fees

**Key Paysafe Fee Categories:**
| Fee Name | Category |
|----------|----------|
| "DISC 1" | CONTROLLABLE |
| "DATAWIRE" | CONTROLLABLE |
| "INTERCHANGE" | PASS_THROUGH |
| "DUES & ASSESSMENTS" | PASS_THROUGH |
| Any "FEE" with network name | PASS_THROUGH |
| "PCI NON-VALIDATION" | CONTROLLABLE |

### EVO/TSYS Statement Identifiers
- **Header:** "EVO" or "TSYS" branding
- **Format:** Multi-location chain statements
- **Summary:** "TOTAL" rows with Count, Amount columns

---

## REGEX PATTERNS FOR FEE CATEGORIZATION

### Pass-Through Pattern Matchers
```javascript
// Interchange patterns
/^(VI|VS|MC|DS|DSCVR|AMEX)[\s-]/i
/INTERCHANGE/i
/(MERIT|ELITE|REWARDS|RESTAURANT|REGULATED|BUSINESS|COMMERCIAL|CORPORATE)/i
/CPS[\s\/]/i
/(DB|DEBIT|CR|CREDIT)\s*(TIER|LEVEL)?/i

// Assessment patterns
/ASSESSMENT/i
/DUES\s*[&]\s*ASSESSMENTS/i

// Network patterns
/NETWORK\s*(ACCESS|PROC|FEE|AUTH)/i
/(NABU|FANF|APF|BASE\s*II)/i
/ACQUIRER\s*(FEE|PROC)/i
/CROSS\s*BORDER/i
/INTL?\s*(SERVICE|ACQUIRER|SUPPORT)/i
/(KILOBYTE|FILE\s*TRANSMISSION)/i
/SETTLEMENT\s*FEE/i
/TRANSACTION\s*INTEGRITY/i
```

### Controllable Pattern Matchers
```javascript
// Processor markup
/(SALES\s*)?DISCOUNT/i
/DISC\s*1/i
/PLATFORM\s*FEE/i
/PROCESSING\s*FEE$/i

// Monthly/platform fees
/MONTHLY\s*(STATEMENT|FEE|LOCATION)/i
/PCI\s*(NON-)?VALIDATION/i
/REGULATORY\s*PRODUCT/i
/SERVICE\s*(&|AND)\s*REGULATORY/i
/STATEMENT\s*FEE/i
/CHARGEBACK\s*(FEE|SERVICE)/i
/BATCH\s*(SETTLE|FEE)/i
/DATAWIRE/i
/SAFERPAYMENTS/i

// Transaction fees (processor auth fees)
/^(VISA|MASTERCARD|MC|DISCOVER|AMEX)\s*AUTH\s*FEE/i
/AVS\s*(WATS|FEE|POS)/i
/ECR\s*ADDRESS/i
/CNP\s*AVS/i
```

---

## EFFECTIVE RATE BENCHMARKS BY PROCESSOR

| Processor | Typical Effective Rate | Pass-Through | Controllable Markup |
|-----------|------------------------|--------------|---------------------|
| CardConnect | 1.80% - 2.00% | 1.50% - 1.70% | 0.10% - 0.15% |
| WorldPay | 2.00% - 2.50% | 1.60% - 1.80% | 0.30% - 0.50% |
| Heartland | 3.00% - 3.50% | 2.00% - 2.50% | 0.70% - 1.00% |
| Paysafe | 1.80% - 2.20% | 1.40% - 1.60% | 0.30% - 0.50% |
| EVO/TSYS | 1.00% - 1.50% | 0.80% - 1.20% | 0.15% - 0.25% |

---

## HIDDEN FEE INDICATORS (Red Flags)

These fees are often inflated and highly negotiable:
1. **PCI Non-Validation** ($65-$99/month) - Should be $0 if compliant
2. **Regulatory Product Fee** - Processor-invented fee
3. **Network & Processor Access Fee** - Often markup disguised as network fee
4. **Processor Transaction Risk Fee** - Pure processor profit
5. **Monthly Discount Adjustment** - Catch-all markup
6. **SaferPayments/Security fees** - Usually optional
7. **Statement Fee** ($5-$10) - Should be $0 with online statements
8. **Batch Settlement Fee** ($0.20-$0.25 each) - Can be negotiated to $0

---

## FIRST DATA/FISERV EXPRESS STATEMENT PATTERNS

### Statement Identifiers
- **Branding:** "First Data | Express - Merchant Processing Solutions"
- **Document Title:** "YOUR CARD PROCESSING STATEMENT"
- **Portal:** www.businesstrack.com
- **Phone:** 1-877-273-8191
- **Unique Feature:** SpendTrend analytics with year-over-year charts

### First Data Fee Categories
| Statement Label | Category |
|-----------------|----------|
| "Interchange charges" | PASS_THROUGH |
| "Service charges" | CONTROLLABLE |
| "Fees" | MIXED (review each) |

### First Data Tiered Pricing Patterns
```
# CONTROLLABLE - Processor Markup (Tiered)
VISA SALES DISCOUNT .0304 DISC RATE TIMES $XXX
VISA MID-QUAL SALES DISCOUNT .0344 DISC RATE TIMES $XXX
VISA NON-QUAL SALES DISCOUNT .0404 DISC RATE TIMES $XXX
VISA DEBIT SALES DISCOUNT .0259 DISC RATE TIMES $XXX
MASTERCARD SALES DISCOUNT .0304 DISC RATE TIMES $XXX
MC MID-QUAL SALES DISC .0329 DISC RATE TIMES $XXX
MC NON-QUAL SALES DISC .0389 DISC RATE TIMES $XXX
DISCOVER MIDQUAL SALES DISC .0329 DISC RATE TIMES $XXX
DISCOVER NONQUAL SALES DISC .0389 DISC RATE TIMES $XXX

# CONTROLLABLE - Per Transaction Fees
VISA SALES TRANS FEE [count] TRANSACTIONS AT .06
VISA MID-QUAL SALES TRANS FEE [count] TRANSACTIONS AT .06
VISA NON-QUAL SALES TRANS FEE [count] TRANSACTIONS AT .06
MC SALES TRANS FEE [count] TRANSACTIONS AT .06
MC NON-QUAL SALES TRANS FEE [count] TRANSACTIONS AT .06
DISCOVER MIDQUAL SALE TRANS [count] TRANSACTIONS AT .06
DISCOVER NONQUAL SALE TRANS [count] TRANSACTIONS AT .06

# CONTROLLABLE - Platform Fees
CLOVER SECURITY PLUS MONTHLY
MONTHLY FUNDING ADVANTAGE .0003 TIMES $XXX
BUSINESS ADVANTAGE PACKAGE
AVS WATS AUTHORIZATION FEE
BATCH SETTLEMENT FEE [count] TRANSACTIONS AT .39

# PASS_THROUGH - Network Fees
VISA ACCESS FEE [count] TRANSACTIONS AT .034
MASTERCARD ACCESS FEE [count] TRANSACTIONS AT .034
DISCOVER ACCESS FEE [count] TRANSACTIONS AT .034
MC LICENSE VOLUME FEE .000217 DISC RATE TIMES $XXX
MC MONTHLY LOCATION FEE
VI BASE II SYSTEM FILE FEE [count] TRANSACTIONS AT .0018
VI BASE II CR VCHER FEE US D/P
VISA NETWORK FEE CP 1B-01
VISA INTL SERVICE FEE - BASE
VI TRANSACTION INTEGRITY FEE [count] TRANSACTIONS AT .1
US CROSS BORDER FEE

# PASS_THROUGH - Assessments
VISA ASSESSMENT FEE CR .0014 TIMES $XXX
VISA ASSESSMENT FEE DB .0013 TIMES $XXX
MASTERCARD ASSESSMENT FEE .0013 TIMES $XXX
MC ASSESSMNT TRAN AMT >=$1K .0001 X TRNS $XXX
DISCOVER ASSESSMENT FEE .0013 TIMES $XXX
```

---

## EVO/OMEGA STATEMENT PATTERNS

### Statement Identifiers
- **Branding:** OMEGA Processing POS Rewards
- **Contact:** Support@omegap.com, www.omegap.com, 1.866.888.9724
- **Unique Feature:** Uses 4-digit numeric fee codes (6xxx, 7xxx, 8xxx)
- **Section Labels:** "Settlement/Discount", "Pass Through", "Other Fees"

### EVO/Omega Pricing Model
**Interchange-Plus (IC+)** with uniform markup:
- Settlement/Discount section shows processor markup (typically 0.20% / 20 bps)
- Pass Through section shows actual interchange rates
- Other Fees section contains mixed assessments and processor fees

### EVO/Omega Fee Codes and Categories
```
# CONTROLLABLE - Settlement/Discount (Processor Markup)
# These are the SAME codes as Pass Through but with flat markup rate
6812 MC COMM LG MKT DATA RT1 (0.2000% markup)
6712 MC COMM LG MKT DATA RT2 (0.2000% markup)
6826 MC DATA RATE I BUS (0.2000% markup)
1626 MC DATA RATE I BUS LEVEL 3 (0.2000% markup)
2226 MC DATA RATE I BUS LEVEL 4 (0.2000% markup)
3440 VS BUS T2 PROD 1 (0.2000% markup)
4440 VS BUS T3 PROD 1 (0.2000% markup)
0540 VS BUS T4 PROD 1 (0.2000% markup)
3721 VS PURCH NONTRVL CNP (0.2000% markup)

# CONTROLLABLE - Other Fees (Processor Fees)
6197 ACCELERATED FUNDING
6089 Bank Service Fee
3001 BATCH FEE
6255 CHGBK PAPER NOTIFICATION
6199 GATEWAY ACCESS FEE
7316 GBL AX VERISIGN
7315 GBL AX VPN
7516 GBL MC VERISIGN
7515 GBL MC VPN
7416 GBL VS VERISIGN
7415 GBL VS VPN
7080 GLB NON SPECIFIC AUTH
6085 PCI COMPLIANCE FEE

# PASS_THROUGH - Pass Through Section (Interchange)
6812 MC COMM LG MKT DATA RT1 (2.7000% + $0.10)
6712 MC COMM LG MKT DATA RT2 (2.5000% + $0.10)
6826 MC DATA RATE I BUS (2.6500% + $0.10)
1626 MC DATA RATE I BUS LEVEL 3 (2.8500% + $0.10)
2226 MC DATA RATE I BUS LEVEL 4 (2.9500% + $0.10)
1113 MC REGULATED FRD DBT (0.0500% + $0.22)
3440 VS BUS T2 PROD 1 (2.8000% + $0.10)
4440 VS BUS T3 PROD 1 (2.8500% + $0.10)
0540 VS BUS T4 PROD 1 (2.9500% + $0.10)
3421 VS CORP NONTRVL CNP (2.7000% + $0.10)
2531 VS CPS US REGULATED DBT (0.0500% + $0.22)
3721 VS PURCH NONTRVL CNP (2.7000% + $0.10)
6152 VS VS VIN SERVICES (1.8500% + $0.10)
6252 VS VSP VIQ SERVICES (2.3000% + $0.10)

# PASS_THROUGH - Other Fees (Assessments & Network)
8940 ASSC CARD ACCEPT & LICENSE FEE (0.0200%)
6299 CNP FANF/ LIC FEE ($45.00)
6298 CP FANF/LIC FEE ($2.90)
8927 MC ASSESSMENTS -$1,000 (0.1500%)
8928 MC ASSESSMENTS LARGE TICKET +$1,000 (0.1400%)
8288 MC CVC2 FEE ($0.0025)
8941 MC DIGITAL ENHANCEMENT (0.0100%)
8295 MC NETWORK ACCESS & BRAND USAGE ($0.0195)
8290 VISA ACQUIRER PROCESSING FEE - CREDIT ($0.0195)
8294 VISA ACQUIRER PROCESSING FEE - SIG DEBIT ($0.0155)
8901 VISA ASSESSMENTS (CREDIT CARDS) (0.1600%)
8902 VISA ASSESSMENTS (DEBIT CARDS) (0.1500%)
8900 VISA NETWORK ACCESS FEE ($0.0295)
```

---

## HEARTLAND/GLOBAL PAYMENTS (TSYS) STATEMENT PATTERNS

### Statement Identifiers
- **Address:** "MERCHANT PROCESSING CENTER, ONE HEARTLAND WAY JEFFERSONVILLE IN 47130"
- **Customer Service:** (800) 654-9256
- **Header:** "Merchant Services" with "Merchant Statement"
- **Unique Feature:** Uses "(24)" suffix on interchange codes (billing cycle identifier)

### Heartland Interchange Categories with (24) Suffix
```
# PASS_THROUGH - Discover Interchange
DS Commercial Electronic Submission Level (24)
DS PSL Retail PR (24)
DS PSL Key Entry PR (24)
DS PSL Retail Rewards

# PASS_THROUGH - Visa Interchange
VS CPS Retail Keyed Debit (24)
VS Business Tr4 Prod 2 (24)
VS Business Level 2 T4 (24)
VS Non Qual Cons Cr (24)
VS VIN Product 1 (24)
VS VSP VIQ Product 1 (24)
VS VTR Product 2 (24)
VS VIN Product 2 (24)
VS VSP VIQ Product 2 (24)
VS Business Tr2 Prod 2 (24)
VS CPS Retail Check Debit
VS CPS Small Ticket Debit
VS VT Product 2
VS CPS Small Ticket Regulated
VS US Regulated Debit
VS CPS Retail Pp

# PASS_THROUGH - MasterCard Interchange
MC Enhanced Key Entered (24)
MC World Merit III (24)
MC World Elite Key Entered (24)
MC World Elite Merit III (24)
MC Business Level 4 Data Rate I (24)
MC High Value Key Entered (24)
MC Enhanced Merit III Base
MC Merit III Debit
MC US Cons Regulated POS Debit w/Fraud Adj

# PASS_THROUGH - Amex Interchange
AM Service/Prof Serv Tier 2 (24)
AM Service/Prof Serv Tier 3 (24)

# PASS_THROUGH - Assessments
AXP ASSESSMENTS
DISC/PAYPAL ASSESSMENTS
MC ASSESSMENTS
VISA ASSESSMENTS

# PASS_THROUGH - Network Fees
FIXED ACQUIRER NETWORK FEE (FANF)
FEES FOR ACCESS TO CARD BRAND SERVICES
AXP ACCESS FEE
AXP NON-SWIPED FEE
AXP SYSTEM PROCESSING FEE
DISCOVER DATA USAGE/NETWORK FEE
ASSOC KILOBYTE/BASE II FEES
MC NABU/LICENSE/DIGITAL ENABLEMENT FEE
VISA ASSOC APF FEE & CREDIT VOUCHER FEE
VISA INTEGRITY FEE

# CONTROLLABLE - Processor Markup
Base P/I Discount (VS, MC, AM, DS, DB, PP)

# CONTROLLABLE - Processor Fees
NON-EMV RISK ASSESSMENT FEE
NON-EMV PROGRAM FEE
TRANSACTION/NETWORK ACCESS FEE
TRANSACTION/NETWORK ACCESS FEE - AXP
CE: SUITE (INTELLIGENCE) S/MB

# CONTROLLABLE - Platform Fees
MONTHLY SERVICE FEE
$100,000 BREACH COVERAGE MONTHLY FEE
TRANSLINK MONTHLY FEE
NON RECEIPT OF PCI VALIDATION
```

---

## PATTERN REGEX UPDATES

### NEW First Data Tiered Pricing Regex
```javascript
// First Data tiered discount detection
/^(VISA|MC|MASTERCARD|DISCOVER)\s*(DEBIT\s*)?(MID-?QUAL|NON-?QUAL)?\s*SALES\s*DISC(OUNT)?\s*\.?\d{4}\s*DISC\s*RATE/i
// → CONTROLLABLE

// First Data per-transaction markup
/^(VISA|MC|MASTERCARD|DISCOVER|VI|AMEX)\s*(DEBIT\s*)?(MID-?QUAL|NON-?QUAL)?\s*(SALES\s*)?TRANS(ACTION)?\s*FEE\s*\d+\s*TRANSACTIONS\s*AT/i
// → CONTROLLABLE

// First Data ACCESS FEE pattern (network fee)
/^(VISA|MASTERCARD|DISCOVER)\s*ACCESS\s*FEE\s*\d+\s*TRANSACTIONS\s*AT/i
// → PASS_THROUGH
```

### NEW EVO/Omega Regex
```javascript
// EVO numeric code patterns
/^[0-9]{4}\s+(MC|VS|DS|AX)/i
// → Check section context (Settlement/Discount vs Pass Through)

// EVO assessments (8xxx codes are typically network fees)
/^8\d{3}\s+.*(ASSESSMENT|NETWORK|ACCESS|DIGITAL|CVC2)/i
// → PASS_THROUGH

// EVO processor fees (6xxx, 7xxx codes are typically controllable)
/^[67]\d{3}\s+.*(BATCH|PCI|GATEWAY|FUNDING|SERVICE|VPN|VERISIGN|COMPLIANCE)/i
// → CONTROLLABLE
```

### NEW Heartland (24) Suffix Regex
```javascript
// Heartland interchange with (24) suffix
/^(VS|MC|DS|AM)\s+.+\s*\(24\)$/i
// → PASS_THROUGH

// Heartland processor fees
/^(NON-?EMV|TRANSLINK|CE:?\s*SUITE|BREACH\s*COVERAGE)/i
// → CONTROLLABLE
```

---

## EXCLUSION RULES SYSTEM (Phase 1 - Feb 5, 2026)

### Purpose
Exclusion rules disambiguate fees that could match BOTH CONTROLLABLE and PASS_THROUGH patterns. They run BEFORE regular pattern matching with highest priority.

### Priority Order
1. **EXCLUSION_RULES** - Highest priority, disambiguates ambiguous fees
2. **HIDDEN_FEE_PATTERNS** - Detects disguised markups
3. **CONTROLLABLE_PATTERNS** - Generic controllable patterns
4. **PASSTHROUGH_PATTERNS** - Generic pass-through patterns
5. **REVIEW** - Default for unknown fees

### Key Exclusion Rules

#### ACCESS FEE Disambiguation
| Pattern | Category | Reason |
|---------|----------|--------|
| `VISA ACCESS FEE` | PASS_THROUGH | Card brand network fee |
| `MASTERCARD ACCESS FEE` | PASS_THROUGH | Card brand network fee |
| `PROCESSOR ACCESS FEE` | CONTROLLABLE | Processor markup |
| `GATEWAY ACCESS FEE` | CONTROLLABLE | Processor markup |
| `NETWORK & PROCESSOR ACCESS FEE` | CONTROLLABLE | Disguised markup |

#### NETWORK FEE Disambiguation
| Pattern | Category | Reason |
|---------|----------|--------|
| `VISA NETWORK FEE` | PASS_THROUGH | Legitimate network fee |
| `MC NETWORK FEE` | PASS_THROUGH | Legitimate network fee |
| `PROCESSOR NETWORK FEE` | CONTROLLABLE | Markup disguised as network |
| `PLATFORM NETWORK FEE` | CONTROLLABLE | Markup disguised as network |

#### ASSESSMENT Disambiguation
| Pattern | Category | Reason |
|---------|----------|--------|
| `VISA ASSESSMENT` | PASS_THROUGH | Card brand assessment |
| `MC ASSESSMENT` | PASS_THROUGH | Card brand assessment |
| `RISK ASSESSMENT` | CONTROLLABLE | Processor markup |
| `SECURITY ASSESSMENT` | CONTROLLABLE | Processor markup |
| `TECHNOLOGY ASSESSMENT` | CONTROLLABLE | Processor markup |

#### TRANSACTION FEE Disambiguation
| Pattern | Category | Reason |
|---------|----------|--------|
| `VISA TRANSACTION FEE` | CONTROLLABLE | Per-brand = processor markup |
| `MC TRANSACTION FEE` | CONTROLLABLE | Per-brand = processor markup |
| `TRANSACTION INTEGRITY FEE` | PASS_THROUGH | Legitimate Visa fee |

#### PROCESSING FEE Disambiguation
| Pattern | Category | Reason |
|---------|----------|--------|
| `VISA Processing Fee` | CONTROLLABLE | WorldPay-style markup |
| `MASTERCARD Processing Fee` | CONTROLLABLE | WorldPay-style markup |
| `ACQUIRER PROCESSING FEE` | PASS_THROUGH | Legitimate Visa APF |

#### Always PASS_THROUGH
- `DUES & ASSESSMENTS`
- `FANF` (Fixed Acquirer Network Fee)
- `NABU` (Network Access and Brand Usage)
- `INTERCHANGE` (pure label, not "management")

#### Always CONTROLLABLE
- `INTERCHANGE MANAGEMENT`
- `INTERCHANGE OPTIMIZATION`
- `SALES DISCOUNT`
- `MONTHLY DISCOUNT`

---

*This knowledgebase compiled from analysis of 52 real merchant statements across CardConnect, WorldPay, Heartland, Paysafe, EVO/TSYS, First Data, and other processors.*

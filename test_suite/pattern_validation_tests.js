#!/usr/bin/env node
/**
 * GPI Fee Analyzer - Pattern Validation Test Suite
 * Based on 20-Bot Research Army Findings (February 2026)
 *
 * Tests extraction patterns against known statement formats
 */

const fs = require('fs');
const path = require('path');

// ============================================================
// TEST CASES - Based on actual statement patterns discovered
// ============================================================

const TEST_CASES = [
    // CardConnect/Fiserv Format
    {
        name: "CardConnect - Page X Fees Format",
        processor: "CardConnect/Fiserv",
        text: `
SUMMARY                 An overview of account activity for the statement period.

Page       1            Total Amount Submitted                                                 $245,850.63
Page       4            Third Party Transactions                                               -$11,720.22
Page       5            Chargebacks/Reversals                                                           0.00
Page       5            Adjustments                                                                     0.00
Page       5            Fees                                                                    -$4,867.50
Total Amount Processed                                                                   $229,262.91
        `,
        expected: {
            volume: 245850.63,
            fees: 4867.50,
            effectiveRate: 1.98
        }
    },

    // WorldPay Format
    {
        name: "WorldPay - Deposits Format",
        processor: "WorldPay/FIS",
        text: `
SUMMARY OF DEPOSITS

                Sales           Refunds         Net Sales       Chargebacks     Deposits
Visa           $125,432.50     $1,234.00       $124,198.50     $0.00          $124,198.50
Mastercard     $85,234.19      $567.00         $84,667.19      $0.00          $84,667.19
Discover       $18,253.00      $0.00           $18,253.00      $0.00          $18,253.00

Deposits          2,802              228,118.69

TOTAL FEES                                                                      5,071.35
        `,
        expected: {
            volume: 228118.69,
            fees: 5071.35,
            effectiveRate: 2.22
        }
    },

    // Heartland/Passport Format
    {
        name: "Heartland - Total Credit Card Fees",
        processor: "Heartland/Passport",
        text: `
MERCHANT STATEMENT - YOUR DEPOSITS & FEES AT A GLANCE

Total Deposits:                                              $37,130.80
Total Credit Card Fees:                                      $1,190.82

PROCESSING SUMMARY
Number of Transactions:     892
Sales Volume:              $38,234.56
Refunds:                   $1,103.76
Net Sales:                 $37,130.80
        `,
        expected: {
            volume: 37130.80,
            fees: 1190.82,
            effectiveRate: 3.21
        }
    },

    // EVO/TSYS Chain Format
    {
        name: "EVO/TSYS - Chain Statement",
        processor: "EVO/TSYS",
        text: `
                                                              Summary
Plan        Number/Amount     Number/Amount       Number/Amount Number/Amount
Code               of Sales        of Credits        of Net Sales of Chargebacks
MTD V           640,105.17            875.30          639,229.87            51.46
MTD M           310,444.23            318.64          310,125.59           118.94
Total         3,728,532.37         3,114.52         3,725,417.85           170.40

Total Fees                              81,094.81
Total Discount                           1,864.28
Total Due                               82,959.09
        `,
        expected: {
            volume: 3728532.37,
            fees: 82959.09,
            effectiveRate: 2.23
        }
    },

    // Paysafe Format
    {
        name: "Paysafe - Amounts Submitted",
        processor: "Paysafe",
        text: `
MERCHANT STATEMENT

Amounts Submitted                                            $201,549.92

FEES SUMMARY
Interchange Fees:          $2,845.23
Card Brand Fees:             $312.45
Processing Fees:             $562.23

Total (Misc Fees and Card Fees)                              $3,719.91
        `,
        expected: {
            volume: 201549.92,
            fees: 3719.91,
            effectiveRate: 1.85
        }
    },

    // BB&T/TSYS Format
    {
        name: "BB&T/TSYS - Deposit Totals",
        processor: "BB&T/TSYS",
        text: `
MERCHANT ACCOUNT STATEMENT

Deposit Totals                                      194     $93,423.09

FEE SUMMARY
Interchange Charges:        $3,245.67
Assessment Fees:              $421.34
Processing Fees:              $527.40

Amount Deducted                           4,194.41
        `,
        expected: {
            volume: 93423.09,
            fees: 4194.41,
            effectiveRate: 4.49
        }
    },

    // EVO/Omega Format
    {
        name: "EVO/Omega - Account Debited",
        processor: "EVO/Omega",
        text: `
MERCHANT PROCESSING STATEMENT

TOTAL                              97                       $548,056.32

FEES AND CHARGES
Interchange:               $12,345.67
Assessments:                $1,234.56
Processing:                 $1,448.92

Account Has Been Debited a Total in the Month of August 2021 for $15,029.15
        `,
        expected: {
            volume: 548056.32,
            fees: 15029.15,
            effectiveRate: 2.74
        }
    },

    // Nationwide Format
    {
        name: "Nationwide - Merchant Account Debited",
        processor: "Nationwide",
        text: `
MERCHANT STATEMENT

Grand Totals    1,234    $156,789.45

BILLING SUMMARY
Processing Fees:          $2,345.67
Network Fees:               $456.78
Monthly Fees:                $45.00

YOUR MERCHANT ACCOUNT HAS BEEN DEBITED: $2,847.45
        `,
        expected: {
            volume: 156789.45,
            fees: 2847.45,
            effectiveRate: 1.82
        }
    },

    // Stax/Payment Depot Format (Subscription)
    {
        name: "Stax - Total Cost Format",
        processor: "Stax/Payment Depot",
        text: `
MONTHLY STATEMENT

PROCESSING SUMMARY
Gross Sales:              $89,234.56
Refunds:                   $1,234.56
Net Sales:                $88,000.00

FEES
Interchange (at cost):     $1,567.89
Card Brand Fees:             $145.67
Per-Transaction Fees:        $123.40

TOTAL COST                   $1,836.96
        `,
        expected: {
            volume: 89234.56,  // Gross Sales is primary volume indicator
            fees: 1836.96,
            effectiveRate: 2.06
        }
    },

    // First American Format
    {
        name: "First American - Total Card Fees",
        processor: "First American/BAMS",
        text: `
MERCHANT PROCESSING STATEMENT

SUMMARY
TOTAL        1,456     $234,567.89     12

TOTAL CARD FEES                        $5,678.90
        `,
        expected: {
            volume: 234567.89,
            fees: 5678.90,
            effectiveRate: 2.42
        }
    }
];

// ============================================================
// EXTRACTION PATTERNS (from index.html)
// ============================================================

const priorityVolumePatterns = [
    { pattern: /TOTAL\s+AMOUNT\s+SUBMITTED[\s\.:=\$]*\$?([\d,]+\.?\d*)/gi, priority: 0 },
    { pattern: /Amounts\s+Submitted[\s\.:=\$]*\$?([\d,]+\.?\d{2})/gi, priority: 0 },
    { pattern: /^Total\s+([\d,]+\.\d{2})\s+[\d,]+\.\d{2}\s+[\d,]+\.\d{2}/gim, priority: 1 },
    { pattern: /TOTAL\s+DEPOSITS?[\s\.:=\$]*\$?([\d,]+\.?\d*)/gi, priority: 1 },
    { pattern: /Deposit\s+Totals?\s+\d+\s+\$?([\d,]+\.?\d{2})/gi, priority: 1 },
    { pattern: /Total\s+Deposits:[\s\.:=\$]*\$?([\d,]+\.?\d{2})/gi, priority: 1 },
    { pattern: /DEPOSITS\s+[\d,]{1,6}\s+([\d,]+\.\d{2})/gi, priority: 1 },
    { pattern: /(?:NET|GROSS)\s+SALES[^\d]*([\d,]+\.?\d{2})/gi, priority: 2 },
    { pattern: /Net\s+Sales:[\s\.:=\$]*\$?([\d,]+\.?\d{2})/gi, priority: 2 },
    { pattern: /TOTAL\s+SALES[\s\.:=\$]*\$?([\d,]+\.?\d*)/gi, priority: 2 },
    { pattern: /Grand\s+Totals\s+[\d,]+\s+\$?([\d,]+\.?\d{2})/gi, priority: 2 },
    { pattern: /TOTAL\s+[\d,]+\s+\$?([\d,]+\.?\d{2})(?:\s+\d+)?/gi, priority: 4 },
];

const priorityFeePatterns = [
    { pattern: /Page\s+\d+\s+Fees\s+-?\$?([\d,]+\.?\d{2})/gi, priority: -2 },
    { pattern: /TOTAL\s+COST[\s\.:=\$]*\$?([\d,]+\.?\d{2})\s*$/gim, priority: -2 },
    { pattern: /TOTAL\s*\([^)]*(?:FEES|CHARGES)[^)]*\)[\s\.:=]*-?\$?([\d,]+\.?\d{2})/gi, priority: -1 },
    { pattern: /YOUR\s+MERCHANT\s+ACCOUNT\s+HAS\s+BEEN\s+DEBITED:?\s*\$?([\d,]+\.?\d{2})/gi, priority: -1 },
    { pattern: /Account\s+Has\s+Been\s+Debited.*?(?:for|of)\s+\$?([\d,]+\.?\d{2})/gi, priority: -1 },
    { pattern: /Total\s+\(Misc\s+Fees\s+and\s+Card\s+Fees\)[\s\.:=\$]*-?\$?([\d,]+\.?\d{2})/gi, priority: -1 },
    { pattern: /TOTAL\s+CREDIT\s+CARD\s+FEES:?[\s\.:=\$]*\$?([\d,]+\.?\d*)/gi, priority: 0 },
    { pattern: /Amount\s+Deducted:?[\s\.:=\$]*\$?\s*([\d,]+\.?\d*)/gi, priority: 0 },
    { pattern: /TOTAL\s+DUE[\s\.:=\$]*\$?([\d,]+\.?\d*)/gi, priority: 0 },
    { pattern: /Total\s+Due[\s\.:=\$]*\$?([\d,]+\.?\d*)/gi, priority: 0 },
    { pattern: /TOTAL\s+CARD\s+FEES[\s\.:=\$]*\$?\s*([\d,]+\.?\d{2})/gi, priority: 0 },
    { pattern: /TOTAL\s+FEES[\s\.:=\$]+([\d,]+\.?\d{2})/gi, priority: 1 },
];

// ============================================================
// EXTRACTION FUNCTIONS
// ============================================================

function extractVolume(text) {
    let bestVolume = 0;
    let bestPriority = 999;

    for (const { pattern, priority } of priorityVolumePatterns) {
        let match;
        pattern.lastIndex = 0;
        while ((match = pattern.exec(text)) !== null) {
            const value = parseFloat(match[1].replace(/,/g, ''));
            if (value > 1000 && value < 100000000) {
                if (priority < bestPriority || (priority === bestPriority && value > bestVolume)) {
                    bestVolume = value;
                    bestPriority = priority;
                }
            }
        }
    }
    return bestVolume;
}

function extractFees(text, volume) {
    let bestFees = 0;
    let bestPriority = 999;

    for (const { pattern, priority } of priorityFeePatterns) {
        let match;
        pattern.lastIndex = 0;
        while ((match = pattern.exec(text)) !== null) {
            const value = parseFloat(match[1].replace(/,/g, ''));
            if (value > 0 && value < 100000 && (volume === 0 || value < volume * 0.15)) {
                if (priority < bestPriority || (priority === bestPriority && value > bestFees)) {
                    bestFees = value;
                    bestPriority = priority;
                }
            }
        }
    }
    return bestFees;
}

// ============================================================
// TEST RUNNER
// ============================================================

console.log('='.repeat(70));
console.log('GPI Fee Analyzer - Pattern Validation Test Suite');
console.log('Based on 20-Bot Research Army Findings');
console.log('='.repeat(70));
console.log('');

let passCount = 0;
let failCount = 0;

for (const test of TEST_CASES) {
    const volume = extractVolume(test.text);
    const fees = extractFees(test.text, volume);
    const effectiveRate = volume > 0 ? (fees / volume * 100) : 0;

    const volumeMatch = Math.abs(volume - test.expected.volume) < 0.01;
    const feesMatch = Math.abs(fees - test.expected.fees) < 0.01;
    const rateMatch = Math.abs(effectiveRate - test.expected.effectiveRate) < 0.1;

    const passed = volumeMatch && feesMatch;

    if (passed) {
        console.log(`✅ PASS: ${test.name}`);
        passCount++;
    } else {
        console.log(`❌ FAIL: ${test.name}`);
        failCount++;
    }

    console.log(`   Processor: ${test.processor}`);
    console.log(`   Volume:    Expected $${test.expected.volume.toLocaleString()} | Got $${volume.toLocaleString()} ${volumeMatch ? '✓' : '✗'}`);
    console.log(`   Fees:      Expected $${test.expected.fees.toLocaleString()} | Got $${fees.toLocaleString()} ${feesMatch ? '✓' : '✗'}`);
    console.log(`   Rate:      Expected ${test.expected.effectiveRate}% | Got ${effectiveRate.toFixed(2)}%`);
    console.log('');
}

console.log('='.repeat(70));
console.log('TEST RESULTS SUMMARY');
console.log('='.repeat(70));
console.log(`✅ PASS: ${passCount}`);
console.log(`❌ FAIL: ${failCount}`);
console.log(`Total: ${TEST_CASES.length}`);
console.log(`Accuracy: ${Math.round(passCount / TEST_CASES.length * 100)}%`);
console.log('='.repeat(70));

process.exit(failCount > 0 ? 1 : 0);

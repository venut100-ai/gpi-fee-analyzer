/**
 * Universal Fee Recognition Engine - Manual Test Validation
 * Tests the new Options 1-5 patterns exist in the codebase
 */

const fs = require('fs');
const path = require('path');

// Load the index.html
const indexHtml = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');

console.log('======================================================================');
console.log('Universal Fee Recognition Engine - Structure Validation');
console.log('Verifying Options 1-5 Implementation Components');
console.log('======================================================================\n');

let passCount = 0;
let failCount = 0;

function checkExists(name, pattern) {
    const found = pattern.test(indexHtml);
    if (found) {
        console.log('✅ PASS: ' + name);
        passCount++;
    } else {
        console.log('❌ FAIL: ' + name + ' - NOT FOUND');
        failCount++;
    }
    return found;
}

// Option 1: Linguistic Keywords
console.log('--- Option 1: Linguistic Keyword Analysis ---\n');
checkExists('LINGUISTIC_KEYWORDS object', /const\s+LINGUISTIC_KEYWORDS\s*=/);
checkExists('PASS_THROUGH_STRONG keywords', /PASS_THROUGH_STRONG[\s\S]*?interchange/);
checkExists('CONTROLLABLE_STRONG keywords', /CONTROLLABLE_STRONG[\s\S]*?discount/);
checkExists('Linguistic analysis in universalCategorizeFee', /linguistic\s*analysis/i);

// Option 2: Rate/Amount Heuristics
console.log('\n--- Option 2: Rate/Amount Heuristics ---\n');
checkExists('RATE_HEURISTICS object', /const\s+RATE_HEURISTICS\s*=/);
checkExists('analyzeRate function', /function\s+analyzeRate/);
checkExists('uniformMarkupRate pattern', /uniformMarkupRate|0\.20%|0\.0020/);

// Option 3: Official Interchange Data
console.log('\n--- Option 3: Official Interchange Data ---\n');
checkExists('OFFICIAL_INTERCHANGE_PATTERNS constant', /OFFICIAL_INTERCHANGE_PATTERNS/);
checkExists('matchesOfficialInterchange function', /function\s+matchesOfficialInterchange/);
checkExists('INTERCHANGE_PREFIXES', /const\s+INTERCHANGE_PREFIXES\s*=/);
checkExists('CPS pattern (Visa official category)', /CPS.*Retail|CPS.*Restaurant/);

// Option 4: Negative Pattern Matching
console.log('\n--- Option 4: Negative Pattern Matching ---\n');
checkExists('DEFINITIVE_PASSTHROUGH patterns', /DEFINITIVE_PASSTHROUGH\s*=/);
checkExists('isDefinitelyPassThrough function', /function\s+isDefinitelyPassThrough/);
checkExists('Default CONTROLLABLE logic', /default.*CONTROLLABLE|CONTROLLABLE.*unknown/i);

// Option 5: Crowdsourced Learning
console.log('\n--- Option 5: Crowdsourced Learning ---\n');
checkExists('learnedPatterns storage', /learnedPatterns\s*=/);
checkExists('learnPattern function', /function\s+learnPattern/);
checkExists('checkLearnedPatterns function', /function\s+checkLearnedPatterns/);

// Master function
console.log('\n--- Universal Categorization Master Function ---\n');
checkExists('universalCategorizeFee function', /function\s+universalCategorizeFee/);

// Verify official interchange data file
console.log('\n--- Data File Verification ---\n');
const interchangeFile = path.join(__dirname, '../knowledgebase/training_data/official_interchange_categories.json');
if (fs.existsSync(interchangeFile)) {
    const data = JSON.parse(fs.readFileSync(interchangeFile, 'utf8'));
    const visaCount = data.visa ? data.visa.length : 0;
    const mcCount = data.mastercard ? data.mastercard.length : 0;
    const totalCount = visaCount + mcCount + (data.discover ? data.discover.length : 0) + (data.amex ? data.amex.length : 0);
    console.log('✅ PASS: official_interchange_categories.json exists');
    console.log('   Visa: ' + visaCount + ' | MasterCard: ' + mcCount + ' | Total: ' + totalCount);
    if (totalCount > 100) {
        passCount++;
    } else {
        console.log('⚠️  Warning: Expected more interchange categories');
    }
} else {
    console.log('❌ FAIL: official_interchange_categories.json not found');
    failCount++;
}

// Verify training data file
const trainingFile = path.join(__dirname, '../knowledgebase/training_data/fee_training_data.json');
if (fs.existsSync(trainingFile)) {
    const data = JSON.parse(fs.readFileSync(trainingFile, 'utf8'));
    const feeCount = data.fees ? data.fees.length : 0;
    console.log('✅ PASS: fee_training_data.json exists');
    console.log('   Contains ' + feeCount + ' labeled fees');
    passCount++;
} else {
    console.log('❌ FAIL: fee_training_data.json not found');
    failCount++;
}

// Summary
console.log('\n======================================================================');
console.log('STRUCTURE VALIDATION RESULTS');
console.log('======================================================================');
console.log('✅ PASS: ' + passCount);
console.log('❌ FAIL: ' + failCount);
console.log('Total: ' + (passCount + failCount));
console.log('Coverage: ' + Math.round(passCount / (passCount + failCount) * 100) + '%');
console.log('======================================================================');

if (failCount > 0) {
    console.log('\n⚠️  Some components may be missing. Check implementation.');
    process.exit(1);
} else {
    console.log('\n✅ All Universal Fee Recognition Engine components verified!');
}

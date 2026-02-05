# Training Dataset Schema
## GPI Fee Analyzer - Phase 2 Pattern Recognition Enhancement

**Created:** February 5, 2026
**Purpose:** Ground truth labeled dataset for fee categorization validation

---

## Dataset Structure

### Primary File
`fee_training_data.json` - Master training dataset

### Schema
```json
{
  "metadata": {
    "version": "1.0",
    "created": "2026-02-05",
    "lastUpdated": "2026-02-05",
    "totalFees": 0,
    "totalProcessors": 0,
    "categories": {
      "PASS_THROUGH": 0,
      "CONTROLLABLE": 0,
      "REVIEW": 0
    }
  },
  "processors": {
    "processor_name": {
      "aliases": ["alias1", "alias2"],
      "statementCount": 0,
      "identifiers": ["branding pattern", "header pattern"]
    }
  },
  "fees": [
    {
      "id": "unique_id",
      "name": "EXACT FEE NAME AS IT APPEARS",
      "normalizedName": "lowercase_normalized_version",
      "processor": "processor_name",
      "category": "PASS_THROUGH|CONTROLLABLE|REVIEW",
      "confidence": 0.95,
      "subcategory": "interchange|assessment|network|markup|platform|hidden",
      "isHidden": false,
      "notes": "Any relevant context",
      "source": "statement_filename.pdf",
      "verifiedBy": "manual|rule|pattern",
      "dateAdded": "2026-02-05"
    }
  ]
}
```

---

## Category Definitions

### PASS_THROUGH
Fees set by card networks that cannot be negotiated:
- **interchange** - Card-issuing bank fees
- **assessment** - Card network fees (Visa, MC, Discover, Amex)
- **network** - Network access, FANF, NABU, APF fees

### CONTROLLABLE
Fees set by processor that CAN be negotiated:
- **markup** - Processor discount/margin fees
- **platform** - Monthly, statement, batch fees
- **hidden** - Disguised markups that look like pass-through

### REVIEW
Ambiguous fees requiring manual verification

---

## Data Quality Rules

1. **Exact Names**: Fee names must match EXACTLY as they appear on statements
2. **Normalization**: normalizedName = lowercase, single spaces, no special chars
3. **Confidence**: 0.95 for verified, 0.85 for inferred, 0.70 for ambiguous
4. **Source**: Always include source statement filename
5. **Verification**: Mark how the category was determined

---

## Validation Process

1. Extract fee from statement
2. Check against existing training data
3. If match found → use existing category
4. If no match → categorize using rules:
   - Check EXCLUSION_RULES first
   - Check HIDDEN_FEE_PATTERNS
   - Check CONTROLLABLE_PATTERNS
   - Check PASSTHROUGH_PATTERNS
   - Default to REVIEW
5. Add to training dataset with source

---

## Usage

### In Code
```javascript
// Load training data
const trainingData = await fetch('knowledgebase/training_data/fee_training_data.json');

// Lookup fee
function lookupTrainingData(feeName) {
  const normalized = feeName.toLowerCase().replace(/\s+/g, ' ').trim();
  return trainingData.fees.find(f => f.normalizedName === normalized);
}

// Categorize with training data priority
function categorizeFeeWithTraining(feeName) {
  const trained = lookupTrainingData(feeName);
  if (trained && trained.confidence >= 0.85) {
    return {
      category: trained.category,
      confidence: trained.confidence,
      source: 'training_data'
    };
  }
  // Fall back to pattern matching
  return categorizeFee(feeName);
}
```

---

## File Locations

| File | Purpose |
|------|---------|
| `TRAINING_DATASET_SCHEMA.md` | This documentation |
| `fee_training_data.json` | Master training dataset |
| `processor_fingerprints.json` | Processor identification patterns |
| `validation_results.json` | Test results against training data |


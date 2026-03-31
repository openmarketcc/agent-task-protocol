export function validateTaskOutput(output, criteria = []) {
  const checks = []
  const obj = output && typeof output === 'object' && !Array.isArray(output) ? output : null

  for (const criterion of criteria) {
    switch (criterion.type) {
      case 'completeness': {
        const fields = criterion.required_fields || []
        const missing = fields.filter((field) => !obj || obj[field] === null || obj[field] === undefined || obj[field] === '')
        checks.push({
          type: criterion.type,
          passed: missing.length === 0,
          detail: missing.length === 0 ? 'All required fields are populated' : `Missing or empty fields: ${missing.join(', ')}`
        })
        break
      }
      case 'range_check': {
        const value = obj?.[criterion.field]
        const allowed = criterion.allowed_values || []
        checks.push({
          type: criterion.type,
          passed: allowed.includes(value),
          detail: `Field '${criterion.field}' returned '${value}'. Allowed values: ${allowed.join(', ')}`
        })
        break
      }
      case 'numeric_range': {
        const value = obj?.[criterion.field]
        const passed = typeof value === 'number' && value >= criterion.min && value <= criterion.max
        checks.push({
          type: criterion.type,
          passed,
          detail: `Field '${criterion.field}' returned '${value}'. Expected ${criterion.min}-${criterion.max}`
        })
        break
      }
      case 'min_length': {
        const value = obj?.[criterion.field]
        const passed = typeof value === 'string' && value.length >= criterion.min
        checks.push({
          type: criterion.type,
          passed,
          detail: `Field '${criterion.field}' has length ${typeof value === 'string' ? value.length : 0}. Minimum: ${criterion.min}`
        })
        break
      }
      case 'array_not_empty': {
        const value = obj?.[criterion.field]
        const passed = Array.isArray(value) && value.length > 0
        checks.push({
          type: criterion.type,
          passed,
          detail: `Field '${criterion.field}' must be a non-empty array`
        })
        break
      }
      case 'no_forbidden_content': {
        const haystack = JSON.stringify(output)
        const hits = (criterion.forbidden_terms || []).filter((term) => haystack.includes(term))
        checks.push({
          type: criterion.type,
          passed: hits.length === 0,
          detail: hits.length === 0 ? 'No forbidden content detected' : `Forbidden terms detected: ${hits.join(', ')}`
        })
        break
      }
      default:
        checks.push({
          type: criterion.type,
          passed: false,
          detail: `Unsupported criterion type '${criterion.type}' in reference validator`
        })
    }
  }

  return {
    overall_passed: checks.every((check) => check.passed),
    checks
  }
}

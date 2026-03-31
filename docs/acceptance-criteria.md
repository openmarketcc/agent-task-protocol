# Acceptance Criteria

ATP v1 supports deterministic, machine-checkable acceptance criteria.

Current reference criterion types:

- `schema_conformance`
- `completeness`
- `range_check`
- `numeric_range`
- `min_length`
- `array_not_empty`
- `no_forbidden_content`

## Design Goals

- deterministic
- explainable
- portable across implementations
- safe to use in settlement-critical paths

## Out of Scope for v1

- semantic AI grading
- subjective quality ranking
- model-specific rubric scoring

Those belong to implementation-specific or future protocol layers.

# ATP Versioning

ATP objects are explicitly versioned.

## Object Versioning

`TaskObject.task.version` identifies the schema version used for the task.

ATP v1 uses:
- `1.0`

## Compatibility Rules

- Minor additions should remain backward compatible within the same major version.
- Breaking object changes require a major version increment.
- Reference validator behavior should track the corresponding major protocol version.

## Implementation Guidance

Implementations should:
- persist the version used for every task and receipt
- validate objects against the matching schema version
- avoid silently rewriting versioned payloads

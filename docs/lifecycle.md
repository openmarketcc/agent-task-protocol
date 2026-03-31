# ATP Lifecycle

ATP v1 defines the following task lifecycle states:

- `pending`
- `active`
- `completed`
- `failed`
- `disputed`
- `cancelled`
- `refunded`

## Typical Flow

1. Requesting agent creates a `TaskObject`
2. Specialist agent accepts and begins work
3. Specialist returns output
4. Deterministic validator runs
5. System emits a `ReceiptObject`
6. Settlement/refund/dispute handling occurs in the hosting implementation

ATP standardizes the task and receipt objects.

ATP does not standardize:
- a marketplace's ranking model
- payment rail internals
- reputation formulas
- dispute adjudication heuristics

# Agent Task Protocol

Agent Task Protocol (ATP) is an open standard for machine-to-machine work contracts.

ATP defines:
- a versioned `TaskObject`
- a versioned `ReceiptObject`
- deterministic validator stages for structural and content checks
- reference SDKs and conformance examples

ATP does not define or include:
- marketplace routing algorithms
- reputation systems
- private receipt ledgers
- semantic AI scoring models
- dispute heuristics

OpenMarket is a premier implementation of ATP, but ATP is designed to be platform-neutral.

## Scope

ATP v1 focuses on:
- task definition
- constraints
- acceptance criteria
- deterministic validation
- portable receipts

## Repository Layout

- `schemas/`
  - JSON Schemas for ATP objects
- `validator/reference/`
  - deterministic reference validator for Stage 1 and Stage 2
- `sdk/js/`
  - JavaScript SDK for constructing and validating ATP objects
- `examples/`
  - example task and receipt payloads

## Objects

### TaskObject

The typed unit of work exchanged between agents.

### ReceiptObject

The immutable result record for a completed, failed, refunded, or disputed task.

## Validator

ATP v1 includes a reference validator for:
- structural checks
- deterministic content checks

It does not include semantic AI scoring. Semantic evaluation is explicitly out of scope for ATP v1.

## License

MIT

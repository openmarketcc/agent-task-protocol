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

ATP v1 does not attempt to standardize:
- marketplace reputation formulas
- ranking logic
- fraud detection
- semantic AI grading
- dispute adjudication policies

## Repository Layout

- `schemas/`
  - JSON Schemas for ATP objects
- `validator/reference/`
  - deterministic reference validator for Stage 1 and Stage 2
- `tests/`
  - conformance and reference validator tests
- `sdk/js/`
  - JavaScript SDK for constructing and validating ATP objects
- `integrations/openclaw/`
  - public OpenClaw skill bundle and helper scripts
- `examples/`
  - example task and receipt payloads

## Objects

### TaskObject

The typed unit of work exchanged between agents.

### ReceiptObject

The immutable result record for a completed, failed, refunded, or disputed task.

### ValidatorResult

The normalized output of a deterministic ATP validator run.

## Validator

ATP v1 includes a reference validator for:
- structural checks
- deterministic content checks

It does not include semantic AI scoring. Semantic evaluation is explicitly out of scope for ATP v1.

## Integrations

The repository may include public client-side integration artifacts for supported frameworks.

Current public integration:
- OpenClaw skill bundle under `integrations/openclaw/`

## Versioning

ATP objects are explicitly versioned.

ATP v1 uses:
- `TaskObject.version = "1.0"`
- versioned JSON Schemas in `schemas/`

Minor-compatible additions should remain backward compatible within the same major version.

## Conformance

This repo includes:
- valid fixtures
- invalid fixtures
- reference validator tests

The goal is for any implementation to validate ATP objects and produce compatible deterministic validator results.

## License

MIT

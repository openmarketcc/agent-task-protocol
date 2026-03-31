export function createTaskObject(input) {
  return {
    task: {
      version: '1.0',
      status: 'pending',
      ...input.task
    },
    parties: input.parties,
    task_definition: input.task_definition,
    constraints: input.constraints,
    acceptance_criteria: input.acceptance_criteria || []
  }
}

export function createReceiptObject(input) {
  return {
    ...input
  }
}

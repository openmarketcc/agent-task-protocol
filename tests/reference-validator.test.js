import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { validateTaskOutput } from '../validator/reference/index.js'

const root = new URL('..', import.meta.url).pathname

function loadJson(file) {
  return JSON.parse(readFileSync(join(root, 'examples', file), 'utf8'))
}

test('reference validator passes valid output against valid criteria', () => {
  const output = {
    risk_level: 'high',
    summary: 'Clause is broad and should be narrowed before signature.',
    recommendations: ['Add carve-out for pre-existing IP']
  }

  const task = loadJson('task.json')
  const result = validateTaskOutput(output, task.acceptance_criteria)

  assert.equal(result.overall_passed, true)
  assert.equal(result.checks.length, 2)
  assert.equal(result.checks.every((check) => check.passed), true)
})

test('reference validator fails invalid range check', () => {
  const output = {
    risk_level: 'severe',
    recommendations: ['Add carve-out for pre-existing IP']
  }

  const task = loadJson('task.json')
  const result = validateTaskOutput(output, task.acceptance_criteria)

  assert.equal(result.overall_passed, false)
  assert.equal(result.checks.some((check) => check.passed === false), true)
})

const yaml = require('js-yaml')
const fs = require('fs')

test('load yaml basic checks', () => {
  const doc = yaml.safeLoad(fs.readFileSync('.eslintrc.yml', 'utf8'))
  expect(doc.env.node).toBe(true)
})

const expected = require('./expected')
const yamlToJson = require('../src/yaml-to-json')
test('transformed on-the-fly', () => {
  expect(yamlToJson).toEqual(expected)
})

test('exported main', () => {
  const doc = require('..')
  expect(doc).toEqual(expected)
})

const Linter = require('eslint').Linter
const linter = new Linter()
test('validate basic code with basic eslint config', () => {
  const messages = linter.verify('var foo;', {
    rules: {
      semi: 2
    }
  }, {filename: 'foo.js'})
  expect(messages).toHaveLength(0)
})

//TODO: create an eslintrc.yml that does not use plugins, for testing
test.skip('validate nodejs code with opinionated eslint config', () => {
  const messages = linter.verify('var foo;', yamlToJson, {filename: 'foo.js'})
  expect(messages).toHaveLength(0)
})

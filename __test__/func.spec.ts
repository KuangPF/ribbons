import assert from 'assert'
import { isObject, cloneDeep } from '../src/utils'

it('isObject', () => {
  expect(isObject(null)).toEqual(false)
  expect(isObject([])).toEqual(true)
  expect(isObject({})).toEqual(true)
})

it('`deepClone` should be return in case of not a object', function() {
  var string = 'deepClone string'
  var actual = cloneDeep(string)
  assert.ok(actual === 'deepClone string' && actual === string)
})
it('`deepClone` should deep clone objects', function() {
  var array = [{ a: 0 }, { b: 1 }]
  var object = {
    foo: {
      b: [0]
    },
    bar: {}
  }
  var actualArray = cloneDeep(array)
  var actualObject = cloneDeep(object)
  assert.ok(actualArray !== array && actualArray[0] !== array[0])
  assert.ok(actualObject !== object && actualObject.foo.b !== object.foo.b && actualObject.bar !== object.bar)
})

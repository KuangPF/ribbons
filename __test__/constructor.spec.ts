import Ribbons, { isObject } from '../src/index'

afterEach(() => {
  jest.clearAllMocks()
})

it('constructor works', () => {
  const ribbonsInstance = new Ribbons({ size: 80, alpha: 0.6, zIndex: 99 })
  expect(ribbonsInstance.config.size).toBe(80)
  expect(ribbonsInstance.config.alpha).toBe(0.6)
  expect(ribbonsInstance.config.zIndex).toBe(99)
})

it('it will be use defaultConfig', () => {
  const defaultConfigRibbos = new Ribbons()
  expect(defaultConfigRibbos.config.size).toBe(90)
  expect(defaultConfigRibbos.config.alpha).toBe(0.6)
  expect(defaultConfigRibbos.config.zIndex).toBe(-1)
})

it('isObject', () => {
  expect(isObject(null)).toEqual(false)
  expect(isObject([])).toEqual(true)
  expect(isObject({})).toEqual(true)
})

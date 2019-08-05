import Ribbons from '../src/index'

it('constructor works', () => {
  const ribbonsInstance = new Ribbons({ size: 80, alpha: 0.6, zIndex: 99 })
  expect(ribbonsInstance.config.size).toBe(80)
  expect(ribbonsInstance.config.alpha).toBe(0.6)
  expect(ribbonsInstance.config.zIndex).toBe(99)
})

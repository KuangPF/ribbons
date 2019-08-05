import Ribbons from '../src/index'
it('We can check if the consumer called the class constructor', () => {
  const soundPlayerConsumer = new Ribbons()
  expect(Ribbons).toHaveBeenCalledTimes(1)
})

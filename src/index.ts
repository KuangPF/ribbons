interface IOptions {
  size: number
  alpha: number
  zIndex: -1
}

let defaultConfig: IOptions = {
  size: 90, // 彩带的宽度
  alpha: 0.6, // 透明度
  zIndex: -1 // z-index
}

const isObject = (value: any) => {
  const type = typeof value
  return value !== null && (type === 'object' || type === 'function')
}

export default class Ribbons {
  config: IOptions
  constructor(option: IOptions) {
    this.config = this.extractConfig(option)
    this.init()
  }

  init() {
    console.log('init')
  }
  extractConfig(option: IOptions): IOptions {
    if (isObject(option)) {
      return Object.assign(this.config, option)
    }
    return option
  }
}

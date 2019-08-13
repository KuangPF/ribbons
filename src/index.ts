import { isObject, cloneDeep } from './utils'

interface IOptions {
  size: number
  alpha: number
  zIndex: number
}

interface IPath {
  x: number
  y: number
}

let defaultConfig: IOptions = {
  size: 90, // ribbon width
  alpha: 0.6, // transparency
  zIndex: -1 // z-index
}

const dpr = window.devicePixelRatio || 1 // get devicePixelRatio
const width = window.innerWidth // innerWidth
const height = window.innerHeight // innerHeight
const PI_2 = Math.PI * 2
let RIBBON_HEIGHT = defaultConfig.size
let r = 0

export default class Ribbons {
  config: IOptions
  canvasRibbon: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  path: IPath[]
  constructor(option?: IOptions) {
    this.config = this.extractConfig(option)
    this.canvasRibbon = document.createElement('canvas')
    this.init()
  }

  init() {
    document.addEventListener('touchmove', function(e) {
      e.preventDefault()
    })
    // init canvas
    this.initCanvas()
    document.onclick = this.init.bind(this)
    document.ontouchstart = this.init.bind(this)
  }

  // init canvas
  initCanvas() {
    this.canvasRibbon.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events: none;z-index:' + defaultConfig.zIndex
    document.getElementsByTagName('body')[0].appendChild(this.canvasRibbon)
    this.ctx = this.canvasRibbon.getContext('2d')! // get canvas context
    this.canvasRibbon.width = width * dpr
    this.canvasRibbon.height = height * dpr
    if (this.ctx) {
      this.ctx.scale(dpr, dpr)
      this.ctx.globalAlpha = this.config.alpha
      this.ctx.clearRect(0, 0, width, height)
    }

    RIBBON_HEIGHT = this.config.size
    // init path
    this.path = [
      {
        x: 0,
        y: height * 0.7 + RIBBON_HEIGHT
      },
      {
        x: 0,
        y: height * 0.7 - RIBBON_HEIGHT
      }
    ]
    while (this.path[1].x < width + RIBBON_HEIGHT) {
      this.drawLine(this.path[0], this.path[1])
    }
  }

  // drawLine
  drawLine(start: IPath, end: IPath) {
    let ctx = this.ctx
    if (ctx) {
      ctx.beginPath()
      ctx.moveTo(start.x, start.y)
      ctx.lineTo(end.x, end.y)
    }
    // draw next point
    let nextX = end.x + (Math.random() * 2 - 0.25) * RIBBON_HEIGHT
    let nextY = this._calculateY(end.y)
    if (ctx) {
      ctx.lineTo(nextX, nextY)
      ctx.closePath()
    }
    r -= PI_2 / -50
    // Randomly generate and set the canvas path hex color
    if (ctx) {
      ctx.fillStyle = '#' + (((Math.cos(r) * 127 + 128) << 16) | ((Math.cos(r + PI_2 / 3) * 127 + 128) << 8) | (Math.cos(r + (PI_2 / 3) * 2) * 127 + 128)).toString(16)
      ctx.fill()
    }
    this.path[0] = this.path[1] // Update current endpoint to next starting point
    this.path[1] = {
      x: nextX,
      y: nextY
    }
  }

  // Calculate the value of the next point y
  _calculateY(y: number): number {
    let temp = y + (Math.random() * 2 - 1.1) * RIBBON_HEIGHT
    let MaximumTemp = RIBBON_HEIGHT * 0.7
    return temp > height || temp < 0 ? MaximumTemp : temp
  }

  extractConfig(option?: IOptions): IOptions {
    if (isObject(option)) {
      return Object.assign(cloneDeep(defaultConfig), option)
    }
    return defaultConfig
  }
}

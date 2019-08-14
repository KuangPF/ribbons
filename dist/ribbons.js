/*!
 * Ribbons.js v1.0.9
 * (c) 2019 KuangPF
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Ribbons = factory());
}(this, function () { 'use strict';

  var isObject = function (value) {
      var type = typeof value;
      return value !== null && (type === 'object' || type === 'function');
  };
  var cloneDeep = function (obj) {
      if (!isObject(obj))
          return obj;
      var target = obj instanceof Array ? [] : new Object();
      Object.keys(obj).forEach(function (key) {
          // recursive traversal
          target[key] = isObject(obj[key]) ? cloneDeep(obj[key]) : obj[key];
      });
      return target;
  };

  var defaultConfig = {
      size: 90,
      alpha: 0.6,
      zIndex: -1 // z-index
  };
  var dpr = window.devicePixelRatio || 1; // get devicePixelRatio
  var width = window.innerWidth; // innerWidth
  var height = window.innerHeight; // innerHeight
  var PI_2 = Math.PI * 2;
  var RIBBON_HEIGHT = defaultConfig.size;
  var r = 0;
  var Ribbons = /** @class */ (function () {
      function Ribbons(option) {
          this.config = this.extractConfig(option);
          this.canvasRibbon = document.createElement('canvas');
          this.init();
      }
      Ribbons.prototype.init = function () {
          document.addEventListener('touchmove', function (e) {
              e.preventDefault();
          });
          // init canvas
          this.initCanvas();
          document.onclick = this.init.bind(this);
          document.ontouchstart = this.init.bind(this);
      };
      // init canvas
      Ribbons.prototype.initCanvas = function () {
          this.canvasRibbon.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events: none;z-index:' + defaultConfig.zIndex;
          document.getElementsByTagName('body')[0].appendChild(this.canvasRibbon);
          this.ctx = this.canvasRibbon.getContext('2d'); // get canvas context
          this.canvasRibbon.width = width * dpr;
          this.canvasRibbon.height = height * dpr;
          if (this.ctx) {
              this.ctx.scale(dpr, dpr);
              this.ctx.globalAlpha = this.config.alpha;
              this.ctx.clearRect(0, 0, width, height);
          }
          RIBBON_HEIGHT = this.config.size;
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
          ];
          while (this.path[1].x < width + RIBBON_HEIGHT) {
              this.drawLine(this.path[0], this.path[1]);
          }
      };
      // drawLine
      Ribbons.prototype.drawLine = function (start, end) {
          var ctx = this.ctx;
          if (ctx) {
              ctx.beginPath();
              ctx.moveTo(start.x, start.y);
              ctx.lineTo(end.x, end.y);
          }
          // draw next point
          var nextX = end.x + (Math.random() * 2 - 0.25) * RIBBON_HEIGHT;
          var nextY = this._calculateY(end.y);
          if (ctx) {
              ctx.lineTo(nextX, nextY);
              ctx.closePath();
          }
          r -= PI_2 / -50;
          // Randomly generate and set the canvas path hex color
          if (ctx) {
              ctx.fillStyle = '#' + (((Math.cos(r) * 127 + 128) << 16) | ((Math.cos(r + PI_2 / 3) * 127 + 128) << 8) | (Math.cos(r + (PI_2 / 3) * 2) * 127 + 128)).toString(16);
              ctx.fill();
          }
          this.path[0] = this.path[1]; // Update current endpoint to next starting point
          this.path[1] = {
              x: nextX,
              y: nextY
          };
      };
      // Calculate the value of the next point y
      Ribbons.prototype._calculateY = function (y) {
          var temp = y + (Math.random() * 2 - 1.1) * RIBBON_HEIGHT;
          var MaximumTemp = RIBBON_HEIGHT * 0.7;
          return temp > height || temp < 0 ? MaximumTemp : temp;
      };
      Ribbons.prototype.extractConfig = function (option) {
          if (isObject(option)) {
              return Object.assign(cloneDeep(defaultConfig), option);
          }
          return defaultConfig;
      };
      return Ribbons;
  }());

  return Ribbons;

}));

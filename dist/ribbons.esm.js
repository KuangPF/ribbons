var defaultConfig = {
    size: 90,
    alpha: 0.6,
    zIndex: -1 // z-index
};
var dpr = window.devicePixelRatio || 1; // 获取设备像素比
var width = window.innerWidth; // 获取窗口的文档显示区的宽度
var height = window.innerHeight; // 获取窗口的文档显示区的高度
var PI_2 = Math.PI * 2;
var RIBBON_HEIGHT = defaultConfig.size;
var r = 0;
var isObject = function (value) {
    var type = typeof value;
    return value !== null && (type === 'object' || type === 'function');
};
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
        this.ctx = this.canvasRibbon.getContext('2d'); // 获取canvas 2d上下文
        this.canvasRibbon.width = width * dpr;
        this.canvasRibbon.height = height * dpr;
        this.ctx.scale(dpr, dpr); // 水平和竖直方向缩放
        this.ctx.globalAlpha = this.config.alpha; // 图形透明度
        this.ctx.clearRect(0, 0, width, height); // 清除之前绘制内容
        RIBBON_HEIGHT = this.config.size;
        // 初始化 path
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
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        // 绘制下一个点
        var nextX = end.x + (Math.random() * 2 - 0.25) * RIBBON_HEIGHT;
        var nextY = this._calculateY(end.y);
        ctx.lineTo(nextX, nextY);
        ctx.closePath();
        r -= PI_2 / -50;
        // 随机生成并设置 canvas 路径16进制颜色
        ctx.fillStyle = '#' + (((Math.cos(r) * 127 + 128) << 16) | ((Math.cos(r + PI_2 / 3) * 127 + 128) << 8) | (Math.cos(r + (PI_2 / 3) * 2) * 127 + 128)).toString(16);
        ctx.fill(); // 根据当前样式填充路径
        this.path[0] = this.path[1]; // 更新当前终点为下一起点
        this.path[1] = {
            x: nextX,
            y: nextY
        };
    };
    /**
     * 计算下一个点 y 的值
     * @param {number} y
     * @returns
     */
    Ribbons.prototype._calculateY = function (y) {
        var temp = y + (Math.random() * 2 - 1.1) * RIBBON_HEIGHT;
        var MaximumTemp = RIBBON_HEIGHT * 0.7;
        return temp > height || temp < 0 ? MaximumTemp : temp;
    };
    Ribbons.prototype.extractConfig = function (option) {
        if (isObject(option)) {
            return Object.assign(defaultConfig, option);
        }
        return defaultConfig;
    };
    return Ribbons;
}());

export default Ribbons;

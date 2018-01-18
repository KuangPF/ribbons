(function (win) {
    let CanvasRibbons = function (option) {
        let defaultOoption = { // eslint-disable-line
            size: 150, // 彩带的宽度
            alpha: 0.6, // 透明度
            zIndex: -1 // z-index
        };
        document.addEventListener('touchmove', function (e) {
            e.preventDefault();
        });
        let canvasRibbon = document.getElementsByTagName('canvas')[0]; // 获取 canvas 背景
        canvasRibbon.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events: none';
        let ctx = canvasRibbon.getContext('2d'); // 获取canvas 2d上下文
        let dpr = window.devicePixelRatio || 1; // 获取设备像素比
        let width = window.innerWidth; // 获取窗口的文档显示区的宽度
        let height = window.innerHeight; // 获取窗口的文档显示区的高度
        const RIBBON_HEIGHT = 90;
        let path; // 绘制点的路径
        let math = Math;
        let r = 0;
        let cos = Math.cos;
        let PI_2 = Math.PI * 2;

        // canvas
        canvasRibbon.width = width * dpr;
        canvasRibbon.height = height * dpr;
        ctx.scale(dpr, dpr); // 水平和竖直方向缩放
        ctx.globalAlpha = 0.6; // 图形透明度

        /**
         * 背景初始化
         */
        function init() {
            ctx.clearRect(0, 0, width, height); // 清除之前绘制内容
            // 初始化 path
            path = [{
                x: 0,
                y: height * 0.7 + RIBBON_HEIGHT
            }, {
                x: 0,
                y: height * 0.7 - RIBBON_HEIGHT
            }];
            while (path[1].x < width + RIBBON_HEIGHT) {
                drawLine(path[0], path[1]);
            }
        };

        /**
         * 绘制折线并填充
         * @param {any} start
         * @param {any} end
         */
        function drawLine(start, end) {
            // console.log(start, end);
            ctx.beginPath();
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(end.x, end.y);
            // 绘制下一个点
            let nextX = end.x + ((math.random()) * 2 - 0.25) * RIBBON_HEIGHT;
            let nextY = _calculateY(end.y);
            ctx.lineTo(nextX, nextY);
            ctx.closePath();
            r -= PI_2 / -50;
            // 随机生成并设置 canvas 路径16进制颜色
            ctx.fillStyle = '#' + (cos(r) * 127 + 128 << 16 | cos(r + PI_2 / 3) * 127 + 128 << 8 | cos(r + PI_2 / 3 * 2) *
                127 + 128).toString(16);
            ctx.fill(); // 根据当前样式填充路径

            path[0] = path[1]; // 更新当前终点为下一起点
            path[1] = {
                x: nextX,
                y: nextY
            };
        };

        /**
         * 计算下一个点 y 的值
         * @param {any} y
         * @returns
         */
        function _calculateY(y) {
            let temp = y + ((math.random()) * 2 - 1.1) * RIBBON_HEIGHT;
            return (temp > height || temp < 0) ? _calculateY(temp) : temp;
        }

        document.onclick = init;
        document.touchstart = init;
        init();
    };
    win.CanvasRibbons = CanvasRibbons;
})(window);
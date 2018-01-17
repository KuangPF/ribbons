(function (win) {
    let CanvasRibbons = function (option) {
        console.log(option);
        let defaultOoption = { // eslint-disable-line
            size: 150, // 彩带的宽度
            alpha: 0.6, // 透明度
            zIndex: -1 // z-index
        };
        console.log('this is canvasRibbons');
        document.addEventListener('touchmove', function (e) {
            e.preventDefault();
        });
    };
    win.CanvasRibbons = CanvasRibbons;
})(window);
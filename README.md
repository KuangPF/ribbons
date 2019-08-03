# ribbons

## 使用
在`html`页面中引入`ribbons.js`，`git clone`即可获得，在 `static/`目录下。

    <script type="text/javascript" src="path/ribbons.js"></script>
    
然后进行初始化
```javascript 
new CanvasRibbons();
```
tip:这段代码放在`</body>`之上，因为`ribbons.js`依赖`<body></body>标签`

## 配置
可自定义一些参数，具体配置如下:
```javascript 
new CanvasRibbons( {
    size: 90 // 背景彩带的高度，默认为90
    alpha：0.6 // 彩带的透明度,默认为0.6
    zIndex：-1 // z-inde,默认为-1
});
```

## 效果
[demo](https://kuangpf.github.io/ribbons/dist/index.html)

# Ribbons

🌈 为背景加上一条飘逸、灵动的彩带 [demo](https://kuangpf.com/ribbons/example/index.html)

![](https://img.shields.io/npm/v/better-ribbons.svg?style=flat)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)

简体中文 | [English](./README.md)

### 📦 安装

**CDN**

```html
<script src="https://cdn.jsdelivr.net/npm/better-ribbons@latest/dist/ribbons.js"></script>
```

如果你使用原生 ES Modules，这里也有一个兼容 ES Module 的构建文件：

```html
<script type="module">
  import Ribbons from 'https://cdn.jsdelivr.net/npm/better-ribbons@latest/dist/ribbons.esm.js'
</script>
```

**npm**

```bash
npm i better-ribbons -S
```

### 🔨 使用

初始化一个 `Ribbons` 实例

```javascript
import Ribbons from 'better-ribbons'

const ribbonsInstacne = new Ribbons()
/* 自定义参数 */
const ribbonsOption = new Ribbons(
  {
    size: 100,
    alpha: 0.7
    zIndex: 0.5
  }
)
```

### 🍺 参数选项

- **size**

  - 说明：每块彩带的大小
  - 默认：90
  - 类型：`number`
  - 是否必填：否

- **alpha**

  - 说明：彩带的透明度
  - 默认：0.6
  - 类型：`number`
  - 是否必填：否

- **zIndex**
  - 说明：彩带的 `z-index` 属性
  - 默认：-1
  - 类型：number
  - 是否必填：否

### ☕️ 效果

![img](https://user-images.githubusercontent.com/20694238/62418615-ed5f1e80-b69f-11e9-898c-46e0cdcbf4c1.gif)

### LICENSE

MIT © [KuangPF](https://kuangpf.com/)

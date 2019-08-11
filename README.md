# Ribbons

🌈 Add a flowing, smart ribbon to the background. [demo](https://kuangpf.com/ribbons/example/index.html)

![](https://img.shields.io/npm/v/better-ribbons.svg?style=flat)
[![Build Status](https://travis-ci.org/KuangPF/ribbons.svg?branch=master)](https://travis-ci.org/KuangPF/ribbons)
[![codecov](https://codecov.io/gh/KuangPF/ribbons/branch/master/graph/badge.svg)](https://codecov.io/gh/KuangPF/ribbons)
[![](https://data.jsdelivr.com/v1/package/npm/better-ribbons/badge)](https://www.jsdelivr.com/package/npm/better-ribbons)
[![](https://img.shields.io/npm/dm/better-ribbons.svg?style=flat)](https://www.npmjs.com/package/better-ribbons)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)

English | [简体中文](./README-zh_CN.md)

### 📦 Install

**CDN**

```html
<script src="https://cdn.jsdelivr.net/npm/better-ribbons@latest/dist/ribbons.js"></script>
```

If you are using native ES Modules, there is also an ES Modules compatible build:

```html
<script type="module">
  import Ribbons from 'https://cdn.jsdelivr.net/npm/better-ribbons@latest/dist/ribbons.esm.js'
</script>
```

**npm**

```bash
npm i better-ribbons -S
```

### 🔨 Usage

Initialize a `Ribbons` instance

```javascript
import Ribbons from 'better-ribbons'

const ribbonsInstacne = new Ribbons()
/* custom option */
const ribbonsOption = new Ribbons(
  {
    size: 100,
    alpha: 0.7
    zIndex: 0.5
  }
)
```

### 🍺 Options

- **size**

  - Description: The size of each ribbon
  - Default: 90
  - Type: `number`

- **alpha**

  - Description: ribbon transparency
  - Default: 0.6
  - Type: `number`

- **zIndex**
  - Description: ribbon 'z-index` attribute
  - Default: -1
  - Type: number

### ☕️ Screenshot

![img](https://user-images.githubusercontent.com/20694238/62418877-b5a7a500-b6a6-11e9-9e35-6823849be800.gif)

### LICENSE

MIT © [KuangPF](https://kuangpf.com/)

/*!
 * Ribbons.js v1.0.6
 * (c) 2019 KuangPF
 * Released under the MIT License.
 */
var t=function(t){var i=typeof t;return null!==t&&("object"===i||"function"===i)},i=function(n){if(!t(n))return n;var e=n instanceof Array?[]:new Object;return Object.keys(n).forEach(function(o){e[o]=t(n[o])?i(n[o]):n[o]}),e},n={size:90,alpha:.6,zIndex:-1},e=window.devicePixelRatio||1,o=window.innerWidth,a=window.innerHeight,h=2*Math.PI,s=n.size,c=0,r=function(){function r(t){this.config=this.extractConfig(t),this.canvasRibbon=document.createElement("canvas"),this.init()}return r.prototype.init=function(){document.addEventListener("touchmove",function(t){t.preventDefault()}),this.initCanvas(),document.onclick=this.init.bind(this),document.ontouchstart=this.init.bind(this)},r.prototype.initCanvas=function(){for(this.canvasRibbon.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events: none;z-index:"+n.zIndex,document.getElementsByTagName("body")[0].appendChild(this.canvasRibbon),this.ctx=this.canvasRibbon.getContext("2d"),this.canvasRibbon.width=o*e,this.canvasRibbon.height=a*e,this.ctx&&(this.ctx.scale(e,e),this.ctx.globalAlpha=this.config.alpha,this.ctx.clearRect(0,0,o,a)),s=this.config.size,this.path=[{x:0,y:.7*a+s},{x:0,y:.7*a-s}];this.path[1].x<o+s;)this.drawLine(this.path[0],this.path[1])},r.prototype.drawLine=function(t,i){var n=this.ctx;n&&(n.beginPath(),n.moveTo(t.x,t.y),n.lineTo(i.x,i.y));var e=i.x+(2*Math.random()-.25)*s,o=this._calculateY(i.y);n&&(n.lineTo(e,o),n.closePath()),c-=h/-50,n&&(n.fillStyle="#"+(127*Math.cos(c)+128<<16|127*Math.cos(c+h/3)+128<<8|127*Math.cos(c+h/3*2)+128).toString(16),n.fill()),this.path[0]=this.path[1],this.path[1]={x:e,y:o}},r.prototype._calculateY=function(t){var i=t+(2*Math.random()-1.1)*s;return i>a||i<0?.7*s:i},r.prototype.extractConfig=function(e){return t(e)?Object.assign(i(n),e):n},r}();export default r;
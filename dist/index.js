var t=90,i=.6,n=-1,e=window.devicePixelRatio||1,o=window.innerWidth,a=window.innerHeight,h=t,s=2*Math.PI,c=0,r=function(){function t(t){this.config=this.extractConfig(t),this.canvasRibbon=document.createElement("canvas"),this.init()}return t.prototype.init=function(){document.addEventListener("touchmove",function(t){t.preventDefault()}),this.initCanvas(),document.onclick=this.init.bind(this),document.ontouchstart=this.init.bind(this)},t.prototype.initCanvas=function(){for(this.canvasRibbon.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events: none;z-index:"+n,document.getElementsByTagName("body")[0].appendChild(this.canvasRibbon),this.ctx=this.canvasRibbon.getContext("2d"),this.canvasRibbon.width=o*e,this.canvasRibbon.height=a*e,this.ctx.scale(e,e),this.ctx.globalAlpha=i,this.ctx.clearRect(0,0,o,a),this.path=[{x:0,y:.7*a+h},{x:0,y:.7*a-h}];this.path[1].x<o+h;)this.drawLine(this.path[0],this.path[1])},t.prototype.drawLine=function(t,i){var n=this.ctx;n.beginPath(),n.moveTo(t.x,t.y),n.lineTo(i.x,i.y);var e=i.x+(2*Math.random()-.25)*h,o=this._calculateY(i.y);n.lineTo(e,o),n.closePath(),c-=s/-50,n.fillStyle="#"+(127*Math.cos(c)+128<<16|127*Math.cos(c+s/3)+128<<8|127*Math.cos(c+s/3*2)+128).toString(16),n.fill(),this.path[0]=this.path[1],this.path[1]={x:e,y:o}},t.prototype._calculateY=function(t){var i=t+(2*Math.random()-1.1)*h;return i>a||i<0?.7*h:i},t.prototype.extractConfig=function(t){return n=typeof(i=t),null===i||"object"!==n&&"function"!==n?t:Object.assign(this.config,t);var i,n},t}();export default r;

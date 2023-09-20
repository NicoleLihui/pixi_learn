<script setup lang="ts">
import * as PIXI from 'pixi.js';
import { $ } from '../utils/utils';
import { onMounted } from 'vue';
onMounted(() => {
  const el: HTMLElement = $('#canvasView') as HTMLElement;
  console.log(el.offsetWidth, el.offsetHeight, el.clientWidth, el.clientHeight);
  
  // 创建一个应用
  const app = new PIXI.Application({
    width: el.offsetWidth, // 使用窗口的宽高创建画布
    height: el.offsetHeight,
    backgroundColor: 'pink',
    resolution: window.devicePixelRatio || 1, // 屏幕和设备的像素比例, 主要是移动端, 默认是1
    antialias: true // 抗锯齿
  })

  // 将应用的画布添加到dom中
  el.appendChild(app.view as unknown as HTMLElement)

  // 1. 创建一个矩形
  const rectangle = new PIXI.Graphics();
  // 设置边框样式
  rectangle.lineStyle(4, 0xff0000, 0.5); // 线宽 颜色 透明度(需要在grawRect之前就绘制好边框)
  rectangle.beginFill(0x66ccff, 0.8); // 给矩形添加什么颜色&透明度
  rectangle.drawRect(100, 100, 64, 64); // 画矩形的坐标位置(0,0), 宽高 64*64
  rectangle.endFill(); // 绘制完毕
  // 对图形对象进行缩放
  rectangle.scale.set(2); // 放大2倍
  // 对图形对象设置位移: x轴向右移动100px, 向上150px
  rectangle.position.set(100, -150);
  // 对图形对象进行旋转
  rectangle.rotation = 0.5 // TODO: 这个旋转单位是什么, 0.5对应什么角度
  // 对图形对象设置锚点(原点)
  rectangle.pivot.set(32, 32);
  // 将矩形添加到画布的"舞台"上
  app.stage.addChild(rectangle);

  // 2. 创建一个圆形
  const circle = new PIXI.Graphics();
  circle.beginFill(0x60ccfe, 1);
  circle.drawCircle(0, 0, 64); // 绘制圆形的圆心和半径
  circle.endFill();
  circle.position.set(200, 300);
  // 添加到舞台上才能渲染出来
  app.stage.addChild(circle);

  // 绘制一个圆角矩形
  const roundedRectandle = new PIXI.Graphics();
  roundedRectandle.beginFill(0x56ff00, 1);
  roundedRectandle.drawRoundedRect(600, 100, 64, 64, 10); // 增加一个圆角半径的参数
  roundedRectandle.endFill();
  app.stage.addChild(roundedRectandle)

  // 绘制一个椭圆
  const ellipse = new PIXI.Graphics();
  ellipse.beginFill(0xfef000, 0.9);
  ellipse.drawEllipse(700, 100, 64, 32); // x y w h
  ellipse.endFill();
  app.stage.addChild(ellipse);

  // 绘制一个多边形
  const polygon = new PIXI.Graphics();
  polygon.beginFill(0xfecc11, 0.8);
  polygon.drawPolygon(50, 50, 50, 50, 50, 150, 180, 50); // 多边形的坐标 x, y为position的值, 后面每两个为一个坐标点, 此处为一个三角形
  polygon.endFill();
  app.stage.addChild(polygon);

  // 绘制圆弧
  const arc = new PIXI.Graphics();
  arc.beginFill(0x445500, 0.9);
  arc.arc(0, 0, 32, 0, Math.PI, true); // 坐标 x, y, 半径, 起始角度, 结束角度, 是否逆时针
  arc.endFill();
  arc.position.set(900, 50);
  app.stage.addChild(arc);

  // 绘制线段
  const line = new PIXI.Graphics();
  line.lineStyle(4, 0x000034, 1); // 线段的宽, 颜色, 透明度
  line.moveTo(400, 100); // 线段的起始点
  line.lineTo(800, 200); // 线段的结束点
  line.lineTo(900, 200); // 线段的结束点(转折)
  line.position.set(500, 50);
  app.stage.addChild(line);
})
</script>

<template>
  <div class="canvas-container">
    <div id="canvasView"></div>
  </div>
</template>

<style scoped lang="scss">
.canvas-container {
  height: 100vh;
  width: 100vw;
}
#canvasView {
  width: 100vw;
  height: 100vh;
}
</style>

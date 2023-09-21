<script setup lang="ts">
import * as PIXI from 'pixi.js';
import { $ } from '../utils/utils';
import { onMounted } from 'vue';
import bunnyBg from '../assets/images/bg.jpg';
onMounted(() => {
  const el: HTMLElement = $('#canvasView') as HTMLElement;
  console.log(el.offsetWidth, el.offsetHeight, el.clientWidth, el.clientHeight);
  
  // 创建一个应用
  const app = new PIXI.Application({
    width: el.offsetWidth, // 使用窗口的宽高创建画布
    height: el.offsetHeight,
    backgroundColor: 'lightblue',
    resolution: window.devicePixelRatio || 1, // 屏幕和设备的像素比例, 主要是移动端, 默认是1
    antialias: true // 抗锯齿
  })

  // 将应用的画布添加到dom中
  el.appendChild(app.view as unknown as HTMLElement)
  const text = new PIXI.Text('Hello World', {
    fontFamily: 'Arial',
    fontSize: 60,
    fill: 0xff66ef,
    align: 'center'
  })
  text.position.x = app.screen.width / 2;
  text.position.y = app.screen.height / 2;

  text.anchor.set(0.5);
  app.stage.addChild(text);
  // 创建一个圆形
  const circle = new PIXI.Graphics();
  circle.beginFill(0x60ccfe, 1);
  circle.drawCircle(0, 0, 64); // 绘制圆形的圆心和半径
  circle.endFill();
  circle.position.set(200, 300);
  // 添加到舞台上才能渲染出来
  app.stage.addChild(circle);

  // 使用遮罩
  // 创建一个精灵
  const bunny = PIXI.Sprite.from(bunnyBg);
  // 让精灵充满整个屏幕
  bunny.width = app.screen.width;
  bunny.height = app.screen.height;
  // 使用文字作为精灵的遮罩层
  // bunny.mask = text;
  bunny.mask = circle;
  app.stage.addChild(bunny);
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

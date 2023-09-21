<script lang="ts" setup>
import * as PIXI from 'pixi.js';
import { $ } from '../utils/utils';
import { onMounted } from 'vue';
import p1 from '@/assets/images/二次提升泵房.png';
import p2 from '@/assets/images/二沉池.png';
import p3 from '@/assets/images/二沉池组.png';
import p4 from '@/assets/images/加氯加药间.png';
import p5 from '@/assets/images/回流污泥泵房.png';
import p6 from '@/assets/images/接触消毒池.png';

onMounted(() => {
  const el: HTMLElement = $('#canvasView') as HTMLElement;
  // 创建一个应用
  const app = new PIXI.Application({
    width: el.offsetWidth, // 使用窗口的宽高创建画布
    height: el.offsetHeight,
    backgroundColor: 0xf6f6cc,
    resolution: window.devicePixelRatio || 1, // 屏幕和设备的像素比例, 主要是移动端, 默认是1
    antialias: true // 抗锯齿
  });
  el.appendChild(app.view as unknown as HTMLElement);

  const texture = PIXI.Texture.from(p1);
  const sprite2 = new PIXI.Sprite(texture);
  sprite2.scale.set(0.3);
  sprite2.position.set(100, 200);
  app.stage.addChild(sprite2);

  // 创建模糊滤镜
  const blurfilter = new PIXI.BlurFilter();
  // 滤镜的模糊程度
  blurfilter.blur = 20;
  // 添加滤镜给精灵(通过数组可能添加多个滤镜)
  sprite2.filters = [blurfilter];
  // 监听鼠标事件 鼠标进入精灵模糊程度变低
  sprite2.eventMode = 'static';
  sprite2.on('mouseenter', () => {
    // 设置模糊的程度
    blurfilter.blur = 0;
  })
  sprite2.on('mouseleave', () => {
    // 设置模糊的程度
    blurfilter.blur = 20;
  })
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
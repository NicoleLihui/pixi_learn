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

  // 资源管理
  // 添加资源: 之后加载资源的时候就可以通过这个名字来获取资源
  PIXI.Assets.add('p1', p1);
  PIXI.Assets.add('p2', p2);
  PIXI.Assets.add('p3', p3);
  PIXI.Assets.add('p4', p4);
  PIXI.Assets.add('p5', p5);
  PIXI.Assets.add('p6', p6);
  // 创建一个容器(容器里面可以添加多个精灵, 作为一个集合, 精灵下面也可以添加子集, 这样就形成一个树状的结构)
  const container = new PIXI.Container();
  // 异步加载资源
  const texturePromise = PIXI.Assets.load(['p1', 'p2', 'p3', 'p4', 'p5', 'p6']);
  // 异步加载完成后创建对应的精灵
  texturePromise.then((textures: any) => {
    
    console.log('textures', textures)
    Object.keys(textures).forEach((key, index) => {
      // 创建精灵
      const sprite = new PIXI.Sprite(textures[key])
      sprite.cursor = 'pointer';
      // 创建一个纹理
      // const texture = PIXI.Texture.from(p1);
      sprite.position.x = index * 200 + 100;
      sprite.position.y = app.screen.height / 2 - 100;
      sprite.anchor.set(0.5, 0.5);
      // 把精灵旋转45度
      sprite.rotation = Math.PI / 4;
      // 设置精灵的缩放
      sprite.scale.set(0.1);
      // 把精灵添加到当前的画布
      container.addChild(sprite);
      sprite.eventMode = 'static'; // 属性让交互事件有效
      // pixi.js EventSystem: https://pixijs.download/release/docs/PIXI.EventSystem.html
      sprite.on('click', (e: any) => {
        console.log(e);
      })
    })
  })
  const texture = PIXI.Texture.from(p1);
  const sprite2 = new PIXI.Sprite(texture);
  sprite2.scale.set(0.3);
  container.addChild(sprite2);

  app.stage.addChild(container)
  // ticker实现动画
  app.ticker.add((delta) => {
    console.log(delta); // 每一帧相差间隔的比例
    sprite2.rotation += 0.01 * delta
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
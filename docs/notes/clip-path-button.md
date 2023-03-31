---
prev: /notes/carlendar.md
next: /notes/myButton.md
---
# 流动边框动画按钮 

## 示例

<div class='flex'>
  <div class='mt-10 mb-30 mr-30 clip-path-btn'>clip-path</div>
  <div class='mt-10 mb-30 mr-30 clip-path-btn second'>clip-path2</div>
  <div class='mt-10 mb-30 mr-30 clip-path-btn third'>clip-path3</div>
  <div class='mt-10 mb-30 mr-30 clip-path-btn fourth'>clip-path4</div>
</div>

:::details css
```css
.clip-path-btn {
  position: relative;
  width: 220px;
  height: 64px;
  line-height: 64px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  background: #55557f;
  cursor: pointer;
  border-radius: 10px;
  /* 添加过渡效果 */
  transition: all 0.5s;
}
.clip-path-btn::after,
.clip-path-btn::before {
  content: "";
  position: absolute;
  border: 2px solid #55557f;
  width: 240px;
  height: 84px;
  border-radius: 10px;
  /* 简写为 */
  inset: -10px; 
  /* 添加动画 */
  animation: pathRotate 3s infinite linear;
}
@keyframes pathRotate {
  0%,
  100% {
    clip-path: inset(0 0 98% 0);
  }
  25% {
    clip-path: inset(0 98% 0 0);
  }
  50% {
    clip-path: inset(98% 0 0 0);
  }
  75% {
    clip-path: inset(0 0 0 98%);
  }
}
.clip-path-btn::after {
  animation-delay: -1.5s;
}
.clip-path-btn:hover {
  filter: brightness(1.5);
}
```
:::

<style scoped>
.flex {
  display: flex;
  padding: 20px; 
  flex-wrap: wrap; 
}
.mb-30 {
  margin-bottom: 30px;
}
.mt-10 {
  margin-top: 10px;
}
.mr-30 {
  margin-right: 30px;
}
.clip-path-btn {
  position: relative;
  width: 220px;
  height: 64px;
  line-height: 64px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  background: #55557f;
  cursor: pointer;
  border-radius: 10px;
  /* 添加过渡效果 */
  transition: all 0.5s;
}
.clip-path-btn::after,
.clip-path-btn::before {
  content: "";
  position: absolute;
  border: 2px solid #55557f;
  width: 240px;
  height: 84px;
  border-radius: 10px;
  /* 简写为 */
  inset: -10px; 
  /* 添加动画 */
  animation: pathRotate 3s infinite linear;
}
@keyframes pathRotate {
  0%,
  100% {
    clip-path: inset(0 0 98% 0);
  }
  25% {
    clip-path: inset(0 98% 0 0);
  }
  50% {
    clip-path: inset(98% 0 0 0);
  }
  75% {
    clip-path: inset(0 0 0 98%);
  }
}
.clip-path-btn::after {
  animation-delay: -1.5s;
}
.clip-path-btn:hover {
  filter: brightness(1.5);
}
.second::after, 
.third::before {
  border-color: orange;
}
.fourth::before,
.fourth::after {
  border-color: orange;
}
</style>


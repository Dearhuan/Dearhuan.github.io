<template>
  <div class="container">
    <div id="timeline">
      <div class="timeline-item" v-for="(item,i) in timeLineList" :key="i">
        <div class="timeline-icon" :style="{ backgroundColor: item.color ? item.color : ''}">
          <img v-if="item.icon" :src="item.icon">
        </div>
        <div :class="['timeline-content', i % 2 !== 0 ? 'right' : '']" v-if="Array.isArray(item.content) == true">
          <h2>{{ item.title }}</h2>
          <p v-for="(text, i) in item.content" :key="i">{{ text }}</p>
        </div>
        <div :class="['timeline-content', i % 2 !== 0 ? 'right' : '']" v-else-if="typeof item.content == 'string'">
          <h2>{{ item.title }}</h2>
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

interface TimeLineItem {
  title: string // 标题
  icon?: string // 图标
  color?: string // 颜色
  content: string | Array<string> // 内容
}

const props = defineProps({
  timeLineList: {
    type: Array as PropType<TimeLineItem[]>,
    required: true
  }
})


</script>

<style lang="scss" scoped>
// Variables
$red: #ee4d4d;
$blue: #2b2e48;
$primary-color: $red;
$secondary-color: $blue;

// Timeline
$timeline-color: $secondary-color;


// Mixins and Placeholders
%clearfix {

  &:after,
  &:before {
    content: '';
    display: block;
    width: 100%;
    clear: both;
  }
}

@mixin prefix($prop, $val) {

  @each $prefix in '-webkit-',
  '-moz-',
  '-ms-',
  '' {
    #{$prefix}#{$prop}: $val;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}


// Timeline
#timeline {
  width: 100%;
  margin: 30px auto;
  position: relative;
  padding: 0 10px;
  @include prefix(transition, all .4s ease);

  &:before {
    content: "";
    width: 3px;
    height: 100%;
    background: $timeline-color;
    left: 50%;
    top: 0;
    position: absolute;
  }

  &:after {
    content: "";
    clear: both;
    display: table;
    width: 100%;
  }

  .timeline-item {
    margin-bottom: 50px;
    position: relative;
    @extend %clearfix;

    .timeline-icon {
      background: $timeline-color;
      width: 40px;
      height: 40px;
      position: absolute;
      top: 0;
      left: 50%;
      overflow: hidden;
      margin-left: -19px;
      @include prefix(border-radius, 50%);

      svg {
        position: relative;
        top: 14px;
        left: 14px;
      }
    }

    .timeline-content {
      width: 45%;
      background: #fff;
      padding: 20px;
      @include prefix(box-shadow, 0 3px 0 rgba(0, 0, 0, 0.1));
      @include prefix(border-radius, 5px);
      @include prefix(transition, all .3s ease);

      h2 {
        border: none;
        padding: 15px;
        background: $timeline-color;
        color: #fff;
        margin: -20px -20px 0 -20px;
        font-weight: 300;
        @include prefix(border-radius, 3px 3px 0 0);
      }

      &:before {
        content: '';
        position: absolute;
        left: 45%;
        top: 13px;
        width: 0;
        height: 0;
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-left: 7px solid $timeline-color;
      }

      &.right {
        float: right;

        &:before {
          content: '';
          right: 45%;
          left: inherit;
          border-left: 0;
          border-right: 7px solid $timeline-color;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #timeline {
    margin: 30px;
    padding: 0px;
    width: 90%;

    &:before {
      left: 0;
    }

    .timeline-item {
      .timeline-content {
        width: 90%;
        float: right;

        &:before,
        &.right:before {
          left: 10%;
          margin-left: -6px;
          border-left: 0;
          border-right: 7px solid $timeline-color;
        }
      }

      .timeline-icon {
        left: 0;
      }
    }
  }
}
</style>
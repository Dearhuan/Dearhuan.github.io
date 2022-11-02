<template>
  <div v-if="animated" :class="[ns.b(), ns.is('animated', true)]" :style="containerStyle">
    <div :class="[ns.e('item'), ns.e(type)]" :style="itemStyle">
      <svg v-if="type === 'image'" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor"
          d="M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32  32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248  0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32  32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z">
        </path>
      </svg>
    </div>
  </div>
  <div v-else :class="[ns.e('item'), ns.e(type)]" :style="itemStyle">
      <svg v-if="type === 'image'" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor"
          d="M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32  32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248  0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32  32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z">
        </path>
      </svg>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { useNamespace } from '../hooks'

type SkeletonType = 'text' | 'image' | 'h1' | 'h3' | 'button' | 'circle'

const props = defineProps({
  type: {
    type: String as PropType<SkeletonType>
  },
  itemStyle: {
    type: String
  },
  animated: {
    type: Boolean
  },
  containerStyle: {
    type: String
  }
})

const ns = useNamespace('skeleton')

</script>

<style lang="scss">
@import '../styles/el-skeleton.scss'
</style>
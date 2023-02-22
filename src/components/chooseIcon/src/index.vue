<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <!-- 图标 -->
  <div class="choose-icon-dialog-body-height">
    <el-dialog 
    :title="title" 
    :modelValue="visible"
    :before-close="handleClose"
    >
      <div class="container">
        <div 
          v-for="(item, index) in Object.keys(Icons)" 
          :key="index"
          class="item"
          @click="clickItem(item)"
        >
          <div class="text">
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div class="icon">{{ item }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang='ts'>
import * as Icons from '@element-plus/icons-vue'
import { toLine } from '../../../utils'
import { useCopy } from '../../../hooks/useCopy'

const props = defineProps<{
  title: string,
  // 弹出框显示
  visible: boolean,
}>()
const emits = defineEmits(['update:visible'])

const handleClick = () => {
  // 修改父组件数据
  emits('update:visible', !props.visible)
}
const handleClose = () => {
  emits('update:visible', !props.visible)
}
let clickItem = (item: string) => {
  let text = `<el-icon-${toLine(item)} />`
  // 复制文本
  useCopy(text)
  // 关闭弹框
  emits('update:visible', !props.visible)
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.item {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
  height: 70px;
}
.text {
  font-size: 14px;
}
.icon {
  flex: 1;
}
svg {
  width: 2em;
  height: 2em;
}
</style>
<template>
  <div class="common-layout">
    <el-container>
      <!-- 导航 -->
      <el-aside width="auto">
        <nav-aside :collapse="isCollapse"></nav-aside>
      </el-aside>
      <!-- 内容 -->
      <el-container>
        <el-header>
          <!-- 使用v-model 让子组件改值 -->
          <nav-header v-model:collapse="isCollapse"></nav-header>
        </el-header>
        <!-- 路由内容 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import NavHeader from './navHeader/index.vue'
import NavAside from './navAside/index.vue'

const isCollapse = ref(false)
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}
</style>

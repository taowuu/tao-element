<template>
  <choose-area @change="changeArea"></choose-area>
</template>

<script setup lang='ts'>
// import ChooseArea from '../../components/ChooseArea/src/index.vue'

const changeArea = (val: any) => {
  console.log(val)
}
</script>

<style lang="scss" scoped>

</style>
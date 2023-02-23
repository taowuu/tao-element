<template>
  <div>
    <el-divider>正常趋势</el-divider>
    <div class="flex">
      <div>
        <trend text="营业额"></trend>
      </div>
      <div>
        <trend text="销售额" type="down"></trend>
      </div>
    </div>
    <br />
    <el-divider>颜色翻转</el-divider>
    <div class="flex">
    <div><trend text="销售额" reverseColor></trend></div>
    <div><trend text="营业额" type="down" reverseColor></trend></div>
    </div>
    <br />
    <el-divider>自定义图标颜色</el-divider>
    <div class="flex">
      <div>
        <trend text="营业额" upIconColor="blue"></trend>
      </div>
      <div>
        <trend text="销售额" type="down" downIconColor="#123456"></trend>
      </div>
    </div>

    <br />
    <el-divider>自定义文字颜色</el-divider>
    <div class="flex">
    <div><trend text="营业额" upTextColor="blue"></trend></div>
    <div><trend text="销售额" type="down" downTextColor="yellow"></trend></div>
    </div>
    <br />
    <el-divider>自定义图标</el-divider>
    <div class="flex">
    <div><trend upIcon="CaretTop">营业额</trend></div>
    <div><trend type="down" downIcon="CaretBottom">销售额</trend></div>
  </div>
   </div>
</template>

<script lang='ts' setup>
</script>

<style lang='scss' scoped>
.flex {
  display: flex;
  div {
    margin-right: 10px;
  }
}
</style>
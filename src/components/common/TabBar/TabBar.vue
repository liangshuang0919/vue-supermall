<template>
  <div id='tab_bar' class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
}
</script>

<style scoped>
.tab-bar{
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 49px;
  background-color: #f1efef;
}
</style>

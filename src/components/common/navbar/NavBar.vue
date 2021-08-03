<template>
  <div id="nav_bar" class="nav-bar">
    <a-row>
      <a-col :span="4">
        <div class="nav-bar-left">
          <slot name="left"></slot>
        </div>
      </a-col>
      <a-col :span="16">
        <div class="nav-bar-center">
          <slot name="center"></slot>
        </div>
      </a-col>
      <a-col :span="4">
        <div class="nav-bar-right">
          <slot name="right"></slot>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
.nav-bar {
  height: 44px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .2);
  line-height: 44px;
  text-align: center;
}

.nav-bar-left,
.nav-bar-right,
.nav-bar-center {
  height: 44px;
}

</style>

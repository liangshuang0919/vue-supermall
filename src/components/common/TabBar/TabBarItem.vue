<template>
  <div id='tab_bar_item' @click="itemsClick()">
    <div v-if="isActive">
      <slot name="tab-icon"></slot>
    </div>
    <div v-else>
      <slot name="tab-icon-active"></slot>
    </div>
    <div :style="isTextActive">
      <slot name="tab-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    textActive: {
      type: String,
      default: "red"
    }
  },
  computed: {
    isActive () {
      return !this.$route.path.includes(this.path);
    },
    isTextActive () {
      return this.isActive ? {} : { color: this.textActive }
    }
  },
  methods: {
    itemsClick () {
      this.$router.push(this.path)
        .catch(err => {
          console.log(err);
        })
    }
  }
}
</script>

<style scoped>
</style>

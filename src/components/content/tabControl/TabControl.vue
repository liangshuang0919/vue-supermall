<template>
  <div id="tab_control" class="tab-control">
    <div v-for="(item, index) in tabControlData" :key="item" class="tab-control-item" @click="tabControlClick(index)">
      <span :class="{ isActive: item.path === path }">{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    tabControlData: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  data () {
    return {
      currentIndex: 0,
      path: "/home/popular"
    }
  },
  computed: {
    isActiveShow () {
      return this.path === this.$route.path;
    }
  },
  methods: {
    tabControlClick (index) {
      this.$router.push(this.tabControlData[index].path)
        .catch(err => {
          console.log(err);
        });
      this.path = this.tabControlData[index].path;
    }
  },
}
</script>

<style scoped>
.tab-control {
  display: flex;
  justify-content: space-around;
  margin-top: .5rem;
  text-align: center;
  font-size: 16px;
  line-height: 40px;
}

.tab-control-item {
  flex: 1;
  height: 40px;
}

.tab-control-item span {
  display: inline-block;
  width: 4rem;
  height: 40px;
}

.isActive {
  border-bottom: 3px solid var(--color-high-text);
  color: var(--color-high-text);
}
</style>

<template>
  <div>
    <component :is="component"></component>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'DynamicViews',
  data: () => {
    return {
      currentComponent: '',
    }
  },
  methods: {
    loadComponent(params) {
      const { folder, id } = params
      Vue.component(id, () => import(`./${folder}/${id}.vue`))
      this.currentComponent = id
    },
  },
  computed: {
    component() {
      return this.currentComponent
    },
  },
  watch: {
    '$route.params'(params) {
      this.loadComponent(params)
    },
  },
  mounted() {
    if (this.$route.params) {
      this.loadComponent(this.$route.params)
    }
  },
}
</script>

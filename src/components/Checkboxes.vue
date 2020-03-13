<template>
  <div class="Checkbox-Mock-Component">
    <div :key="checkbox.id + checkbox.value" v-for="checkbox in checkboxList">
      <label>
        <!-- enable is needed, else the selection change is fired and an input event emitted -->
        <input type="checkbox" :value="checkbox.value" v-model="checkboxSelection" @click="enable" />
        {{ checkbox.value }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkboxes',
  props: { items: Array, selected: Array },
  data: () => {
    return {
      trigger: false,
      checkboxSelection: []
    }
  },
  computed: {
    checkboxList() {
      if (this.items) {
        return this.items
      } else {
        return []
      }
    }
  },
  watch: {
    selected(){
      this.checkboxSelection  = this.selected
    },
    checkboxSelection(val) {
      if (this.trigger) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    enable() {
      if (!this.trigger) this.trigger = true
    }
  },
  beforeMount() {
    this.checkboxSelection = this.selected
  }
}
</script>
<style lang="scss" scoped>
.Checkbox-Mock-Component {
  text-align: left;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  width: 5rem;
  padding: 2rem;

  input {
    margin-top: -1px;
  }
}
</style>
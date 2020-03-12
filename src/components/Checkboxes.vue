<template>
  <div class="Checkbox-Mock-Component">
    <div :key="checkbox.id + checkbox.value" v-for="checkbox in items">
      <label>
        <input type="checkbox" :value="checkbox.value" v-model="checkboxSelection" />
        {{ checkbox.value }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "checkboxes",
  props: {items: [], selected: [] },
  data: () => {
    return {
      trigger: false,
      checkboxSelection: []
    };
  },
  watch: {
    checkboxSelection(val) {
      if (this.trigger) {
        this.$emit("input", val);
      }
    }
  },
  created() {
    this.checkboxSelection = this.selected;
    this.trigger = true;
  }
};
</script>
<style scoped>
.Checkbox-Mock-Component {
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  width: 5rem;
  padding: 2rem;
}
</style>
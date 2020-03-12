<template>
  <div class="filterspage">
    <h1>Mock filters</h1>
    <div class="container">
      <div class="flex">
        <checkboxes :items="checkboxes" :selected="selected" @input="changeSelection" />
      </div>
      <cards :items="showCaredsBasedOnSelection" />
    </div>
  </div>
</template>

<script>
import checkboxes from '@/components/Checkboxes'
import cards from '@/components/Cards'
export default {
  components: { checkboxes, cards },
  data: () => {
    return {
      checkboxes: [
        { id: 1, value: 'A' },
        { id: 2, value: 'B' },
        { id: 3, value: 'C' },
        { id: 4, value: 'D' },
        { id: 5, value: 'E' }
      ],
      selected: ['A', 'B', 'C', 'D', 'E']
    }
  },
  computed: {
    showCaredsBasedOnSelection() {
      return this.checkboxes.filter(checkbox =>
        this.selected.includes(checkbox.value)
      )
    }
  },
  methods: {
    changeSelection(val) {
      this.selected = val
    }
  }
}
</script>

<style lang="scss">
.flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
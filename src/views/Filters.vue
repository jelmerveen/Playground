<template>
  <div class="filterspage">
    <h1>Mock filters</h1>
    <div class="container">
      <div class="flex">
        <checkboxes
          :items="checkboxesList"
          :selected="selectedCheckboxOptions"
          @input="changeSelection"
        />
      </div>
      <cards :items="showCardsBasedOnSelection" />
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
      checkboxesList: [
        { id: 1, value: 'A' },
        { id: 2, value: 'B' },
        { id: 3, value: 'C' },
        { id: 4, value: 'D' },
        { id: 5, value: 'E' }
      ],
      selectedCheckboxes: ['A', 'B', 'C', 'D', 'E']
    }
  },
  computed: {
    showCardsBasedOnSelection() {
      return this.checkboxesList.filter(checkbox =>
        this.selectedCheckboxOptions.includes(checkbox.value)
      )
    },
    selectedCheckboxOptions() {
      return this.selectedCheckboxes
    }
  },
  watch: {
    '$route.query': function(query) {
      if (query.selectedCheckboxes) {
        this.selectedCheckboxes = query.selectedCheckboxes.split(',')
      }
    }
  },
  methods: {
    changeSelection(val) {
      this.selectedCheckboxes = val
      this.$router
        .push({
          name: 'Filters',
          query: { selectedCheckboxes: encodeURI(val) }
        }).catch(() => {})
        // .catch(err => {
        //   if (err._name !== 'NavigationDuplicated') console.log(err)
        // })
    }
  },
  beforeMount() {
    if (this.$route.query) {
      if (this.$route.query.selectedCheckboxes) {
        this.selectedCheckboxes = this.$route.query.selectedCheckboxes.split(',')
      }
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
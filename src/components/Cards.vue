<template>
  <div class="Cards-Mock-Component">
    <div class="card-container" >
      <div class="card" :key="card.id + card.value" v-for="card in cardsToShow">
        <h1>{{card.value}}</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "cards",
  props: ["items"],
  computed: {
    cardsToShow() {
      return this.items;
    }
  }
};
</script>
<style lang="scss" scoped>
.card-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.card{
    width:5rem;
    height:5rem;
    margin:2rem;
    text-align: center;
    box-shadow:  1px 1px 2px rgba(0,0,0,0.6);
}
</style>

<template>
  <div>
    <div class="subtitle">ホテル検索</div>
    <div><input type="text" v-model.number="price" />円以下</div>
    <div><button type="button">検索</button></div>
    <div v-for="hotel of hotels" v-bind:key="hotel.id">{{ hotel }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Hotel } from "@/types/hotel";
@Component
export default class SearchHotel extends Vue {
  private hotels = new Hotel(0, "", "", "", "", 0, false);
}
</script>

<style scoped></style>

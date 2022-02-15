<template>
  <div>
    <div class="subtitle">ホテル検索</div>
    <div><input type="text" v-model.number="price" />円以下</div>
    <div><button type="button">検索</button></div>
    <div>{{ hotels }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SearchHotel extends Vue {}
</script>

<style scoped></style>

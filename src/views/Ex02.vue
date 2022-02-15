<template>
  <div>
    <div class="subtitle">ホテル検索</div>
    <div><input type="text" v-model="price" />円以下</div>
    <div><button type="button" @click="showHotel">検索</button></div>
    <div class="searchInfo" v-for="hotel of showHotel" v-bind:key="hotel.id">
      <table>
        <tr>
          {{
            hotel.name
          }}
          {{
            hotel.station
          }}
          {{
            hotel.price
          }}
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Hotel } from "@/types/hotel";
@Component
export default class SearchHotel extends Vue {
  private price = 0;

  get showHotel(): Array<Hotel> {
    const displayHotel = this.$store.getters.getHotelsByPrice(this.price);
    console.log(displayHotel);
    return displayHotel;
  }
}
</script>

<style scoped>
.searchInfo {
}
</style>

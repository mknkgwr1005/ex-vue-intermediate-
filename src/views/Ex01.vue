<template>
  <div>
    <div v-for="baseballTeam of baseballTeams" v-bind:key="baseballTeam.id">
      <div>{{ baseballTeam.teamName }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { BaseballTeam } from "@/types/baseballTeam";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  get baseballTeams(): Array<BaseballTeam> {
    return this.$store.getters.getBaseballTeam;
  }
}
</script>

<style scoped></style>

<template>
  <div>
    <div v-for="baseballTeam of baseballTeams" v-bind:key="baseballTeam.id">
      <div>
        <router-link :to="/baseballTeamDetail/ + baseballTeam.id">
          {{ baseballTeam.teamName }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { BaseballTeam } from "@/types/baseballTeam";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class baseballTeamParent extends Vue {
  get baseballTeams(): Array<BaseballTeam> {
    return this.$store.getters.getBaseballTeam;
  }
}
</script>

<style scoped></style>

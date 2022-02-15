<template>
  <div>
    <div id="subtitle">野球チーム一覧</div>
    <br />
    <br />

    <div v-for="baseballTeam of baseballTeams" v-bind:key="baseballTeam.id">
      <div>
        <router-link :to="/baseballTeamDetail/ + baseballTeam.id">
          {{ baseballTeam.teamName }}
          <br />
          <br />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { BaseballTeam } from "@/types/baseballTeam";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Ex01 extends Vue {
  /**
   * 野球チーム一覧を表示する.
   * @returns   ‐野球チーム一覧
   */
  get baseballTeams(): Array<BaseballTeam> {
    return this.$store.getters.getBaseballTeam;
  }
}
</script>

<style scoped>
#subtitle {
  font-weight: bold;
}
</style>

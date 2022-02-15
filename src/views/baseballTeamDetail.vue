<template>
  <div>
    <div>
      <div id="subtitle">球団名</div>
      {{ currentbaseballTeam.teamName }}
    </div>
    <div>
      <div id="subtitle">本拠地</div>
      {{ currentbaseballTeam.headquarters }}
    </div>
    <div>
      <div id="subtitle">発足日</div>
      <!-- format前 -->
      <!-- {{ currentbaseballTeam.inauguration }} -->
      <!-- format後 -->
      {{ currentbaseballTeam.formatDate }}
    </div>
    <div>
      <div id="subtitle">歴史</div>
      <pre>
      {{ currentbaseballTeam.history }}
      </pre>
    </div>
    <div>
      <button type="button">
        <router-link :to="homeUrl">戻る</router-link>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { BaseballTeam } from "@/types/baseballTeam";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class BaseballTeamDetail extends Vue {
  private homeUrl = "/Ex01/";
  private currentbaseballTeam = new BaseballTeam(0, "", "", new Date(), "");
  created(): void {
    const baseballTeamid = Number(this.$route.params.id);
    this.currentbaseballTeam =
      this.$store.getters.getBaseballTeamById(baseballTeamid);
    //   日付のformatをするgetterの呼び出し
    this.currentbaseballTeam.formatDate;
  }
}
</script>

<style scoped>
#subtitle {
  font-weight: bold;
}
</style>

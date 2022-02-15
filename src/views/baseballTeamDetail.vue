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
  // 野球チーム一覧ページ
  private homeUrl = "/Ex01/";
  //   現在の野球チーム
  private currentbaseballTeam = new BaseballTeam(0, "", "", new Date(), "");
  /**
   * ページ遷移と同時に、リクエストパラメータから送られてきたIDから野球チームを検索して
   * 表示する.
   */
  created(): void {
    const baseballTeamid = Number(this.$route.params.id);
    this.currentbaseballTeam =
      this.$store.getters.getBaseballTeamById(baseballTeamid);
  }
}
</script>

<style scoped>
#subtitle {
  font-weight: bold;
}
</style>

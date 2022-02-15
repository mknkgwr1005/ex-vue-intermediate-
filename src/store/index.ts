import Vue from "vue";
import Vuex from "vuex";
import { BaseballTeam } from "@/types/baseballTeam";
import { format } from "date-fns";
import { Hotel } from "@/types/hotel";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // 野球チーム一覧
    baseballTeams: [
      new BaseballTeam(
        10,
        "読売ジャイアンツ",
        "東京ドーム（東京都・文京区）",
        new Date(1934, 12 - 1, 26),
        `大日本東京野球倶楽部（1934年）
    ↓
    東京巨人軍（1935年〜1946年）
    ↓
    読売ジャイアンツ（1947年〜）`
      ),
      new BaseballTeam(
        20,
        "阪神タイガース",
        "阪神甲子園球場（兵庫県・西宮市）",
        new Date(1935, 12 - 1, 10),
        `大阪タイガース（1935年〜1940年途）
    ↓
    阪神軍（1940年途〜1946年）
    ↓
    大阪タイガース（1947年〜1960年）→阪神タイガー（1961年〜）`
      ),
      new BaseballTeam(
        30,
        "中日ドラゴンズ",
        "ナゴヤドーム（愛知県・名古屋市東区）",
        new Date(1936, 1 - 1, 15),
        `名古屋軍（1936年〜1943年）
    ↓
    産業軍（1944年）
    ↓
    中部日本軍（1946年）
    ↓
    中日ドラゴンズ（1947年〜1950年）
    ↓
    名古屋ドラゴンズ（1951年〜1953年）
    ↓
    中日ドラゴンズ（1954年〜）`
      ),
      new BaseballTeam(
        40,
        "横浜DeNAベイスターズ",
        "横浜スタジアム（神奈川県・横浜市中区）",
        new Date(1949, 11 - 1, 22),
        `大洋ホエールズ（1950年〜1952年）
    ↓
    大洋松竹ロビンス（1953年〜1954年）
    ↓
    大洋ホエールズ（1955年〜1977年）
    ↓
    横浜大洋ホエールズ（1978年〜1992年）
    ↓
    横浜ベイスターズ（1993年〜2011年）
    ↓
    横浜DeNAベイスターズ（2012年〜）`
      ),
      new BaseballTeam(
        50,
        "広島東洋カープ",
        "MAZDA Zoom-Zoomスタジアム広島（広島県・広島市南区）",
        new Date(1949, 12 - 1, 15),
        `広島カープ（1950年〜1967年）
    ↓
    広島東洋カープ（1968年〜）`
      ),
      new BaseballTeam(
        60,
        "東京ヤクルトスワローズ",
        "明治神宮野球場（東京都・新宿区）",
        new Date(1950, 1 - 1, 12),
        `国鉄スワローズ（1950年〜1965年途）
    ↓
    サンケイスワローズ（1965年途〜終了）
    ↓
    サンケイアトムズ（1966年〜1968年）
    ↓
    アトムズ（1969年）
    ↓
    ヤクルトアトムズ（1970年〜1973年）
    ↓
    ヤクルトスワローズ（1974年〜2005年）
    ↓
    東京ヤクルトスワローズ（2006年〜）`
      ),
    ],
    hotels: [
      new Hotel(
        10,
        "首都圏",
        "横浜ベイホテル東急",
        "神奈川県横浜市西区みなとみらい２－３－７",
        "桜木町駅",
        10000,
        true
      ),
      new Hotel(
        20,
        "首都圏",
        "パレスホテル東京",
        "東京都千代田区丸の内１丁目１−１",
        "東京駅",
        20000,
        false
      ),
      new Hotel(
        30,
        "首都圏",
        "ホテルローズガーデン新宿",
        "東京都新宿区西新宿８−１−３",
        "西新宿駅",
        5000,
        true
      ),
      new Hotel(
        40,
        "首都圏",
        "渋谷エクセルホテル東急",
        "東京都渋谷区道玄坂１−１２−２",
        "渋谷駅",
        10000,
        false
      ),
      new Hotel(
        50,
        "首都圏",
        "東京ベイ舞浜ホテル",
        "千葉県浦安市舞浜１−３４",
        "舞浜駅",
        15000,
        true
      ),
    ],
    // clothes: [
    //   new Clothe(10, "洋服", "ジャケット", 0, "赤", 10000, "S"),
    //   new Clothe(20, "洋服", "パンツ", 0, "白", 20000, "M"),
    //   new Clothe(30, "洋服", "Ｔシャツ", 1, "青", 5000, "M"),
    //   new Clothe(40, "洋服", "帽子", 1, "白", 10000, "S"),
    //   new Clothe(50, "洋服", "ジャケット", 0, "黄", 15000, "L"),
    // ],
  }, // end state
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    /**
     * 野球チーム一覧を表示する.
     * @param state - state
     * @returns - 野球チーム一覧
     */
    getBaseballTeam(state): Array<BaseballTeam> {
      return state.baseballTeams;
    },
    /**
     * IDから野球チームを検索する.
     * @param state -state
     * @returns -引数として渡されたIDで野球チームを検索する\
     */
    getBaseballTeamById(state) {
      return (id: number) => {
        const newBaseballTeams = state.baseballTeams.filter(
          (baseballTeams) => baseballTeams.id === id
        );
        return newBaseballTeams[0];
      };
    },
    /**
     * 野球チームの発足日をyyyy年㎜月dd日へフォーマットする.
     * @param state -state
     * @returns -date関数のformatした値
     */
    getBaseballTeambyDate(state) {
      const newBaseballTeamsDate = state.baseballTeams[0].inauguration;
      return format(newBaseballTeamsDate, "yyyy年mm月dd日");

    },
    // ホテル一覧を値段で表示する
    getHotelsByPrice(state){
      return (price:number){
        
      }
      const newHotel=state.hotels[0]
    },
  },
});

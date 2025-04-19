import { createRouter, createWebHistory } from "vue-router";
import Home from "../page/Home.vue";
import About from "../page/About.vue";

/** 遊戲公告 **/
import Announcement from "../page/announcement/index.vue";
import Disclaimer from "../page/announcement/Disclaimer.vue";
import Terms from "../page/announcement/Terms.vue";
// 公告內容
import Post1 from "../page/announcement/announcementDetail/Post1.vue";
import Post2 from "../page/announcement/announcementDetail/Post2.vue";
import Post3 from "../page/announcement/announcementDetail/Post3.vue";
import Post4 from "../page/announcement/announcementDetail/Post4.vue";
import Post5 from "../page/announcement/announcementDetail/Post5.vue";
import Post6 from "../page/announcement/announcementDetail/Post6.vue";
import Post7 from "../page/announcement/announcementDetail/Post7.vue";
import Post8 from "../page/announcement/announcementDetail/Post8.vue";
import Post9 from "../page/announcement/announcementDetail/Post9.vue";
import Post10 from "../page/announcement/announcementDetail/Post10.vue";
import Post11 from "../page/announcement/announcementDetail/Post11.vue";
import Post12 from "../page/announcement/announcementDetail/Post12.vue";
import Post13 from "../page/announcement/announcementDetail/Post13.vue";
import Post14 from "../page/announcement/announcementDetail/Post14.vue";
import Post15 from "../page/announcement/announcementDetail/Post15.vue";
import Post16 from "../page/announcement/announcementDetail/Post16.vue";
import Post17 from "../page/announcement/announcementDetail/Post17.vue";
import Post18 from "../page/announcement/announcementDetail/Post18.vue";
import Post19 from "../page/announcement/announcementDetail/Post19.vue";

/** 遊戲設定 **/
import GameSetting from "../page/gameSetting/index.vue";
import ServerSet from "../page/gameSetting/ServerSet.vue"; // 伺服器設定
import ProfessionSkill from "../page/gameSetting/ProfessionSkill.vue"; // 職業技能
import MaxHpMp from "../page/gameSetting/MaxHpMp.vue"; // 最大血魔
import Pets from "../page/gameSetting/Pets.vue"; // 抓寵

/** 遊戲特色 **/
import GameFeature from "../page/gameFeature/index.vue";
import AttributeEnchantment from "../page/gameFeature/AttributeEnchantment.vue";
import BlessingAttribute from "../page/gameFeature/BlessingAttribute.vue";
import WeaponArmorBonus from "../page/gameFeature/WeaponArmorBonus.vue";
import BossSet from "../page/gameFeature/BossSet.vue"; // boss 套裝
import BossMake from "../page/gameFeature/BossMake.vue"; // boss 套裝製作
import MapTask from "../page/gameFeature/MapTask.vue"; // 地圖任務
import RoyalClanPack from "../page/gameFeature/RoyalClanPack.vue"; // 王族創盟禮包
import Transform from "../page/gameFeature/Transform.vue"; // 變身介紹
import OnlineCoins from "../page/gameFeature/OnlineCoins.vue"; // 線上幣介紹
import DayTask from "../page/gameFeature/DayTask.vue"; // 每日任務
import AutoPlay from "../page/gameFeature/AutoPlay.vue"; // 限時介紹
import KillSystem from "../page/gameFeature/KillSystem.vue"; //眾生平等殺人系統
import SellNpc from "../page/gameFeature/SellNpc.vue"; // 寄賣npc
import SpecialMap from "../page/gameFeature/SpecialMap.vue"; // 特殊地圖
import SkillMake from "../page/gameFeature/SkillMake.vue"; // 技能製作
import CutePet from "../page/gameFeature/CutePet.vue"; // 特殊動物
import SpecialBox from "../page/gameFeature/SpecialBox.vue"; // 特級寶箱

/** 武器介紹 **/
import Weapon from "../page/weapon/index.vue";
import NormalWeapon from "../page/weapon/NormalWeapon.vue"; // 一般武器
import AncientWeapon from "../page/weapon/AncientWeapon.vue"; // 古代武器
import DarkWeapon from "../page/weapon/DarkWeapon.vue"; // 暗黑武器
import DragonShatter from "../page/weapon/DragonShatter.vue"; // 碎龍武器
import Pandora from "../page/weapon/Pandora.vue"; // 潘朵拉武器
import Dibis from "../page/weapon/Dibis.vue"; // 潘朵拉武器

/** 防具介紹 **/
import Armor from "../page/armor/index.vue";
import LuntisEarrings from "../page/armor/LuntisEarrings.vue"; // 倫提斯耳環
import PallasNecklace from "../page/armor/PallasNecklace.vue"; // 帕拉斯項鍊
import SimpleRing from "../page/armor/SimpleRing.vue"; // 一般戒指
import SnapeRing from "../page/armor/SnapeRing.vue"; // 史奈普戒指
import AncientEquipment from "../page/armor/AncientEquipment.vue"; // 古老裝備
import Tshirt from "../page/armor/Tshirt.vue"; // 古老裝備
import PandoraArmor from "../page/armor/Pandora.vue";
import Shoulder from "../page/armor/Shoulder.vue";
import Cloak from "../page/armor/Cloak.vue";
import Belt from "../page/armor/Belt.vue";
import Helmet from "../page/armor/Helmet.vue";
import Gloves from "../page/armor/Gloves.vue";
import Greaves from "../page/armor/Greaves.vue";

/** 道具介紹 **/
import Object from "../page/object/index.vue";
import Doll from "../page/object/Doll.vue";
import ExperienceDoll from "../page/object/ExperienceDoll.vue"; // 經驗娃娃
import PriestDoll from "../page/object/PriestDoll.vue"; // 祭司娃娃
import TwilightEmblem from "../page/object/TwilightEmblem.vue"; // 暮光勳章
import BossStone from "../page/object/BossStone.vue"; // boss 符石
import MakePanacea from "../page/object/MakePanacea.vue"; // 存白萬能藥
import BossRadar from "../page/object/BossRadar.vue"; // BOSS 雷達
import OnlineEmblem from "../page/object/OnlineEmblem.vue"; // 在線勳章
import TShirtBox from "../page/object/TShirtBox.vue"; // 獵影之痕寶箱
import DibisObject from "../page/object/DibisObject.vue"; // 底比斯勳章

/** 檔案下載 **/
import Dowload from "../page/dowload/index.vue";

/** 贊助相關 **/
import Sponsor from "../page/sponsor/index.vue";
import SponsorDeclar from "../page/sponsor/SponsorDeclar.vue";
import FirstDeposit from "../page/sponsor/FirstDeposit.vue";
import Accumulated from "../page/sponsor/Accumulated.vue";
import MonthlyPlan from "../page/sponsor/MonthlyPlan.vue";
import ChildrenDay from "../page/sponsor/ChildrenDay.vue";
import Daysave from "../page/sponsor/Daysave.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },

  /* 遊戲公告 */
  { path: "/announcement", component: Announcement },
  { path: "/announcement/post1", component: Post1 }, // 加賴
  { path: "/announcement/post2", component: Post2 }, // 開服公告
  // { path: "/announcement/post3", component: Post3 }, // 開服公告
  { path: "/announcement/post4", component: Post4 }, // 開服公告
  { path: "/announcement/post5", component: Post5 }, // 開服公告
  { path: "/announcement/post6", component: Post6 }, // 開服公告
  { path: "/announcement/post7", component: Post7 }, // 開服公告
  { path: "/announcement/post8", component: Post8 }, // 開服公告
  // { path: "/announcement/post9", component: Post9 }, // 開服公告
  { path: "/announcement/post10", component: Post10 }, // 開服公告
  { path: "/announcement/post11", component: Post11 }, // 開服公告
  { path: "/announcement/post12", component: Post12 }, // 開服公告
  { path: "/announcement/post13", component: Post13 }, // 開服公告
  { path: "/announcement/post14", component: Post14 }, // 開服公告
  { path: "/announcement/post15", component: Post15 }, // 開服公告
  { path: "/announcement/post16", component: Post16 }, // 開服公告
  { path: "/announcement/post17", component: Post17 }, // 開服公告
  { path: "/announcement/post18", component: Post18 }, // 開服公告
  { path: "/announcement/post19", component: Post19 }, // 開服公告

  /* 免責聲明 */
  { path: "/disclaimer", component: Disclaimer },

  /* 遊戲規章 */
  { path: "/terms", component: Terms },
  /* 贊助聲明 */
  {
    path: "/sponsor",
    component: Sponsor,
    children: [
      { path: "sponsorDeclar", component: SponsorDeclar }, // 贊助聲明
      { path: "firstDeposit", component: FirstDeposit }, // 首儲
      { path: "accumulated", component: Accumulated }, // 累積儲值
      { path: "monthlyPlan", component: MonthlyPlan }, // 包月
      { path: "childrenDay", component: ChildrenDay }, // 兒童節
      { path: "daysave", component: Daysave }, // 兒童節
    ],
  },

  /* 遊戲設定 */
  {
    path: "/gameSetting",
    component: GameSetting,
    children: [
      { path: "serverSet", component: ServerSet },
      { path: "professionSkill", component: ProfessionSkill },
      { path: "pets", component: Pets },
      { path: "maxHpMp", component: MaxHpMp },
    ],
  },

  /* 遊戲特色 */
  {
    path: "/gameFeature",
    component: GameFeature,
    children: [
      { path: "attributeEnchantment", component: AttributeEnchantment },
      { path: "blessingAttribute", component: BlessingAttribute },
      { path: "weaponArmorBonus", component: WeaponArmorBonus },
      { path: "bossSet", component: BossSet },
      { path: "bossMake", component: BossMake },
      { path: "mapTask", component: MapTask },
      { path: "royalClanPack", component: RoyalClanPack },
      { path: "transform", component: Transform },
      { path: "onlineCoins", component: OnlineCoins },
      { path: "dayTask", component: DayTask },
      { path: "autoPlay", component: AutoPlay },
      { path: "killSystem", component: KillSystem },
      { path: "sellNpc", component: SellNpc },
      { path: "specialMap", component: SpecialMap },
      { path: "skillMake", component: SkillMake },
      { path: "cutePet", component: CutePet },
      { path: "specialBox", component: SpecialBox },
    ],
  },

  /* 武器介紹 */
  {
    path: "/weapon",
    component: Weapon,
    children: [
      { path: "normalWeapon", component: NormalWeapon },
      { path: "ancientWeapon", component: AncientWeapon },
      { path: "darkWeapon", component: DarkWeapon },
      { path: "dragonShatter", component: DragonShatter },
      { path: "pandora", component: Pandora },
      { path: "dibis", component: Dibis },
    ],
  },

  /* 防具介紹 */
  {
    path: "/armor",
    component: Armor,
    children: [
      { path: "luntisEarrings", component: LuntisEarrings },
      { path: "pallasNecklace", component: PallasNecklace },
      { path: "tshirt", component: Tshirt },
      { path: "snapeRing", component: SnapeRing },
      { path: "ancientEquipment", component: AncientEquipment },
      { path: "pandoraArmor", component: PandoraArmor },
      { path: "shoulder", component: Shoulder },
      { path: "cloak", component: Cloak },
      { path: "belt", component: Belt },
      { path: "helmet", component: Helmet },
      { path: "gloves", component: Gloves },
      { path: "greaves", component: Greaves },
    ],
  },

  /* 道具介紹 */
  {
    path: "/object",
    component: Object,
    children: [
      { path: "doll", component: Doll },
      { path: "experienceDoll", component: ExperienceDoll },
      { path: "priestDoll", component: PriestDoll },
      { path: "twilightEmblem", component: TwilightEmblem },
      { path: "bossStone", component: BossStone },
      { path: "makePanacea", component: MakePanacea },
      { path: "bossRadar", component: BossRadar },
      { path: "onlineEmblem", component: OnlineEmblem },
      { path: "dibisObject", component: DibisObject },
    ],
  },

  { path: "/dowload", component: Dowload },
  { path: "/sponsor", component: Sponsor },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

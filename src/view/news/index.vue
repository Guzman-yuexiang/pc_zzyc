<template>
  <div class="bodybg">
    <div class="inContent w1200 auto pdlr20">
<div class="fl tpxw">
        <div
          class="focusBox"
          @mouseenter="newsStopAutoplay"
          @mouseleave="newsStartAutoplay"
        >
          <ul
            class="pic imgZoom"
            style="position: relative; width: 702px; height: 418px"
          >
            <li
              v-for="(slide, index) in newsCarouselSlides"
              :key="slide.title"
              :style="getNewsSlideStyle(index)"
            >
              <a><img :src="slide.image" :alt="slide.title" /></a>
            </li>
          </ul>
          <div class="txt-bg"></div>
          <div class="txt">
            <ul>
              <li
                v-for="(slide, index) in newsCarouselSlides"
                :key="`${slide.title}-text`"
                :style="getNewsTextStyle(index)"
              >
                <a :title="slide.title">{{ slide.title }}</a>
              </li>
            </ul>
          </div>
          <ul class="num">
            <li
              v-for="(slide, index) in newsCarouselSlides"
              :key="`${slide.title}-indicator`"
              :class="{ on: newsActiveSlide === index }"
              @mouseenter="newsGoToSlide(index)"
            >
              <a></a><span></span>
            </li>
          </ul>
        </div>
      </div>
      <div class="hyzx_ycxw fr">
        <div class="slideTxtBox">
          <div class="hd">
            <span>烟草新闻</span>
            <ul>
              <li
                v-for="(tab, index) in tobaccoTabs"
                :key="tab.label"
                :class="{ on: activeTobaccoTab === index }"
                @mouseenter="activeTobaccoTab = index"
              >
                <a>{{ tab.label }}</a>
              </li>
            </ul>
          </div>
          <div class="bd">
            <ul>
              <li v-for="item in currentTobaccoItems" :key="item">
                <a :title="item">{{ item }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="cl"></div>
      <div class="mt25 w696 hyzxFpgz hyzx_ycxw hyzx_lhrhbk fl mt33">
        <div class="slideTxtBox">
          <div class="hd">
            <span>乡村振兴</span>
            <ul>
              <li
                v-for="(tab, index) in ruralTabs"
                :key="tab.label"
                :class="{ on: activeRuralTab === index }"
                @mouseenter="activeRuralTab = index"
              >
                <a>{{ tab.label }}</a>
              </li>
            </ul>
            <a class="fr more">更多</a>
          </div>
          <div class="bd">
            <ul>
              <li v-for="item in currentRuralItems" :key="item">
                <a :title="item">{{ item }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt25 w462 hyzxZmgl fr">
        <div class="slideTxtBox">
          <div class="hd">
            <a><span>专卖管理</span></a>
            <a class="fr more">更多</a>
          </div>
          <div class="bd">
            <ul>
              <li>
                <a
                  title="湖南省开展打击利用“红白喜事”售假贩私案件技战法交流暨部署专项行动"
                  >湖南省开展打击利用“红白喜事”售假贩私案件技战法交流暨部署专项行动</a
                >
              </li>

              <li>
                <a
                  title="北京丰台区局“固本、强基、正风”赋能专卖管理队伍提质增效"
                  >北京丰台区局“固本、强基、正风”赋能专卖管理队伍提质增效</a
                >
              </li>

              <li>
                <a title="十二省（区、市）烟草打假打私协作会议在四川眉山召开"
                  >十二省（区、市）烟草打假打私协作会议在四川眉山召开</a
                >
              </li>

              <li>
                <a
                  title="安徽省局正式启用合肥南站铁路公安、烟草专卖联合执法办公室"
                  >安徽省局正式启用合肥南站铁路公安、烟草专卖联合执法办公室</a
                >
              </li>

              <li>
                <a title="浙江温州瑞安市局“三维发力”纵深推进打假打私工作"
                  >浙江温州瑞安市局“三维发力”纵深推进打假打私工作</a
                >
              </li>

              <li>
                <a title="山东烟台蓬莱区局“三化管理”推动旅游市场监管走深走实"
                  >山东烟台蓬莱区局“三化管理”推动旅游市场监管走深走实</a
                >
              </li>

              <li>
                <a title="陕西榆林市局“三个发力”全面推进卷烟打假打私工作"
                  >陕西榆林市局“三个发力”全面推进卷烟打假打私工作</a
                >
              </li>

              <li>
                <a title="甘肃省局举办2025年专卖监管领域大练兵活动"
                  >甘肃省局举办2025年专卖监管领域大练兵活动</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="cl"></div>
      <div class="w696 hyzx_ycxw hyzxFpgz hyzx_lhrhbk fl">
        <div class="slideTxtBox">
          <div class="hd">
            <span>数字化转型</span>
            <!-- <ul>
                    <li><a href="/gjyc/hylhrh/lhrhzt_list.shtml"  target="_parent">烟草行业数字化转型</a></li>
                    <li><a href="/gjyc/gjlhrh/lhrhzt_list.shtml"  target="_parent">国家数字化转型</a></li>
                    
                    
                </ul> -->
            <a class="fr more">更多</a>
          </div>
          <div class="bd">
            <ul>
              <li>
                <a title="河南中烟漯河卷烟厂升级数字场景应用打造智慧工厂"
                  >河南中烟漯河卷烟厂升级数字场景应用打造智慧工厂</a
                >
              </li>

              <li>
                <a
                  title="山东日照市局（公司）“数字化”引擎助推烟叶生产驶入“快车道”"
                  >山东日照市局（公司）“数字化”引擎助推烟叶生产驶入“快车道”</a
                >
              </li>

              <li>
                <a title="山东济南市局（公司）三项举措为卷烟物流注入“智慧动能”"
                  >山东济南市局（公司）三项举措为卷烟物流注入“智慧动能”</a
                >
              </li>

              <li>
                <a title="四川中烟开展省级数字中台体系研发管控系统应用培训"
                  >四川中烟开展省级数字中台体系研发管控系统应用培训</a
                >
              </li>

              <li>
                <a
                  title="湖南省局（公司）在省第二届职工数字化应用技术技能大赛中喜获佳绩"
                  >湖南省局（公司）在省第二届职工数字化应用技术技能大赛中喜获佳绩</a
                >
              </li>

              <li>
                <a title="广西中烟柳州卷烟厂构建“智能+网格”虫害防治新模式"
                  >广西中烟柳州卷烟厂构建“智能+网格”虫害防治新模式</a
                >
              </li>

              <li>
                <a
                  title="湖南中烟长沙卷烟厂在第五届工程仿真创新设计大赛中获得佳绩"
                  >湖南中烟长沙卷烟厂在第五届工程仿真创新设计大赛中获得佳绩</a
                >
              </li>

              <li>
                <a title="广西中烟开展智能化技能培训 推动AI场景应用落地"
                  >广西中烟开展智能化技能培训 推动AI场景应用落地</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w462 hyzxZmgl fr">
        <div class="slideTxtBox">
          <div class="hd">
            <a><span>公益事业</span></a>

            <a class="fr more">更多</a>
          </div>
          <div class="bd">
            <ul>
              <li>
                <a title="四川自贡市局（公司）以“清凉补给站”建便民服务圈"
                  >四川自贡市局（公司）以“清凉补给站”建便民服务圈</a
                >
              </li>

              <li>
                <a
                  title="四川遂宁安居区局（分公司）以“三化”志愿服务助力社会公益"
                  >四川遂宁安居区局（分公司）以“三化”志愿服务助力社会公益</a
                >
              </li>

              <li>
                <a title="湖南衡阳市局（公司）连续三年上榜“衡阳慈善榜”"
                  >湖南衡阳市局（公司）连续三年上榜“衡阳慈善榜”</a
                >
              </li>

              <li>
                <a
                  title="四川中烟西昌卷烟厂帮扶凉山州呷拖村发展特色资源产业取得新进展"
                  >四川中烟西昌卷烟厂帮扶凉山州呷拖村发展特色资源产业取得新进展</a
                >
              </li>

              <li>
                <a
                  title="四川自贡市局（公司）开展错时夜检 切实维护“两考”市场秩序"
                  >四川自贡市局（公司）开展错时夜检 切实维护“两考”市场秩序</a
                >
              </li>

              <li>
                <a title="福建仙游县局（分公司）以爱为墨 谱写助残扶弱温情篇章"
                  >福建仙游县局（分公司）以爱为墨 谱写助残扶弱温情篇章</a
                >
              </li>

              <li>
                <a
                  title="安徽蚌埠市局（公司）携手特殊儿童开展“与爱同行”主题公益义卖活动"
                  >安徽蚌埠市局（公司）携手特殊儿童开展“与爱同行”主题公益义卖活动</a
                >
              </li>

              <li>
                <a
                  title="宁夏吴忠市局（公司）“三心工程”开展学雷锋纪念日志愿服务活动"
                  >宁夏吴忠市局（公司）“三心工程”开展学雷锋纪念日志愿服务活动</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="cl"></div>
      <div class="w696 hyzx_ycxw hyzxFpgz hyzx_lhrhbk fl">
        <div class="slideTxtBox">
          <div class="hd">
            <span>人事与培训</span>
            <ul>
              <li
                v-for="(tab, index) in hrTabs"
                :key="tab.label"
                :class="{ on: activeHrTab === index }"
                @mouseenter="activeHrTab = index"
              >
                <a>{{ tab.label }}</a>
              </li>
            </ul>
            <a class="fr more">更多</a>
          </div>
          <div class="bd">
            <ul>
              <li v-for="item in currentHrItems" :key="item">
                <a :title="item">{{ item }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w462 hyzxZmgl hyzxTabblock2 fr">
        <div class="slideTxtBox hasMoreTab">
          <div class="hd">
            <ul>
              <li
                v-for="(tab, index) in statTabs"
                :key="tab.label"
                :class="{ on: activeStatTab === index }"
                @mouseenter="activeStatTab = index"
              >
                <a>{{ tab.label }}</a>
              </li>
            </ul>
            <span class="spanMore">
              <a class="fr more">更多</a>
            </span>
          </div>
          <div class="bd">
            <div class="conWrap">
              <ul>
                <li v-for="item in currentStatItems" :key="item">
                  <a :title="item">{{ item }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="cl"></div>
      <div class="w696 hyzx_ycxw hyzxFpgz hyzx_lhrhbk fl">
        <div class="slideTxtBox">
          <div class="hd">
            <span>互联网+政务服务</span>
            <ul>
              <li
                v-for="(tab, index) in govTabs"
                :key="tab.label"
                :class="{ on: activeGovTab === index }"
                @mouseenter="activeGovTab = index"
              >
                <a>{{ tab.label }}</a>
              </li>
            </ul>
            <a class="fr more">更多</a>
          </div>
          <div class="bd">
            <ul>
              <li v-for="item in currentGovItems" :key="item">
                <a :title="item">{{ item }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w462 hyzxZmgl hyzxTabblock2 fr">
        <div class="slideTxtBox hasMoreTab">
          <div class="hd">
            <ul>
              <li class="on">
                <a>计划规划</a>
              </li>
            </ul>
            <span class="spanMore">
              <a class="fr more">更多</a>
            </span>
          </div>
          <div class="bd">
            <div class="conWrap">
              <ul>
                <li>
                  <a
                    title="国家烟草专卖局办公室印发关于推动出口电子烟产品质量保证体系建设的指引的通知"
                    >国家烟草专卖局办公室印发关于推动出口电子烟产品质量保证体系建设的指引的通知</a
                  >
                </li>

                <li>
                  <a
                    title="国家烟草专卖局办公室关于开展电子烟相关生产企业烟草专卖生产企业许可证换证工作的通知"
                    >国家烟草专卖局办公室关于开展电子烟相关生产企业烟草专卖生产企业许可证换证工作的通知</a
                  >
                </li>

                <li>
                  <a
                    title="国家烟草专卖局关于印发烟草制品生产企业超过年度总产量计划生产卷烟、雪茄烟审批管理办法的通知"
                    >国家烟草专卖局关于印发烟草制品生产企业超过年度总产量计划生产卷烟、雪茄烟审批管理办法的通知</a
                  >
                </li>

                <li>
                  <a
                    title="国家烟草专卖局关于印发《国家烟草专卖局2022年定点帮扶工作计划》的通知"
                    >国家烟草专卖局关于印发《国家烟草专卖局2022年定点帮扶工作计划》的通知</a
                  >
                </li>

                <li>
                  <a
                    title="国家烟草专卖局关于印发深化“证照分离”改革进一步激发市场主体发展活力实施方案的通知"
                    >国家烟草专卖局关于印发深化“证照分离”改革进一步激发市场主体发展活力实施方案的通知</a
                  >
                </li>

                <li>
                  <a
                    title="国家烟草专卖局关于印发《新时代国家烟草专卖局对口支援兴国县实施方案》的通知"
                    >国家烟草专卖局关于印发《新时代国家烟草专卖局对口支援兴国县实施方案》的通知</a
                  >
                </li>

                <li>
                  <a
                    title="国家烟草专卖局  国家市场监管总局关于印发保护未成年人免受烟侵害“守护成长”专项行动方案的通知"
                    >国家烟草专卖局
                    国家市场监管总局关于印发保护未成年人免受烟侵害“守护成长”专项行动方案的通知</a
                  >
                </li>

                <li>
                  <a
                    title="国家烟草专卖局关于印发烟草专卖许可证管理办法实施细则的通知"
                    >国家烟草专卖局关于印发烟草专卖许可证管理办法实施细则的通知</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="cl"></div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import slide1 from "../../assets/images/a8fa0774fdb846a099b8a77c61526245.jpg";
import slide2 from "../../assets/images/206afeea97eb4a4887a176c3602da6ad.jpg";
import slide3 from "../../assets/images/4f7f03b9e7bd48a6b93faf76e337b9a9.jpg";
import slide4 from "../../assets/images/705d056274d5466b89b9c97eb8cc3a58.jpg";
import slide5 from "../../assets/images/cc83d2bbba624e769a707accf6e8eccc.jpg";
import slide6 from "../../assets/images/1a32c6a95057484cb4342b28f5efd5c9.jpg";
import slide7 from "../../assets/images/a284b2dc884d48ffad8a8ea71c3516f4.jpg";
import slide8 from "../../assets/images/57b29b6c295a4a65aab8b244f1892b69.jpg";
import slide9 from "../../assets/images/5857292e1a73437ba632157035e9867e.jpg";

const newsCarouselSlides = [
  {
    image: slide1,
    title: "第十五届全国运动会在广东广州隆重开幕 习近平出席开幕式...",
  },
  {
    image: slide2,
    title: "习近平接见全国群众体育先进单位、先进个人代表和全国体...",
  },
  { image: slide3, title: "习近平会见俄罗斯总理米舒斯京" },
  {
    image: slide4,
    title: "张建民在上海烟草调研时强调 学习好贯彻好党的二十届四中...",
  },
  {
    image: slide5,
    title: "张建民在新疆烟草调研时强调 完整准确全面贯彻新时代党的...",
  },
  { image: slide6, title: "国家局党校举行2025年秋季学期开学典礼" },
  { image: slide7, title: "陆捷在云南烟草调研" },
  {
    image: slide8,
    title: "刘三江在江西烟草调研并督导打假打私工作",
  },
  {
    image: slide9,
    title: "陆捷在湖北十堰调研国家局定点帮扶工作",
  },
];

const newsActiveSlide = ref(0);
const newsAutoplayTimer = ref(null);
const newsAutoplayInterval = 5000;

const newsStopAutoplay = () => {
  if (newsAutoplayTimer.value !== null) {
    clearInterval(newsAutoplayTimer.value);
    newsAutoplayTimer.value = null;
  }
};

const newsNextSlide = () => {
  newsActiveSlide.value =
    (newsActiveSlide.value + 1) % newsCarouselSlides.length;
};

const newsStartAutoplay = () => {
  if (newsCarouselSlides.length <= 1) return;
  newsStopAutoplay();
  if (typeof window !== "undefined") {
    newsAutoplayTimer.value = window.setInterval(
      newsNextSlide,
      newsAutoplayInterval
    );
  }
};

const newsGoToSlide = (index) => {
  newsActiveSlide.value = index;
  newsStartAutoplay();
};

const getNewsSlideStyle = (index) => ({
  position: "absolute",
  width: "702px",
  left: "0px",
  top: "0px",
  display: newsActiveSlide.value === index ? "block" : "none",
});

const getNewsTextStyle = (index) => ({
  position: "absolute",
  bottom: newsActiveSlide.value === index ? "0px" : "-52px",
  width: "100%",
  transition: "bottom 0.3s",
});

onMounted(() => {
  newsStartAutoplay();
});

onBeforeUnmount(() => {
  newsStopAutoplay();
});

const tobaccoTabs = [
  {
    label: "行业要闻",
    items: [
      "国家局党组召开党组（扩大）会议 传达学习贯彻习近平总书记近期重要讲话精神",
      "张建民在上海烟草调研时强调 学习好贯彻好党的二十届四中全会精神 为谱写中国式现代化上海新篇章作出新贡献",
      "刘三江会见日本烟草产业株式会社执行副总裁岛吉耕史",
      "国家局党组理论学习中心组（扩大）组织集体学习 深入学习贯彻党的二十届四中全会精神 科学谋划“十五五”时期行业高质量发展和现代化建设",
      "国家局党组召开党组（扩大）会议 传达学习贯彻中央层面整治形式主义为基层减负专项工作机制会议精神",
      "张建民会见韩国烟草公司社长方景万",
      "国家局党组召开党组（扩大）会议 认真传达学习贯彻党的二十届四中全会精神",
      "刘三江在江西烟草调研并督导打假打私工作",
    ],
  },
  {
    label: "央媒报道",
    items: [
      "【中国新闻网】邵阳烟草：深耕安全“责任田” 精塑发展“防护盾”",
      "【人民网】生产车间里的创新“孵化中心”",
      "【人民网】广西来宾烟草“问题研判平台小程序”上线",
      "【中国城市网】政务“云梯”攀出服务新高度",
      "【学习强国】百姓故事 | 糖画爷爷",
      "【学习强国】乡村振兴 | 云南会泽：在这里品味不一样的“人生五味”",
      "【学习强国】乡村振兴 | 云南会泽：一条路，暖了山村的心",
      "【新华财经】重庆丰都烟草：当好“守未者”全力护成长",
    ],
  },
  {
    label: "各地新闻",
    items: [
      "湖南省开展打击利用“红白喜事”售假贩私案件技战法交流暨部署专项行动",
      "十二省（区、市）烟草打假打私协作会议在四川眉山召开",
      "广西区局第十二轮“净海清湾”专项行动成效显著",
      "四川省局召开打假打私工作推进会",
      "辽宁省局与省公安厅联合召开打击涉烟违法犯罪工作座谈会",
      "陕西省局联合多家省级单位开展走私爆珠香烟排查整治",
      "江苏省局召开全省系统二季度烟草打假打私工作调度会",
      "广西中烟启动2025年新员工入职培训",
    ],
  },
  {
    label: "基层工作",
    items: [
      "北京丰台区局“固本、强基、正风”赋能专卖管理队伍提质增效",
      "广东佛山三水区局联合公安机关查获一起案值近百万元假烟寄递案件",
      "内蒙古呼和浩特市局“三个聚焦”强化物流寄递环节监管",
      "四川凉山州局党建品牌入选2025（首届）新时代企业党建创新优秀案例",
      "山东威海市局打好“组合拳”筑牢“双节”市场监管防线",
      "河北承德市局与市邮政管理局联合开展打击寄递渠道涉烟违法活动专项行动",
      "湖北中烟卷烟材料厂多种形式开展知识产权宣传普及活动",
      "广东中烟湛江卷烟厂志愿者在抗击基孔肯雅热一线书写国企担当",
    ],
  },
];

const ruralTabs = [
  {
    label: "乡村振兴工作信息",
    items: [
      "山东威海文登区局（分公司）“起承转合” 绘就乡村振兴“新画卷”",
      "陕西中烟宝鸡卷烟厂加强驻村帮扶力量深入推动乡村振兴",
      "云南楚雄州局（公司）扎实推进乡村振兴定点帮扶工作",
      "河北衡水市局（公司）“三个维度”助力乡村振兴",
      "内蒙古锡林郭勒盟局（公司）开展帮扶调研助力乡村振兴",
      "四川中烟西昌卷烟厂帮扶凉山州呷拖村发展特色资源产业取得新进展",
      "贵州中烟兴义储运站调研组在定点帮扶村开展乡村振兴调研",
      "重庆中烟主要领导在石柱县开展走访调研工作",
    ],
  },
  {
    label: "相关政策",
    items: [
      "中共中央 国务院关于进一步深化农村改革 扎实推进乡村全面振兴的意见",
      "中共中央 国务院印发《乡村全面振兴规划（2024—2027年）》",
      "农业农村部办公厅 中国文联办公厅关于印发《“大地流彩—全国乡村文化振兴在行动”工作方案》的通知",
      "中共中央 国务院关于学习运用“千村示范、万村整治”工程经验有力有效推进乡村全面振兴的意见",
      "中共中央 国务院关于做好2023年全面推进乡村振兴重点工作的意见",
      "国家烟草专卖局关于印发《国家烟草专卖局2022年定点帮扶工作计划》的通知",
      "国家烟草专卖局关于印发《新时代国家烟草专卖局对口支援兴国县实施方案》的通知",
      "国家烟草专卖局关于表彰2018年度烟草行业扶贫工作先进集体和先进个人的决定",
    ],
  },
];

const hrTabs = [
  {
    label: "人事信息",
    items: [
      "关于甘宁等4人任职事项",
      "关于张一峰等3人任职事项",
      "关于杨征宇同志任职事项",
      "关于吴云勇同志任职事项",
      "关于徐丹等2人任职事项",
      "关于朱湘海等2人任职事项",
      "关于张加成同志任职事项",
      "关于薛飞同志任职事项",
    ],
  },
  {
    label: "人才招聘平台",
    items: [
      "浙江省烟草专卖局（公司）2026年管理类岗位招聘公告",
      "福建中烟工业有限责任公司2026年招聘信息（第一批 校园招聘）",
      "浙江中烟工业有限责任公司2026年高层次人才招聘公告",
      "公  示",
      "中国烟草总公司重庆市公司2025年招聘拟录用人员公示（第三批）",
      "陕西省烟草专卖局（公司）2025年生产操作类岗位应届高校毕业生招聘拟录用人员名单公示",
      "陕西省烟草专卖局（公司）2025年管理类业务类岗位应届高校毕业生招聘拟递补录用人员名单公示",
      "河北中烟工业有限责任公司2025年高校毕业生招聘拟补录人员公示",
    ],
  },
  {
    label: "培训信息",
    items: [
      "山东威海市局举办全市专卖执法队伍“双能”提升培训班",
      "河北邯郸市局（公司）组织开展创新知识培训",
      "江西宜春市局（公司）搭建“三个平台”助力青年干部员工成长",
      "福建省局（公司）举办全省系统法治建设专题培训班",
      "山东中烟举办安全生产主体责任强化培训班",
      "广东中烟韶关卷烟厂开展工艺专题培训",
      "山东淄博市局（公司）精准培训 搭好员工成才阶梯",
      "河北秦皇岛市局（公司）组织开展安全生产培训活动",
    ],
  },
  {
    label: "职工风采",
    items: [
      "四川凉山州局党建品牌入选2025（首届）新时代企业党建创新优秀案例",
      "陕西中烟获“冀赣陕黔”烟草物理检验职业技能竞赛“优秀团体”称号",
      "广西中烟启动2025年新员工入职培训",
      "广西中烟南宁卷烟厂3个六西格玛项目在全国发表交流活动上获奖",
      "山东济南市局（公司）“拓维增色” 强化技能人才队伍建设",
      "山东中烟滕州卷烟厂获评2024年度“绿色低碳标杆”单位",
      "山东淄博市局（公司）健全“师带徒”机制 助力新进员工成长",
      "陕西省局（公司）获评“2023年度服务陕西经济社会发展优秀中央驻陕单位”",
    ],
  },
];

const statTabs = [
  {
    label: "统计信息",
    items: [
      "福建三明将乐县局（分公司）推进烟田废旧地膜回收工作",
      "湖南溆浦县局（分公司）“三免服务”跑出行政许可加速度",
      "四川凉山州局（公司）聚焦“提质增效”目标高标准完成烟叶大田移栽任务",
      "2024年烟草行业实现税利总额和财政总额创历史新高",
      "贵州中烟志愿者服务队累计资助山区留守困难儿童超百人",
      "2023年卷烟销量超百万箱、销售额超百亿美元的市场",
      "2022年销量超百万箱、销售额超百亿美元的国家",
      "江苏省局“利剑9号”卷烟市场集中整治行动收官",
    ],
  },
  {
    label: "财务信息",
    items: [
      "2023年烟草行业实现税利总额和财政总额创历史新高",
      "云南红塔银行捐赠200万元助力文山市乡镇学校露天游泳池建设",
      "湖北中烟与省老区建设促进会结对举行助力乡村振兴捐赠仪式",
      "2022年烟草行业实现税利总额和财政总额创历史新高",
      "昆纤公司捐赠30万元助力昆明市盘龙区乡村振兴",
      "四川省局（公司）捐款300万元支援甘孜泸定抗震救灾",
      "吉林烟草工商系统捐款1000万元支援全省疫情防控",
      "2021年烟草行业实现税利总额和财政总额创历史新高",
    ],
  },
];

const govTabs = [
  {
    label: "工作信息",
    items: [
      "北京通州区局“深耕细作”持续提升政务服务质量",
      "关于2025年第三季度烟草行业政府网站及政务新媒体有关工作情况的通报",
      "上海金山区局推动政务服务向“心坎服务”升级",
      "湖南溆浦县局（分公司）“三免服务”跑出行政许可加速度",
      "江苏盐城市局（公司）以“心”换“新”赋能政务服务再升级",
      "关于2025年第二季度烟草行业政府网站及政务新媒体有关工作情况的通报",
      "上海闵行区局“开方、破题、固本”绘就政务服务“满意答卷”",
      "江西萍乡市局推动政务服务提质增效",
    ],
  },
  {
    label: "政府网站工作年度报表",
    items: [
      "2024年湖南省局政府网站工作年度报表",
      "2024年湖北省局政府网站工作年度报表",
      "2024年河南省局政府网站工作年度报表",
      "2024年内蒙古区局政府网站工作年度报表",
      "2024年重庆市局政府网站工作年度报表",
      "2024年宁夏区局政府网站工作年度报表",
      "2024年山西省局政府网站工作年度报表",
      "2024年陕西省局政府网站工作年度报表",
    ],
  },
];

const activeTobaccoTab = ref(0);
const activeRuralTab = ref(0);
const activeHrTab = ref(0);
const activeStatTab = ref(0);
const activeGovTab = ref(0);

const currentTobaccoItems = computed(
  () => tobaccoTabs[activeTobaccoTab.value]?.items ?? []
);
const currentRuralItems = computed(
  () => ruralTabs[activeRuralTab.value]?.items ?? []
);
const currentHrItems = computed(() => hrTabs[activeHrTab.value]?.items ?? []);
const currentStatItems = computed(
  () => statTabs[activeStatTab.value]?.items ?? []
);
const currentGovItems = computed(
  () => govTabs[activeGovTab.value]?.items ?? []
);
</script>
<style src="../../assets/css/style.css" scoped></style>
<style scoped>
/* 确保所有a标签都有手型光标 */
a {
  cursor: pointer;
}
</style>

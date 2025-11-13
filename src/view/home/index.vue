<template>
  <div class="bgf4f4f4 bodybg">
    <div
      class="inTopNewsRight"
      style="width: 1240px; background: #fff; margin: 0 auto"
    >
      <dt>
        <a
          title="第十五届全国运动会在广东广州隆重开幕 习近平出席开幕式并宣布运动会开幕"
          >第十五届全国运动会在广东广州隆重开幕
          习近平出席开幕式并宣布运动会开幕</a
        >
      </dt>

      <dd style="padding-bottom: 0px"></dd>
      <dd style="padding-bottom: 0px">
        <a style="position: relative; left: 576px; top: 20px" class="more"
          >[更多]</a
        >
      </dd>

      <dd
        style="
          margin: 0 auto;
          width: 968px;
          line-height: 22px;
          margin-top: -16px;
        "
      >
        <a
          title="习近平接见全国群众体育先进单位、先进个人代表和全国体育系统先进集体、先进个人代表"
          >习近平接见全国群众体育先进单位、先进个人代表和全国体育系统先进集体、先进个人代表</a
        >

        <a title="习近平会见国际奥委会主席考文垂和终身名誉主席巴赫"
          >习近平会见国际奥委会主席考文垂和终身名誉主席巴赫</a
        >
      </dd>
    </div>
    <div
      style="
        width: 1240px;
        height: 46px;
        background: linear-gradient(
          to bottom,
          rgb(238, 238, 238),
          rgb(255, 255, 255)
        );
        margin: 0 auto;
      "
    ></div>

    <div class="inContent w1200 auto pdlr20">
      <div class="intopNews" style="padding: 0px">
        <dl class="fr inTopNewsRight">
          <div class="inTopImg" style="background: #fff">
            <a
              >国家局党组召开党组（扩大）会议<br />传达学习贯彻习近平总书记近期重要讲话精神</a
            >
          </div>
        </dl>
        <div class="cl"></div>
      </div>

      <div class="inBlock1">
        <div class="fl inJdt">
          <div
            class="focusBox"
            @mouseenter="stopAutoplay"
            @mouseleave="startAutoplay"
          >
            <ul
              class="pic imgZoom"
              style="position: relative; width: 702px; height: 418px"
            >
              <li
                v-for="(slide, index) in carouselSlides"
                :key="slide.title"
                :style="getSlideStyle(index)"
              >
                <a><img :src="slide.image" :alt="slide.title" /></a>
              </li>
            </ul>
            <div class="txt-bg"></div>
            <div class="txt">
              <ul>
                <li
                  v-for="(slide, index) in carouselSlides"
                  :key="`${slide.title}-text`"
                  :style="getTextStyle(index)"
                >
                  <a :title="slide.title">{{ slide.title }}</a>
                </li>
              </ul>
            </div>
            <ul class="num">
              <li
                v-for="(slide, index) in carouselSlides"
                :key="`${slide.title}-indicator`"
                :class="{ on: activeSlide === index }"
                @mouseenter="goToSlide(index)"
              >
                <a></a><span></span>
              </li>
            </ul>
          </div>
        </div>
        <div class="fr inYwGwyNews">
          <div class="slideTxtBox">
            <div class="hd">
              <ul>
                <li
                  v-for="(tab, index) in homeNewsTabs"
                  :key="tab.label"
                  :class="[{ on: activeHomeNewsTab === index }, tab.extraClass]"
                  @mouseenter="activeHomeNewsTab = index"
                >
                  <a>{{ tab.label }}</a>
                </li>
              </ul>
            </div>
            <div class="bd">
              <ul class="inTyList">
                <li v-for="item in currentHomeNewsItems" :key="item">
                  <a :title="item">{{ item }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="cl"></div>
      </div>

      <div class="inYcxw"></div>

      <div class="inBlock1-1">
        <div class="w383 fl">
          <div class="lmtit">行业要闻<a>更多</a></div>
          <ul class="inTyList">
            <li>
              <a
                >国家局党组召开党组（扩大）会议
                传达学习贯彻习近平总书记近期重要讲话精神</a
              >
            </li>

            <li>
              <a
                >张建民在上海烟草调研时强调 学习好贯彻好党的二十届四中全会精神
                为谱写中国式现代化上海新篇章作出新贡献</a
              >
            </li>

            <li>
              <a>刘三江会见日本烟草产业株式会社执行副总裁岛吉耕史</a>
            </li>

            <li>
              <a
                >国家局党组理论学习中心组（扩大）组织集体学习
                深入学习贯彻党的二十届四中全会精神
                科学谋划“十五五”时期行业高质量发展和现代化建设</a
              >
            </li>

            <li>
              <a
                >国家局党组召开党组（扩大）会议
                传达学习贯彻中央层面整治形式主义为基层减负专项工作机制会议精神</a
              >
            </li>

            <li>
              <a>张建民会见韩国烟草公司社长方景万</a>
            </li>
          </ul>
        </div>
        <div class="w383 fl ml25">
          <div class="lmtit">央媒报道<a>更多</a></div>
          <ul class="inTyList">
            <li>
              <a>【经济网】湖北长阳：指尖“栀”富路 小店焕新生</a>
            </li>

            <li>
              <a>【经济网】甘肃天水甘谷烟草：这场重阳之“约”，很暖心！</a>
            </li>

            <li>
              <a>【中国城市网】湖北云梦：秋夜“梦BA” 古泽新沸腾</a>
            </li>

            <li>
              <a>【中国新闻网】在株洲渌口区，邂逅那些温暖人心的“最美终端”</a>
            </li>

            <li>
              <a>【人民日报】党建赋能提质效 精准服务助发展</a>
            </li>

            <li>
              <a>【中国日报】浙江永嘉：数智赋能 解锁基层管理提质增效新可能</a>
            </li>
          </ul>
        </div>
        <div class="w383 fr">
          <div class="lmtit">各地新闻<a>更多</a></div>
          <ul class="inTyList">
            <li>
              <a
                >湖南省开展打击利用“红白喜事”售假贩私案件技战法交流暨部署专项行动</a
              >
            </li>
            <li>
              <a>十二省（区、市）烟草打假打私协作会议在四川眉山召开</a>
            </li>
            <li>
              <a>广西区局第十二轮“净海清湾”专项行动成效显著</a>
            </li>
            <li>
              <a>四川省局召开打假打私工作推进会</a>
            </li>
            <li>
              <a>辽宁省局与省公安厅联合召开打击涉烟违法犯罪工作座谈会</a>
            </li>
            <li>
              <a>陕西省局联合多家省级单位开展走私爆珠香烟排查整治</a>
            </li>
          </ul>
        </div>
        <div class="cl"></div>
      </div>

      <div class="inBlock3">
        <div class="fl inZfxxgk">
          <a><h3>政府信息公开</h3></a>
          <ul>
            <li class="zhengce">
              <a>政策</a>
            </li>
            <li>
              <a>政府信息公开指南</a>
            </li>
            <li class="zfxxgkzd">
              <a>政府信息公开制度</a>
            </li>
            <li class="wzgzndbb">
              <a>法定主动公开内容</a>
            </li>
            <li class="zfxxgknb">
              <a>政府信息公开年报</a>
            </li>
            <li class="ysqgk">
              <a>依申请公开</a>
            </li>
          </ul>
        </div>
        <div class="fl inTableNews inTableNewsW80">
          <div class="slideTxtBox">
            <div class="hd">
              <ul>
                <li
                  v-for="(tab, index) in homeGovInfoTabs"
                  :key="tab.label"
                  :class="{ on: activeHomeGovInfoTab === index }"
                  @mouseenter="activeHomeGovInfoTab = index"
                >
                  <a>{{ tab.label }}</a>
                </li>
              </ul>
            </div>
            <div class="bd">
              <ul class="inTyList">
                <li v-for="item in currentHomeGovInfoItems" :key="item">
                  <a :title="item">{{ item }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="fr inLhrh">
          <div class="slideTxtBox">
            <div class="hd">
              <ul>
                <template v-for="(tab, index) in homeFocusTabs" :key="tab.label">
                  <li
                    :class="{ on: activeHomeFocusTab === index }"
                    @mouseenter="activeHomeFocusTab = index"
                  >
                    <a>{{ tab.label }}</a>
                  </li>
                  <span v-if="index !== homeFocusTabs.length - 1"> | </span>
                </template>
              </ul>
            </div>
            <div class="bd">
              <ul class="inTyList">
                <li v-for="item in currentHomeFocusItems" :key="item">
                  <a :title="item">{{ item }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="cl"></div>
      </div>

      <div class="inZtzl">
        <div class="fl inZtzlTitle">
          <h3>专题专栏</h3>
          <a class="more">更多</a>
        </div>
        <div class="fr inZtzlCons">
          <div class="inRdzt">
            <a
              ><img
                src="../../assets/images/5118375f8db442deaec1e8f185f5ba73.png"
              />
            </a>
          </div>
          <div class="inRdzt">
            <a
              ><img
                src="../../assets/images/11677c82649e434f9e562cd18a39334c.jpg"
              />
            </a>
          </div>
          <div class="inRdzt">
            <a
              ><img
                src="../../assets/images/bb5389c82f45455191f43d47b5774604.jpg"
              />
            </a>
          </div>

          <div class="inztlist">
            <div class="fl">
              <a
                ><img
                  src="../../assets/images/e230f386fe6f43c9b4d0fac3b1be70ec.jpg"
                />
              </a>
            </div>
            <div class="fl">
              <a
                ><img
                  src="../../assets/images/a5ff9e8472b14944a242ff178b8aa9aa.jpg"
                  style="width: 370px; height: 220px"
                />
              </a>
            </div>
            <ul class="fr">
              <li>
                <a
                  ><img
                    src="../../assets/images/1b2cdb33d6524825923a63689d4b78b7.png"
                  />
                </a>
              </li>

              <div class="cl"></div>
            </ul>
            <div class="cl"></div>
          </div>
        </div>
        <div class="cl"></div>
      </div>

      <div class="inXglj">
        <ul>
          <li>
            <a
              ><img
                src="../../assets/images/c820f314b0464ce5b9befe473208bdbf.jpeg"
              />
            </a>
          </li>
          <li>
            <a
              ><img
                src="../../assets/images/e43652e70eaf4707ba268b4dbe84edd9.jpeg"
              />
            </a>
          </li>
          <li>
            <a
              ><img
                src="../../assets/images/58acd193ed7940a695c545228bfcea9e.jpg"
              />
            </a>
          </li>
          <li>
            <a
              ><img
                src="../../assets/images/21380a738b5e4864b86fa841b9ff0dd4.jpg"
              />
            </a>
          </li>
          <li style="margin-right: 0px">
            <a
              ><img
                src="../../assets/images/67130a4ee12c4f63a7d0be689554d62c.jpeg"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import slide1 from '../../assets/images/a8fa0774fdb846a099b8a77c61526245.jpg'
import slide2 from '../../assets/images/206afeea97eb4a4887a176c3602da6ad.jpg'
import slide3 from '../../assets/images/4f7f03b9e7bd48a6b93faf76e337b9a9.jpg'
import slide4 from '../../assets/images/705d056274d5466b89b9c97eb8cc3a58.jpg'
import slide5 from '../../assets/images/cc83d2bbba624e769a707accf6e8eccc.jpg'
import slide6 from '../../assets/images/1a32c6a95057484cb4342b28f5efd5c9.jpg'
import slide7 from '../../assets/images/a284b2dc884d48ffad8a8ea71c3516f4.jpg'
import slide8 from '../../assets/images/57b29b6c295a4a65aab8b244f1892b69.jpg'

const carouselSlides = [
  {
    image: slide1,
    title: '第十五届全国运动会在广东广州隆重开幕 习近平出席开幕式...'
  },
  {
    image: slide2,
    title: '习近平接见全国群众体育先进单位、先进个人代表和全国体...'
  },
  { image: slide3, title: '习近平会见俄罗斯总理米舒斯京' },
  {
    image: slide4,
    title: '张建民在上海烟草调研时强调 学习好贯彻好党的二十届四中...'
  },
  {
    image: slide5,
    title: '张建民在新疆烟草调研时强调 完整准确全面贯彻新时代党的...'
  },
  { image: slide6, title: '国家局党校举行2025年秋季学期开学典礼' },
  { image: slide7, title: '陆捷在云南烟草调研' },
  { image: slide8, title: '刘三江在江西烟草调研并督导打假打私工作' }
]

const activeSlide = ref(0)
const autoplayTimer = ref(null)
const autoplayInterval = 5000

const stopAutoplay = () => {
  if (autoplayTimer.value !== null) {
    clearInterval(autoplayTimer.value)
    autoplayTimer.value = null
  }
}

const nextSlide = () => {
  activeSlide.value = (activeSlide.value + 1) % carouselSlides.length
}

const startAutoplay = () => {
  if (carouselSlides.length <= 1) return
  stopAutoplay()
  if (typeof window !== 'undefined') {
    autoplayTimer.value = window.setInterval(nextSlide, autoplayInterval)
  }
}

const goToSlide = (index) => {
  activeSlide.value = index
  startAutoplay()
}

const getSlideStyle = (index) => ({
  position: 'absolute',
  width: '702px',
  left: '0px',
  top: '0px',
  display: activeSlide.value === index ? 'block' : 'none'
})

const getTextStyle = (index) => ({
  position: 'absolute',
  bottom: activeSlide.value === index ? '0px' : '-52px',
  width: '100%',
  transition: 'bottom 0.3s'
})

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
})

const homeNewsTabs = [
  {
    label: '时政要闻',
    items: [
      '第十五届全国运动会在广东广州隆重开幕 习近平出席开幕式并宣布运动会开幕',
      '习近平接见全国群众体育先进单位、先进个人代表和全国体育系统先进集体、先进个人代表',
      '习近平会见国际奥委会主席考文垂和终身名誉主席巴赫',
      '中华人民共和国第十五届运动会开幕式9日晚在广东广州举行 习近平将出席开幕式并宣布运动会开幕',
      '习近平在广东考察时强调：深入学习宣传贯彻党的二十届四中全会精神 以全面深化改革开放推动高质量发展',
      '习近平在广东省梅州市考察调研'
    ]
  },
  {
    label: '国务院信息',
    items: [
      '李强主持召开国务院常务会议 研究深化重点领域改革扩大制度型开放工作 部署加快场景培育和开放推动新场景大规模应用有关举措 审议通过《森林草原防灭火条例（草案）》',
      '受权发布丨中国共产党第二十届中央委员会第四次全体会议公报',
      '李强主持召开国务院常务会议',
      '习近平出席全球妇女峰会开幕式并发表主旨讲话',
      '中共中央政治局召开会议 讨论拟提请二十届四中全会审议的文件 中共中央总书记习近平主持会议',
      '新疆维吾尔自治区成立70周年庆祝大会隆重举行 习近平出席大会'
    ]
  }
]

const homeGovInfoTabs = [
  {
    label: '通知公告',
    items: [
      '关于征求对《名晾晒烟名录（征求意见稿）》意见的通知',
      '国家烟草专卖局听证公告',
      '关于2025年第三季度烟草行业政府网站及政务新媒体有关工作情况的通报',
      '国家烟草专卖局公告2025年第1号',
      '国家烟草专卖局 听证公告 国烟听公〔2025〕第1号',
      '公开征求对《境内免税市场烟草制品管理办法（征求意见稿）》的意见',
      '关于公开征求对《国家烟草专卖局关于规范烟草专卖行政处罚裁量权的指导意见（征求意见稿）》意见的通知'
    ]
  },
  {
    label: '政策文件',
    items: [
      '国家烟草专卖局公告2025年第1号',
      '国家烟草专卖局办公室关于开展获证电子烟相关生产企业和批发企业“双随机、一公开”监管工作的通知',
      '国家烟草专卖局办公室关于印发烟草专卖许可证申请办理文书样式（2024年版）的通知',
      '国家烟草专卖局关于批准发布残次烟判定及处理规范等10项烟草行业标准的通知',
      '国家烟草专卖局关于修订印发电子烟交易管理细则的通知',
      '国家烟草专卖局关于修订印发电子烟产品技术审评实施细则的通知',
      '国家烟草专卖局关于修订印发电子烟物流管理细则的通知'
    ]
  },
  {
    label: '政策解读',
    items: [
      '《境内免税市场烟草制品管理办法》政策解读',
      '图解：《电子烟相关生产企业、批发企业烟草专卖许可证管理细则》政策解读',
      '《电子烟相关生产企业、批发企业烟草专卖许可证管理细则》政策解读',
      '图解：国家烟草专卖局2024年政府信息公开工作年度报告',
      '图解：《电子烟交易管理细则》政策解读',
      '《电子烟交易管理细则》政策解读',
      '图解：《电子烟产品技术审评实施细则》政策解读'
    ]
  },
  {
    label: '人才招聘平台',
    items: [
      '浙江省烟草专卖局（公司）2026年管理类岗位招聘公告',
      '福建中烟工业有限责任公司2026年招聘信息（第一批 校园招聘）',
      '浙江中烟工业有限责任公司2026年高层次人才招聘公告',
      '公  示',
      '中国烟草总公司重庆市公司2025年招聘拟录用人员公示（第三批）',
      '陕西省烟草专卖局（公司）2025年生产操作类岗位应届高校毕业生招聘拟录用人员名单公示',
      '陕西省烟草专卖局（公司）2025年管理类业务类岗位应届高校毕业生招聘拟递补录用人员名单公示'
    ]
  }
]

const homeFocusTabs = [
  {
    label: '数字化转型',
    items: [
      '河南中烟漯河卷烟厂升级数字场景应用打造智慧工厂',
      '山东日照市局（公司）“数字化”引擎助推烟叶生产驶入“快车道”',
      '山东济南市局（公司）三项举措为卷烟物流注入“智慧动能”',
      '四川中烟开展省级数字中台体系研发管控系统应用培训',
      '湖南省局（公司）在省第二届职工数字化应用技术技能大赛中喜获佳绩',
      '广西中烟柳州卷烟厂构建“智能+网格”虫害防治新模式',
      '湖南中烟长沙卷烟厂在第五届工程仿真创新设计大赛中获得佳绩'
    ]
  },
  {
    label: '专卖管理',
    items: [
      '湖南省开展打击利用“红白喜事”售假贩私案件技战法交流暨部署专项行动',
      '北京丰台区局“固本、强基、正风”赋能专卖管理队伍提质增效',
      '十二省（区、市）烟草打假打私协作会议在四川眉山召开',
      '安徽省局正式启用合肥南站铁路公安、烟草专卖联合执法办公室',
      '浙江温州瑞安市局“三维发力”纵深推进打假打私工作',
      '山东烟台蓬莱区局“三化管理”推动旅游市场监管走深走实',
      '陕西榆林市局“三个发力”全面推进卷烟打假打私工作'
    ]
  },
  {
    label: '乡村振兴',
    items: [
      '山东威海文登区局（分公司）“起承转合” 绘就乡村振兴“新画卷”',
      '陕西中烟宝鸡卷烟厂加强驻村帮扶力量深入推动乡村振兴',
      '云南楚雄州局（公司）扎实推进乡村振兴定点帮扶工作',
      '河北衡水市局（公司）“三个维度”助力乡村振兴',
      '内蒙古锡林郭勒盟局（公司）开展帮扶调研助力乡村振兴',
      '四川中烟西昌卷烟厂帮扶凉山州呷拖村发展特色资源产业取得新进展',
      '贵州中烟兴义储运站调研组在定点帮扶村开展乡村振兴调研'
    ]
  }
]

const activeHomeNewsTab = ref(0)
const activeHomeGovInfoTab = ref(0)
const activeHomeFocusTab = ref(0)

const currentHomeNewsItems = computed(
  () => homeNewsTabs[activeHomeNewsTab.value]?.items ?? []
)
const currentHomeGovInfoItems = computed(
  () => homeGovInfoTabs[activeHomeGovInfoTab.value]?.items ?? []
)
const currentHomeFocusItems = computed(
  () => homeFocusTabs[activeHomeFocusTab.value]?.items ?? []
)
</script>

<style src="../../assets/css/index.css" scoped></style>
<style scoped>
a:hover {
  cursor: pointer;
}

.inTopNewsRight dt a {
  font-family: Source Han Sans SC;
  font-weight: bold;
  font-size: 34px;

  /*color: #C61F1F;*/
  line-height: 60px;
  color: #c61f1f;
}

.inTopImg a {
  font-family: Source Han Sans SC;
  font-weight: bold;
  font-size: 30px;
  color: #015293;
}
.inYcxw {
  background: url(../../assets/images/55.png);
}
</style>

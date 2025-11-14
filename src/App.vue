<template>
  <div
    class="inTop"
    :style="{
      display: state.isChannel ? 'none' : 'block',
    }"
  >
    <div class="intopbg"></div>
    <div class="w1200 auto">
      <div class="inTopHead">
        <div class="guohui">
          <img
            src="./assets/images/guohui2.png"
            style="width: 97px; height: 97px"
          />
        </div>
      </div>
      <div class="inTopBot">
        <div class="fl inLogo">
          <a><img src="./assets/images/inlogo.png" /></a>
          <img class="intopby" src="./assets/images/intopby.png" />
        </div>
        <div
          class="fl inLiyi"
          style="
            background: #fff;
            font-family: Source Han Sans SC;
            font-weight: bold;
            color: #015293;
          "
        >
          国家利益至上<br />  消费者利益至上
        </div>
        <div class="cl"></div>
      </div>
    </div>
  </div>
  <div
    class="inNavs bg015293"
    :style="{
      display: state.isChannel ? 'none' : 'block',
    }"
  >
    <div class="w1200 auto">
      <ul>
        <li class="sy">
          <a href="#/index">国家烟草专卖局</a>
        </li>
        <li class="">
          <a href="#/channel">服务与产品</a>
        </li>
        <li>
          <a href="#/news">行业资讯</a>
          <ul>
            <li>
              <a href="#/tobacco">烟草新闻</a>
            </li>
            <li>
              <a href="#/rural">乡村振兴</a>
            </li>
            <li>
              <a href="#/management">专卖管理</a>
            </li>
            <li>
              <a href="#/digital">数字化转型</a>
            </li>
            <li>
              <a href="#/training">人事与培训</a>
            </li>
            <li>
              <a href="#/statistics">统计信息</a>
            </li>
            <li>
              <a href="#/government">互联网+政务服务</a>
            </li>
            <li>
              <a href="#/planning">计划规划</a>
            </li>
          </ul>
        </li>
        <li><a href="#/about">专题专栏</a></li>
      </ul>
    </div>
  </div>
  <div class="yddNavs bg015293" 
    :style="{
      display: state.isChannel ? 'none' : 'block',
    }">
  <ul>
    <li><a href="#/index">首页</a></li>
    <li><a href="#/channel">监管</a></li>
    <li><a href="#/news">资讯</a></li>
    <li><a href="#/about">专题</a></li>
    <div class="cl"></div>
  </ul>	
</div>
  <RouterView />

  <div
    class="inLinks"
    :style="{
      display: state.isChannel ? 'none' : 'block',
    }"
  >
    <ul>
      <li
        class="m"
        :class="{ active: activeInLinkIndex === 0 }"
        @mouseenter="handleInLinkMouseEnter(0)"
        @mouseleave="handleInLinkMouseLeave"
      >
        <a>司局子站 ▼</a>
        <ul class="inLinkUl" :class="{ block: activeInLinkIndex === 0 }">
          <li><a>办公室（外事司）</a></li>
          <li><a>计划司</a></li>
          <li><a>专卖司</a></li>
          <li><a>运行司</a></li>
          <li><a>法规司</a></li>
          <li><a>财务司</a></li>
          <li><a>审计司</a></li>
          <li><a>科技司</a></li>
          <li><a>人事司</a></li>
          <li><a>直属机关党委</a></li>
          <li><a>廉政办（巡视办）</a></li>
          <li><a>规范办（采购办）</a></li>
          <li><a>董事会工作办公室</a></li>
          <li><a>党校</a></li>
          <li><a>研究所（政研室）</a></li>
          <li><a>离退办</a></li>
          <li><a>服务局</a></li>
          <li><a>信息中心（网信办）</a></li>
          <li><a>烟草学会</a></li>
          <li><a>烟叶公司</a></li>
          <li><a>销售公司</a></li>
          <li><a>投资公司</a></li>
          <li><a>烟机公司</a></li>
          <li><a>中烟国际</a></li>
          <li><a>商务物流公司</a></li>
          <li><a>中烟实业</a></li>
          <li><a>双维公司</a></li>
          <li><a>传媒中心</a></li>

          <div class="cl"></div>
        </ul>
      </li>
      <li
        class="m"
        :class="{ active: activeInLinkIndex === 1 }"
        @mouseenter="handleInLinkMouseEnter(1)"
        @mouseleave="handleInLinkMouseLeave"
      >
        <a>省级单位 ▼</a>
        <ul
          class="inLinkUl inLinkUl2"
          :class="{ block: activeInLinkIndex === 1 }"
        >
          <li><a>北京</a></li>

          <li><a>天津</a></li>

          <li><a>河北</a></li>

          <li><a>山西</a></li>

          <li><a>内蒙古</a></li>

          <li><a>辽宁</a></li>

          <li><a>吉林</a></li>

          <li><a>黑龙江</a></li>

          <li><a>大连</a></li>

          <li><a>上海</a></li>

          <li><a>江苏</a></li>

          <li><a>浙江</a></li>

          <li><a>安徽</a></li>

          <li><a>福建</a></li>

          <li><a>江西</a></li>

          <li><a>山东</a></li>

          <li><a>河南</a></li>

          <li><a>湖北</a></li>

          <li><a>湖南</a></li>

          <li><a>广东</a></li>

          <li><a>广西</a></li>

          <li><a>海南</a></li>

          <li><a>深圳</a></li>

          <li><a>重庆</a></li>

          <li><a>四川</a></li>

          <li><a>贵州</a></li>

          <li><a>云南</a></li>

          <li><a>西藏</a></li>

          <li><a>陕西</a></li>

          <li><a>甘肃</a></li>

          <li><a>青海</a></li>

          <li><a>宁夏</a></li>

          <li><a>新疆</a></li>

          <div class="cl"></div>
        </ul>
      </li>
      <li
        class="m"
        :class="{ active: activeInLinkIndex === 2 }"
        @mouseenter="handleInLinkMouseEnter(2)"
        @mouseleave="handleInLinkMouseLeave"
      >
        <a>工业企业 ▼</a>
        <ul
          class="inLinkUl inLinkUl2"
          :class="{ block: activeInLinkIndex === 2 }"
        >
          <li><a>河北中烟</a></li>

          <li><a>江苏中烟</a></li>

          <li><a>浙江中烟</a></li>

          <li><a>安徽中烟</a></li>

          <li><a>福建中烟</a></li>

          <li><a>江西中烟</a></li>

          <li><a>山东中烟</a></li>

          <li><a>河南中烟</a></li>

          <li><a>湖北中烟</a></li>

          <li><a>湖南中烟</a></li>

          <li><a>广东中烟</a></li>

          <li><a>广西中烟</a></li>

          <li><a>重庆中烟</a></li>

          <li><a>四川中烟</a></li>

          <li><a>贵州中烟</a></li>

          <li><a>云南中烟</a></li>

          <li><a>陕西中烟</a></li>

          <div class="cl"></div>
        </ul>
      </li>
      <li
        class="m"
        :class="{ active: activeInLinkIndex === 3 }"
        @mouseenter="handleInLinkMouseEnter(3)"
        @mouseleave="handleInLinkMouseLeave"
      >
        <a>其他直属机构 ▼</a>
        <ul class="inLinkUl" :class="{ block: activeInLinkIndex === 3 }">
          <li><a>南纤</a></li>

          <li><a>昆纤</a></li>

          <li><a>珠纤</a></li>

          <li><a>郑州院</a></li>

          <li><a>烟草进修学院</a></li>

          <li><a>合肥设计院</a></li>

          <div class="cl"></div>
        </ul>
      </li>
      <li
        class="m mr0"
        :class="{ active: activeInLinkIndex === 4 }"
        @mouseenter="handleInLinkMouseEnter(4)"
        @mouseleave="handleInLinkMouseLeave"
      >
        <a>行业相关链接 ▼</a>
        <ul class="inLinkUl" :class="{ block: activeInLinkIndex === 4 }">
          <li><a>中国烟草传媒网</a></li>

          <li><a>东方烟草网</a></li>

          <li><a>中国烟草学报</a></li>

          <li><a>技能鉴定</a></li>

          <li><a>视频展播</a></li>

          <div class="cl"></div>
        </ul>
      </li>
      <div class="cl"></div>
    </ul>
  </div>

  <div
    class="bg0053a7"
    :style="{
      display: state.isChannel ? 'none' : 'block',
    }"
  >
    <div class="inBottom w1200 auto">
      <div class="inBottomNavs">
        <a>网站声明</a>
        |
        <a>联系方式</a>
        | <a>站点地图</a>
      </div>
      <div class="inBottomxx">
        <p>
          主管：国家烟草专卖局办公室&nbsp;&nbsp;&nbsp;&nbsp;主办：国家烟草专卖局信息中心&nbsp;&nbsp;&nbsp;&nbsp;政府网站标识码：bm64000012&nbsp;&nbsp;&nbsp;&nbsp;备案序号:<a
            >京ICP备05033420号</a
          >
        </p>
        <p>
          地址：中国北京西城区月坛南街55号(100045)&nbsp;&nbsp;&nbsp;&nbsp;京公网安备：110401200137
        </p>
        <p>
          版权所有：国家烟草专卖局，未经许可，本网站包括图像、图标、文字在内的所有数据不得转载
        </p>
      </div>
      <div class="inBottomIco">
        <span class="wzzc">
          <span id="_span_jiucuo"
            ><img
              onclick="Link('bm64000012')"
              style="margin: 0; border: 0; cursor: pointer"
              src="https://zfwzgl.www.gov.cn/exposure/images/jiucuo.png?v=bm64000012"
          /></span>
        </span>
        <a class="djtb"><img src="./assets/images/djtb.png" /></a>
        <span class="slh" style="background: #fff"
          ><img src="./assets/images/slh.png"
        /></span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, watch, onMounted, onBeforeUnmount, ref } from "vue";
import { useRoute } from "vue-router";
import config from "./config";

const activeInLinkIndex = ref(null);

const handleInLinkMouseEnter = (index) => {
  activeInLinkIndex.value = index;
};

const handleInLinkMouseLeave = () => {
  activeInLinkIndex.value = null;
};

const state = reactive({
  isChannel: false,
});

// 导航菜单展开状态
const isNavOpen = ref(false);

// 关于我们下拉菜单展开状态
const isAboutDropdownOpen = ref(false);

// 切换导航菜单
const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};

// 关闭导航菜单
const closeNav = () => {
  isNavOpen.value = false;
};

// 切换关于我们下拉菜单
const toggleAboutDropdown = (event) => {
  // 在移动端，阻止默认的链接跳转行为
  if (window.innerWidth <= 767) {
    event.preventDefault();
    isAboutDropdownOpen.value = !isAboutDropdownOpen.value;
  }
};

// 关闭关于我们下拉菜单
const closeAboutDropdown = () => {
  isAboutDropdownOpen.value = false;
};

const route = useRoute();
const viewportMeta = ref(null);

const ensureViewportMeta = () => {
  if (!viewportMeta.value) {
    viewportMeta.value = document.querySelector(
      'meta[name="viewport"]'
    );
  }
  return viewportMeta.value;
};

const applyHomeViewport = () => {
  const meta = ensureViewportMeta();
  if (!meta) {
    return;
  }
  // 首页在移动端也显示PC样式，使用缩放
  meta.setAttribute("content", "width=1240, initial-scale=0.3, user-scalable=yes");
};

const applyDefaultViewport = () => {
  const meta = ensureViewportMeta();
  if (!meta) {
    return;
  }
  // 其他页面在移动端显示PC样式，使用缩放
  meta.setAttribute("content", "width=1240, initial-scale=0.3, user-scalable=yes");
};

const updateLayoutState = (fullPath) => {
  state.isChannel = fullPath === "/channel";
  const isHome = fullPath === "/index";

  document.documentElement.classList.toggle("is-home", isHome);
  document.body.classList.toggle("is-home", isHome);

  if (isHome) {
    applyHomeViewport();
  } else {
    applyDefaultViewport();
  }
};

watch(
  () => route.fullPath,
  (newPath) => {
    updateLayoutState(newPath);
  },
  { immediate: true }
);

onMounted(() => {
  document.title = config.TITLE;
});

onBeforeUnmount(() => {
  document.documentElement.classList.remove("is-home");
  document.body.classList.remove("is-home");
  applyDefaultViewport();
});
</script>
<style scoped>
a:hover {
  cursor: pointer;
}

.inTopBot {
  display: flex;
}

.fl {
  flex: 1;
  display: flex;
  justify-content: center;
}
</style>

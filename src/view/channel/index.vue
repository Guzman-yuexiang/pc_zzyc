<template>
  <div class="download" id="channel" style="">
    <div v-if="maskStatus" class="mask-container">
      <div class="mask-popover">
        <template v-if="maskStatus == 1">
          <div class="mask-icon loading-icon rotate"></div>
          <div class="mask-text">{{ loadingTip }}</div>
        </template>
        <template v-if="maskStatus == 2">
          <img class="mask-icon" src="../../assets/images/link_lose.png" />
          <div class="mask-text">{{ timeoutTip }}</div>
        </template>
      </div>
    </div>

    <div v-if="isMobile()" class="nav-container">
      <img src="../../assets/images/back.png" @click="navigatorBack()" />
    </div>

    <div class="main-container">
      <div style="width: 350px">
        <div
          class="title-container"
          :style="{ fontSize: isMobile() ? '12px' : '' }"
        >
          <img src="../../assets/images/safe.png" />
          <div>
            <div class="title">网络安全检测</div>
            <div class="info">
              网络安全实时监测，防护体系全覆盖
              <br />
              守护您的网络与数据安全
            </div>
          </div>
        </div>
        <div class="list-container">
          <TransitionGroup name="list">
            <div
              v-for="item in orderUrlList"
              :key="item.order"
              class="line-item"
              :style="{ '--status-color': getLineStatus(item).color }"
              :class="{ 'line-item_active': item.order == activeIndex }"
              @click="jump(item)"
            >
              <img class="line-icon" src="../../assets/images/line_icon.png" />
              <div class="line-content">
                <div class="line-title">
                  <div style="font-size: 14px">线路{{ item.order }}</div>
                  <div class="line-status">
                    {{ getLineStatus(item).status }}
                  </div>
                </div>
                <div class="line-ping">
                  <img
                    v-if="getLineStatus(item).status == '推荐'"
                    class="line-ping-icon"
                    src="../../assets/images/status_green.png"
                  />
                  <img
                    v-else-if="getLineStatus(item).status == '一般'"
                    class="line-ping-icon"
                    src="../../assets/images/status_yellow.png"
                  />
                  <img
                    v-else-if="getLineStatus(item).status == '超时'"
                    class="line-ping-icon"
                    src="../../assets/images/status_red.png"
                  />
                  <img
                    v-else-if="getLineStatus(item).status == '测速中'"
                    class="line-ping-icon inverse_rotate"
                    src="../../assets/images/status_loading.png"
                  />
                  {{ getTime(item) }}
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import config from "../../config.js";
import {
  ref,
  onMounted,
  reactive,
  computed,
  onUnmounted,
  onBeforeUnmount,
} from "vue";
import { useRouter } from "vue-router";
import SuperTask from "../../utils/superTask";
import { isMobile } from "../../utils/index.js";
import routeConfigManager from "../../utils/routeConfig.js";

const activeIndex = ref(null);
const urlList = reactive([]);
const orderUrlList = computed(() =>
  urlList.sort((a, b) => {
    if (!a.time || isNaN(a.time)) return 1;
    if (!b.time || isNaN(b.time)) return -1;
    return parseInt(a.time) - parseInt(b.time);
  })
);

const jump = (item) => {
  const status = getLineStatus(item).status;
  activeIndex.value = item.order;
  if (status == "推荐" || status == "一般") {
    setTimeout(() => (window.location.href = item.url), 300);
  } else if (status == "测速中") {
    maskStatus.value = 1;
    setTimeout(() => {
      maskStatus.value = 0;
      activeIndex.value = null;
    }, 1500);
  } else if (status == "超时") {
    maskStatus.value = 2;
    setTimeout(() => {
      maskStatus.value = 0;
      activeIndex.value = null;
    }, 1500);
  }
};

let timeInterval = ref(null);
let configRefreshInterval = ref(null);

// function showApp() {
//   var winWidth = $(window).width();
//   if (winWidth < 750) {
//     $("#channel").css({
//       zoom: "+winWidth/774+",
//       transform: "scale(" + winWidth / 750 + ")",
//       "transform-origin": "top left",
//     });
//   } else {
//     $("#channel").css({ zoom: "", transform: "" });
//   }
// }
onMounted(async () => {
  // showApp();
  try {
    // 使用动态路由配置管理器加载配置
    const allRoutes = await routeConfigManager.getAllRoutes();
    
    if (allRoutes.length > 0) {
      // 清空现有列表
      urlList.splice(0, urlList.length);
      
      // 添加新的路由
      allRoutes.forEach((route) => {
        urlList.push(route);
      });
      
      console.log(`已加载 ${allRoutes.length} 个路由节点`);
      getFastestLinks();
      timeInterval = setInterval(getFastestLinks, config.INTERVAL);
      
      // 设置配置刷新间隔（每5分钟检查一次配置更新）
      configRefreshInterval = setInterval(async () => {
        try {
          const newRoutes = await routeConfigManager.getAllRoutes();
          // 检查是否有新的路由或路由有变化
          if (JSON.stringify(newRoutes.map(r => r.url).sort()) !== 
              JSON.stringify(urlList.map(r => r.url).sort())) {
            console.log("检测到路由配置更新，重新加载...");
            
            // 清空现有列表
            urlList.splice(0, urlList.length);
            
            // 添加新的路由
            newRoutes.forEach((route) => {
              urlList.push(route);
            });
            
            console.log(`已更新路由配置，共 ${newRoutes.length} 个节点`);
          }
        } catch (error) {
          console.error("检查配置更新失败:", error);
        }
      }, 5 * 60 * 1000); // 5分钟检查一次
      
    } else {
      console.warn("没有找到可用的路由配置");
    }
  } catch (error) {
    console.error("加载路由配置失败:", error);
  }
  // 查找是否已经存在 viewport meta 标签
  let meta = document.querySelector('meta[name="viewport"]');

  // 如果没有找到，则创建一个新的 meta 标签
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "viewport";
    document.head.appendChild(meta);
  }

  // 设置自定义的 viewport 内容
  meta.content =
    "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover";
});
onBeforeUnmount(() => {
  // 在页面卸载时，恢复为默认的 viewport 设置
  let meta = document.querySelector('meta[name="viewport"]');
  if (meta) {
    meta.content = "width=device-width, initial-scale=1.0";
  }
});

onUnmounted(() => {
  clearInterval(timeInterval);
  clearInterval(configRefreshInterval);
});

const router = useRouter();
const navigatorBack = () => router.back();

const getLineStatus = (item) => {
  const slowTime = config.TIMEOUT;
  const fastTime = slowTime / 2;
  if (item.time == null) return { status: "测速中", color: "#666" };
  if (item.time == "超时") return { status: "超时", color: "#FF3D20" };
  if (item.time <= fastTime) return { status: "推荐", color: "#52EF8E" };
  if (item.time > fastTime && item.time <= slowTime)
    return { status: "一般", color: "#FFB654" };
  return { status: "超时", color: "#FF3D20" };
};

const getTime = (item) => {
  if (item.time == null) return "测速中";
  return item.time && item.time != "超时" ? item.time + "ms" : "未知";
};

function getFastestLinks(topN = 5) {
  const superTask = new SuperTask(topN);
  urlList.forEach((item) => {
    superTask
      .addTask(() => fetchWithTiming(item.url, config.TIMEOUT))
      .then((result) => {
        if (result) {
          item.time = result.time === Infinity ? "超时" : result.time.toFixed();
          if (activeIndex.value == item.order) jump(item);
        }
      })
      .catch(() => {
        if (activeIndex.value == item.order) jump(item);
      });
  });
}

function fetchWithTiming(url, timeout = 5000) {
  return new Promise(async (resolve, reject) => {
    const controller = new AbortController();
    const signal = controller.signal;
    const start = performance.now();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      await fetch(url, { signal, mode: "no-cors" });
      const end = performance.now();
      resolve({ url, time: end - start });
    } catch (error) {
      if (error.name === "AbortError") {
        resolve({ url, time: Infinity });
      } else {
        setTimeout(() => {
          resolve({ url, time: Infinity });
        }, timeout);
      }
    } finally {
      clearTimeout(timeoutId);
    }
  });
}

const maskStatus = ref(0);
const loadingTip = ref("正在检测，请耐心等待");
const timeoutTip = ref("线路超时，请更换其他线路");

// 手动刷新配置的函数，可以在浏览器控制台调用
const refreshConfig = async () => {
  try {
    console.log("手动刷新路由配置...");
    routeConfigManager.clearCache();
    const allRoutes = await routeConfigManager.getAllRoutes();
    
    if (allRoutes.length > 0) {
      // 清空现有列表
      urlList.splice(0, urlList.length);
      
      // 添加新的路由
      allRoutes.forEach((route) => {
        urlList.push(route);
      });
      
      console.log(`配置已刷新，共 ${allRoutes.length} 个节点`);
      
      // 重新开始测速
      getFastestLinks();
    }
  } catch (error) {
    console.error("刷新配置失败:", error);
  }
};

// 将刷新函数暴露到全局，方便调试
if (typeof window !== 'undefined') {
  window.refreshRouteConfig = refreshConfig;
}
</script>

<style lang="scss" scoped>
.mask-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  background: #00000005;
  display: flex;
  align-items: center;
  justify-content: center;

  .mask-popover {
    padding: 30px;
    background: #d4d4d4aa;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .mask-icon {
      width: 32px;
      height: 32px;
    }

    .loading-icon {
      border: 3px solid #5883ff;
      border-top-color: transparent;
      border-radius: 100%;
    }

    .mask-text {
      margin-top: 10px;
    }
  }
}

.rotate {
  animation: rotating 0.75s linear infinite;
}

.inverse_rotate {
  animation: inverse_rotate 0.75s linear infinite;
}

.download {
  height: 100vh;
  width: 100vw;
  background: url(../../assets/images/bg.png);
  background-size: cover;

  .nav-container {
    padding: 20px;
    height: 20px;
  }

  .main-container {
    height: calc(100% - 60px);
    display: flex;
    align-items: top;
    justify-content: center;

    .title-container {
      display: flex;
      padding: 50px 0;
      .title {
        font-size: 25px;
        font-weight: 600;
        margin-top: 5px;
      }
      .info {
        font-size: 13px;
        margin-top: 10px;
        color: #999;
      }
      img {
        width: 83px;
        height: 88px;
        margin-right: 20px;
      }
    }

    .list-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;

      .line-item_active {
        background: #377bff !important;
        color: #fff;

        .line-ping {
          color: #fff !important;
        }
      }

      .line-item {
        display: flex;
        justify-content: space-between;
        background: #fff;
        border-radius: 10px;
        padding: 10px;
        cursor: pointer;

        &:hover {
          background: #377bff;
          color: #fff;

          .line-ping {
            color: #fff !important;
          }
        }

        .line-icon {
          width: 40px;
          height: 30px;
        }

        .line-content {
          width: calc(100% - 50px);

          .line-title {
            display: flex;
            justify-content: space-between;

            .line-status {
              color: var(--status-color);
              font-size: 12px;
              padding: 0 5px;
              border-radius: 5px;
              border: 1px solid var(--status-color);
            }
          }

          .line-ping {
            margin-top: 10px;
            color: #666;
            font-size: 12px;

            .line-ping-icon {
              width: 12px;
              height: 12px;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
}

@keyframes rotating {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes inverse_rotate {
  0% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(0);
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>

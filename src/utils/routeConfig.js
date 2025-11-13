/**
 * 动态路由配置管理
 * 支持从 index.json 动态加载路由配置
 */

class RouteConfigManager {
  constructor() {
    this.configUrl = '/index.json'
    this.cache = null
    this.lastUpdateTime = null
    this.cacheExpireTime = 2 * 60 * 1000 // 2分钟缓存
  }

  /**
   * 获取路由配置
   * @param {boolean} forceRefresh 是否强制刷新
   * @returns {Promise<Object>} 路由配置
   */
  async getConfig(forceRefresh = false) {
    const now = Date.now()
    
    // 检查缓存是否有效
    if (!forceRefresh && this.cache && this.lastUpdateTime && 
        (now - this.lastUpdateTime) < this.cacheExpireTime) {
      return this.cache
    }

    try {
      const response = await fetch(this.configUrl + '?t=' + now)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const config = await response.json()
      this.cache = config
      this.lastUpdateTime = now
      
      console.log('路由配置已更新:', config)
      return config
    } catch (error) {
      console.error('加载路由配置失败:', error)
      
      // 返回缓存配置或默认配置
      if (this.cache) {
        console.log('使用缓存配置')
        return this.cache
      }
      
      // 返回默认配置
      return this.getDefaultConfig()
    }
  }

  /**
   * 获取默认配置
   * @returns {Object} 默认配置
   */
  getDefaultConfig() {
    return {
      list: [
        {
          name: "默认线路",
          routes: [
            "https://www.v2ex.com/",
            "https://mvnrepository.com/",
            "https://www.baidu.com/",
            "https://packagist.org/explore/",
            "https://www.npmjs.com/",
            "https://wiki.haskell.org/"
          ]
        }
      ]
    }
  }

  /**
   * 获取所有路由列表（扁平化所有线路的路由）
   * @returns {Promise<Array>} 路由列表
   */
  async getAllRoutes() {
    const config = await this.getConfig()
    const allRoutes = []
    
    config.list?.forEach((routeGroup, groupIndex) => {
      routeGroup.routes?.forEach((route, routeIndex) => {
        allRoutes.push({
          url: route,
          time: null,
          order: allRoutes.length + 1,
          groupName: routeGroup.name,
          groupIndex: groupIndex,
          routeIndex: routeIndex
        })
      })
    })
    
    return allRoutes
  }

  /**
   * 清除缓存
   */
  clearCache() {
    this.cache = null
    this.lastUpdateTime = null
  }

  /**
   * 设置缓存过期时间
   * @param {number} time 过期时间（毫秒）
   */
  setCacheExpireTime(time) {
    this.cacheExpireTime = time
  }
}

// 创建单例实例
const routeConfigManager = new RouteConfigManager()

export default routeConfigManager


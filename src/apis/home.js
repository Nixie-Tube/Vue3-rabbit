import instance from '@/utils/http'

/**
 * @description: 获取banner图
 */
export function getBannerAPI() {
  return instance({
    url: 'home/banner'
  })
}

/**
 * @description: 获取新鲜好物
 */
export const findNewAPI = () => {
  return instance({
    url: '/home/new'
  })
}

export const findHotAPI = () => {
  return instance({
    url: '/home/hot'
  })
}

// 获取所有商品模块
export const getGoodsAPI = () => instance.get('/home/goods')

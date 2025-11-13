export const getAssetsFile = (name) => {
  const url = new URL(`../assets/img/${name}`, import.meta.url)
  return url.href
}

export function isMobile(){
  return navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i) ? true : false
}

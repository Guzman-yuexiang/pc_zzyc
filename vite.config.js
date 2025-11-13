import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import { copyFileSync, mkdirSync, existsSync } from 'fs'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 自定义插件：复制字体文件和favicon到assets目录
    {
      name: 'copy-assets',
      writeBundle() {
        const distDir = resolve(__dirname, 'dist')
        const assetsDir = resolve(distDir, 'assets')
        const fontsDir = resolve(distDir, 'assets/fonts')
        
        // 确保assets目录存在
        if (!existsSync(assetsDir)) {
          mkdirSync(assetsDir, { recursive: true })
        }
        
        // 确保fonts目录存在
        if (!existsSync(fontsDir)) {
          mkdirSync(fontsDir, { recursive: true })
        }
        
        // 复制字体文件
        const fontFiles = [
          'src/assets/font/fontawesome-webfont.ttf'
        ]
        
        fontFiles.forEach(fontFile => {
          const srcPath = resolve(__dirname, fontFile)
          const destPath = resolve(fontsDir, fontFile.split('/').pop())
          
          if (existsSync(srcPath)) {
            copyFileSync(srcPath, destPath)
            console.log(`✓ 复制字体文件: ${fontFile} -> ${destPath}`)
          }
        })
        
        // 复制favicon.ico到assets目录
        const faviconSrc = resolve(__dirname, 'public/favicon.ico')
        const faviconDest = resolve(assetsDir, 'favicon.ico')
        
        if (existsSync(faviconSrc)) {
          copyFileSync(faviconSrc, faviconDest)
          console.log(`✓ 复制favicon文件: public/favicon.ico -> ${faviconDest}`)
        }
        
        // 同时复制favicon.ico到dist根目录，确保HTML中的路径正确
        const faviconRootDest = resolve(distDir, 'favicon.ico')
        
        if (existsSync(faviconSrc)) {
          copyFileSync(faviconSrc, faviconRootDest)
          console.log(`✓ 复制favicon文件到根目录: public/favicon.ico -> ${faviconRootDest}`)
        }
        
        // 复制index.json到dist根目录
        const indexJsonSrc = resolve(__dirname, 'public/index.json')
        const indexJsonDest = resolve(distDir, 'index.json')
        
        if (existsSync(indexJsonSrc)) {
          copyFileSync(indexJsonSrc, indexJsonDest)
          console.log(`✓ 复制index.json文件: public/index.json -> ${indexJsonDest}`)
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    fs: {
      allow: ['..']
    }
  },
  // 确保public目录在开发模式下正确服务
  publicDir: 'public',
  build: {
    copyPublicDir: false,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // 字体文件放在fonts子目录
          if (assetInfo.name && assetInfo.name.endsWith('.ttf')) {
            return 'assets/fonts/[name][extname]'
          }
          if (assetInfo.name && assetInfo.name.endsWith('.woff')) {
            return 'assets/fonts/[name][extname]'
          }
          if (assetInfo.name && assetInfo.name.endsWith('.woff2')) {
            return 'assets/fonts/[name][extname]'
          }
          if (assetInfo.name && assetInfo.name.endsWith('.eot')) {
            return 'assets/fonts/[name][extname]'
          }
          if (assetInfo.name && assetInfo.name.endsWith('.svg')) {
            return 'assets/fonts/[name][extname]'
          }
          // favicon.ico放在assets目录下
          if (assetInfo.name && assetInfo.name.endsWith('.ico')) {
            return 'assets/[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  },
  assetsInclude: ['**/*.ttf', '**/*.woff', '**/*.woff2', '**/*.eot', '**/*.svg']
})

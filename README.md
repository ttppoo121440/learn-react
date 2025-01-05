# learn-react TypeScript tailwind Shadcn 

![Version](https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000)

### 🏠 [Homepage](https://ttppoo121440.github.io/learn-react/)

## 安裝

```sh
npm install --force
```

## 使用

在安裝完成後，你可以使用以下命令來啟動開發伺服器：

```sh
npm start
```

## 測試


```sh
npm run test
```

## 使用說明

### 在 tsx 中使用 `@/`

在專案中，你可以使用 `@/` 作為路徑別名，來簡化引入檔案的路徑。這樣可以避免使用相對路徑，讓你的代碼更乾淨。例如：

```TypeScript
import MyComponent from '@/components/MyComponent';
```

`@` 別名在 `vite.config.js` 中配置，默認指向 `src` 目錄。

### `.env.production` 說明

`.env.production` 檔案用於設定生產環境的變數。請注意，在將專案上傳至 GitHub 或其他公共儲存庫之前，請確保不洩漏任何敏感資訊。如果需要在專案中使用這些變數，請確保在上傳之前替換適當的值。

### Tailwind CSS 客製化

在 `tailwind.config.js` 中，你可以客製化 Tailwind 的主題和插件。以下是一些常見的客製化範例：

- **自訂顏色**：

  ```javascript
  // tailwind.config.js
  module.exports = {
    theme: {
      extend: {
        colors: {
          primary: '#3490dc',
          secondary: '#ffed4a',
        },
      },
    },
  };
  ```

  在 HTML 文件中使用這些顏色：

  ```html
  <body class="bg-primary text-white">
    <header class="bg-secondary p-4">
      <h1 class="text-3xl">歡迎來到我們的網站</h1>
    </header>
    <main class="p-8">
      <p class="text-primary">這是一些自訂顏色的文字。</p>
    </main>
  </body>
  ```

## GitHub Pages 部署

要將專案部署到 GitHub Pages，請按照以下步驟操作：

1. 在 `package.json` 文件中，將 `"homepage"` 設置為你的 GitHub Pages URL。例如：

   ```json
   "homepage": "https://帳號.github.io/倉庫名稱"
   ```

   請將 `"帳號"` 替換為你的 GitHub 用戶名，`"倉庫名稱"` 替換為你的 GitHub 倉庫名稱。

2. 使用以下命令來部署專案：

   ```sh
   npm run deploy
   ```

   這會將 `dist` 目錄中的檔案部署到 GitHub Pages。

## 資料夾結構

```plaintext
│  .env                     # 環境變數檔案，用於存儲開發環境的配置變數
│  .env.production          # 環境變數檔案，用於存儲生產環境的配置變數
│  .eslintcache             # ESLint 快取檔案，用於加速 ESLint 的執行
│  .eslintrc.cjs            # ESLint 配置檔案，定義 ESLint 的規則和設定
│  .gitignore                # Git 忽略檔案，用於指定不需要提交到 Git 的檔案和資料夾
│  .prettierrc               # Prettier 配置檔案，用於定義程式碼格式化規則
│  .swcrc                   # SWC 配置檔案，用於定義 SWC 編譯器的設定
│  index.html               # 專案的 HTML 入口檔案
│  package-lock.json        # NPM 鎖檔案，用於確保每次安裝時依賴版本一致
│  package.json             # 專案的 NPM 配置檔案，包含專案的依賴和腳本
│  postcss.config.js        # PostCSS 配置檔案，用於定義 PostCSS 插件和設定
│  README.md                # 專案的說明檔案，用於提供專案概述和使用說明
│  tailwind.config.js       # Tailwind CSS 配置檔案，用於定義 Tailwind 的主題和插件
│  tsconfig.json            # TypeScript 配置檔案，用於定義 TypeScript 編譯器選項
│  tsconfig.node.json       # Node.js 的 TypeScript 配置檔案，用於 Node.js 環境下的 TypeScript 設定
│  vite.config.ts           # Vite 配置檔案，用於定義 Vite 建置和開發設定
│
├─.vscode
│      settings.json        # VS Code 的設定檔案，用於定義專案的開發環境配置
│
└─src
    │  App.tsx              # React 應用的根組件
    │  index.css            # 專案的全域 CSS 樣式檔案
    │  main.tsx             # 應用的入口檔案，初始化 React 應用
    │  typings.d.ts         # TypeScript 類型定義檔案，用於定義專案中使用的類型
    │  vite-env.d.ts        # Vite 環境的 TypeScript 類型定義檔案
    │
    ├─assets
    │  └─images
    │          favicon.svg  # 網站的 favicon 圖示
    │          logo.svg     # 專案的 logo 圖示
    │
    ├─components            # 存放 React 組件的目錄
    └─pages                 # 存放頁面組件的目錄
```

## 作者

👤 **兔子**

- Github: [@ttppoo121440](https://github.com/ttppoo121440)

```

```

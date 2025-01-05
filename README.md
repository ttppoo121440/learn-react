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


## 作者

👤 **兔子**

- Github: [@ttppoo121440](https://github.com/ttppoo121440)

```

```

# Ching Xin Tennis Association Website

清心網球協會官方網站（對外介紹用的靜態官網）。

線上網址：https://chingxin-website.vercel.app

## 與 chingxin-tennis 的關係 / Relationship to chingxin-tennis

本 repo（`chingxin-website`）是**對外公開的靜態官網**，純 HTML/CSS。

另一個 repo `chingxin-tennis` 是**完全不同的專案**——清心球場的營運管理「後台系統」（Vite + React + TypeScript + Firebase + LINE LIFF），與本官網無關。

兩者請勿混用：官網的檔案只放在 `chingxin-website`，後台的程式只放在 `chingxin-tennis`。

## 專案類型 / Project Type

Static HTML/CSS website（純靜態網站，無需建置步驟 / no build step）。

React 元件透過 CDN 載入，`.jsx` 由瀏覽器端的 Babel 即時轉譯，因此整個專案直接託管即可運作。

## 部署方式 / Deployment

GitHub → Vercel

1. 將本 repo 推送到 GitHub。
2. 在 Vercel 匯入該 GitHub repo。
3. 無需任何建置設定（Framework Preset 選 **Other**，Build Command 留空，Output Directory 留空）。
4. 之後每次 push 到 GitHub，Vercel 會自動重新部署。

> 本機測試請使用簡易伺服器（例如 `python3 -m http.server`），不要直接用 `file://` 開啟，否則 React 調整面板無法運作。

## 正確根目錄結構 / Correct Root Structure

```
index.html      ← 主頁，必須位於 repo 根目錄
css/            ← 樣式表 (tokens / site / chapters / mobile)
photos/         ← 網站照片 + images.json 照片對照表
brand/          ← 品牌圖檔
image-slot.js   ← 圖片插槽邏輯
tweaks-app.jsx  ← React 調整面板
tweaks-panel.jsx
```

## ⚠️ 重要 / Important

**`index.html` 必須位於 repo root，不可再多包一層資料夾。**

若 `index.html` 被包進子資料夾（例如 `chingxin-website/chingxin-website/index.html`），Vercel 會找不到首頁、部署後出現 404。請確認 repo 最上層直接就是 `index.html`。

## 更換照片 / Replacing Photos

最簡單：把 `photos/` 內的圖片換成「同樣檔名」覆蓋即可。
進階：編輯 `photos/images.json`，把檔名改成新檔名（檔案需放在 `photos/` 內）。

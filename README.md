[README.md](https://github.com/user-attachments/files/34405265/README.md)
# THE COLLECTION — 陳宥彤 Chen You Tong

> film production · photography · words & more..

陳宥彤的個人作品集網站。收錄影視製片經歷、自己拍攝剪輯的短片、生活照片，以及關於創作的一些文字。

🔗 **網站：** https://a880201-jpg.github.io/yutongsite/

---

## 關於這個網站

大學讀廣電，畢業後一直在影視圈擔任製片組，習慣站在「執行者」的位置。2026 年春天的一趟歐洲旅行之後，才發現所有自己在意、並用某種形式記錄下來的事物，就已經是屬於自己的作品。

這個網站就是那份「觀察紀錄（Observation Log）」的集合。

## 網站內容

| 區塊 | 錨點 | 內容 |
|---|---|---|
| **Hero** | `#top` | 封面照片與標題 THE COLLECTION |
| **Profile** | `#words` | 兩頁可切換：個人簡介／工作經歷，以及一篇關於「開始創作」的隨筆 |
| **Works** | `#credits` | 2020–2028 參與的 9 部影視作品海報輪播（電影、影集、短片），可連到預告片 |
| **Films** | `#films` | 3 支自己導、拍、剪的短片，內嵌 YouTube 播放器與播放清單 |
| **Photographs** | `#photographs` | 16 張底片與數位照片，瀑布流排版，點擊可放大瀏覽 |
| **Contact** | `#contact` | 聯絡方式 |

### 參與作品（節選）

- 電影《周處除三害》— 製片助理
- 電影《小曉》— 製片助理
- 電影《做工的人》— 製片助理
- 影集《不良執念清除師》（愛奇藝）— 製片助理
- 電視電影《洞裡的月亮》— 製片助理
- 花蓮文化局宣傳短片《尋找回憶的金木君》— 場景助理
- 屏東電影節短片《南國夢》、世新大學畢業製作《橙色邊境》— 製片
- 國際串流平台影集 — 製作協調（預計 2028 上映）

## 互動功能

- **單頁切換瀏覽**：導覽列一次只顯示一個區塊，支援網址錨點直接開啟（例如 `/#films`），並記住上次瀏覽的位置
- **海報輪播**：點擊箭頭或用鍵盤 `←` `→` 切換作品
- **短片播放器**：點擊播放清單即可在原地播放，使用 `youtube-nocookie.com` 嵌入
- **照片燈箱**：點擊照片放大，`←` `→` 切換、`Esc` 關閉
- **文章切換**：Profile 區塊支援鍵盤與手機左右滑動
- **響應式設計**：桌機、平板、手機皆可瀏覽
- **細節**：底片顆粒質感覆蓋層、咖啡色系強調色

## 專案結構

```
yutongsite/
├── index.html            # 網站主頁（版面、內容與互動邏輯）
├── support.js            # 頁面元件的執行環境
├── contact-widget.js     # 「聯繫我」按鈕與聯絡視窗
├── _ds/                  # 設計系統：字體、色彩、字級、版面 tokens 與共用元件
├── assets/
│   ├── hero-street.jpg   # 封面照片
│   ├── posters/          # 參與作品海報
│   ├── films/            # 短片封面縮圖
│   └── photos/           # 攝影作品
├── netlify.toml          # Netlify 部署設定
└── .nojekyll             # 讓 GitHub Pages 略過 Jekyll，保留 _ds 資料夾
```

## 本機預覽

不需要安裝任何套件，只要開一個靜態伺服器：

```bash
git clone https://github.com/a880201-jpg/yutongsite.git
cd yutongsite
python3 -m http.server 8000
```

然後打開 http://localhost:8000

> 直接雙擊 `index.html` 可能會因瀏覽器的本機檔案限制而無法正常載入，建議用上面的方式。

## 部署

- **GitHub Pages**：從 `main` 分支根目錄部署，推上去即自動更新。
- **Netlify**：`netlify.toml` 中有首頁轉址設定。

## 版權聲明

© 2026 陳宥彤 Chen You Tong. All rights reserved.

網站中的照片、短片、文字均為本人原創作品，**未經授權請勿轉載或使用**。
參與作品之海報與預告片版權屬各原出品公司所有。

## 聯絡

📮 a880201@gmail.com

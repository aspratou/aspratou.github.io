export const SITE_SETTINGS = {
  title: "Rato", // ブログのタイトル
  description: "日々のアウトプットや取り組みをまとめる個人データベース", // 検索結果に表示される説明文
  owner: "Rato", // サイトの所有者名
  googleAnalyticsId: "G-ZJF7V1KPCE", 
  googleSiteVerification: "nxCYP2ieh7lmr3cZhQDHm03_bH9Or3al_Zk6Z3G5Ing", 
  ogImages:
    "/images/thumbnail/362059.jpg", // プレビューサムネ
  socials: [
    {
      icon: "github",
      label: "GitHub",
      url: "https://github.com/aspratou", // あなたのGitHub URL
      handle: "aspratou",
    },
    {
      icon: "youtube",
      label: "YouTube",
      url: "https://youtube.com/", // チャンネルのURLを入れる
      handle: "YouTube Channel",
    },
  ],
};


export const header = [
  {
    name: "Diary",
    url: "/diary",
  },
  {
    name: "Book",
    url: "/book",
  },
  {
    name: "Game",
    url: "/game",
  },
  {
    name: "English",
    url: "/english",
  },
  {
    name: "MMD",
    url: "/mmd",
  },
  {
    name: "Contact",
    url: "/contact",
  },
  {
    name: "About",
    url: "/about",
  },
];

export const footer = [
  {
    title: "Content", // 💡 メインのナビゲーション
    links: [
      {
        name: "Diary",
        url: "/diary",
      },
      {
        name: "Book",
        url: "/book",
      },
      {
        name: "Game",
        url: "/game",
      },
      {
        name: "English",
        url: "/english",
      },
      {
        name: "MMD",
        url: "/mmd",
      },
    ],
  },
  {
    title: "Legal", // 💡 Resourcesから「Legal」に変更し、お気に入りの位置を維持
    links: [
      {
        name: "Contact",
        url: "/contact",
      },
      {
        name: "Privacy Policy",
        url: "/legal/privacy-policy", // テンプレート内のプライバシーポリシーのURL
      },
      {
        name: "Terms of Service", // 💡 新しくここに並びとして追加
        url: "/legal/terms-of-service", // テンプレート内の利用規約のURL
      },
    ],
  },
  {
    title: "Links", // 💡 3列目（右側）に新設
    links: [
      {
        name: "GitHub",
        url: "https://github.com/aspratou",
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/@genshin_english", // 後ほど実際のURLに差し替え可能です
      },
    ],
  },
];
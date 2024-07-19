const CONFIG = {

  LANDING_HEADER_BUTTON_1_TITLE: 'Github开源',
  LANDING_HEADER_BUTTON_1_URL: 'https://github.com/tangly1024/NotionNext',

  LANDING_HEADER_BUTTON_2_TITLE: '作者博客',
  LANDING_HEADER_BUTTON_2_URL: 'https://blog.tangly1024.com/',

  // 首页大图英雄板块
  LANDING_HERO_TITLE_1: 'NotionNext',
  LANDING_HERO_P_1: '快速搭建独立站、轻松放大品牌价值！',
  LANDING_HERO_BUTTON_1_TEXT: '开始体验',
  LANDING_HERO_BUTTON_1_LINK: 'https://docs.tangly1024.com/article/vercel-deploy-notion-next',
  LANDING_HERO_BUTTON_2_TEXT: '了解更多',
  LANDING_HERO_BUTTON_2_LINK: 'https://docs.tangly1024.com/about',
  LANDING_HERO_VIDEO_IMAGE: '/images/home.png',
  //   HERO_VIDEO_URL: '/videos/video.mp4',
  LANDING_HERO_VIDEO_IFRAME: '//player.bilibili.com/player.html?aid=913088616&bvid=BV1fM4y1L7Qi&cid=1187218697&page=1&&high_quality=1',
  LANDING_HERO_VIDEO_TIPS: 'Watch the full video (2 min)',

  // 特性介绍
  LANDING_FEATURES_HEADER_1: '创建初心',
  LANDING_FEATURES_HEADER_1_P: "当初这么想着做这么一个知识库？<br/>曾经，我们也是被困于<strong class='font-bold text-red-500'>信息茧房</strong><strong class='font-bold  text-red-500'>傲慢</strong>之人，是<strong class='font-bold text-red-500'>迷茫</strong>在<strong class='font-bold text-red-500'>人生长河</strong>中挣扎的人儿;<br/>现在，我们跳出了茧房，向同样的人伸出援手",
  LANDING_FEATURES_HEADER_2: '不刷短视频好无聊，不知道干嘛？知识库会给你答案',
  LANDING_FEATURES_HEADER_2_P: '精读文章，专业课程，高分电影，趣味软件&网站，必看书籍，心理咨询，同好友人，助你逃离短视频的枷锁',
  LANDING_FEATURES_CARD_1_TITLE: '简单快速的系统',
  LANDING_FEATURES_CARD_1_P: '在Notion中写下一篇文章，内容立刻在您的网站首页中呈现给互联网',
  LANDING_FEATURES_CARD_2_TITLE: '高效传播的媒介',
  LANDING_FEATURES_CARD_2_P: '优秀的SEO、快速的响应速度，让您的产品和宣传触达到更多的受众',
  LANDING_FEATURES_CARD_3_TITLE: '人性化的定制工具',
  LANDING_FEATURES_CARD_3_P: '多款主题供您挑选，可以搭建各种不同风格和作用的网站，更多的主题正在陆续加入中。',

  // 特性介绍2
  LANDING_FEATURES_BLOCK_HEADER: '解决方案',
  LANDING_FEATURES_BLOCK_P: '短视频当道，大数据横向的时代，人人都被信息茧房所包裹，这个知识库将帮您打破信息茧房，带给你全新的认知，与众不同的思维，跨越阶级的机会。<br/>您还在等什么呢？',
  LANDING_FEATURES_BLOCK_1_TITLE: '100＋精读文章',
  LANDING_FEATURES_BLOCK_1_P: '深度长文帮您了解商业大佬的思维，医学博士养生技巧，心理大师的沟通手段',
  LANDING_FEATURES_BLOCK_2_TITLE: '专业课程',
  LANDING_FEATURES_BLOCK_2_P: '多样的课程让您找到自己的兴趣所在',
  LANDING_FEATURES_BLOCK_3_TITLE: '全网导航',
  LANDING_FEATURES_BLOCK_3_P: '多元的网站和丰富的软件资源，解决您的网络资源烦恼',
  LANDING_FEATURES_BLOCK_4_TITLE: '高分电影',
  LANDING_FEATURES_BLOCK_4_P: '放松身心的同时感受不同人生悲欢离合，提升心境的同时得到教育启发',
  LANDING_FEATURES_BLOCK_5_TITLE: '茴香图书',
  LANDING_FEATURES_BLOCK_5_P: '书是知识的载体，记录漫长历史遗留下来的智慧，为你迷茫的前路拨云散雾',
  LANDING_FEATURES_BLOCK_6_TITLE: '开始写博客吧',
  LANDING_FEATURES_BLOCK_6_P: 'NotionNext，助您轻松开始写作',

  // 感言
  LANDING_TESTIMONIALS_HEADER: '已收录精读文章100＋，资源网站若干，精品书籍上百已经大量高分电影',
  LANDING_TESTIMONIALS_P: '知识库内容涵盖教育、国学、养生、IT、电子、软件、自媒体、商业、艺术爱好、等等各中内容',

  LANDING_TESTIMONIALS_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
  LANDING_TESTIMONIALS_NICKNAME: 'Ryan_G',
  LANDING_TESTIMONIALS_ID: 'Ryan`Log 站长',
  LANDING_TESTIMONIALS_SOCIAL_NAME: '@Gaoran',
  LANDING_TESTIMONIALS_SOCIAL_URL: 'https://blog.gaoran.xyz/',
  LANDING_TESTIMONIALS_WORD: '“ 感谢大佬的方法。之前尝试过Super、Potion等国外的第三方平台，实现效果一般，个性化程度远不如这个方法，已经用起来了！ “',

  LANDING_POST_REDIRECT_ENABLE: process.env.NEXT_PUBLIC_POST_REDIRECT_ENABLE || false, // 是否开启文章地址重定向 ； 用于迁移旧网站域名
  LANDING_POST_REDIRECT_URL: process.env.NEXT_PUBLIC_POST_REDIRECT_URL || 'https://blog.tangly1024.com', // 重定向网站地址

  LANDING_PRICING_TITLE: '价格表',
  LANDING_PRICING_P: '购买方式还未确定，价格暂时仅供参考，请勿购买！！！',

  LANDING_PRICING_1_TITLE: '月度会员',
  LANDING_PRICING_1_PRICE: '30/月',
  LANDING_PRICING_1_CONTENT: '项目源代码,部署教程,不定时技术答疑',
  LANDING_PRICING_1_BUTTON: '立即购买',
  LANDING_PRICING_1_URL: 'https://docs.tangly1024.com/about',

  LANDING_PRICING_2_TITLE: '季度会员',
  LANDING_PRICING_2_PRICE: '$55/季度',
  LANDING_PRICING_2_CONTENT: '项目源代码,部署教程,长期技术答疑,代码升级合并,内部社群',
  LANDING_PRICING_2_BUTTON: '立即购买',
  LANDING_PRICING_2_URL: 'https://tangly1024.lemonsqueezy.com/checkout/buy/0adb9153-0799-4f51-91aa-1f06391ea4e0',

  LANDING_PRICING_3_TITLE: '年度会员',
  LANDING_PRICING_3_PRICE: '$169/年',
  LANDING_PRICING_3_CONTENT: '项目源代码,部署教程,VIP技术咨询,代码升级合并,内部社群,定制功能开发,SEO优化',
  LANDING_PRICING_3_BUTTON: '立即购买',
  LANDING_PRICING_3_URL: 'https://tangly1024.lemonsqueezy.com/checkout/buy/df924d66-09dc-42a4-a632-a6b0c5cc4f28',

  LANDING_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_LANDING_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG

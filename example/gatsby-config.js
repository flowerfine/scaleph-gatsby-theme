module.exports = {
  plugins: [
    {
      resolve: '@scaleph/scaleph-gatsby-theme',
      // options: {
      //   GATrackingId: `UA-148148901-11`,
      // },
    },
  ],
  siteMetadata: {
    title: 'Scaleph',
    description:
      '基于 Flink 和 Kubernetes 的开放数据平台，支持基于 SeaTunnel 的拖拉拽数据集成和 YARN 与 Kubernetes 集群上的 Flink 任务管理 - Open data platform based on Flink and Kubernetes, supports web-ui click-and-drop data integration with SeaTunnel on Flink, manage flink jar job both YARN and Kubernetes',
    siteUrl: 'https://flowerfine.github.io/scaleph-website/',
    logo: {
      img: 'https://github.com/flowerfine/scaleph/raw/e9151fec13875881c38fece98588e9dee371575f/scaleph-ui-react/public/scaleph.svg',
      link: 'https://flowerfine.github.io/scaleph-website/',
    },
    logoUrl:
      'https://github.com/flowerfine/scaleph/raw/e9151fec13875881c38fece98588e9dee371575f/scaleph-ui-react/public/scaleph.svg',
    githubUrl: 'https://github.com/flowerfine/scaleph/',
    docsUrl: 'https://github.com/flowerfine/scaleph-website/',
    navs: [
      {
        slug: 'docs/develop/how-to-contribute',
        title: {
          zh: '开发文档',
          en: 'Development',
        },
      },
    ],
    docs: [
      {
        slug: 'develop/sample',
        title: {
          zh: '开发案例',
          en: 'Develop Sample',
        },
        order: 4,
      },
    ],
    ecosystems: [
      {
        name: {
          zh: '插件市场',
          en: 'Extension Market',
        },
        url: '#',
      },
    ],
    redirects: [],
    showGithubCorner: true, // 是否展示角落的 GitHub 图标
    showGithubStars: true,
    showLanguageSwitcher: true, // 用于定义是否展示语言切换
    showSearch: true,
  },
};

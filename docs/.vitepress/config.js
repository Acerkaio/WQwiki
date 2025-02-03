export default {
    title: 'szzjz WiKi',
    description: '漫剪 WiKi(Anime Editing WiKi)',
    lastUpdated: true,
    themeConfig: {
        siteTitle: "szzjz WiKi",
        logo: "/310410.webp",
        
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Made by Acerkaio with ♡'
        },      
        nav: [
            { text: "基础知识", link: "/Basicknowledge/" },
            { text: "搜索和非确定性算法", link: "/SearchRandom/" },
            { text: "数据结构", link: "/DataStructure/" },
            { text: "图论", link: "/Graph/" },
            { text: "数学", link: "/Math/" },
            { text: "关于 szzjz wiki", link: "" },
            { text: "szzjz", link: "https://www.luogu.com.cn/user/310410" },
            
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/Acerkaio/szzjz" },
        ],
        sidebar: {
            "/Basicknowledge/": [
                {
                    text: "基础知识",
                    link: "/Basicknowledge/",
                },
                {
                    text: "c++语法",
                    link: "/Basicknowledge/c++语法",
                },
                {
                    text: "linux_related",
                    link: "/Basicknowledge/linux_related",
                },
                {
                    text: "代码的值域问题",
                    link: "/Basicknowledge/代码的值域问题",
                },
            ],
            "/DataStructure/": [
                {
                    text: "数据结构",
                    link: "/DataStructure/",
                },
                {
                    text: "数据结构问题",
                    link: "/DataStructure/数据结构问题",
                },
                {
                    text: "单调结构",
                    link: "/DataStructure/单调结构",
                },
                {
                    text: "非套路分治",
                    link: "/DataStructure/非套路分治",
                },
                {
                    text: "处理带限制的点",
                    link: "/DataStructure/处理带限制的点",
                },
                {
                    text: "st algorithm.cpp",
                    link: "/DataStructure/st_algorithm.cpp.html",
                },
            ],
            "/Math/": [
                {
                    text: "数学",
                    link: "/Math/",
                },
                {
                    text: "运算与进制",
                    link: "/Math/运算与进制",
                },
                {
                    text: "位运算的常见技巧",
                    link: "/Math/位运算的常见技巧",
                },
                {
                    text: "number theory",
                    link: "/Math/number_theory",
                },
                {
                    text: "鸽巢原理",
                    link: "/Math/鸽巢原理",
                },
                {
                    text: "线性代数",
                    link: "/Math/线性代数",
                },
                {
                    text: "多项式",
                    link: "/Math/多项式",
                },
                {
                    text: "数学杂项",
                    link: "/Math/数学杂项",
                },
            ],
            "/SearchRandom/": [
                {
                    text: "搜索和非确定性算法",
                    link: "/SearchRandom/",
                },
                {
                    text: "剪枝",
                    link: "/SearchRandom/剪枝",
                },
                {
                    text: "hash",
                    link: "/SearchRandom/hash",
                },
                {
                    text: "随机化算法",
                    link: "/SearchRandom/随机化算法",
                },
                {
                    text: "经典问题",
                    link: "/SearchRandom/经典问题",
                },
            ],
            "/Graph/": [
                {
                    text: "图论",
                    link: "/Graph/",
                },
                {
                    text: "tree related",
                    link: "/Graph/tree_related",
                },
                {
                    text: "最小生成树",
                    link: "/Graph/最小生成树",
                },
                {
                    text: "最短路相关",
                    link: "/Graph/最短路相关",
                },
                {
                    text: "连通性相关",
                    link: "/Graph/连通性相关",
                },
                {
                    text: "常见建模",
                    link: "/Graph/常见建模",
                },
                {
                    text: "图论杂项",
                    link: "/Graph/图论杂项",
                },
                {
                    text: "k-bfs.cpp",
                    link: "/Graph/k-bfs.cpp.html",
                },
                {
                    text: "kruskal.cpp",
                    link: "/Graph/kruskal.cpp.md",
                },
            ],
        },
    },
}




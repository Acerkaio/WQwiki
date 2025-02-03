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
            { text: "数据结构", link: "/DataStructure/" },
            { text: "数学", link: "/Math/" },
            {
                text: "软件教程",
                items: [
                    {
                        items: [
                            { text: "Alight Motion", link: "/item-A1" },
                            { text: "NodeVideo", link: "/item-A2" },
                        ],
                    },
                    {
                        items: [
                            { text: "Adobe Premiere Pro", link: "/item-B1" },
                            { text: "Adobe After Effects", link: "/item-B2" },
                        ],
                    },
                ],
            },
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
        },
    },
}




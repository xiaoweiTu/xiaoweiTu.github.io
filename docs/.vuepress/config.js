module.exports = {
    title: '程序边缘', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '探究程序的真理', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', 
            { rel: 'icon', href: '/4.png' }
            //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
        ],  
    ],
    themeConfig: {
            logo: '/4.png',  //网页顶端导航栏左上角的图标
            
            //顶部导航栏
            nav: [           
                //格式一：直接跳转，'/'为不添加路由，跳转至首页
                { text: '首页', link: '/' },    
                
                //格式二：添加下拉菜单，link指向的文件路径
                {
                    text: '程序',  //默认显示        
                    ariaLabel: '程序',   //用于识别的label
                    items: [
                        { text: '文章', link: '/pages/folder1/test1.md' },  
                        //点击标签会跳转至link的markdown文件生成的页面
                        { text: '琐碎', link: '/pages/folder2/test4.md' },
                    ]
                },
                {
                    text: '读书',  //默认显示        
                    ariaLabel: '程序',   //用于识别的label
                    items: [
                        { text: '文章', link: '/pages/folder1/test1.md' },  
                        //点击标签会跳转至link的markdown文件生成的页面
                        { text: '琐碎', link: '/pages/folder2/test4.md' },
                    ]
                },
                {
                    text: '写作',  //默认显示        
                    ariaLabel: '程序',   //用于识别的label
                    items: [
                        { text: '文章', link: '/pages/folder1/test1.md' },  
                        //点击标签会跳转至link的markdown文件生成的页面
                        { text: '琐碎', link: '/pages/folder2/test4.md' },
                    ]
                },
                //格式三：跳转至外部网页，需http/https前缀
                { text: 'Github', link: 'https://github.com/dwanda' },
            ],
        
        //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
        sidebar: {
            '/pages/folder1/':[         
                {
                    title: '测试菜单1',   // 一级菜单名称
                    collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                    sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                    children: [
                        ['test1.md', '子菜单1'],  //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
                        ['test3.md', '子菜单2']
                    ]
                },
                {
                    title: '测试菜单2',
                    collapsable: false, 
                    children: [
                        ['test2.md', '子菜单1']
                    ]
                }
            ],
            
            //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
        }
    }
}
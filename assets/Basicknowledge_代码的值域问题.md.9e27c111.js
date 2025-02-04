import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const h=JSON.parse('{"title":"代码的值域问题","description":"","frontmatter":{},"headers":[],"relativePath":"Basicknowledge/代码的值域问题.md","filePath":"Basicknowledge/代码的值域问题.md","lastUpdated":1738591681000}'),l={name:"Basicknowledge/代码的值域问题.md"},p=e(`<h1 id="代码的值域问题" tabindex="-1">代码的值域问题 <a class="header-anchor" href="#代码的值域问题" aria-label="Permalink to &quot;代码的值域问题&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">c++变量类型及对应范围：</span></span>
<span class="line"><span style="color:#e1e4e8;">	char			[-128,127]</span></span>
<span class="line"><span style="color:#e1e4e8;">	unsigned char	[0,255]</span></span>
<span class="line"><span style="color:#e1e4e8;">	short			[-2^15,2^15-1]</span></span>
<span class="line"><span style="color:#e1e4e8;">	unsigned short	[0,65535]</span></span>
<span class="line"><span style="color:#e1e4e8;">	int				[-2^31,2^31-1] &gt;=[-2e9,2e9]</span></span>
<span class="line"><span style="color:#e1e4e8;">	unsigned int	[0,2^32-1]</span></span>
<span class="line"><span style="color:#e1e4e8;">	long long		[-2^63,2^63-1] &gt;=[-9e18,9e18]</span></span>
<span class="line"><span style="color:#e1e4e8;">	ull				[0,2^64-1]</span></span>
<span class="line"><span style="color:#e1e4e8;">	double			有效位数16位</span></span>
<span class="line"><span style="color:#e1e4e8;">	long double		有效位数19位</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">模意义下运算：</span></span>
<span class="line"><span style="color:#e1e4e8;">	首先，在写代码时应非常清楚两个数相乘的值域，开对应的范围</span></span>
<span class="line"><span style="color:#e1e4e8;">	对于任何一个新给出的数据，都要取模</span></span>
<span class="line"><span style="color:#e1e4e8;">	如果要优化取模次数，一定要确认最后取了模</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">一般意义下的运算</span></span>
<span class="line"><span style="color:#e1e4e8;">	在开每一个变量/数组之前，都必须估计其范围：</span></span>
<span class="line"><span style="color:#e1e4e8;">		如果比较显然或之前算过，可以直接开出</span></span>
<span class="line"><span style="color:#e1e4e8;">		否则，必须在注释中打出其范围</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">		这里注意，实际答案取值范围是所有可能算出的值的范围</span></span>
<span class="line"><span style="color:#e1e4e8;">	进行运算之前，都必须估计其结果范围：</span></span>
<span class="line"><span style="color:#e1e4e8;">		直接用两个变量的范围运算一下即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		如果不太显然，就要打在注释中</span></span>
<span class="line"><span style="color:#e1e4e8;">	分析起来比较麻烦的：</span></span>
<span class="line"><span style="color:#e1e4e8;">		线段树每个节点的tag：</span></span>
<span class="line"><span style="color:#e1e4e8;">			注意到tag的每个历史版本值再加上储存值都是实际答案取值范围</span></span>
<span class="line"><span style="color:#e1e4e8;">			所以容易分析出其tag就是最大变化量，计算即可</span></span>
<span class="line"><span style="color:#e1e4e8;">			</span></span>
<span class="line"><span style="color:#e1e4e8;">			对于一般的tag，需要具体计算其值域</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">特别注意：</span></span>
<span class="line"><span style="color:#e1e4e8;">	在打模板时不能图快，一定要特别注意上述易错点</span></span>
<span class="line"><span style="color:#e1e4e8;">	设定变量类型不要图快，一定要稍微考虑考虑</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	实在是暂时不好分析的，可以先打出注释表示没有分析</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">c++变量类型及对应范围：</span></span>
<span class="line"><span style="color:#24292e;">	char			[-128,127]</span></span>
<span class="line"><span style="color:#24292e;">	unsigned char	[0,255]</span></span>
<span class="line"><span style="color:#24292e;">	short			[-2^15,2^15-1]</span></span>
<span class="line"><span style="color:#24292e;">	unsigned short	[0,65535]</span></span>
<span class="line"><span style="color:#24292e;">	int				[-2^31,2^31-1] &gt;=[-2e9,2e9]</span></span>
<span class="line"><span style="color:#24292e;">	unsigned int	[0,2^32-1]</span></span>
<span class="line"><span style="color:#24292e;">	long long		[-2^63,2^63-1] &gt;=[-9e18,9e18]</span></span>
<span class="line"><span style="color:#24292e;">	ull				[0,2^64-1]</span></span>
<span class="line"><span style="color:#24292e;">	double			有效位数16位</span></span>
<span class="line"><span style="color:#24292e;">	long double		有效位数19位</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">模意义下运算：</span></span>
<span class="line"><span style="color:#24292e;">	首先，在写代码时应非常清楚两个数相乘的值域，开对应的范围</span></span>
<span class="line"><span style="color:#24292e;">	对于任何一个新给出的数据，都要取模</span></span>
<span class="line"><span style="color:#24292e;">	如果要优化取模次数，一定要确认最后取了模</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">一般意义下的运算</span></span>
<span class="line"><span style="color:#24292e;">	在开每一个变量/数组之前，都必须估计其范围：</span></span>
<span class="line"><span style="color:#24292e;">		如果比较显然或之前算过，可以直接开出</span></span>
<span class="line"><span style="color:#24292e;">		否则，必须在注释中打出其范围</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">		这里注意，实际答案取值范围是所有可能算出的值的范围</span></span>
<span class="line"><span style="color:#24292e;">	进行运算之前，都必须估计其结果范围：</span></span>
<span class="line"><span style="color:#24292e;">		直接用两个变量的范围运算一下即可</span></span>
<span class="line"><span style="color:#24292e;">		如果不太显然，就要打在注释中</span></span>
<span class="line"><span style="color:#24292e;">	分析起来比较麻烦的：</span></span>
<span class="line"><span style="color:#24292e;">		线段树每个节点的tag：</span></span>
<span class="line"><span style="color:#24292e;">			注意到tag的每个历史版本值再加上储存值都是实际答案取值范围</span></span>
<span class="line"><span style="color:#24292e;">			所以容易分析出其tag就是最大变化量，计算即可</span></span>
<span class="line"><span style="color:#24292e;">			</span></span>
<span class="line"><span style="color:#24292e;">			对于一般的tag，需要具体计算其值域</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">特别注意：</span></span>
<span class="line"><span style="color:#24292e;">	在打模板时不能图快，一定要特别注意上述易错点</span></span>
<span class="line"><span style="color:#24292e;">	设定变量类型不要图快，一定要稍微考虑考虑</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	实在是暂时不好分析的，可以先打出注释表示没有分析</span></span></code></pre></div>`,2),t=[p];function o(c,i,r,y,d,g){return n(),a("div",null,t)}const u=s(l,[["render",o]]);export{h as __pageData,u as default};

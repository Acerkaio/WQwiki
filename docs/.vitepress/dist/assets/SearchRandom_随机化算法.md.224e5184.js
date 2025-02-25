import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const k=JSON.parse('{"title":"随机化算法","description":"","frontmatter":{},"headers":[],"relativePath":"SearchRandom/随机化算法.md","filePath":"SearchRandom/随机化算法.md","lastUpdated":1738592860000}'),l={name:"SearchRandom/随机化算法.md"},p=e(`<p>把这些转为markdown源码给我：</p><h1 id="随机化算法" tabindex="-1">随机化算法 <a class="header-anchor" href="#随机化算法" aria-label="Permalink to &quot;随机化算法&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">爬山法：</span></span>
<span class="line"><span style="color:#e1e4e8;">	适用范围：</span></span>
<span class="line"><span style="color:#e1e4e8;">		处理有平台的单峰函数最值</span></span>
<span class="line"><span style="color:#e1e4e8;">		平台不能太长</span></span>
<span class="line"><span style="color:#e1e4e8;">	但是随机次数要多一点</span></span>
<span class="line"><span style="color:#e1e4e8;">color coding：</span></span>
<span class="line"><span style="color:#e1e4e8;">	适用范围：</span></span>
<span class="line"><span style="color:#e1e4e8;">		刻画解集中至少有多少种颜色数的限制</span></span>
<span class="line"><span style="color:#e1e4e8;">		不同颜色数不太大</span></span>
<span class="line"><span style="color:#e1e4e8;">	实现：</span></span>
<span class="line"><span style="color:#e1e4e8;">		给每个原颜色随机一个0~k-1的新颜色</span></span>
<span class="line"><span style="color:#e1e4e8;">		其中，k需要调参，使得正确率和复杂度达到平衡</span></span>
<span class="line"><span style="color:#e1e4e8;">	例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">		THUSC 巧克力</span></span>
<span class="line"><span style="color:#e1e4e8;">		CF2003F - Turtle and Three Sequences </span></span>
<span class="line"><span style="color:#e1e4e8;">		CF1641D</span></span>
<span class="line"><span style="color:#e1e4e8;">随机集合法：</span></span>
<span class="line"><span style="color:#e1e4e8;">	适用范围：</span></span>
<span class="line"><span style="color:#e1e4e8;">		刻画特殊的全称命题</span></span>
<span class="line"><span style="color:#e1e4e8;">	实现：</span></span>
<span class="line"><span style="color:#e1e4e8;">		随机取全集的若干个子集</span></span>
<span class="line"><span style="color:#e1e4e8;">		对于子集进行判定</span></span>
<span class="line"><span style="color:#e1e4e8;">	例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">		CF1746F</span></span>
<span class="line"><span style="color:#e1e4e8;">		NOI2013 向量内积</span></span>
<span class="line"><span style="color:#e1e4e8;">行列式刻画法：</span></span>
<span class="line"><span style="color:#e1e4e8;">	适用范围：</span></span>
<span class="line"><span style="color:#e1e4e8;">		刻画解集中的两两颜色不同的限制</span></span>
<span class="line"><span style="color:#e1e4e8;">	实现：</span></span>
<span class="line"><span style="color:#e1e4e8;">		假如要求一个大小为k的两两颜色不同的解集</span></span>
<span class="line"><span style="color:#e1e4e8;">		那么，给每一个颜色随一个k维向量</span></span>
<span class="line"><span style="color:#e1e4e8;">		钦定一个解集的权值为其向量拼接的行列式的值</span></span>
<span class="line"><span style="color:#e1e4e8;">		注意，如果是解集是有序集，还需要乘上一些系数，防止不同排列的行列式值相同或相反</span></span>
<span class="line"><span style="color:#e1e4e8;">		一种系数是每一条边赋权，最后取乘积</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		计算行列式的值可以状压</span></span>
<span class="line"><span style="color:#e1e4e8;">	构造方案：</span></span>
<span class="line"><span style="color:#e1e4e8;">		每次取出一个必定是合法解集中的末尾的点，将其删去</span></span>
<span class="line"><span style="color:#e1e4e8;">		然后重复做就可以了</span></span>
<span class="line"><span style="color:#e1e4e8;">		注意保证当前删去的点可以转移到上一次删去的点</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">爬山法：</span></span>
<span class="line"><span style="color:#24292e;">	适用范围：</span></span>
<span class="line"><span style="color:#24292e;">		处理有平台的单峰函数最值</span></span>
<span class="line"><span style="color:#24292e;">		平台不能太长</span></span>
<span class="line"><span style="color:#24292e;">	但是随机次数要多一点</span></span>
<span class="line"><span style="color:#24292e;">color coding：</span></span>
<span class="line"><span style="color:#24292e;">	适用范围：</span></span>
<span class="line"><span style="color:#24292e;">		刻画解集中至少有多少种颜色数的限制</span></span>
<span class="line"><span style="color:#24292e;">		不同颜色数不太大</span></span>
<span class="line"><span style="color:#24292e;">	实现：</span></span>
<span class="line"><span style="color:#24292e;">		给每个原颜色随机一个0~k-1的新颜色</span></span>
<span class="line"><span style="color:#24292e;">		其中，k需要调参，使得正确率和复杂度达到平衡</span></span>
<span class="line"><span style="color:#24292e;">	例题：</span></span>
<span class="line"><span style="color:#24292e;">		THUSC 巧克力</span></span>
<span class="line"><span style="color:#24292e;">		CF2003F - Turtle and Three Sequences </span></span>
<span class="line"><span style="color:#24292e;">		CF1641D</span></span>
<span class="line"><span style="color:#24292e;">随机集合法：</span></span>
<span class="line"><span style="color:#24292e;">	适用范围：</span></span>
<span class="line"><span style="color:#24292e;">		刻画特殊的全称命题</span></span>
<span class="line"><span style="color:#24292e;">	实现：</span></span>
<span class="line"><span style="color:#24292e;">		随机取全集的若干个子集</span></span>
<span class="line"><span style="color:#24292e;">		对于子集进行判定</span></span>
<span class="line"><span style="color:#24292e;">	例题：</span></span>
<span class="line"><span style="color:#24292e;">		CF1746F</span></span>
<span class="line"><span style="color:#24292e;">		NOI2013 向量内积</span></span>
<span class="line"><span style="color:#24292e;">行列式刻画法：</span></span>
<span class="line"><span style="color:#24292e;">	适用范围：</span></span>
<span class="line"><span style="color:#24292e;">		刻画解集中的两两颜色不同的限制</span></span>
<span class="line"><span style="color:#24292e;">	实现：</span></span>
<span class="line"><span style="color:#24292e;">		假如要求一个大小为k的两两颜色不同的解集</span></span>
<span class="line"><span style="color:#24292e;">		那么，给每一个颜色随一个k维向量</span></span>
<span class="line"><span style="color:#24292e;">		钦定一个解集的权值为其向量拼接的行列式的值</span></span>
<span class="line"><span style="color:#24292e;">		注意，如果是解集是有序集，还需要乘上一些系数，防止不同排列的行列式值相同或相反</span></span>
<span class="line"><span style="color:#24292e;">		一种系数是每一条边赋权，最后取乘积</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		计算行列式的值可以状压</span></span>
<span class="line"><span style="color:#24292e;">	构造方案：</span></span>
<span class="line"><span style="color:#24292e;">		每次取出一个必定是合法解集中的末尾的点，将其删去</span></span>
<span class="line"><span style="color:#24292e;">		然后重复做就可以了</span></span>
<span class="line"><span style="color:#24292e;">		注意保证当前删去的点可以转移到上一次删去的点</span></span></code></pre></div>`,3),t=[p];function o(c,r,i,y,d,_){return n(),a("div",null,t)}const u=s(l,[["render",o]]);export{k as __pageData,u as default};

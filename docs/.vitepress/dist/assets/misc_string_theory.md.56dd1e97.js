import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const A=JSON.parse('{"title":"string theory","description":"","frontmatter":{},"headers":[],"relativePath":"misc/string_theory.md","filePath":"misc/string_theory.md","lastUpdated":null}'),l={name:"misc/string_theory.md"},p=e(`<h1 id="string-theory" tabindex="-1">string theory <a class="header-anchor" href="#string-theory" aria-label="Permalink to &quot;string theory&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">manacher：</span></span>
<span class="line"><span style="color:#e1e4e8;">	以i为右端点的最长回文串就是manacher在扩展时第一次访问的串</span></span>
<span class="line"><span style="color:#e1e4e8;">	例题：（待补）</span></span>
<span class="line"><span style="color:#e1e4e8;">		最长双回文串</span></span>
<span class="line"><span style="color:#e1e4e8;">最小表示法：</span></span>
<span class="line"><span style="color:#e1e4e8;">	处理循环同构子串</span></span>
<span class="line"><span style="color:#e1e4e8;">kmp，AC自动机，fail树：</span></span>
<span class="line"><span style="color:#e1e4e8;">	一个神奇的事实：</span></span>
<span class="line"><span style="color:#e1e4e8;">		将AC自动机像kmp一样实现的复杂度也是对的</span></span>
<span class="line"><span style="color:#e1e4e8;">		具体见论文：忘了哪一篇</span></span>
<span class="line"><span style="color:#e1e4e8;">	fail树相关：</span></span>
<span class="line"><span style="color:#e1e4e8;">		定义：i的父亲是fail[i]，根结点是trie树的根结点</span></span>
<span class="line"><span style="color:#e1e4e8;">		border定义：若字符串s的某个非空真前缀s[1…i]恰是该字符串的后缀，则称i是s的一个公共前后缀，即一个border</span></span>
<span class="line"><span style="color:#e1e4e8;">		性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">			1.点i的最长border是其父亲</span></span>
<span class="line"><span style="color:#e1e4e8;">			由此可知，点i的所有border就是其所有祖先</span></span>
<span class="line"><span style="color:#e1e4e8;">			2.点i是点j的后缀等价于j在subtree(i)中（充要性）</span></span>
<span class="line"><span style="color:#e1e4e8;">			3.点i在点j中出现等价于j的某个前缀是subtree(i)中的点</span></span>
<span class="line"><span style="color:#e1e4e8;">			由此可知，点i对应的可匹配模式串数量等于其祖先的ed的和</span></span>
<span class="line"><span style="color:#e1e4e8;">	常见适用范围：</span></span>
<span class="line"><span style="color:#e1e4e8;">		模式串有多个的类字符串匹配</span></span>
<span class="line"><span style="color:#e1e4e8;">		对模式串有后缀加和后缀删的操作</span></span>
<span class="line"><span style="color:#e1e4e8;">Z函数，SA：</span></span>
<span class="line"><span style="color:#e1e4e8;">	算法功能：</span></span>
<span class="line"><span style="color:#e1e4e8;">		Z函数就是SA的特殊线性版本</span></span>
<span class="line"><span style="color:#e1e4e8;">		SA的核心作用就两个：</span></span>
<span class="line"><span style="color:#e1e4e8;">			求后缀排序</span></span>
<span class="line"><span style="color:#e1e4e8;">			求任意两个后缀的lcp</span></span>
<span class="line"><span style="color:#e1e4e8;">	常见适用范围：只有一个串，考虑其子串</span></span>
<span class="line"><span style="color:#e1e4e8;">	核心思考方向：</span></span>
<span class="line"><span style="color:#e1e4e8;">		将匹配转化为求lcp</span></span>
<span class="line"><span style="color:#e1e4e8;">		将子串变为某个后缀的前缀</span></span>
<span class="line"><span style="color:#e1e4e8;">	后缀排序的应用</span></span>
<span class="line"><span style="color:#e1e4e8;">		求解第k小子串：P3975</span></span>
<span class="line"><span style="color:#e1e4e8;">		比较任意两个子串的字典序大小：</span></span>
<span class="line"><span style="color:#e1e4e8;">			做法一：将所有后缀放进trie树中，再赋上dfs序，比较dfs序即可（时空复杂度平方）</span></span>
<span class="line"><span style="color:#e1e4e8;">			做法二：求出lcp然后比一下即可</span></span>
<span class="line"><span style="color:#e1e4e8;">	与字符串匹配的关系</span></span>
<span class="line"><span style="color:#e1e4e8;">		kmp可以替代Z函数的功能</span></span>
<span class="line"><span style="color:#e1e4e8;">		SA可以实现kmp，AC自动机的功能：将多个串拼起来即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		进一步的，SA可以离线回答对模式串前后缀增删后的匹配问题</span></span>
<span class="line"><span style="color:#e1e4e8;">		例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">			two strings 罗干 2013中国国家集训队论文答辩</span></span>
<span class="line"><span style="color:#e1e4e8;">			</span></span>
<span class="line"><span style="color:#e1e4e8;">			给定两个串，求其最长公共子串</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">与DP的结合：</span></span>
<span class="line"><span style="color:#e1e4e8;">	kmp,AC自动机和DP结合：</span></span>
<span class="line"><span style="color:#e1e4e8;">		方式：将当前匹配的位置设入状态中，转移状态在fail树上找后继即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		处理：各种涉及到匹配的条件</span></span>
<span class="line"><span style="color:#e1e4e8;">	Z函数，manacher和DP结合：</span></span>
<span class="line"><span style="color:#e1e4e8;">		方式：</span></span>
<span class="line"><span style="color:#e1e4e8;">			将当前的ct和mxr设入状态中，转移时枚举下一次的ct&#39;即可</span></span>
<span class="line"><span style="color:#e1e4e8;">			可以利用当前mxr，得到对ct&#39;位置的一些性质（例如，border 或 lcp）</span></span>
<span class="line"><span style="color:#e1e4e8;">		处理：该算法的常见解决问题</span></span>
<span class="line"><span style="color:#e1e4e8;">例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">最大化lcp求和</span></span>
<span class="line"><span style="color:#e1e4e8;">最大化回文求和</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">循环子串问题：</span></span>
<span class="line"><span style="color:#e1e4e8;">	串A在S中AA...A的出现，就称A是S的循环子串（非正式定义）</span></span>
<span class="line"><span style="color:#e1e4e8;">	常见处理办法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		利用性质：串s由长度为i的循环串组成，等价于s[1~lens-i]=s[i+1,lens]且i整除lens</span></span>
<span class="line"><span style="color:#e1e4e8;">		常见做法：</span></span>
<span class="line"><span style="color:#e1e4e8;">			一般先考虑根据题目性质具体分析，再尝试套路做法</span></span>
<span class="line"><span style="color:#e1e4e8;">			（套路）枚举循环的周期，考虑前后缀匹配，调和级数复杂度（只能处理长度大于等于两倍周期的）</span></span>
<span class="line"><span style="color:#e1e4e8;">	例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">		NOI2016 优秀的差分</span></span>
<span class="line"><span style="color:#e1e4e8;">		NOIP2020 字符串匹配</span></span>
<span class="line"><span style="color:#e1e4e8;">		lingqingyang:给定一个字符串 s,求重复次数最多的连续重复子串。</span></span>
<span class="line"><span style="color:#e1e4e8;">类字符串匹配问题：</span></span>
<span class="line"><span style="color:#e1e4e8;">	当我们看到类似字符串匹配的限制时，可以想办法把原题转化成字符串问题</span></span>
<span class="line"><span style="color:#e1e4e8;">	以下有常见的几类题型</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	类回文匹配问题：</span></span>
<span class="line"><span style="color:#e1e4e8;">		可以套用manacher的思路</span></span>
<span class="line"><span style="color:#e1e4e8;">		例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">		给定n*m的矩阵，问有多少个中心对称的子矩阵.lim:n&lt;=5,m&lt;=5e6</span></span>
<span class="line"><span style="color:#e1e4e8;">		原题是交互</span></span>
<span class="line"><span style="color:#e1e4e8;">		solution:</span></span>
<span class="line"><span style="color:#e1e4e8;">		暴力是O(ans)的</span></span>
<span class="line"><span style="color:#e1e4e8;">		可以发现我们要求的就是某两行的以某一列为中心能对称多长</span></span>
<span class="line"><span style="color:#e1e4e8;">		考虑到对称，联想到回文，这其实就是manacher</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	类顺序匹配问题：可以套用kmp,AC自动机，SA的思路</span></span>
<span class="line"><span style="color:#e1e4e8;">		cf232D Fence:差分转化成字符串匹配问题，然后就是套路DS</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">manacher：</span></span>
<span class="line"><span style="color:#24292e;">	以i为右端点的最长回文串就是manacher在扩展时第一次访问的串</span></span>
<span class="line"><span style="color:#24292e;">	例题：（待补）</span></span>
<span class="line"><span style="color:#24292e;">		最长双回文串</span></span>
<span class="line"><span style="color:#24292e;">最小表示法：</span></span>
<span class="line"><span style="color:#24292e;">	处理循环同构子串</span></span>
<span class="line"><span style="color:#24292e;">kmp，AC自动机，fail树：</span></span>
<span class="line"><span style="color:#24292e;">	一个神奇的事实：</span></span>
<span class="line"><span style="color:#24292e;">		将AC自动机像kmp一样实现的复杂度也是对的</span></span>
<span class="line"><span style="color:#24292e;">		具体见论文：忘了哪一篇</span></span>
<span class="line"><span style="color:#24292e;">	fail树相关：</span></span>
<span class="line"><span style="color:#24292e;">		定义：i的父亲是fail[i]，根结点是trie树的根结点</span></span>
<span class="line"><span style="color:#24292e;">		border定义：若字符串s的某个非空真前缀s[1…i]恰是该字符串的后缀，则称i是s的一个公共前后缀，即一个border</span></span>
<span class="line"><span style="color:#24292e;">		性质：</span></span>
<span class="line"><span style="color:#24292e;">			1.点i的最长border是其父亲</span></span>
<span class="line"><span style="color:#24292e;">			由此可知，点i的所有border就是其所有祖先</span></span>
<span class="line"><span style="color:#24292e;">			2.点i是点j的后缀等价于j在subtree(i)中（充要性）</span></span>
<span class="line"><span style="color:#24292e;">			3.点i在点j中出现等价于j的某个前缀是subtree(i)中的点</span></span>
<span class="line"><span style="color:#24292e;">			由此可知，点i对应的可匹配模式串数量等于其祖先的ed的和</span></span>
<span class="line"><span style="color:#24292e;">	常见适用范围：</span></span>
<span class="line"><span style="color:#24292e;">		模式串有多个的类字符串匹配</span></span>
<span class="line"><span style="color:#24292e;">		对模式串有后缀加和后缀删的操作</span></span>
<span class="line"><span style="color:#24292e;">Z函数，SA：</span></span>
<span class="line"><span style="color:#24292e;">	算法功能：</span></span>
<span class="line"><span style="color:#24292e;">		Z函数就是SA的特殊线性版本</span></span>
<span class="line"><span style="color:#24292e;">		SA的核心作用就两个：</span></span>
<span class="line"><span style="color:#24292e;">			求后缀排序</span></span>
<span class="line"><span style="color:#24292e;">			求任意两个后缀的lcp</span></span>
<span class="line"><span style="color:#24292e;">	常见适用范围：只有一个串，考虑其子串</span></span>
<span class="line"><span style="color:#24292e;">	核心思考方向：</span></span>
<span class="line"><span style="color:#24292e;">		将匹配转化为求lcp</span></span>
<span class="line"><span style="color:#24292e;">		将子串变为某个后缀的前缀</span></span>
<span class="line"><span style="color:#24292e;">	后缀排序的应用</span></span>
<span class="line"><span style="color:#24292e;">		求解第k小子串：P3975</span></span>
<span class="line"><span style="color:#24292e;">		比较任意两个子串的字典序大小：</span></span>
<span class="line"><span style="color:#24292e;">			做法一：将所有后缀放进trie树中，再赋上dfs序，比较dfs序即可（时空复杂度平方）</span></span>
<span class="line"><span style="color:#24292e;">			做法二：求出lcp然后比一下即可</span></span>
<span class="line"><span style="color:#24292e;">	与字符串匹配的关系</span></span>
<span class="line"><span style="color:#24292e;">		kmp可以替代Z函数的功能</span></span>
<span class="line"><span style="color:#24292e;">		SA可以实现kmp，AC自动机的功能：将多个串拼起来即可</span></span>
<span class="line"><span style="color:#24292e;">		进一步的，SA可以离线回答对模式串前后缀增删后的匹配问题</span></span>
<span class="line"><span style="color:#24292e;">		例题：</span></span>
<span class="line"><span style="color:#24292e;">			two strings 罗干 2013中国国家集训队论文答辩</span></span>
<span class="line"><span style="color:#24292e;">			</span></span>
<span class="line"><span style="color:#24292e;">			给定两个串，求其最长公共子串</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">与DP的结合：</span></span>
<span class="line"><span style="color:#24292e;">	kmp,AC自动机和DP结合：</span></span>
<span class="line"><span style="color:#24292e;">		方式：将当前匹配的位置设入状态中，转移状态在fail树上找后继即可</span></span>
<span class="line"><span style="color:#24292e;">		处理：各种涉及到匹配的条件</span></span>
<span class="line"><span style="color:#24292e;">	Z函数，manacher和DP结合：</span></span>
<span class="line"><span style="color:#24292e;">		方式：</span></span>
<span class="line"><span style="color:#24292e;">			将当前的ct和mxr设入状态中，转移时枚举下一次的ct&#39;即可</span></span>
<span class="line"><span style="color:#24292e;">			可以利用当前mxr，得到对ct&#39;位置的一些性质（例如，border 或 lcp）</span></span>
<span class="line"><span style="color:#24292e;">		处理：该算法的常见解决问题</span></span>
<span class="line"><span style="color:#24292e;">例题：</span></span>
<span class="line"><span style="color:#24292e;">最大化lcp求和</span></span>
<span class="line"><span style="color:#24292e;">最大化回文求和</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">循环子串问题：</span></span>
<span class="line"><span style="color:#24292e;">	串A在S中AA...A的出现，就称A是S的循环子串（非正式定义）</span></span>
<span class="line"><span style="color:#24292e;">	常见处理办法：</span></span>
<span class="line"><span style="color:#24292e;">		利用性质：串s由长度为i的循环串组成，等价于s[1~lens-i]=s[i+1,lens]且i整除lens</span></span>
<span class="line"><span style="color:#24292e;">		常见做法：</span></span>
<span class="line"><span style="color:#24292e;">			一般先考虑根据题目性质具体分析，再尝试套路做法</span></span>
<span class="line"><span style="color:#24292e;">			（套路）枚举循环的周期，考虑前后缀匹配，调和级数复杂度（只能处理长度大于等于两倍周期的）</span></span>
<span class="line"><span style="color:#24292e;">	例题：</span></span>
<span class="line"><span style="color:#24292e;">		NOI2016 优秀的差分</span></span>
<span class="line"><span style="color:#24292e;">		NOIP2020 字符串匹配</span></span>
<span class="line"><span style="color:#24292e;">		lingqingyang:给定一个字符串 s,求重复次数最多的连续重复子串。</span></span>
<span class="line"><span style="color:#24292e;">类字符串匹配问题：</span></span>
<span class="line"><span style="color:#24292e;">	当我们看到类似字符串匹配的限制时，可以想办法把原题转化成字符串问题</span></span>
<span class="line"><span style="color:#24292e;">	以下有常见的几类题型</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	类回文匹配问题：</span></span>
<span class="line"><span style="color:#24292e;">		可以套用manacher的思路</span></span>
<span class="line"><span style="color:#24292e;">		例题：</span></span>
<span class="line"><span style="color:#24292e;">		给定n*m的矩阵，问有多少个中心对称的子矩阵.lim:n&lt;=5,m&lt;=5e6</span></span>
<span class="line"><span style="color:#24292e;">		原题是交互</span></span>
<span class="line"><span style="color:#24292e;">		solution:</span></span>
<span class="line"><span style="color:#24292e;">		暴力是O(ans)的</span></span>
<span class="line"><span style="color:#24292e;">		可以发现我们要求的就是某两行的以某一列为中心能对称多长</span></span>
<span class="line"><span style="color:#24292e;">		考虑到对称，联想到回文，这其实就是manacher</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	类顺序匹配问题：可以套用kmp,AC自动机，SA的思路</span></span>
<span class="line"><span style="color:#24292e;">		cf232D Fence:差分转化成字符串匹配问题，然后就是套路DS</span></span></code></pre></div>`,2),t=[p];function c(o,i,r,y,d,m){return n(),a("div",null,t)}const _=s(l,[["render",c]]);export{A as __pageData,_ as default};

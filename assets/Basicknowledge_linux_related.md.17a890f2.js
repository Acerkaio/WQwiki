import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.e7363dcb.js";const y=JSON.parse('{"title":"linux_related","description":"","frontmatter":{},"headers":[],"relativePath":"Basicknowledge/linux_related.md","filePath":"Basicknowledge/linux_related.md","lastUpdated":1738591681000}'),l={name:"Basicknowledge/linux_related.md"},p=n(`<h1 id="linux-related" tabindex="-1">linux_related <a class="header-anchor" href="#linux-related" aria-label="Permalink to &quot;linux_related&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">编译命令：g++ dd.cpp -o dd -O2 -std=c++14 -static </span></span>
<span class="line"><span style="color:#e1e4e8;">文本比较：diff dd.out dd.ans -b</span></span>
<span class="line"><span style="color:#e1e4e8;">复制文件：cp dd$1.in dd.in</span></span>
<span class="line"><span style="color:#e1e4e8;">查看时间使用：time ./dd</span></span>
<span class="line"><span style="color:#e1e4e8;">查看峰值动态空间：/usr/bin/time -v ./dd</span></span>
<span class="line"><span style="color:#e1e4e8;">查看静态空间：size dd 其中的data+bss是单位为B的静态空间</span></span>
<span class="line"><span style="color:#e1e4e8;">将命令输出的结果放进某个文件里：</span></span>
<span class="line"><span style="color:#e1e4e8;">	直接输出结果：./checker &gt; dd.out</span></span>
<span class="line"><span style="color:#e1e4e8;">	输出调试结果：./checker 2&gt;dd.out</span></span>
<span class="line"><span style="color:#e1e4e8;">显示目标文件的若干行：awk &quot;NR&gt;=1&amp;&amp;NR&lt;=4&quot; dd.out</span></span>
<span class="line"><span style="color:#e1e4e8;">扩大栈空间：ulimit -s unlimited </span></span>
<span class="line"><span style="color:#e1e4e8;">使某个可执行程序有权限：chmod 777 checker</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;">编译命令：g++ dd.cpp -o dd -O2 -std=c++14 -static </span></span>
<span class="line"><span style="color:#24292e;">文本比较：diff dd.out dd.ans -b</span></span>
<span class="line"><span style="color:#24292e;">复制文件：cp dd$1.in dd.in</span></span>
<span class="line"><span style="color:#24292e;">查看时间使用：time ./dd</span></span>
<span class="line"><span style="color:#24292e;">查看峰值动态空间：/usr/bin/time -v ./dd</span></span>
<span class="line"><span style="color:#24292e;">查看静态空间：size dd 其中的data+bss是单位为B的静态空间</span></span>
<span class="line"><span style="color:#24292e;">将命令输出的结果放进某个文件里：</span></span>
<span class="line"><span style="color:#24292e;">	直接输出结果：./checker &gt; dd.out</span></span>
<span class="line"><span style="color:#24292e;">	输出调试结果：./checker 2&gt;dd.out</span></span>
<span class="line"><span style="color:#24292e;">显示目标文件的若干行：awk &quot;NR&gt;=1&amp;&amp;NR&lt;=4&quot; dd.out</span></span>
<span class="line"><span style="color:#24292e;">扩大栈空间：ulimit -s unlimited </span></span>
<span class="line"><span style="color:#24292e;">使某个可执行程序有权限：chmod 777 checker</span></span></code></pre></div>`,2),t=[p];function c(o,d,i,r,u,_){return a(),e("div",null,t)}const m=s(l,[["render",c]]);export{y as __pageData,m as default};

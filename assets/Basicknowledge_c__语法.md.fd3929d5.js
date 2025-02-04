import{_ as s,o as n,c as a,Q as t}from"./chunks/framework.e7363dcb.js";const _=JSON.parse('{"title":"c++语法","description":"","frontmatter":{},"headers":[],"relativePath":"Basicknowledge/c++语法.md","filePath":"Basicknowledge/c++语法.md","lastUpdated":1738591681000}'),e={name:"Basicknowledge/c++语法.md"},l=t(`<h1 id="c-语法" tabindex="-1">c++语法 <a class="header-anchor" href="#c-语法" aria-label="Permalink to &quot;c++语法&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">template相关：</span></span>
<span class="line"><span style="color:#e1e4e8;">	用法1：</span></span>
<span class="line"><span style="color:#e1e4e8;">		给函数内的变量类型赋值</span></span>
<span class="line"><span style="color:#e1e4e8;">		例如：</span></span>
<span class="line"><span style="color:#e1e4e8;">			template&lt;typename T&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">			ll plus(T x,T y){return x+y;}</span></span>
<span class="line"><span style="color:#e1e4e8;">		那么，函数有两种调用方法：</span></span>
<span class="line"><span style="color:#e1e4e8;">			cout&lt;&lt;plus&lt;ll&gt;(1,2);//钦定T是ll</span></span>
<span class="line"><span style="color:#e1e4e8;">			cout&lt;&lt;plus(1,2);//推导T是int，类似auto</span></span>
<span class="line"><span style="color:#e1e4e8;">	用法2：</span></span>
<span class="line"><span style="color:#e1e4e8;">		给函数内常量赋值</span></span>
<span class="line"><span style="color:#e1e4e8;">		例如：</span></span>
<span class="line"><span style="color:#e1e4e8;">			const int mod1=998244353,mod2=1e9+7;</span></span>
<span class="line"><span style="color:#e1e4e8;">			template&lt;const int mod&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">			ll ksm(ll x,ll y){</span></span>
<span class="line"><span style="color:#e1e4e8;">				ll res=1;</span></span>
<span class="line"><span style="color:#e1e4e8;">				for(;y;y&gt;&gt;=1){</span></span>
<span class="line"><span style="color:#e1e4e8;">					if(y&amp;1) res=res*x%mod;</span></span>
<span class="line"><span style="color:#e1e4e8;">					x=x*x%mod;</span></span>
<span class="line"><span style="color:#e1e4e8;">				}</span></span>
<span class="line"><span style="color:#e1e4e8;">				return res;</span></span>
<span class="line"><span style="color:#e1e4e8;">			}</span></span>
<span class="line"><span style="color:#e1e4e8;">			cout&lt;&lt;ksm&lt;mod1&gt;(4,1e9);</span></span>
<span class="line"><span style="color:#e1e4e8;">lambda相关：</span></span>
<span class="line"><span style="color:#e1e4e8;">	[capture_list](parameters) -&gt;return_type{function_body}</span></span>
<span class="line"><span style="color:#e1e4e8;">	capture_list:</span></span>
<span class="line"><span style="color:#e1e4e8;">		类型：传值，引用</span></span>
<span class="line"><span style="color:#e1e4e8;">		例如：</span></span>
<span class="line"><span style="color:#e1e4e8;">			[x,y,&amp;z](int a){return a;}//传值x,y,引用z</span></span>
<span class="line"><span style="color:#e1e4e8;">			[=,&amp;x](int a){return a;}//传值除了x以外的所有东西，引用x</span></span>
<span class="line"><span style="color:#e1e4e8;">			[&amp;,x](int a){return a;}//引用除了x以外的所有东西，传值x</span></span>
<span class="line"><span style="color:#e1e4e8;">	return_type:</span></span>
<span class="line"><span style="color:#e1e4e8;">		可以省略，让编译器自行推导</span></span>
<span class="line"><span style="color:#e1e4e8;">		也可以钦定</span></span>
<span class="line"><span style="color:#e1e4e8;">	注意，lambda可以当做一个参数传递给函数，类型就是auto</span></span>
<span class="line"><span style="color:#e1e4e8;">		例如：</span></span>
<span class="line"><span style="color:#e1e4e8;">			sort(a+1,a+1+n,[](int x,int y){return x&lt;y;});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">template相关：</span></span>
<span class="line"><span style="color:#24292e;">	用法1：</span></span>
<span class="line"><span style="color:#24292e;">		给函数内的变量类型赋值</span></span>
<span class="line"><span style="color:#24292e;">		例如：</span></span>
<span class="line"><span style="color:#24292e;">			template&lt;typename T&gt;</span></span>
<span class="line"><span style="color:#24292e;">			ll plus(T x,T y){return x+y;}</span></span>
<span class="line"><span style="color:#24292e;">		那么，函数有两种调用方法：</span></span>
<span class="line"><span style="color:#24292e;">			cout&lt;&lt;plus&lt;ll&gt;(1,2);//钦定T是ll</span></span>
<span class="line"><span style="color:#24292e;">			cout&lt;&lt;plus(1,2);//推导T是int，类似auto</span></span>
<span class="line"><span style="color:#24292e;">	用法2：</span></span>
<span class="line"><span style="color:#24292e;">		给函数内常量赋值</span></span>
<span class="line"><span style="color:#24292e;">		例如：</span></span>
<span class="line"><span style="color:#24292e;">			const int mod1=998244353,mod2=1e9+7;</span></span>
<span class="line"><span style="color:#24292e;">			template&lt;const int mod&gt;</span></span>
<span class="line"><span style="color:#24292e;">			ll ksm(ll x,ll y){</span></span>
<span class="line"><span style="color:#24292e;">				ll res=1;</span></span>
<span class="line"><span style="color:#24292e;">				for(;y;y&gt;&gt;=1){</span></span>
<span class="line"><span style="color:#24292e;">					if(y&amp;1) res=res*x%mod;</span></span>
<span class="line"><span style="color:#24292e;">					x=x*x%mod;</span></span>
<span class="line"><span style="color:#24292e;">				}</span></span>
<span class="line"><span style="color:#24292e;">				return res;</span></span>
<span class="line"><span style="color:#24292e;">			}</span></span>
<span class="line"><span style="color:#24292e;">			cout&lt;&lt;ksm&lt;mod1&gt;(4,1e9);</span></span>
<span class="line"><span style="color:#24292e;">lambda相关：</span></span>
<span class="line"><span style="color:#24292e;">	[capture_list](parameters) -&gt;return_type{function_body}</span></span>
<span class="line"><span style="color:#24292e;">	capture_list:</span></span>
<span class="line"><span style="color:#24292e;">		类型：传值，引用</span></span>
<span class="line"><span style="color:#24292e;">		例如：</span></span>
<span class="line"><span style="color:#24292e;">			[x,y,&amp;z](int a){return a;}//传值x,y,引用z</span></span>
<span class="line"><span style="color:#24292e;">			[=,&amp;x](int a){return a;}//传值除了x以外的所有东西，引用x</span></span>
<span class="line"><span style="color:#24292e;">			[&amp;,x](int a){return a;}//引用除了x以外的所有东西，传值x</span></span>
<span class="line"><span style="color:#24292e;">	return_type:</span></span>
<span class="line"><span style="color:#24292e;">		可以省略，让编译器自行推导</span></span>
<span class="line"><span style="color:#24292e;">		也可以钦定</span></span>
<span class="line"><span style="color:#24292e;">	注意，lambda可以当做一个参数传递给函数，类型就是auto</span></span>
<span class="line"><span style="color:#24292e;">		例如：</span></span>
<span class="line"><span style="color:#24292e;">			sort(a+1,a+1+n,[](int x,int y){return x&lt;y;});</span></span></code></pre></div>`,2),p=[l];function o(c,r,i,y,d,u){return n(),a("div",null,p)}const x=s(e,[["render",o]]);export{_ as __pageData,x as default};

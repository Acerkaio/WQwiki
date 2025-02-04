import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const f=JSON.parse('{"title":"网络流算法","description":"","frontmatter":{},"headers":[],"relativePath":"Mad/网络流/网络流算法.md","filePath":"Mad/网络流/网络流算法.md","lastUpdated":null}'),l={name:"Mad/网络流/网络流算法.md"},p=e(`<h1 id="网络流算法" tabindex="-1">网络流算法 <a class="header-anchor" href="#网络流算法" aria-label="Permalink to &quot;网络流算法&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">最大流问题</span></span>
<span class="line"><span style="color:#e1e4e8;">	EK：</span></span>
<span class="line"><span style="color:#e1e4e8;">		首先考虑将最大流分解成一条一条的路径（增广路）</span></span>
<span class="line"><span style="color:#e1e4e8;">		显然，最大流的必要条件是没有增广路</span></span>
<span class="line"><span style="color:#e1e4e8;">		但在有多条增广路时，增广哪一条路？</span></span>
<span class="line"><span style="color:#e1e4e8;">		直接随便一条肯定是错的，这时，需要引入算法的核心：反悔边</span></span>
<span class="line"><span style="color:#e1e4e8;">		那么，每次增广以后，将路径上的边容量减去流量，其反边加上流量即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		复杂度不会证</span></span>
<span class="line"><span style="color:#e1e4e8;">	dinic：</span></span>
<span class="line"><span style="color:#e1e4e8;">		将EK扩展到多路增广，具体利用了分层图实现</span></span>
<span class="line"><span style="color:#e1e4e8;">	复杂度：</span></span>
<span class="line"><span style="color:#e1e4e8;">		dinic增广轮数：</span></span>
<span class="line"><span style="color:#e1e4e8;">			一般图：n</span></span>
<span class="line"><span style="color:#e1e4e8;">			值域相关上界：sqrt( 所有点的 min( 入度容量和，出度容量和 ) 的和)</span></span>
<span class="line"><span style="color:#e1e4e8;">		dinic单次增广：</span></span>
<span class="line"><span style="color:#e1e4e8;">			一般图：n*m</span></span>
<span class="line"><span style="color:#e1e4e8;">			值域相关上界：在所有边容量都比较小的时候，好像近似 m</span></span>
<span class="line"><span style="color:#e1e4e8;">费用流问题</span></span>
<span class="line"><span style="color:#e1e4e8;">	SSP：</span></span>
<span class="line"><span style="color:#e1e4e8;">		条件：</span></span>
<span class="line"><span style="color:#e1e4e8;">			没有费用为负的圈</span></span>
<span class="line"><span style="color:#e1e4e8;">		流程：</span></span>
<span class="line"><span style="color:#e1e4e8;">			将反悔边的费用设成负数</span></span>
<span class="line"><span style="color:#e1e4e8;">			每次寻找费用最少的路径进行增广即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		具体实现：</span></span>
<span class="line"><span style="color:#e1e4e8;">			利用spfa直接跑最短路</span></span>
<span class="line"><span style="color:#e1e4e8;">			复杂度：n*m*f</span></span>
<span class="line"><span style="color:#e1e4e8;">	Primal-Dual：</span></span>
<span class="line"><span style="color:#e1e4e8;">		原理和SSP相同，核心在于求最短路部分，用 势能+dij</span></span>
<span class="line"><span style="color:#e1e4e8;">		初始势能可以跑spfa赋，然后考虑每次增广完以后如何改变势能</span></span>
<span class="line"><span style="color:#e1e4e8;">		势能直接加上dis数组即可，证明略</span></span>
<span class="line"><span style="color:#e1e4e8;">		复杂度：f*(n+m)*log m</span></span>
<span class="line"><span style="color:#e1e4e8;">	有负环的费用流：</span></span>
<span class="line"><span style="color:#e1e4e8;">		将所有的负权边强制满流，然后留下反悔边</span></span>
<span class="line"><span style="color:#e1e4e8;">		这样就让部分点流量不守恒了，所以套上下界的板子</span></span>
<span class="line"><span style="color:#e1e4e8;">上下界网络流</span></span>
<span class="line"><span style="color:#e1e4e8;">	整体思路：</span></span>
<span class="line"><span style="color:#e1e4e8;">		考虑将下界去掉，即 强制满流到下界，然后改权值为上界-下界</span></span>
<span class="line"><span style="color:#e1e4e8;">		但这样每个点的流量都不一定守恒</span></span>
<span class="line"><span style="color:#e1e4e8;">		可以先给出一种流使得流量守恒，然后再调整到要求的流</span></span>
<span class="line"><span style="color:#e1e4e8;">	可行流部分：</span></span>
<span class="line"><span style="color:#e1e4e8;">		新建超级源汇，正权点连源点，负权点连汇点，跑最大流</span></span>
<span class="line"><span style="color:#e1e4e8;">		注意，对于原图有源汇的情况，需要汇点向源点连inf边</span></span>
<span class="line"><span style="color:#e1e4e8;">		注意判断如果流不满就是无解</span></span>
<span class="line"><span style="color:#e1e4e8;">	调整部分：</span></span>
<span class="line"><span style="color:#e1e4e8;">		将可行流部分建的边都拆掉，然后该怎么样就怎么样</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">最大流问题</span></span>
<span class="line"><span style="color:#24292e;">	EK：</span></span>
<span class="line"><span style="color:#24292e;">		首先考虑将最大流分解成一条一条的路径（增广路）</span></span>
<span class="line"><span style="color:#24292e;">		显然，最大流的必要条件是没有增广路</span></span>
<span class="line"><span style="color:#24292e;">		但在有多条增广路时，增广哪一条路？</span></span>
<span class="line"><span style="color:#24292e;">		直接随便一条肯定是错的，这时，需要引入算法的核心：反悔边</span></span>
<span class="line"><span style="color:#24292e;">		那么，每次增广以后，将路径上的边容量减去流量，其反边加上流量即可</span></span>
<span class="line"><span style="color:#24292e;">		复杂度不会证</span></span>
<span class="line"><span style="color:#24292e;">	dinic：</span></span>
<span class="line"><span style="color:#24292e;">		将EK扩展到多路增广，具体利用了分层图实现</span></span>
<span class="line"><span style="color:#24292e;">	复杂度：</span></span>
<span class="line"><span style="color:#24292e;">		dinic增广轮数：</span></span>
<span class="line"><span style="color:#24292e;">			一般图：n</span></span>
<span class="line"><span style="color:#24292e;">			值域相关上界：sqrt( 所有点的 min( 入度容量和，出度容量和 ) 的和)</span></span>
<span class="line"><span style="color:#24292e;">		dinic单次增广：</span></span>
<span class="line"><span style="color:#24292e;">			一般图：n*m</span></span>
<span class="line"><span style="color:#24292e;">			值域相关上界：在所有边容量都比较小的时候，好像近似 m</span></span>
<span class="line"><span style="color:#24292e;">费用流问题</span></span>
<span class="line"><span style="color:#24292e;">	SSP：</span></span>
<span class="line"><span style="color:#24292e;">		条件：</span></span>
<span class="line"><span style="color:#24292e;">			没有费用为负的圈</span></span>
<span class="line"><span style="color:#24292e;">		流程：</span></span>
<span class="line"><span style="color:#24292e;">			将反悔边的费用设成负数</span></span>
<span class="line"><span style="color:#24292e;">			每次寻找费用最少的路径进行增广即可</span></span>
<span class="line"><span style="color:#24292e;">		具体实现：</span></span>
<span class="line"><span style="color:#24292e;">			利用spfa直接跑最短路</span></span>
<span class="line"><span style="color:#24292e;">			复杂度：n*m*f</span></span>
<span class="line"><span style="color:#24292e;">	Primal-Dual：</span></span>
<span class="line"><span style="color:#24292e;">		原理和SSP相同，核心在于求最短路部分，用 势能+dij</span></span>
<span class="line"><span style="color:#24292e;">		初始势能可以跑spfa赋，然后考虑每次增广完以后如何改变势能</span></span>
<span class="line"><span style="color:#24292e;">		势能直接加上dis数组即可，证明略</span></span>
<span class="line"><span style="color:#24292e;">		复杂度：f*(n+m)*log m</span></span>
<span class="line"><span style="color:#24292e;">	有负环的费用流：</span></span>
<span class="line"><span style="color:#24292e;">		将所有的负权边强制满流，然后留下反悔边</span></span>
<span class="line"><span style="color:#24292e;">		这样就让部分点流量不守恒了，所以套上下界的板子</span></span>
<span class="line"><span style="color:#24292e;">上下界网络流</span></span>
<span class="line"><span style="color:#24292e;">	整体思路：</span></span>
<span class="line"><span style="color:#24292e;">		考虑将下界去掉，即 强制满流到下界，然后改权值为上界-下界</span></span>
<span class="line"><span style="color:#24292e;">		但这样每个点的流量都不一定守恒</span></span>
<span class="line"><span style="color:#24292e;">		可以先给出一种流使得流量守恒，然后再调整到要求的流</span></span>
<span class="line"><span style="color:#24292e;">	可行流部分：</span></span>
<span class="line"><span style="color:#24292e;">		新建超级源汇，正权点连源点，负权点连汇点，跑最大流</span></span>
<span class="line"><span style="color:#24292e;">		注意，对于原图有源汇的情况，需要汇点向源点连inf边</span></span>
<span class="line"><span style="color:#24292e;">		注意判断如果流不满就是无解</span></span>
<span class="line"><span style="color:#24292e;">	调整部分：</span></span>
<span class="line"><span style="color:#24292e;">		将可行流部分建的边都拆掉，然后该怎么样就怎么样</span></span></code></pre></div>`,2),t=[p];function c(o,i,r,y,d,_){return n(),a("div",null,t)}const h=s(l,[["render",c]]);export{f as __pageData,h as default};

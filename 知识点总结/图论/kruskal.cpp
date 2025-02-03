/*
其实学习kruskal重构树更多应该是要学习一些最小生成树的性质：
1.在kruskal算法中，使x,y第一次联通的，就是其对应最小生成树上路径的最大边
2.如果你用按秩合并写的并查集的话，fa数组形成的树恰就是最小生成树（再记一下边权up），而且点x,y路径的最大边恰就在其lca的左边或右边，而且上面的边一定比下面的边更大
3.kruskal重构树则是将边看作虚点，且满足祖先点权大于子孙点权
4.非树边(x,y)一定大于等于x,y在最小生成树上的路径上的每一条边
   等价表述：原图中的任何一个环上的权值最大的边必然有非树边
5.加入一条新边(x,y)，若最小生成树改变，必然是x,y原树路径上的最大边被删去
*/
/*
常见应用：
1.在线处理最值最短路：更优，更快，更好写（利用了上述1,2性质），但没建重构树
2.在线处理边权限制可达性：建出重构树后结合倍增找深度最浅的满足权值限制的祖先
3.在线处理点权限制可达性：建点权多叉重构树
*/
//以下是应用1的一份实现精细的代码
int find(int x) { return Fa[x] < 0 ? x : find(Fa[x]); }
void uni(int u, int v, int t) {
	u = find(u), v = find(v);
	if (u == v) return;
	if (-Fa[u] > -Fa[v]) swap(u, v);
	Fa[v] += Fa[u], Fa[u] = v, T[u] = t;
}
int ask(int u, int v) {
	int t = 0;
	while (u != v) {
		int &x = T[u] < T[v] ? u : v;
		t = T[x], x = Fa[x];
		if (t == INF) return -1;
	}
	return t;
}
int main(){
	Fa.assign(2*n*m,-1); 
	T.assign(2*n*m,INF); 
	return 0;
}
/*
ABC355F：绝世好题
*/

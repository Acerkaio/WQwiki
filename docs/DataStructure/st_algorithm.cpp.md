# st algorithm.cpp
`st algorithm.cpp`
```cpp
void build(){
	for(int i=1;i<=n;i++) st[0][i]=ht[i];
	for(int j=1;j<=18;j++){
		for(int i=1;i+(1<<j)-1<=n;i++){
			st[j][i]=min(st[j-1][i],st[j-1][i+(1<<j-1)]);
		}
	}
}
int ask(int l,int r){
	int x=31^__builtin_clz(r-l+1);
	return min(st[x][l],st[x][r-(1<<x)+1]);
}
```
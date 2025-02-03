while (1) {
        int x = -1;

        for (int i = 0; i < 2; i++) {
            while (!q[i].empty() && vis[q[i].front()])
                q[i].pop();

            if (!q[i].empty() && (x == -1 || dis[q[i].front()] < dis[x]))
                x = q[i].front();
        }

        if (x == -1)
            break;

        vis[x] = 1;

        for (int i = head[x]; i; i = e[i].nxt) {
            int y = e[i].to;

            if (dis[y] > dis[x] + e[i].val) {
                dis[y] = dis[x] + e[i].val;
                q[e[i].val - 1].push(y);
            }
        }
    }

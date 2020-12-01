#include <map>
#include <set>
#include <list>
#include <cmath>
#include <ctime>
#include <deque>
#include <queue>
#include <stack>
#include <string>
#include <bitset>
#include <cstdio>
#include <limits>
#include <vector>
#include <climits>
#include <cstring>
#include <cstdlib>
#include <fstream>
#include <numeric>
#include <sstream>
#include <iostream>
#include <algorithm>
#include <unordered_map>

using namespace std;
int main() {
    long long int n, k; // number of houses, number of orders
    cin>>n>>k;

    // storing the house details
    vector<vector<long long int>> house(n);

    // inputing id of houses
    for (long long int i = 0; i < n; i++) {
        house[i].resize(2);
        cin>>house[i][0];
        house[i][1] = 0;
    }

    vector<vector<long long int>> orders(k);

    // inputing id of orders
    for (long long int i = 0; i < k; i++) {
        orders[i].resize(2);
        cin>>orders[i][0];
        orders[i][1] = -1;

        for (long long int j = n - 1; j >= 0 && orders[i][1] == -1; j--) {
            if (orders[i][0] == house[j][0] && house[j][1] == 0) {
                orders[i][1] = j + 1;
                house[j][1] = -1;
                break;
            }
        }
    }

    // outputing the data
    for (long long int i = 0; i < k; i++) {
        cout<<orders[i][1]<<" ";
    }

    return 0;
}
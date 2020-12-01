#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    long long unsigned int N;
    long long int M;
    cin>>N>>M;

    long long int arr[N];

    for (long long unsigned int i = 0; i < N; i++) {
        cin>>arr[i];
    }

    for (long long unsigned int i = 0; i < N; i++) {
        for (long long unsigned int j = 0; j < N; j++) {
            if (i != j && arr[i] + arr[j] == M) {
                cout<<"True";
                return 0;
            }
        }
    }

    cout<<"False";


    return 0;
}
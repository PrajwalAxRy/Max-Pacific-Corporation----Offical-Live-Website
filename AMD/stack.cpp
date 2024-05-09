#include <bits/stdc++.h>
using namespace std;

void helper(stack<int> &st, int count, int size){
    if(count == size/2){
        st.pop();
        return;
    }
    
    int topE = st.top();
    helper(st, count+1, size);
    st.push(topE);

    return;
}

void deleteMiddle(stack<int> &st){
    int n = st.size();
    helper(st, 0, n);
}
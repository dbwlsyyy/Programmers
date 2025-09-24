function solution(n) {
    n.sort((a,b) => b-a);
    const res1 = n[0] * n[1];
    const res2 = n[n.length-1] * n[n.length-2];
    return res1 > res2 ? res1 : res2
}
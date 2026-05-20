function solution(n, t) {
    const arr = [];
    
    // 1. 중간값(mid)을 구한다. 이건 완벽합니다!
    const mid = Math.floor(t / n); 
    
    // 2. 💡 핵심: 중간에서 맨 앞(first)으로 가려면 몇 칸 뒤로 가야 할까?
    // 자기 자신(1)을 뺀 나머지 인원의 '절반'만큼 뒤로 가면 됨! (소수점은 버림)
    const 뺄숫자 = Math.floor((n - 1) / 2); 
    
    // 3. 중간값에서 뒤로 갈 칸수만큼 빼면 그게 바로 첫 번째 숫자!
    let first = mid - 뺄숫자;
    
    // 복잡했던 if (n >= t) 조건문은 이제 아예 필요 없습니다. 
    // 수학적으로 완벽하게 시작점을 찾았기 때문이죠.

    // 4. 첫 숫자부터 n번 반복하며 1씩 더해서 배열에 넣는다. (완벽!)
    for (let i = 0; i < n; i++) {
        arr.push(first);
        first++;
    }
    
    return arr;
}
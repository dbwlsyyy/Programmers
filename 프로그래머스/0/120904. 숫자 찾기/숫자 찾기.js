function solution(num, k) {
    let res = -1
    let idx = String(num).split('').indexOf(String(k))
    return idx === -1 ? idx : idx + 1
}
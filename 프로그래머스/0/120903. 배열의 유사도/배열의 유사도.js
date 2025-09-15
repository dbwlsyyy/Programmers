function solution(s1, s2) {
    let count = 0
    s1.map(a => s2.includes(a) && count++)
    return count
}
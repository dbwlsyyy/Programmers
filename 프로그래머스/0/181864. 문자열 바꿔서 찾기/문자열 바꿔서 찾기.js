function solution(s, pat) {
    return [...s].map(a=> a === 'A' ? a = 'B' : a = 'A').join('').includes(pat) ? 1 : 0
}
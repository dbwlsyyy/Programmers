function solution(a, b, c) {
    const pow = (a, b, c, n) => Math.pow(a, n) + Math.pow(b, n) + Math.pow(c, n)
    
    const set = new Set([a,b,c])
    if (set.size === 3) return a + b + c
    if (set.size === 2) return (a + b + c) * pow(a,b,c,2)
    if (set.size === 1) return (a + b + c) * pow(a,b,c,2) * pow(a,b,c,3)
}
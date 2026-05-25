function solution(arr) {
    const groups = new Map()
    for (let str of arr) {
        let key = str.length
        let count = groups.get(key) || 0
        groups.set(key, count + 1)
    }
    return Math.max(...groups.values())
}
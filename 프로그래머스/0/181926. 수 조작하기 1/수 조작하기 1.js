function solution(n, control) {
    let res = n
    const obj = {
        'w': 1,
        's': -1,
        'a': -10,
        'd': 10
    }
    for (let char of control) {
        res += obj[char]
    }
    return res
}
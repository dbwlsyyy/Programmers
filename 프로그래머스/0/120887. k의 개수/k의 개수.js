function solution(i, j, k) {
    const arr = []
    for(let n = i; n < j+1; n++) {
        arr.push(n)
    }
    const res = arr.join('').match(new RegExp(`${k}`,'g')) || []
    return res.length
}
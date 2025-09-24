function solution(s, n) {
    const arr = [];
    for(let i = 0; i < s.length; i += n) {
        arr.push(s.slice(i, i + n));
    }
    return arr;
}
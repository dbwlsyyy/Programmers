function solution(i, j, k) {
    let s = '';
    for(let n = i; n < j+1; n++) {
        s += n;
    }
    return s.split(`${k}`).length -1
}
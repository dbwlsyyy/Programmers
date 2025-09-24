function solution(s, n) {
    return s.match(new RegExp(`.{1,${n}}`, 'g'))
}
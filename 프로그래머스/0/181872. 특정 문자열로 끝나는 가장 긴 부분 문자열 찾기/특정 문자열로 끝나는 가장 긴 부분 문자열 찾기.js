function solution(s, pat) {
    const i = s.lastIndexOf(pat)
    return s.slice(0,i+pat.length)
}
function solution(s) {
    const res = s.match(new RegExp('\\d+','g')) || []
    return res.reduce((a,b)=> Number(a) + Number(b),0)
}
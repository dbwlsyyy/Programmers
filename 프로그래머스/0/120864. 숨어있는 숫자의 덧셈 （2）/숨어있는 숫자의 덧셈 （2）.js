function solution(s) {
    return s.split(/\D+/).reduce((a,b)=> a + Number(b),0)
}
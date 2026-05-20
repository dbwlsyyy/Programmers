function solution(binomial) {
    const cal = {
        '+': (a,b) => a+b,
        '-': (a,b) => a-b,
        '*': (a,b) => a*b
    }
    const arr = binomial.split(' ')
    return cal[arr[1]](Number(arr[0]), Number(arr[2]))
}
function solution(s, num1, num2) {
    const ss = [...s];
    [ss[num2], ss[num1]] = [ss[num1], ss[num2]];
    return ss.join('');
    
}
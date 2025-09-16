function solution(q) {
    return q.map(expr => {
        [left,right] = expr.split('=');
        [a, op, b] = left.split(' ');
        const calc = op === '+' ? Number(a) + Number(b) : a - b;
        return calc === Number(right) ? 'O' : 'X';
    })
}

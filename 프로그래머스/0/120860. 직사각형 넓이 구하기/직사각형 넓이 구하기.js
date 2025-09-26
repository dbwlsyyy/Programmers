function solution(dots) {
    const a = dots[0];
    const b = dots.filter(v => v[0] != a[0] && v[1] != a[1]).flat();
    return Math.abs(a[0] - b[0]) *  Math.abs(a[1] - b[1])
}
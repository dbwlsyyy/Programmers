function solution(b, a) {
    return [...b].sort().join('') == [...a].sort() .join('') ? 1 : 0;
}
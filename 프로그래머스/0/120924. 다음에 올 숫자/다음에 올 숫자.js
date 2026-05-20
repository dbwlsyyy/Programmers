function solution(common) {
    const isArithmetic = common[2] - common[1] === common[1] - common[0];
    return isArithmetic 
        ? common.at(-1) + (common[1] - common[0])
        : common.at(-1) * (common[1] / common[0]);
}
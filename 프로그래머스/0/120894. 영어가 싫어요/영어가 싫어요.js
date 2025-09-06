function solution(n) {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let result = n
    words.forEach((word, i) => result = result.replaceAll(word, i))
    return Number(result)
}
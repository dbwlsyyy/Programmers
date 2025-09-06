function solution(s) {
    const charCount = [...s].reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

    const uniqueChars = Object.keys(charCount).filter(char => charCount[char] === 1);

    uniqueChars.sort();
    return uniqueChars.join('');
}
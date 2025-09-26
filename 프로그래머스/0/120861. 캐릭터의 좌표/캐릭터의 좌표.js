function solution(keyinput, board) {
    const result = [0, 0];
    const maxX = (board[0] - 1) / 2;
    const maxY = (board[1] - 1) / 2;
    
    for (let i = 0; i < keyinput.length; i++) {
        if (keyinput[i] === "right" && result[0] < maxX) {
            result[0] += 1;
        } else if (keyinput[i] === "left" && result[0] > -maxX) {
            result[0] -= 1;
        } else if (keyinput[i] === "up" && result[1] < maxY) {
            result[1] += 1;
        } else if (keyinput[i] === "down" && result[1] > -maxY) {
            result[1] -= 1;
        }
    }
    return result;
}
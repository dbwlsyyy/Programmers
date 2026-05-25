function solution(board, k) {
    let res = 0;
    
    // 마음 편하게 실제 배열의 가로, 세로 크기만큼만 안전하게 돌기!
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            // 방 안에서 "우리 지금 조건 만족하니?" 라고 물어보고 더하기
            if (i + j <= k) {
                res += board[i][j];
            }
        }
    }
    return res;
}
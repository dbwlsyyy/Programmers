function solution(id_pw, db) {
    // 디비에서 아이디 포함하는지 찾기 있으면 비번 찾기 없으면 fail
    let result='fail'
    for (let user of db) {
        if (user[0] === id_pw[0]) {
            result = user[1] === id_pw[1] ? 'login' : 'wrong pw'
            break;
        }
    }
    return result
}
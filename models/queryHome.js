var mysql = require('./dbconn');
var pool = mysql.pool;

/*function getLogin(data, callback) {
    var datas = {
        data: '',
        hasData: false,
        msg: '아이디나 비밀번호가 다릅니다.'
    }
    var sql = 'SELECT member_id, member_name, member_nickname, sex, phone_num, regdate, session_date FROM member WHERE member_id=? AND member_pwd=?';
    pool.getConnection(function (err, conn) {
        if (err) console.error('err', err);
        conn.query(sql, data, function (err, result) {
            if (err) console.error('err', err);
            if (result.length > 0) {
                if (result.length > 1) {
                    datas.hasData = false;
                    datas.msg = '아이디가 중복입니다. 고객센터로 연락주세요';
                } else {
                    datas.hasData = true;
                    datas.data = result[0];
                }
            }
            callback(datas);
            conn.release(); // 해지
        });
    });
}

function getLogin2(data, callback) {
    var datas = {
        data: '',
        hasData: false,
        msg: '아이디나 비밀번호가 다릅니다.'
    }
    var sql = 'SELECT member_id, member_pwd, member_name, member_nickname, sex, phone_num, regdate, session_date FROM member WHERE member_id=?';
    pool.getConnection(function (err, conn) {
        if (err) console.error('err', err);
        conn.query(sql, data[0], function (err, result) {
            if (err) console.error('err', err);
            if (result.length > 0) {
                if (result.length > 1) {
                    datas.hasData = false;
                    datas.msg = '아이디가 중복입니다. 고객센터로 연락주세요';
                } else {
                    if (data[1] == result[0].member_pwd) {
                        datas.hasData = true;
                        datas.data = result[0];
                    } else {
                        datas.hasData = false;
                        datas.msg = '비밀번호가 다릅니다.';
                    }
                }
            }
            callback(datas);
            conn.release(); // 해지
        });
    });
}

function getLogin3(data, callback) {
    var datas = {
        data: '',
        hasData: false,
        msg: '아이디나 비밀번호가 다릅니다.'
    }
    var sqlDuplicatedId = 'SELECT member_name FROM member WHERE member_id=?';
    var sql = 'SELECT member_id, member_name, member_nickname, sex, phone_num, regdate, session_date FROM member WHERE member_id=? AND member_pwd=?';

    pool.getConnection(function (err, conn) {
        if (err) console.error('err', err);
        conn.query(sqlDuplicatedId, data[0], function (err, dRes) {
            if (err) console.error('err', err);
            console.log(dRes.length);
            if (dRes.length > 1) {
                datas.hasData = false;
                datas.msg = '아이디가 중복입니다. 고객센터로 연락주세요';
                callback(datas);
                conn.release(); // 해지
            } else if (dRes.length == 0) {
                datas.hasData = false;
                datas.msg = '아이디가 없습니다.';
                callback(datas);
                conn.release(); // 해지
            } else {
                conn.query(sql, data, function (err, result) {
                    if (err) console.error('err', err);
                    if (result.length == 0) {
                        datas.hasData = false;
                        datas.msg = '아이디나 비밀번호가 다릅니다.';
                    } else if (result.length == 1) {
                        datas.hasData = true;
                        datas.data = result[0];
                    }
                    callback(datas);
                    conn.release(); // 해지
                });
            }
        });
    });
}

// 회원가입
function entryMember(data, callback) {
    var isSuccess = false;
    var sql = 'INSERT INTO member(member_id, member_pwd, member_name, member_nickname, sex, phone_num, regdate, session_date) VALUES (?,?,?,?,?,?,now(),now())';
    pool.getConnection(function (err, conn) {
        if (err) console.error('err', err);
        conn.query(sql, data, function (err, result) {
            if (err) console.error('err', err);
            if(result.affectedRows == 1){
                isSuccess = true;
            }
            callback(isSuccess);
            conn.release(); // 해지
        });
    });
}

function memberIdCheck(id, callback) {
    var isAvailable = false;
    var sql = 'SELECT count(*) AS count FROM member WHERE member_id=?';
    pool.getConnection(function (err, conn) {
        if (err) console.error('err', err);
        conn.query(sql, id, function (err, result) {
            if (err) console.error('err', err);
            if(result[0].count == 0){
                isAvailable = true;
            }else{
                isAvailable = false;
            }
            callback(isAvailable);
            conn.release(); // 해지
        });
    });
}*/

function getEnterance(data, callback) { //함수생성
    var datas = {
        data: '',
        hasData: false,
        msg: '신청내역이 없습니다. 이메일이나 전화번호를 다시 확인해주세요.'
    }
    var sql = 'SELECT name, sex, birth_year, etc FROM sign_up WHERE email=? AND phone_num=?';
    
    pool.getConnection(function (err, conn) {
        if (err) console.error('error 발생.', err);
        conn.query(sql, data, function (err, result) {
            if (err) console.error('err', err);
            if(result.length > 1){
                datas.hasData = false;
                datas.msg = '중복신청 되었습니다. 고객센터로 연락주세요';
                callback(datas);
                conn.release(); // 해지
            }
            else if (result.length == 0) {
                datas.hasData = false;
                datas.msg = '신청내역이 없습니다. 이메일이나 전화번호를 다시 확인해주세요.';
                callback(datas);
                conn.release(); // 해지
            } else if (result.length == 1) {
                datas.hasData = true;
                datas.data = result[0];
                callback(datas);
                conn.release(); // 해지
            }

        });
    });
}

function entryDrivingTest(data, callback) {
    var isSuccess = false;
    var sql = 'INSERT INTO sign_up(name, phone_num, email, birth_year, sex, etc) VALUES (?,?,?,?,?,?)';
    pool.getConnection(function (err, conn) {
        if (err) console.error('err', err);
        conn.query(sql, data, function (err, result) {
            if (err) console.error('err', err);
            if(result.affectedRows == 1){
                isSuccess = true;
            }
            callback(isSuccess);
            conn.release();
        });
    });
}


/*exports.getLogin = getLogin;
exports.getLogin2 = getLogin2;
exports.getLogin3 = getLogin3;
exports.entryMember = entryMember;
exports.memberIdCheck = memberIdCheck;*/
exports.getEnterance = getEnterance;
exports.entryDrivingTest = entryDrivingTest;
// 콜백 예제
// callback Promise Async & await 모두 비동기 통신(non blocking)을 위해 사용
// non blocking 은 보통 컴퓨터는 함수 순서대로 처리하려고 하는데
// 함수가 다 처리될때 까지 기다리는게 아니라
// 함수가 실행되면 처리 되는 동안 다음 함수를 실행시켜버린다.

// 여기서 callback은 변수가 아닌 함수가 파라미터로 들어간다.
const addSume = (a, b, callback) =>{
    //setTimeout은 몇뒤에 함수 실행
    setTimeout(()=>{
        // a와 b가 숫자가 아니면 callback 함수 실행
        if(typeof a !=='number' || typeof b !== 'number') return callback('a,b must be numbers');
        callback(undefined, a+b);
    }, 3000);
}

// calllback
let callback = (error, sum) =>{
    if(error) return console.log({error});
    console.log({sum});
}

addSume(10, 'a', callback);
import { useState } from "react"

const State = () => {
    // js 구문
    // let name = '겨울'

    // const changeName = () => {
    //     // 삼항연산자
    //     // 조건 ? 참일때 : 거짓일때
    //     name = name === '겨울' ? '가을' : '겨울' 
    //     console.log(name)

    //     document.querySelector('h1').innerText = name
    // }

    // 리액트 구문
    // useState: 상태값을 저장할 수 있는 변수를 생성하는 함수
    // const [상태이름, 상태변경함수] = useState(상태초기값)
    const [name, setName] = useState('겨울')

    const changeName = () => {
        setName(name === '겨울' ? '가을' : '겨울')
    }

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={changeName}>이름 바꾸기</button>
        </div>
    )    
}

export default State
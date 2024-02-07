const Event = () => {

    const handleClick = (event) => {
        console.log('버튼이 클릭되었습니다.')
        // alert('버튼이 클릭되었습니다.')
        console.log(event)
        console.log(event.target)
        console.log(event.type)
    }

    const handleMouseOver = (event) => {
        event.target.style.backgroundColor='pink'
    }

    const handleChange = (event) => {
        document.querySelector('.text-value').innerText = event.target.value;
    }
    

    return (
        <>
            <h1>클릭 이벤트</h1>
            <button onClick={handleClick}>버튼</button>

            <h1>마우스 오버 이벤트</h1>
            <div onMouseOver={handleMouseOver}>마우스 오버 시 배경색 변함</div>

            <h1>입력 이벤트</h1>
            <input onChange={handleChange} type="text" placeholder="입력하세요"/>
            <div className="text=value"></div>
        </>
    )
}

export default Event
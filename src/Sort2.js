import { faBars, faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from 'styled-components'

const Sort2 = () => {

    const [isToggled, setIstoggled] = useState(false)

    return (
        <Menulist id="gnb" isToggled={isToggled}>
            <button onClick={() => {setIstoggled(!isToggled)}}>
                <FontAwesomeIcon icon={isToggled ? faXmark : faBars} />
                <span className="blind">
                    전체메뉴 보기
                </span>
            </button>
                <ul>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>iPhone</li>
                    <li>Watch</li>
                    <li>Music</li>
                    <li>고객지원</li>
                </ul>
        </Menulist>
    )
}

const Menulist = styled.div`
    .blind {
        display: none;
    }
    ul{
        display: ${(props) => (props.isToggled ? 'block' : 'none')};
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        list-style: none;
    }
    li {
        padding: 20px;
        border-radius: 50px;
        color: #000;
        cursor: pointer;
        &:hover {
            color: #fff;
            background-color: #0059ff44;
        }
`

export default Sort2



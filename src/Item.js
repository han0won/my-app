const Item = ({item}) => {
    return (
        <li>
            <strong>{item.name}</strong>
            <span>{item.price}</span>
        </li>
    )
}

export default Item
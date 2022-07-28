const HeaderCurrency = (props) => {
    return (

        <div className="header__currency--wrapper">
            <p className="header__currency--name">{props.name}</p>
            <p className="header__currency--cost">{props.cost.toFixed(2)}</p>
        </div>

    )
}

export default HeaderCurrency

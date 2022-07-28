const MainInput = (props) => {
    return (
        <div className="main__inputs">
            <input type="text"
                value={props.value}
                onChange={event => props.onAmountChange(event.target.value)}
            />
            <select
                value={props.currency}
                onChange={event => props.onCurrencyChange(event.target.value)}
            >
                {props.currencies.map(((currency, index) => (
                    <option
                        value={currency.cc}
                        key={index}
                    >{currency.cc}</option>
                )))}
            </select>
        </div>
    );
}

export default MainInput;
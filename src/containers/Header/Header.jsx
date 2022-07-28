import HeaderCurrency from "../../components/Header/HeaderCurrency";

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="header__logo">Currency Converter</h1>
                <div className="header__currency">
                    {props.currencies.map((currency, index) => {
                        if (currency.cc === "EUR" || currency.cc === "USD") {
                            return <HeaderCurrency name={currency.cc} cost={currency.rate} key={index} />
                        } else { return false }
                    })}
                </div>
            </div>
        </header>
    );
}

export default Header;

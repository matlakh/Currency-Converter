import React from 'react';
import { useState, useEffect } from "react";
import MainInput from '../../components/Main/MainInput';

const Main = (props) => {

    const [fromAmount, setFromAmount] = useState(0);
    const [toAmount, setToAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [currencyRates, setRates] = useState([]);


    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("apikey", "FYtme65wlnfNtMEOavWIaJaPSt8Dpija");

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };
        //https://api.apilayer.com/exchangerates_data/ - new link
        fetch("https://api.apilayer.com/fixer/latest?", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setRates(result.rates);
            })
            .catch(error => console.log('error', error));
    }, [])


    useEffect(() => {
        if (!!currencyRates) {
            function init() {
                handleFromAmountChange(0);
            }
            init();
        }
    }, [currencyRates]);

    function willRound(value) {
        return value.toFixed(2);
    }

    function handleFromAmountChange(fromAmount) {
        setToAmount(willRound(fromAmount * currencyRates[toCurrency] / currencyRates[fromCurrency]));
        setFromAmount(fromAmount);
    }

    function handleFromCurrencyChange(fromCurrency) {
        setToAmount(willRound(fromAmount * currencyRates[toCurrency] / currencyRates[fromCurrency]));
        setFromCurrency(fromCurrency);
    }

    function handleToAmountChange(toAmount) {
        setFromAmount(willRound(toAmount * currencyRates[fromCurrency] / currencyRates[toCurrency]));
        setToAmount(toAmount);
    }

    function handleToCurrencyChange(toCurrency) {
        setFromAmount(willRound(toAmount * currencyRates[fromCurrency] / currencyRates[toCurrency]));
        setToCurrency(toCurrency);
    }

    return (
        <main className="main">
            <div className="container">
                <div className="main__wrapper">
                    <h2 className="main__title">{fromCurrency} to {toCurrency}</h2>
                    <div className="main__container">
                        <MainInput
                            onAmountChange={handleFromAmountChange}
                            onCurrencyChange={handleFromCurrencyChange}
                            currencies={props.currencies}
                            value={fromAmount}
                            currency={fromCurrency}
                        />
                        <svg className="main__image" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></svg>
                        <MainInput
                            onAmountChange={handleToAmountChange}
                            onCurrencyChange={handleToCurrencyChange}
                            currencies={props.currencies}
                            value={toAmount}
                            currency={toCurrency}
                        />
                    </div>
                </div>
            </div>
        </main>
    );

}

export default Main;

import React, { useState, useEffect } from 'react';

function Converter() {
    const [currencies, setCurrencies] = useState([]);
    const [selectedCurrency1, setSelectedCurrency1] = useState("");
    const [selectedCurrency2, setSelectedCurrency2] = useState("");
    const [inputValue, setInputValue] = useState(0);
    const [convertedValue, setConvertedValue] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3001/currencies");
                const data = await response.json();
                const filteredData = data.filter(item => item.symbol.endsWith('USDT'));
                setCurrencies(filteredData);
            } catch (error) {
                console.error("Error fetching the currencies:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (selectedCurrency1 && selectedCurrency2) {
            const rate1 = currencies.find(currency => currency.symbol === selectedCurrency1).price;
            const rate2 = currencies.find(currency => currency.symbol === selectedCurrency2).price;

            const result = (inputValue * rate1) / rate2;
            setConvertedValue(result);
        }
    }, [selectedCurrency1, selectedCurrency2, inputValue, currencies]);

    return ( 
        <div className="main">
            <div className="header">
                <h1>Currency Converter</h1>
            </div>
            <div className="content">
                <div className="select-field">
                    <div className="select">
                        <select 
                            value={selectedCurrency1}
                            onChange={(e) => setSelectedCurrency1(e.target.value)}
                        >
                            <option>Select Currency</option>
                            {currencies.map((currencyItem) => (
                                <option key={currencyItem.symbol} value={currencyItem.symbol}>
                                    {currencyItem.symbol}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <input 
                            type='number' 
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                        />
                    </div>
                </div>
                <div className="equal">
                    <p className="default-arrow">&#129047;</p>
                    <p className="responsive-arrow">&#10140;</p>
                </div>
                <div className="select-field">
                    <div className="select">
                        <select 
                            value={selectedCurrency2}
                            onChange={(e) => setSelectedCurrency2(e.target.value)}
                        >
                            <option>Select Currency</option>
                            {currencies.map((currencyItem) => (
                                <option key={currencyItem.symbol} value={currencyItem.symbol}>
                                    {currencyItem.symbol}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <input value={convertedValue.toFixed(4)} disabled/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Converter;

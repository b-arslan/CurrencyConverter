import React, { useState, useEffect } from 'react';

function Converter() {
    const [currencies, setCurrencies] = useState([]);
    const [selectedCurrency1, setSelectedCurrency1] = useState("");
    const [selectedCurrency2, setSelectedCurrency2] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3001/currencies");
                const data = await response.json();
                setCurrencies(data);
            } catch (error) {
                console.error("Error fetching the currencies:", error);
            }
        };

        fetchData();
    }, []);

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
                </div>
                <div className="equal">
                    <p>&#10140;</p>
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
                </div>
            </div>
            <div className="converted-price">
                <label>Converted Price</label>
                <input disabled/>
            </div>
        </div>
    );
}

export default Converter;

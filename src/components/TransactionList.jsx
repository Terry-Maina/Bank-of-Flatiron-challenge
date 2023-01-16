import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
    const [transactions, setTransactions] = useState([]);
    const [copy, setCopy] = React.useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/transactions")
        .then((response) => response.json())
        .then((data) => {

            setCopy(data)
            setTransactions(data)});
        }, []);
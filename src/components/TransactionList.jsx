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
        console.log(transactions);

        function addTransacfinfor(newTransaction) {
            const update = [...transactions, newTransaction];
            setTransactions(update);
            }
        //remove transaction
        function deleteTransact(id) {
            const update = transactions.filter((transaction) => transaction.id !== id);
            setTransactions(update);
        }
        
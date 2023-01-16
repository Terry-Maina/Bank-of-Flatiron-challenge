import React , {useState} from "react";
// import Transaction from "./Transaction";

function AddTransactionForm(anewTransaction) {

  const [dataInfo, setDataInfo] = useState({
    date:"",
    description:"",
    category:"",
    amount:0,
  })
  
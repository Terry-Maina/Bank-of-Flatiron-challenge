import React , {useState} from "react";
// import Transaction from "./Transaction";

function AddTransactionForm(anewTransaction) {

  const [dataInfo, setDataInfo] = useState({
    date:"",
    description:"",
    category:"",
    amount:0,
  })

  const[date,setDate]= useState("")
  const[description,setDescription] = useState("")
  const[category,setCategory] = useState("")
  const[amount,setAmount] = useState("")
  const[add, setAdd] = useState([])
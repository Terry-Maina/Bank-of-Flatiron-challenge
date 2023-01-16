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

  function handleSubmit(event){
    // event.preventDefault();
    fetch(`http://localhost:3000/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // dataInfo
        date:dataInfo.date,
        description:dataInfo.description,
        category:dataInfo.category,
        amount:dataInfo.amount
        // addFormFields(){
        //   setDataInfo([...dataInfo, {
        //     date:"",
        //     description:"",
        //     category:"",
        //     amount:""
        //   }])
        //  }

      })
    })
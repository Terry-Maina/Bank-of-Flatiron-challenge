import React , {useState} from "react";

function AddTransactionForm({anewTransaction}) {

  const [dataInfo, setDataInfo] = useState({
    date:"",
    description:"",
    category:"",
    amount:0,
  })

  function handleSubmit(event){
    event.preventDefault();

    // const info =[date, description, category, amount]
    // if(date&&description&&category&&amount){
    //   setAdd((dataInfo)=>[...dataInfo,info])
    //   setDate("")
    //   setDescription("")
    //   setCategory("")
    //   setAmount("")
    // }

    fetch("http://localhost:3003/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataInfo)
    })
    .then((response)=>response.json())
    .then((data)=>{
      anewTransaction(data)
    })
  }

  function handleChange(event){
    const val = event.target.name
     setDataInfo({...dataInfo, [val] : event.target.value})
     console.log ("hi")
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={dataInfo.date} onChange={handleChange} />
          <input type="text" name="description" placeholder="Description" value={dataInfo.description} onChange={handleChange}/>
          <input type="text" name="category" placeholder="Category" value={dataInfo.category} onChange={handleChange}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={dataInfo.amount} onChange={handleChange}/>
        </div>
        <button className="ui button" type="submit" onClick={handleSubmit}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
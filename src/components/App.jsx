import React, {useState} from "react";
import AccountContainer from "./AccountContainer";
//import AddTransactionForm from "./AddTransactionForm";


function App() {
  //const [transaction, setTransactions] = useState([])
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
    </div>
  );
}

export default App;
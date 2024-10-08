import React, { useState } from "react";
import Create from "./Create";
import Show from "./Show";


const App = () => {
    const [expenses, setexpenses] = useState([
   
      ]);
      return (
          <div>
              <h3>Create Expenses</h3>
              <Create expenses={expenses} setexpenses={setexpenses} />
              <hr />
              <h2>search expense by query</h2>
              <hr />
              <h2>Expense List</h2>
              <Show expenses={expenses} setexpenses={setexpenses} />
          </div>
      );
  };
  
  export default App;
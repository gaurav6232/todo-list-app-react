import {createContext , useState} from 'react'


 export  const ExpensesContext = createContext();

const Context = (props) => {
    
  const [Expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem())
    ||[]);

  return (
    <ExpensesContext.Provider>
      {props.children}
    </ExpensesContext.Provider>
  )
}

export default Context

import { useState } from "react";

const Create = (props) => {
    const { expenses, setexpenses } = props;
    const [amount, setamount] = useState(0);
    const [remark, setremark] = useState("");
    const [category, setcategory] = useState("");
    const [payment, setpayment] = useState("cash");

    const SubmitHandler = (e) => {
        e.preventDefault();

        const newexpense = { amount, remark, category, payment };

        const copyexpenses = [...expenses];
        copyexpenses.push(newexpense);
        setexpenses(copyexpenses);

        // setexpenses([...expenses, newexpense])
    };
    return (
        <form onSubmit={SubmitHandler}>
            <input
                onChange={(e) => setamount(e.target.value)}
                value={amount}
                type="number"
                placeholder="amount"
            />
            <input
                onChange={(e) => setremark(e.target.value)}
                value={remark}
                type="text"
                placeholder="remark"
            />
            <input
                onChange={(e) => setcategory(e.target.value)}
                value={category}
                type="text"
                placeholder="category"
            />
            <select
                onChange={(e) => setpayment(e.target.value)}
                value={payment}
                name="payment"
            >
                <option value="cash">Cash</option>
                <option value="online">Online</option>
                <option value="card">Card</option>
            </select>
            <button>Add Expense</button>
        </form>
    );
};

export default Create;
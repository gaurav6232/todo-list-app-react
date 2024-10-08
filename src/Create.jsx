import React from "react";

const Show = (props) => {
    const { expenses, setexpenses } = props;
    return (
        <>
            <h2>
                Total Spent: {expenses.reduce((ac, cv) => ac + +cv.amount, 0)}{" "}
            </h2>
            <ol>
                {expenses.length === 0
                    ? "No Data Present"
                    : expenses.map((e, index) => (
                          <li key={index}>
                              {e.remark}({e.payment}) - {e.category} -{" "}
                              {e.amount} <span>❌</span>
                          </li>
                      ))}
            </ol>
        </>
    );
};

export default Show;
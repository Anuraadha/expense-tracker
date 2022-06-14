import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import Card from './../UI/Card'
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import React, { useState } from "react";

function Expense(props) {

    const [filteredYear, setFilterYear] = useState('2020')


    const filterChangeHandler = selectedYear => {
        console.log(selectedYear)
        setFilterYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expense;

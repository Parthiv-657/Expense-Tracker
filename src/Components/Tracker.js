import React from 'react'
import Salary from './Salary.js'
import AddExpenses from './AddExpenses.js'
import Result from './Result.js'
import Transactions from './Transactions.js'

export class Tracker extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            salary : 0,
            expenseVal : [],
            expenseCom : []
        }
        this.setSalary = this.setSalary.bind(this);
        this.setExpense = this.setExpense.bind(this);
    }

    setSalary(sal)
    {
        this.setState({
            salary : sal
        })
    }

    setExpense(amount, comment)
    {
        this.setState({
            expenseVal : this.state.expenseVal.concat(amount),
            expenseCom : this.state.expenseCom.concat(comment)
        })
    }

    render()
    {
        let sum = 0;
        for(let i=0; i<this.state.expenseVal.length; ++i)
        {
            sum += parseInt(this.state.expenseVal[i]);
        }
        sum = this.state.salary-sum;
        return(
            <div className = "frame">
                <div className = "expense">
                    <Salary setSalar = {this.setSalary}/>
                    <AddExpenses setExpense = {this.setExpense}/>
                </div>
                <Result sal = {this.state.salary} sum = {sum}/>
                <Transactions val = {this.state.expenseVal} com = {this.state.expenseCom}/>
            </div>
        )
    }
}

export default Tracker
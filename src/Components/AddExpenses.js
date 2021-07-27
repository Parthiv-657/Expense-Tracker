import React from 'react'


export class AddExpenses extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            amount : 0,
            comment : ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.sendBack = this.sendBack.bind(this);
    }

    handleChange(event)
    {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    sendBack()
    {
        this.props.setExpense(this.state.amount, this.state.comment);
    }

    render()
    {
        return(
            <div>
                <form>
                    <input name="amount"type="text" placeholder="Add Amount" onChange={this.handleChange}></input>
                    <input name="comment"type="text" placeholder="Add Comment" onChange={this.handleChange}></input>
                    <button type = "button"onClick={this.sendBack}>Add Expense</button>
                </form>
            </div>
        )
    }
}


export default AddExpenses
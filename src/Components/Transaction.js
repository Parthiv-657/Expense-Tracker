import React from 'react';

export class Transaction extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            amount : 0 ,
            comment : ""
        };
    }

    render()
    {
        return (
            <div className="transaction">
                <h className="comment">{this.props.comment}</h>
                <p className="amount">{this.props.amount}</p>
            </div>
        )
    }
}

export default Transaction;
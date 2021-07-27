import React from 'react';
import Transaction from './Transaction';

export class Transactions extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const val = this.props.val;
        const com = this.props.com;
        const trans = val.map((v, i)=>
            {
                return <Transaction comment = {com[i]} amount = {v}/>
            }
        )
        return (
            <div className = "transaction">
                {trans}
            </div>
        )
    }
}

export default Transactions
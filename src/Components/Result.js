import React from 'react'

export class Result extends React.Component
{
    constructor(props)
    {
        super();
    }

    render()
    {
        return(
            <div className = "result">
                <div>
                    <div>
                        Earning
                    </div>
                    {this.props.sal}
                </div>
                <div>
                    <div>
                        Savings
                    </div>
                    {this.props.sum}
                </div>
            </div>
        )
    }
}

export default Result 
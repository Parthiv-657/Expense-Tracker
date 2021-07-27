import React from 'react'

class Salary extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            salary : 0
        };
        this.setSalary = this.setSalary.bind(this);
    }
    setSalary(event) {
        this.setState({
            salary : event.target.value
        });
        this.props.setSalar(event.target.value);
    }
    render()
    {
        return(
            <div className = "expense">
                <p>Set Salary</p>
                <input type="text" placeholder="Enter Salary" onChange={this.setSalary}></input>
            </div>
        )
    }
}

export default Salary 
import React from 'react'
class Header extends React.Component{
    render(){
        return(
            <div className = "header">
                {/* <img src='./tree.jpg' alt = "./tree.jpg"></img> */}
                <h1 className="heading">
                    Expense Tracker
                </h1>
            </div>
        )
    }
}

export default Header
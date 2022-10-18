import React, { Component } from "react";

class Crud extends Component{
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    id: 1,
                    name:'Abdulloh'
                },
                {
                    id: 1,
                    name:'efsdffsd'
                },
                {
                    id: 1,
                    name:'wdasaf'
                },
            ]
        }
    }
    render() {
        const onSearch = ({ target: { value } }) => {
            let res = this.state.data.filter((val) => val.name.includes(value))
            this.setState({data:res})
        }
        
        return (
            <div>
                <input onChange={onSearch} type="text" placeholder="search" />
                <button onClick={onSearch}>Search</button>
                {
                    this.state.data.map((value, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td> {value.name} </td>
                        </tr>
                        
                    ))
                }
            </div>
        )
    }
    
}
export default Crud
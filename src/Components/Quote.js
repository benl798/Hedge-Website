import React, { Component } from 'react'

class Quote extends Component {

    state = {
        details: { customerName: "", address: "" }
    };
   
    handleSubmit = e => {
        e.preventDefault();
        // Call the server
        console.log('Submitted!');
    };

    handleChange = ({ currentTarget: input}) => {
        const details = { ...this.state.details };
        details[input.customerName] = input.value;
        this.setState({ details });
    };


    render() {
        const { details } = this.state;
        
        return (
            <div>
                <h1>Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="customerName">Your Name*</label>
                        <input 
                            autoFocus 
                            onChange={this.handleChange}
                            value={details.customerName} 
                            id="customerName" 
                            name="customerName"
                            type="text" 
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Your Address*</label>
                        <input 
                            id="address" 
                            value={details.address}
                            onChange={this.handleChange}
                            name="address"
                            type="text" 
                            className="form-control"
                        />
                    </div>
                    <button className="btn btn-primary">Get A Quote</button>
                </form>
            </div>
        )
    }
}

export default Quote;
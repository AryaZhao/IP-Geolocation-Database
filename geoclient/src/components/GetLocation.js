import React, { Component, useImperativeHandle} from 'react';
// import { Button, Form } from 'react-bootstrap';
// import $ from "jquery";

class GetLocation extends Component{
    constructor(props) {
        super(props);
        this.state = {ip: '', city:'', zip:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({ip: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        fetch('http://api.ipstack.com/'+this.state.ip+'?access_key=42e66e9167feef9e6055f5761521ca1d')
            .then(res => res.json())
            .then((result) => {
                  this.setState({
                    city: result.city,
                    zip: result.zip
                  });
                  alert('IP location: '+this.state.city+'. IP zip: '+ this.state.zip);
                },
                (error) => {
                  this.setState({
                    error
                  });
                }
              );
      }
    
      render() {
        console.log(this.state);
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                IP:
                <input type="text" value={this.state.ip} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Get Geolacation" />
          </form>
        );
      }
}

export default GetLocation;

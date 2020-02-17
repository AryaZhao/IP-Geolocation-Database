import React, { Component, useImperativeHandle} from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
// import $ from "jquery";

class GetLocation extends Component{
    constructor(props) {
        var aday = new Date(),
        curr = aday.getFullYear() + '-' + (aday.getMonth() + 1) + '-' + aday.getDate();

        super(props);
        this.state = {ip: '', city:'', zip: 0, date: new Date(curr)};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleChange(event) {
        this.setState({ip: event.target.value});
        // event.target.value = '';
        var today = new Date(),
        today_format = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.setState({date: new Date(today_format)});
      }
    
      handleClick(event) {
        event.preventDefault();
        fetch('http://api.ipstack.com/'+this.state.ip+'?access_key=42e66e9167feef9e6055f5761521ca1d')
            .then(res => res.json())
            .then((result) => {
                  this.setState({
                    city: result.city,
                    zip: Number(result.zip)
                  });
                  alert('Your IP adress '+this.state.ip + 
                        ' is in the city of '+this.state.city+
                        ', zipcode '+ this.state.zip+
                        ', date '+ this.state.date);

                  axios.post('http://localhost:5000/ip/add', this.state)
                    .then(res => console.log(res.data));
                },
                (error) => {
                  this.setState({
                    error
                  });
                }
              );
      }
    
      render() {
        var city = this.state.city;
        console.log(this.state);
        return (
            <div className='container'>
              <h4>Get city and zipcode of your IP address</h4>
              <br></br>
              <Form>
                <Form.Label>IP address: </Form.Label>
                <Form.Control placeholder = 'e.g. 160.39.208.28' value={this.state.ip} onChange={this.handleChange}/>
                <br></br>
                <Button variant='light' onClick={this.handleClick}>Get Geolocation</Button>
              </Form>
            </div>
        );
      }
}

export default GetLocation;

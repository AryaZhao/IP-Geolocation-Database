import DatePicker from 'react-datepicker';
import React, { Component, useImperativeHandle} from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import axios from 'axios';

class SearchDate extends Component{
    constructor(props) {
  
        super(props);
        this.state = {date: '', items:[]};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleChange(event) {
        this.setState({date: new Date(event.target.value)});
      }
    
      handleClick(event) {
        event.preventDefault();
        axios.get('http://localhost:5000/ip/'+ this.state.date)
          .then(res => {
            this.setState({items: res.data});
            console.log(res.data)
          });
      }
    
      render() {
        
        return (
          <div className='container'>
            <div>
              <h4>Explore data entries by date</h4>
              <br></br>
              <Form>
                <Form.Label>Date: </Form.Label>
                <Form.Control placeholder = 'e.g. 2020-2-16' onChange={this.handleChange}/>
                <br></br>
                <Button variant='light' onClick={this.handleClick}>Search History</Button>
              </Form>
            </div>
            <br />
            <br />
            <div>

            <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>IP address</th>
                    <th>City</th>
                    <th>Zipcode</th>
                    <th>Search Time</th>
                  </tr>
                </thead>
                <tbody>
                {
                  this.state.items.map(function(ip_info) {
                  return <tr key={ip_info.createdAt}>
                    <td>{ip_info.ip}</td>
                    <td>{ip_info.city}</td>
                    <td>{ip_info.zip}</td>
                    <td>{ip_info.createdAt}</td></tr>;
                  })
                }
                </tbody>
            </Table>
            </div>

          </div>
        );
      }
}

export default SearchDate;
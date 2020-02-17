import React, { Component, useImperativeHandle} from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import axios from 'axios';

class SearchHistory extends Component{
    constructor(props) {
        
        super(props);
        this.state = {number: '', items:[]};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleChange(event) {
        this.setState({number: event.target.value});
      }
    
      handleClick(event) {
        event.preventDefault();
        axios.get('http://localhost:5000/ip/last/'+ this.state.number)
          .then(res => {
            this.setState({items: res.data});
            console.log(res.data)
          });
      }
    
      render() {
        
        return (
          <div className='container'>
            <div>
              <h4>See recent database entries</h4>
              <br></br>
              <Form>
                <Form.Label>Number of Entries: </Form.Label>
                <Form.Control placeholder = 'e.g. 3' value={this.state.number} onChange={this.handleChange}/>
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

export default SearchHistory;
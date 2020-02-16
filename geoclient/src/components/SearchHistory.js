import React, { Component, useImperativeHandle} from 'react';
import { Button, Form } from 'react-bootstrap';

class SearchHistory extends Component{
    // constructor(props) {
    //     var aday = new Date(),
    //     curr = aday.getFullYear() + '-' + (aday.getMonth() + 1) + '-' + aday.getDate();

    //     super(props);
    //     this.state = {ip: '', city:'', zip: 0, date: curr};
    
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    //   }
    
    //   handleChange(event) {
    //     this.setState({ip: event.target.value});
    //     // event.target.value = '';
    //     var today = new Date(),
    //     today_format = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    //     this.setState({date: today_format});
    //   }
    
    //   handleClick(event) {
    //     event.preventDefault();
    //     fetch('http://api.ipstack.com/'+this.state.ip+'?access_key=42e66e9167feef9e6055f5761521ca1d')
    //         .then(res => res.json())
    //         .then((result) => {
    //               this.setState({
    //                 city: result.city,
    //                 zip: result.zip
    //               });
    //               // alert('IP location: '+this.state.city+'. IP zip: '+ this.state.zip);
    //               alert('Your IP adress '+this.state.ip + 
    //                     ' is in the city of '+this.state.city+
    //                     ', zipcode '+ this.state.zip+
    //                     ', date '+ this.state.date);
    //             },
    //             (error) => {
    //               this.setState({
    //                 error
    //               });
    //             }
    //           );
    //   }
    
      render() {
        
        return (
          <div className='container'>
            <h4>See recent database entries</h4>
            <br></br>
            <Form>
              <Form.Label>Number of Entries: </Form.Label>
              <Form.Control />
              {/* <Form.Control value={this.state.ip} onChange={this.handleChange}/> */}
              <br></br>
              <Button variant='light' onClick={this.handleClick}>Search History</Button>
            </Form>
          </div>
        );
      }
}

export default SearchHistory;
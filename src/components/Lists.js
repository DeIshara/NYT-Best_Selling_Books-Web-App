import React, { Component } from 'react';
import request from 'superagent';
import Button from 'react-bootstrap/Button';


import CardLists from './CardLists';

 
class Lists extends Component {
    
    constructor(props) {
        super(props);
            this.listBooks = this.listBooks.bind(this)
         this.state={
             books:[]
         }   
        }
      
        listBooks=(e)=>{
        e.preventDefault();
        request.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=zuZ83zeBYmKOsC6h1MVfYIhN18dyjXKs")
        .then((data)=>{
            console.log(data);
            this.setState({books:[...data.body.results.books]})
        })
    }
    
    render(){
        return (
          
            <div>
                <br/>
                <Button variant="outline-info" onClick={this.listBooks}>Get Best Selling Book Lists</Button>
                <CardLists books={this.state.books}/>
                        
            </div>
             
        );
    }
}
export default Lists;
           
              
            
        
            
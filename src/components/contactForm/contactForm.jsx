import { Component } from "react"

class ContactForm extends Component {
    state = {
        name:'',
        number:'',        
    }

    handleChange = (e) => {        
        const {name, value} = e.target
        this.setState({            
            // [e.target.name]: e.target.value
            [name]: value             
        })            
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createContacts({
          name:this.state.name,
          number:this.state.number          
        })
        this.setState({
            name:'',
            number:'' 
        })
    } 
   
    render() {
        return(
           <form onSubmit={this.handleSubmit}>
                <label htmlFor="">Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                <label htmlFor="">Number</label>
                <input type="text" name="number" value={this.state.number} onChange={this.handleChange}/>
                <button type="submit">add contact</button>
           </form> 
        )
    }
}

export default ContactForm;
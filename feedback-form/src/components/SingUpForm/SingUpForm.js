import React, { Component } from 'react';
import sendFeedback from '../Api/Api';

import component from './styledComponent';

const { StyledForm,
  StyledTitle,
  StyledInput,
  StyledText,
  StyledButton
} = component;

class ContactForm extends Component {
    state = {
      name: '',
      email: '',
      message: ''
    };

    handleChange = (event) => {
        this.setState({[event.currentTarget.name]: event.currentTarget.value})
    }

    handleSubmit = event => {
      event.preventDefault();
      this.AddFeadback();
      this.setState({ name: '', email: '' , message: ''});
  }
  
  AddFeadback = () => {
    const data = {name:this.state.name, email: this.state.email, message: this.state.message};
    sendFeedback(data);
    
  } 

  render() {
      
      return (
          <div>
          <StyledForm>
              <StyledTitle> Reach out to us!</StyledTitle>
                <label >
              <StyledInput type="text" name="name"
                placeholder="Your name* "
                    value={this.state.name}
                    onChange={this.handleChange}
                    required />
            </label>
            <label>
              <StyledInput type="text" name="email"
                placeholder="Your e-mail*"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required />
            </label>
            <label>
              <StyledText message type="text" name="message"
                placeholder="Your message*"
                    value={this.state.message}
                    onChange={this.handleChange}
                    required />
            </label>
            <StyledButton type="button" 
                onClick={this.handleSubmit}>
                    Send message
                </StyledButton>
          </StyledForm>
          </div>
        )
    }
}

export default ContactForm;
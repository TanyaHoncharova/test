import React, { Component } from 'react';
import sendFeedback from '../Api/Api';
import styled from 'styled-components';
import colors from '../helpers/var';

const StyledForm = styled.form`
    height: 563px;
    width: 557px;
    height: 563px;
    width: 557px;
    margin-left: 150px;
    margin-bottom: 174px;
    margin-top: 179px;
`;
const StyledTitle = styled.h1`
margin-bottom: 30px;
font-family: Apercu Arabic Pro;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 130%;
color: ${colors.title_text};
} 
`;

const StyledInput = styled.input`
    width: 557px;
    height: ${(props)=>(props.message ?'189px':'93px')};
    font-family: Apercu Arabic Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    color: ${colors.form_text};
    padding-left: 46px;
    margin-bottom: ${(props)=>(props.message ?'23px':'8px')};
    border: 1px solid ${colors.border_color};
    border-radius: 10px;
`;
const StyledButton = styled.button`
    height: 73px;
    width: 218;
    padding: 27px 52px;
    border: 1px solid transparent;
    color: ${colors.white});
    background-color: ${colors.yellow};
    border-radius: 35px;
    font-size: 18px;
    line-height: 18px;
`;

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
              <StyledInput message type="text" name="message"
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
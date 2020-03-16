import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';



const styleContaine = {
    padding: '130px 0',
    height: 'calc(100vh - 56px)'
}
class RegisterPage extends React.Component {
    
constructor(props)
{
    super(props);
    this.state = {
        count: 11
        // firstname: '',
        // lastname: '',
        // email: '',
        // password: '',
        // usertype: '',
        // firstnameError: '',
        // lastnameError: '',
        // emailError: '',
        // passwordError: ''
    };
    this.onSubmit = this.handleSubmit.bind(this);
}

handleSubmit(e) {
    console.log("Test");

     e.preventDefault();
    var self = this;
    this.setState({firstname: this.state.firstname,
        lastname: this.state.lastname, 
        email: this.state.email, 
        password: this.state.password,
        usertype: this.state.usertype
    })
    fetch('http://localhost:3001/registerPage', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            firstname: self.refers.firstname.value,
            lastname: self.refers.lastname.value,
            email: self.refers.email.value,
            password: self.refers.password.value,
            usertype: self.refers.usertype.value
        })
    }).then(response => response.json()).then(body => console.log(body));

//     const data = { username: 'example' };

//     fetch('https://example.com/profile', {
//     method: 'POST', // or 'PUT'
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//     })
//     .then((response) => response.json())
//     .then((data) => {
//     console.log('Success:', data);
//     })
//     .catch((error) => {
//     console.error('Error:', error);
//     });
};

// validate = () => {
//     let firstnameError = '';
//     let lastnameError =  '';
//     let emailError =  '';
//     let passwordError = '';
//     if(!this.state.firstname) {
//         firstnameError = 'first name cannot be blamk';
//     }

//     if(!this.state.lastname) {
//         lastnameError = 'last name cannot be blamk';
//     }
    
//     if(!this.state.password) {
//         passwordError = 'Password cannot be blank';
//     }
//     if(!this.state.email.includes('@')) {
//         emailError = 'invalid email';
//     } 

//     if(firstnameError || lastnameError || emailError || passwordError) {
//         this.setState({firstnameError, lastnameError, emailError, passwordError});
//         return false;
//     }
//     return true;
    
// }

render(){
    return (

    <Container style={styleContaine}>
        <Row style={{ margin: '0 auto'}}>
            <Col xs='2' sm='2' md='2' lg='4'></Col>
                <Col sm='8' md='8' lg='4'>
                    <Form  method="post"  action="sign up">
                    <h1><b>Sign Up</b></h1>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your first name" />
                        <div stylye={{fontSize: 12, color: "red"}}>{this.state.firstnameErro}</div>
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your last name" />
                        <div stylye={{fontSize: 12, color: "red"}}>{this.state.lastnameError}</div>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                        <div stylye={{fontSize: 12, color: "red"}}>{this.state.emailError}</div>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        <div stylye={{fontSize: 12, color: "red"}}>{this.state.passwordError}</div>
                    </Form.Group>
                    <Form.Group controlId="formBasicUserType.ControlSelect1">
                        <Form.Label>User Type</Form.Label>
                        <Form.Control as="select">
                            <option>Customer</option>
                            <option>Vendor</option>
                            <option>Admin</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="warning" type="submit">
                      Sign Up
                    </Button>
                    </Form>
                </Col>
            <Col xs='2' sm='2' md='2' lg='4'></Col>
        </Row>
    </Container>
   
);
}
}

export default RegisterPage;
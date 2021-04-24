

import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
export class App extends Component {

    state = {
        fullName:"",
        userName:"",
        email:"",
        password:""
    }
    // changeFullName= (e)=>{
    //     this.setState({
    //         fullName:e.target.value
    //     });
    // }

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const registered = {
            fullName: this.state.fullName,
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
        }

        axios.post('http://localhost:4000/app/signup',registered)
        .then(response => console.log(response.data));

        this.setState({
            fullName:'',
            userName:'',
            email:'',
            password:'',
        });
    }

    render() {
        return (
            <div className="container" style={{background:"white"}}>

                <div className="form-div">

                    <form onSubmit={this.onSubmit}>


                        <input type="text" 
                        placeholder="Full Name"
                        //onChange={this.changeFullName}
                        name="fullName"
                        onChange={this.onChange}
                        value={this.state.fullName}
                        className="form-control form-group"
                        />

                        <input type="text" 
                        placeholder="Username"
                        //onChange={this.changeUserName}
                        name="userName"
                        onChange={this.onChange}
                        value={this.state.userName}
                        className="form-control form-group"
                        />

                        <input type="text" 
                        placeholder="E-mail"
                        //onChange={this.changeEmail}
                        name="email"
                        onChange={this.onChange}
                        value={this.state.email}
                        className="form-control form-group"
                        />

                        <input type="password" 
                        placeholder="Password"
                        //onChange={this.changePassword}
                        name="password"
                        onChange={this.onChange}
                        value={this.state.password}
                        className="form-control form-group"
                        />

                        <input type="submit" className="btn btn-danger btn-block" value="Submit"/>


                    </form>

                </div>
                
            </div>
        )
    }
}

export default App

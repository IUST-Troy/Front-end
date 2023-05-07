import React, { Component } from "react";
import "../../Styles/SignUpLogIn/SignUpLogIn.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            usernameError: "",
            passwordError: "",
        };
        this.handPassword = this.handPassword.bind(this);
    }

    handleusernameInput = (e) => {
        this.setState({ username: e.target.value });
    };
    handlePasswordInput = (e) => {
        this.setState({ password: e.target.value });
    };
    handPassword(event) {
        const value = event.target.value;
        if (value.length < 8) {
            this.setState({
                password: value,
                passwordError: "Password should not be less than 8 characters.",
            });
        }
        if (value.length >= 8) {
            this.setState({ password: value, passwordError: "" });
        }
    }
    // handPassword(event) {
    //   const value = event.target.value;
    //   if ( value.length > 8) {
    //     this.setState({ passwordError: 'The Password should not exceed 8 characters.' });
    //   }
    //   if (value.length <= 8) {
    //     this.setState({ password: value, passwordError: '' });
    //   }
    // }
    handleSignUpClick = () => {
        toast.success(
            "Congratulations! Your Log-in was successful! ",
            {
                position: "top-right",
                autoClose: 1500,
                className: "toast-message",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

                // className: 'toast-message',
                // autoClose: 5000,
                // hideProgressBar: false,
                // closeOnClick: true,
                // pauseOnHover: true,
                // draggable: true,

                // progress: undefined,
                // theme: "light",
            },
            setTimeout(this.myURL, 6000)
        );
        toast.error("Error! Your log-in was not successful!", {
            className: "toast-message",
        });
    };
    handleSubmit(event) {
        event.preventDefault();
        // this.setState({ fname: '' });
        // this.setState({ submitted: true });
        // this.setState({ submitted: true });

        // submit form
    }
    myURL = () => {
        document.location.href = "./home";
    };
    handleusernameChange = (event) => {
        // const showusername = ''
        const username = event.target.value;
        const usernameRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (!usernameRegex.test(username)) {
            this.setState({
                usernameError: "Invalid username [example@example.com]",
                username: username,
                showusername: "ShowError",
            });
            if (username.length == 0) {
                this.setState({ usernameError: "" });
                this.setState({ showusername: "" });
            }
        } else {
            this.setState({
                usernameError: "",
                showusername: "",
                username: username,
            });
        }
    };

    sumbitButton() {
        const username = document.getElementById("username-signup").value;
        const password = document.getElementById("password-signup").value;
        // const navigate = useNavigate()

        axios
            .post(
                `http://mrsz.pythonanywhere.com/auth/jwt/create`,
                {
                    username: username,
                    password: password,
                },
                { headers: { "Content-Type": "application/json" } }
            )
            .then((res) => {
                console.log(res);
                toast.success(
                    "Congratulations! Your sign_in was successful! ",
                    {
                        position: "top-right",
                        autoClose: 1500,
                        className: "toast-message",
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",

                        // className: 'toast-message',
                        // autoClose: 5000,
                        // hideProgressBar: false,
                        // closeOnClick: true,
                        // pauseOnHover: true,
                        // draggable: true,

                        // progress: undefined,
                        // theme: "light",
                    }
                    //        setTimeout(this.myURL, 6000)
                );

                let accToken = res.data.access;
                let refToken = res.data.refresh;
                localStorage.setItem("acctoken", accToken);
                localStorage.setItem("reftoken", refToken);
                axios
                    .get("http://mrsz.pythonanywhere.com/auth/users", {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `JWT ${accToken}`,
                        },
                    })
                    .then((res) => {
                        console.log(res.data[0])
                        localStorage.setItem("username", res.data[0].username);
                        localStorage.setItem("email",res.data[0].email)
                        setTimeout(() => {
                            window.location.replace("/home");
                        }, 1500);
                        // navigate("/home")
                        
                    });
                axios.get("http://mrsz.pythonanywhere.com/Profile/me/", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `JWT ${accToken}`
                    }
                }).then((res) => {
                    localStorage.setItem("birthdate", res.data.birth_date)
                    localStorage.setItem("gender", res.data.gender)
                    localStorage.setItem("bio", res.data.bio)
                    localStorage.setItem("country", res.data.country)
                    localStorage.setItem("city", res.data.city)
                    window.location.replace("/home");

                })
            })
            .catch((err) => {
                //message.error(err.message);
                console.error(err);
                toast.error("Error! Your sign-in was not successful!", {
                    className: "toast-message",
                });
            });
    }

    render() {
        return (
            <div className="App">
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form onSubmit={this.handleSubmit}>
                            <div className="sign">
                                <h3>
                                    <b>Login</b>
                                </h3>
                            </div>
                            <div className="mb-1">
                                <ion-icon name="mail"></ion-icon>
                                &nbsp;
                                <label>Username</label>
                                <input
                                    type="username"
                                    className="form-control"
                                    placeholder="username"
                                    //            onChange={this.handleusernameInput && this.handleusernameChange}
                                    //            value={this.state.username}
                                    id="username-signup"
                                />
                                <div className="error">
                                    {this.state.usernameError}
                                </div>
                            </div>
                            <div className="mb-2">
                                <ion-icon name="lock-closed"></ion-icon>
                                &nbsp;
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="password"
                                    onChange={
                                        this.handlePasswordInput &&
                                        this.handPassword
                                    }
                                    value={this.state.password}
                                    id="password-signup"
                                />
                                {/* <div className='error'>{this.state.passwordError}</div> */}
                            </div>
                            <div className="error">
                                {this.state.passwordError}
                            </div>
                            <div className="d-grid">
                                <button
                                    onClick={this.sumbitButton}
                                    type="submit"
                                    disabled={!this.state.password}
                                >
                                    Login
                                </button>
                                <ToastContainer />
                            </div>
                            <p className="forgot-password text-right">
                                Forgot <a href="/forget">Password?</a>
                            </p>
                            <p className="forgot-password text-right">
                                Dont have an account ?{" "}
                                <a href="/sign-up"> Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

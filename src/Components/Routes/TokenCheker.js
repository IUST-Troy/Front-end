import axios from "axios";
import { useNavigate } from "react-router-dom";


const TokenChecker = () => {
    const accToken = localStorage.getItem("acctoken");
    if (accToken) {
        axios.post(
            "http://mrsz.pythonanywhere.com/auth/jwt/verify",
            {
                token: accToken,
            },
            { headers: { "Content-Type": "application/json" } }
        ).then((res) => {
            
        }).catch((err) => {
            console.log(err);
            console.log(typeof(err.response.status));
            if (err.response.status >= 400 && err.response.status<500){
                return false
            }
            else if (err.response.status>=500) {
                console.log("got here");
                return true

            }
        })
    }
    else{
        return false
    }
};
const redirectToSignIn = (navigate) => {
    if (TokenChecker() === false) {
        const refresh = localStorage.getItem("reftoken");
        if (refresh) {
            axios.post(
                "http://mrsz.pythonanywhere.com/auth/jwt/refresh/", {
                    refresh: refresh
                },
                { headers: { "Content-Type": "application/json" } }
            ).then((res) => {
                localStorage.setItem("acctoken", res.data.access);
            }).catch((err) => {
                console.log(err);
                navigate("/sign-in")
            })
            
        }
        else{
            navigate("/sign-in")
        }
    }
    
};

const redirectToHome = (navigate) => {
    const refresh = localStorage.getItem("reftoken")
    let x = TokenChecker()
    console.log(x);
    if (x === true) {
        navigate("/home")
    }
    else if (TokenChecker()===false) {
        if(refresh){
            axios.post(
                "http://mrsz.pythonanywhere.com/auth/jwt/refresh/", {
                    refresh: refresh
                },
                { headers: { "Content-Type": "application/json" } }
            ).then((res) => {
                localStorage.setItem("acctoken", res.data.access);
                navigate("/home")
            }).catch((err) => {
                console.log(err);
                
            })
        }
    }
}

export { redirectToSignIn, redirectToHome };
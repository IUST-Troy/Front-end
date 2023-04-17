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
            if (res.status === 401){
                return false
            }
            else if (res.status===500) {
                return true
            }
        }).catch((err) => {
            console.log(err);
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
    if (TokenChecker() === true) {
        navigate("/home")
    }
}

export { redirectToSignIn, redirectToHome };
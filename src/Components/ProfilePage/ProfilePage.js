import React from "react";
import { Button, Card, Select, TextInput, Textarea } from "flowbite-react";
import { Avatar, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "../NavigationBar/Header";
import FooterV2 from "../HomePage/FooterV2";
import { Parallax } from "react-parallax";
import Wallpaper1 from "../../Static/Wallpaper1.jpg";
import Navbar from "../NavigationBar/Navbar";
import "../../Styles/ProfilePage/ProfilePage.scss";
import avatar from "../../Static/mylady.jpg"
import Datepicker from "tailwind-datepicker-react";
import axios from 'axios'
import {toast, ToastContainer} from 'react-toastify'

const ProfilePage = () => {

    const [firstNameValue, setFirstNameValue] = React.useState('');
    const [lastNameValue, setLastNameValue] = React.useState('');
    const [emailValue, setEmailValue] = React.useState('');
    const [birthDateValue, setBirthDateValue] = React.useState(new Date('2002-05-28'));
    const [genderValue, setGenderValue] = React.useState('');
    const [bioValue, setBioValue] = React.useState('');
    const [userNameValue, setUserNameValue] = React.useState('')
    React.useEffect(() => {
        setFirstNameValue('Alireza')
        setLastNameValue('BayatKhani')
        setBioValue("Hello I'm under water please help me!")
        setEmailValue("alireza215487@outlook.com")
        setGenderValue("Male")
        setUserNameValue("LordRevan")
        setBirthDateValue(new Date('2002-05-28'))
    }, [])

    const handleFirstNamechange = (event) => {
        setFirstNameValue(event.target.value)
    }
    const handleLastNamechange = (event) => {
        setLastNameValue(event.target.value)
    }
    const handleEmailchange = (event) => {
        setEmailValue(event.target.value)
    }
    const handleBiochange = (event) => {
        setBioValue(event.target.value)
    }
    const handleGenderchange = (event) => {
        setGenderValue(event.target.value)
    }














    const [isEditMode, setEditMode] = React.useState(false);
    const editModeHandler = () => {
        setEditMode(true);
    };
    const cancelEditHandler = () => {
        setFirstNameValue('Alireza')
        setLastNameValue('BayatKhani')
        setBioValue("Hello I'm under water please help me!")
        setEmailValue("alireza215487@outlook.com")
        setGenderValue("Male")
        setUserNameValue("LordRevan")
        setBirthDateValue(new Date('2002-05-28'))
        setEditMode(false);
    };

    const [show, setShow] = React.useState(false);
    const handleChange = (selectedDate) => {
        console.log(selectedDate);
        setBirthDateValue(selectedDate)
    };
    const handleClose = (state) => {
        if (isEditMode) {
            setShow(state);
        }
    };

    const datePickerOptions = {
        title: "Birth Date",
        autoHide: true,
        todayBtn: true,
        clearBtn: true,
        maxDate: new Date("2023-31-12"),
        minDate: new Date("1923-01-01"),
        theme: {
            background: "bg-pallate-celeste_light dark:bg-gray-800",
            todayBtn: "bg-pallate-persian_green hover:bg-pallate-french_mauve",
            clearBtn: "",
            icons: "",
            text: "",
            disabledText: "bg-pallate-pink_lavender",
            input: "bg-pallate-celeste_light disabled:opacity-80 placeholder:text-pallate-persian_green border-pallate-persian_green focus:ring-pallate-persian_green focus:border-pallate-persian_green",
            inputIcon: "text-pallate-persian_green",
            selected: "bg-pallate-persian_green hover:bg-pallate-french_mauve",
        },
        icons: {
            // () => ReactElement | JSX.Element
            prev: () => <span>Previous</span>,
            next: () => <span>Next</span>,
        },
        datepickerClassNames: "top-12",
        defaultDate: birthDateValue,
        language: "en",
    };



    const submitButton = () =>{
        const firstname=firstNameValue
        const lastname=lastNameValue
        const gender=genderValue
        const email=emailValue
        const birthDate = birthDateValue
        axios.post(`http://mamadreza.pythonanywhere.com/auth/users`, 
        {
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "gender" :gender,
            "birthDate": birthDate
            
        }
        , {headers:{  'Content-Type' : 'application/json' }})
        .then(res => {
          toast.success('Congratulations! Your Edit_profile was successful! '
          , 
          
          {
            position: "top-right",
            autoClose: 5000,
            className: 'toast-message',
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            },

//            window.location.replace('')
            );
                  console.log(res);})
  
        .catch(err =>
            {
                //message.error(err.message);
                console.error(err);
                toast.error('Error! Your Edit_profile was not successful!',
                {
                  className:'toast-message',
                
                })
            });
    } 



    return (
        <div className="grid grid-cols-1 gap-0 mb-24">
            <Header />
            <Navbar />
            {/* <Parallax
                className="image"
                bgImage={Wallpaper1}
                strength={800}
                blur={4.5}
            > */}
            <div className="grid justify-center items-center h-screen w-full">
                <Card className="mt-10 m-5 rounded-xl  bg-pallate-celeste/[0.61] border-pallate-persian_green backdrop-blur-sm">
                    <div className="grid grid-cols-1 gap-4 ">
                        <div className="grid md:grid-cols-2 md:gap-4 sm:grid-cols-1 sm:gap-2">
                            <div className="leftside grid grid-cols-1 gap-10 p-8 justify-center justify-items-center">
                                <Avatar
                                    src={avatar}
                                    sx={{
                                        width: "12rem",
                                        height: "12rem",
                                    }}
                                ></Avatar>
                                <Textarea
                                    className="bg-pallate-celeste_light placeholder-pallate-persian_green  border-pallate-persian_green focus:border-pallate-persian_green resize-none focus:ring-pallate-persian_green"
                                    rows={5}
                                    placeholder="bio..."
                                    maxLength={100}
                                    id="bio"
                                    disabled={!isEditMode}
                                    value={bioValue}
                                    onChange={handleBiochange}
                                ></Textarea>
                            </div>
                            <div className="rightside grid grid-cols-1 gap-4 p-8">
                                <div>
                                    <label>First Name:</label>
                                    <input
                                        maxLength={50}
                                        type="text"
                                        id="firstname"
                                        class="bg-pallate-celeste_light disabled:opacity-80 border-pallate-persian_green   placeholder-pallate-persian_green  text-sm rounded-lg focus:ring-pallate-persian_green focus:border-pallate-persian_green block w-full p-2.5"
                                        placeholder="First Name..."
                                        disabled={!isEditMode}
                                        value={firstNameValue}
                                        onChange={handleFirstNamechange}
                                    />
                                </div>
                                <div>
                                    <label>Last Name:</label>
                                    <input
                                        maxLength={50}
                                        type="text"
                                        id="lastname"
                                        class="bg-pallate-celeste_light disabled:opacity-80 border-pallate-persian_green   placeholder-pallate-persian_green  text-sm rounded-lg focus:ring-pallate-persian_green focus:border-pallate-persian_green block w-full p-2.5"
                                        placeholder="Last Name..."
                                        disabled={!isEditMode}
                                        value={lastNameValue}
                                        onChange={handleLastNamechange}
                                    />
                                </div>
                                <div>
                                    <label>Email:</label>
                                    <div className="relative">
                                        <div class="absolute disabled:opacity-100 inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg
                                                aria-hidden="true"
                                                class="w-5 h-5 text-pallate-persian_green dark:text-gray-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                            </svg>
                                        </div>
                                        <input
                                            maxLength={50}
                                            type="email"
                                            id="email"
                                            class="bg-pallate-celeste_light border disabled:opacity-80 placeholder-pallate-persian_green border-pallate-persian_green  text-sm rounded-lg focus:ring-pallate-persian_green focus:border-pallate-persian_green block w-full pl-10 p-2.5 "
                                            placeholder="Email"
                                            disabled={!isEditMode}
                                            value={emailValue}
                                            onChange={handleEmailchange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>User Name:</label>
                                    <div className="relative">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <span class="text-pallate-persian_green">
                                                @
                                            </span>
                                        </div>
                                        <input
                                            maxLength={50}
                                            type="text"
                                            id="username"
                                            class="bg-pallate-celeste_light disabled:opacity-80 disabled:bg-pallate-celeste_light/[0.6] border text-pallate-persian_green border-pallate-persian_green  text-sm rounded-lg focus:ring-pallate-persian_green focus:border-pallate-persian_green block w-full pl-10 p-2.5 "
                                            placeholder="username"
                                            value={userNameValue}
                                            disabled={true}

                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2  md:gap-4 gap-1">
                                    <div className="md:w-28 w-full">
                                        <label>Birth Date:</label>
                                        <Datepicker
                                            id="birthdate"
                                            class="text-pallate-persian_green"
                                            onChange={handleChange}
                                            options={datePickerOptions}
                                            show={show && isEditMode}
                                            setShow={handleClose}


                                        />
                                    </div>
                                    <div className="">
                                        <label>Gender:</label>
                                        <Select
                                            id="gender"
                                            class="w-full md:w-28 border-pallate-persian_green disabled:opacity-80 rounded-lg  bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                                            disabled={!isEditMode}
                                            value={genderValue}
                                            onChange={handleGenderchange}
                                        >
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>others</option>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-20 pl-8 pr-8">
                            <div className="grid grid-cols-2 gap-4">
                                {!isEditMode && (
                                    <Button
                                        className="bg-yellow-400"
                                        onClick={editModeHandler}
                                    >
                                        Edit
                                    </Button>
                                )}

                                {isEditMode && (
                                    <Button
                                        className="bg-red-500"
                                        onClick={cancelEditHandler}
                                    >
                                        Cancel
                                    </Button>
                                )}
                                {isEditMode && (
                                    <Button
                                        className="bg-pallate-persian_green"
                                        onClick={cancelEditHandler}
                                    >
                                        Submit
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </Card>
                <div className="md:hidden mt-10">
                    <FooterV2 />
                </div>
            </div>
            {/* </Parallax> */}
            <div className="hidden md:block">
                <FooterV2 />
                
            </div>
        </div>
    );
};

export default ProfilePage;

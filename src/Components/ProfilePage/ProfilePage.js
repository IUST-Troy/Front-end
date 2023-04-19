import React from "react";
import { Button, Card, Select, TextInput, Textarea } from "flowbite-react";
import { Avatar, IconButton, TextField, Typography } from "@mui/material";
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
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { BsPencilFill } from "react-icons/bs"
import { redirectToSignIn } from "../Routes/TokenCheker"
import places from "./places";

const ProfilePage = () => {
    const navigate = useNavigate()

    // React.useEffect(() => {
    //     redirectToSignIn(navigate);
    // })


    const [firstNameValue, setFirstNameValue] = React.useState('');
    const [lastNameValue, setLastNameValue] = React.useState('');
    const [emailValue, setEmailValue] = React.useState('');
    const [birthDateValue, setBirthDateValue] = React.useState(localStorage.getItem("birthdate") ? localStorage.getItem("birthdate") : new Date("1995-01-01"));
    const [genderValue, setGenderValue] = React.useState('');
    const [bioValue, setBioValue] = React.useState('');
    const [userNameValue, setUserNameValue] = React.useState('')
    const [countryValue, setCountryValue] = React.useState('')
    const [cityValue, setCityValue] = React.useState('')
    const [imgValue, setImgValue] = React.useState('')

    React.useEffect(() => {
        setFirstNameValue(localStorage.getItem("fisrtname") ? localStorage.getItem("fisrtname") : "")
        setLastNameValue(localStorage.getItem("lasttname") ? localStorage.getItem("lastname") : "")
        setBioValue(localStorage.getItem("bio") ? localStorage.getItem("bio") : "")
        setEmailValue(localStorage.getItem("email"))
        setImgValue(localStorage.getItem("avatar")? localStorage.getItem("avatar"):null)
        console.log(localStorage.getItem("email"))
        setGenderValue(() => {
            const g = localStorage.getItem("gender")
            if (g) {
                if (g === 0) {
                    return "Male"
                }
                else if (g === 1) {
                    return "Female"
                }
                else {
                    return "Not Selected"
                }
            }
            else {
                return "Not Selected"
            }
        })
        setUserNameValue(localStorage.getItem("username"))
        setBirthDateValue(localStorage.getItem("birthdate") ? localStorage.getItem("birthdate") : null)
        setCountryValue(localStorage.getItem("country") ? localStorage.getItem("country") : "Select")
        setCityValue(localStorage.getItem("country") === "Select" ? localStorage.getItem("city") ? localStorage.getItem("city") : "Select" : "Select")
        console.log(localStorage.getItem("birthdate"))
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
    const handleCountryChange = (event) => {
        setCountryValue(event.target.value)
    }
    const handleCityChange = (event) => {
        setCityValue(event.target.value)
    }
    const handleImgValue = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setImgValue(reader.result)
        }
    }
    const [isEditprofile, setEditprofile] = React.useState(true);
    const [isChangePassword, setChangePassword] = React.useState(false);
    const [isChangeUsername, setChangeUsername] = React.useState(false);

    const editProfileModeHandler = () => {
        setEditprofile(true);
        setChangePassword(false);
        setChangeUsername(false);
    }
    const changePasswordModeHandler = () => {
        setEditprofile(false);
        setChangePassword(true);
        setChangeUsername(false);
        cancelEditHandler()
    }
    const changeUsernameModeHandler = () => {
        setEditprofile(false);
        setChangePassword(false);
        setChangeUsername(true);
        cancelEditHandler()
    }













    const [isEditMode, setEditMode] = React.useState(false);
    const editModeHandler = () => {
        setEditMode(true);
    };
    const cancelEditHandler = () => {
        setFirstNameValue(localStorage.getItem("fisrtname") ? localStorage.getItem("fisrtname") : "")
        setLastNameValue(localStorage.getItem("lastname") ? localStorage.getItem("lastname") : "")
        setBioValue(localStorage.getItem("bio") ? localStorage.getItem("bio") : "")
        setEmailValue(localStorage.getItem("email"))
        setImgValue(localStorage.getItem("avatar")? localStorage.getItem("avatar"):null)
        setGenderValue(() => {
            const g = localStorage.getItem("gender")
            if (g) {
                if (g === 0) {
                    return "Male"
                }
                else if (g === 1) {
                    return "Female"
                }
                else {
                    return "Not Selected"
                }
            }
            else {
                return "Not Selected"
            }
        })
        setUserNameValue(localStorage.getItem("username"))
        setBirthDateValue(localStorage.getItem("birthdate") ? localStorage.getItem("birthdate") : null)
        setCountryValue(localStorage.getItem("country") ? localStorage.getItem("country") : "Select")
        setCityValue(localStorage.getItem("country") ? (localStorage.getItem("city") ? localStorage.getItem("city") : "Select") : "Select")
        setEditMode(false);
    };

    const [show, setShow] = React.useState(false);
    const handleChange = (selectedDate) => {
        console.log(selectedDate);
        setBirthDateValue(selectedDate)
        console.log(selectedDate);
    };
    const handleClose = (state) => {
        if (isEditMode) {
            setShow(state);
        }
    };

    const datePickerOptions = {
        title: "Birth Date",
        autoHide: true,
        todayBtn: false,
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
        defaultDate: null,
        language: "en",
    };

    const years = [];
    const months = [];
    const days = [];

    for (let i = 2023; i >= 1923; i--) {
        years.push(i);
    }

    for (let i = 1; i <= 12; i++) {
        months.push(i);
    }

    for (let i = 1; i <= 31; i++) {
        days.push(i);
    }



    const submitButtonProfile = () => {

        const gender = genderValue
        const email = emailValue
        const birthDate = birthDateValue
        axios.post(`http://mamadreza.pythonanywhere.com/auth/users`,
            {


                "gender": gender,
                "birthDate": birthDate

            }
            , { headers: { 'Content-Type': 'application/json', Authorization: `JWT ${localStorage.getItem('acctoken')}` } })
            .then(res => {
                toast.success('Congratulations! Your Edit_profile was successful! '
                    ,

                    {
                        position: "top-right",
                        autoClose: 1500,
                        className: 'toast-message',
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    },

                    //            window.location.replace('')
                );
                console.log(res);
            })

            .catch(err => {
                //message.error(err.message);
                console.error(err);
                toast.error('Error! Your Edit_profile was not successful!',
                    {
                        className: 'toast-message',

                    })
            });
    }



    return (
        <div className="grid grid-cols-1 gap-0 mb-24" style={{
            backgroundImage: `url(${Wallpaper1})`,
            backgroundSize: 'cover'
        }}>
            <Header />
            <Navbar />
            <div className=" grid justify-center items-center w-full" >
                <Card className=" m-5 pl-24 pr-24  mt-32 rounded-xl  bg-pallate-celeste/[0.6] border-pallate-persian_green backdrop-blur-sm">
                    <div className="grid md:grid-cols-3 md:gap-16    sm:grid-cols-1 gap-4 ">
                        <Button className={isEditprofile ? "bg-pallate-finn hover:bg-pallate-wisteria" : "bg-pallate-persian_green text-pallate-persian_green hover:bg-pallate-blue_munsell"} onClick={editProfileModeHandler}>Edit Profile</Button>
                        <Button className={isChangePassword ? "bg-pallate-finn hover:bg-pallate-wisteria" : "bg-pallate-persian_green text-pallate-persian_green hover:bg-pallate-blue_munsell"} onClick={changePasswordModeHandler}>Change Password</Button>
                        <Button className={isChangeUsername ? "bg-pallate-finn hover:bg-pallate-wisteria" : "bg-pallate-persian_green text-pallate-persian_green hover:bg-pallate-blue_munsell"} onClick={changeUsernameModeHandler}>Change username</Button>
                    </div>
                </Card>

                {isEditprofile &&
                    <Card className=" mt-1 m-5 mb-64 rounded-xl  bg-pallate-celeste/[0.60] border-pallate-persian_green backdrop-blur-sm">
                        <div className="grid grid-cols-1 gap-4 ">
                            <div className="grid md:grid-cols-2 md:gap-0 sm:grid-cols-1 sm:gap-2">
                                <div className="leftside grid grid-cols-1 gap-10 p-8 justify-center justify-items-center">
                                    <Avatar
                                        src={imgValue}
                                        sx={{
                                            width: "12rem",
                                            height: "12rem",
                                        }}
                                    >
                                    </Avatar>
                                    {isEditMode && <input onChange={handleImgValue} accept="image/*" class="block w-full text-sm text-pallate-persian_green border border-pallate-persian_green rounded-lg cursor-pointer bg-pallate-celeste_light " id="user_avatar" type="file" />}
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
                                                disabled={true}
                                                value={emailValue}
                                                onChange={handleEmailchange}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2  md:gap-2 gap-1">
                                        <div className="md:w-40 w-full">
                                            <label>Country:</label>
                                            <Select
                                                id="country"
                                                class="w-full md:w-40 border-pallate-persian_green disabled:opacity-80 rounded-lg  bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                                                disabled={!isEditMode}
                                                value={countryValue}
                                                onChange={handleCountryChange}
                                            >

                                                <option>Select</option>
                                                {
                                                    places.map((country) => {
                                                        return (
                                                            <option>{country.Name}</option>
                                                        )
                                                    })
                                                }
                                            </Select>

                                        </div>
                                        <div className="">
                                            <label>City:</label>
                                            <Select
                                                id="gender"
                                                class="w-full md:w-40 border-pallate-persian_green disabled:opacity-80 rounded-lg  bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                                                disabled={!isEditMode}
                                                value={cityValue}
                                                onChange={handleCityChange}
                                            >
                                                <option>Select</option>
                                                {
                                                    countryValue === ("Select" || "" || null || undefined) ? 1 :
                                                        places.find(country => country.Name === countryValue) === undefined? 1 :
                                                        places.find(country => country.Name === countryValue).Cities 
                                                        .sort(c => c).map(
                                                            city => {
                                                                return (
                                                                    <option>{city}</option>
                                                                )
                                                            }
                                                        )
                                                        
                                                }
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2  md:gap-2 gap-1">
                                        <div className="md:w-40 w-full">
                                            <label>Birth Date:</label>
                                            <Datepicker id="birthdate"
                                                class="text-pallate-persian_green"
                                                onChange={handleChange}
                                                options={datePickerOptions}
                                                show={show && isEditMode}
                                                setShow={handleClose}>
                                            </Datepicker>

                                        </div>
                                        <div className="">
                                            <label>Gender:</label>
                                            <Select
                                                id="gender"
                                                class="w-full md:w-40 border-pallate-persian_green disabled:opacity-80 rounded-lg  bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                                                disabled={!isEditMode}
                                                value={genderValue}
                                                onChange={handleGenderchange}
                                            >
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Not Selected</option>
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
                    </Card>}
                {isChangePassword &&
                    <Card className="mt-1 m-5 mb-64 rounded-xl pr-12 pl-12 bg-pallate-celeste/[0.61] border-pallate-persian_green backdrop-blur-sm">
                        <div className="grid grid-cols-1 gap-4 p-8">
                            <div className="grid grid-cols-2 gap-2">

                                <div>
                                    <label>new Password:</label>
                                    <input
                                        maxLength={50}
                                        type="password"
                                        id="new-password"
                                        class="bg-pallate-celeste_light disabled:opacity-80 border-pallate-persian_green   placeholder-pallate-persian_green  text-sm rounded-lg focus:ring-pallate-persian_green focus:border-pallate-persian_green block w-full p-2.5"
                                        placeholder="new passwrord..."
                                    // disabled={!isEditMode}
                                    // value={lastNameValue}
                                    // onChange={handleLastNamechange}
                                    />
                                </div>

                                <div>
                                    <label>Confirm new Password:</label>
                                    <input
                                        maxLength={50}
                                        type="password"
                                        id="confirm-new-password"
                                        class="bg-pallate-celeste_light disabled:opacity-80 border-pallate-persian_green   placeholder-pallate-persian_green  text-sm rounded-lg focus:ring-pallate-persian_green focus:border-pallate-persian_green block w-full p-2.5"
                                        placeholder="confirm new passwrord..."
                                    // disabled={!isEditMode}
                                    // value={lastNameValue}
                                    // onChange={handleLastNamechange}
                                    />
                                </div>
                            </div>
                            <div className="pr-24 pl-24">
                                <Button className="w-full bg-pallate-persian_green hover:bg-pallate-blue_munsell">Submit</Button>
                            </div>
                        </div>
                    </Card>
                }
                {
                    isChangeUsername && <Card className="mt-1 m-5 mb-64 pr-12 pl-12 rounded-xl  bg-pallate-celeste/[0.61] border-pallate-persian_green backdrop-blur-sm">
                        <div className="grid grid-cols-1 gap-4 p-8">
                            <div className="grid grid-cols-2 gap-2">

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
                                <div>
                                    <label className="rb-2">New User Name:</label>
                                    <input
                                        maxLength={50}
                                        type="text"
                                        id="New-username"
                                        class="bg-pallate-celeste_light disabled:opacity-80 border-pallate-persian_green   placeholder-pallate-persian_green  text-sm rounded-lg focus:ring-pallate-persian_green focus:border-pallate-persian_green block w-full p-2.5"
                                        placeholder="New User Name..."
                                    // disabled={!isEditMode}
                                    // value={lastNameValue}
                                    // onChange={handleLastNamechange}
                                    />
                                </div>

                            </div>
                            <div className="pr-24 pl-24">
                                <Button className="w-full bg-pallate-persian_green hover:bg-pallate-blue_munsell">Submit</Button>
                            </div>
                        </div>
                    </Card>
                }
                <div className="md:hidden mt-10">
                    <FooterV2 />
                </div>
            </div>
            {/* </Parallax> */}
            <div className="hidden md:block">
                <FooterV2 />

            </div>
        </div >
    );
};

export default ProfilePage;

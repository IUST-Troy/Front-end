import React from "react";
import { Button, Card, Select, Textarea, Progress } from "flowbite-react";
import { Avatar } from "@mui/material";

import Header from "../NavigationBar/Header";
import FooterV2 from "../HomePage/FooterV2";
import Wallpaper1 from "../../Static/Wallpaper1.jpg";
import Navbar from "../NavigationBar/Navbar";
import "../../Styles/ProfilePage/ProfilePage.scss";
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { redirectToSignIn } from "../Routes/TokenCheker";
import places from "./places";
import moment from 'moment'
const ProfilePage = () => {
    const navigate = useNavigate();

    // React.useEffect(() => {
    //     redirectToSignIn(navigate);
    // })
    const [onSubmitDisabledButton , setOnSubmitDisabledButton] = React.useState(false)
    const [percentDone , setPercentDone] = React.useState(0)
    const [firstNameValue, setFirstNameValue] = React.useState("");
    const [lastNameValue, setLastNameValue] = React.useState("");
    const [emailValue, setEmailValue] = React.useState("");
    const [birthDateValue, setBirthDateValue] = React.useState("");
    const [genderValue, setGenderValue] = React.useState("");
    const [bioValue, setBioValue] = React.useState("");
    const [userNameValue, setUserNameValue] = React.useState("");
    const [countryValue, setCountryValue] = React.useState("");
    const [cityValue, setCityValue] = React.useState("");
    const [imgValue, setImgValue] = React.useState("");
    const [birthDateISOValue , setbirthDateISOValue] = React.useState("")
    React.useEffect(() => {
        setFirstNameValue(
            localStorage.getItem("firstname")
                ? localStorage.getItem("firstname")
                : ""
        );
        setLastNameValue(
            localStorage.getItem("lastname")
                ? localStorage.getItem("lastname")
                : ""
        );
        setBioValue(
            localStorage.getItem("bio") ? localStorage.getItem("bio") : ""
        );
        setEmailValue(localStorage.getItem("email"));
        setImgValue(
            localStorage.getItem("avatar")
                ? localStorage.getItem("avatar")
                : null
        );
        console.log(localStorage.getItem("gender"));
        
        if (localStorage.getItem("gender")==="true"||localStorage.getItem("gender")==="Male") {
            setGenderValue("Male")
        }
        else if (localStorage.getItem("gender")==="false"||localStorage.getItem("gender")==="Female") {
            setGenderValue("Female")
        }
        else{
            setGenderValue("Not Selected")
        }
        console.log(typeof(localStorage.getItem("gender")));
        setUserNameValue(localStorage.getItem("username"));
        setBirthDateValue(
            localStorage.getItem("birthdate")
                ? new Date(localStorage.getItem("birthdate"))
                : null
        );
        setCountryValue(
            localStorage.getItem("country")
                ? localStorage.getItem("country")
                : "Select"
        );
        setCityValue(
            localStorage.getItem("country") !== "Select"
                ? localStorage.getItem("city")
                    ? localStorage.getItem("city")
                    : "Select"
                : "Select"
        );
        setbirthDateISOValue(
            localStorage.getItem("birthdate")
                ? moment(localStorage.getItem("birthdate")).format("YYYY-MM-DD")
                : ""
        )
    }, []);

    const handleFirstNamechange = (event) => {
        setFirstNameValue(event.target.value);
    };
    const handleLastNamechange = (event) => {
        setLastNameValue(event.target.value);
    };
    const handleEmailchange = (event) => {
        setEmailValue(event.target.value);
    };
    const handleBiochange = (event) => {
        setBioValue(event.target.value);
    };
    const handleGenderchange = (event) => {
        setGenderValue(event.target.value);
    };
    const handleCountryChange = (event) => {
        setCountryValue(event.target.value);
    };
    const handleCityChange = (event) => {
        setCityValue(event.target.value);
    };
    const handleImgValue = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgValue(reader.result);
        };
        console.log(imgValue);
    };
    const [isEditprofile, setEditprofile] = React.useState(true);
    const [isChangePassword, setChangePassword] = React.useState(false);
    const [isChangeUsername, setChangeUsername] = React.useState(false);

    const editProfileModeHandler = () => {
        setEditprofile(true);
        setChangePassword(false);
        setChangeUsername(false);
    };
    const changePasswordModeHandler = () => {
        setEditprofile(false);
        setChangePassword(true);
        setChangeUsername(false);
        cancelEditHandler();
    };
    const changeUsernameModeHandler = () => {
        setEditprofile(false);
        setChangePassword(false);
        setChangeUsername(true);
        cancelEditHandler();
    };

    const [isEditMode, setEditMode] = React.useState(false);
    const editModeHandler = () => {
        setEditMode(true);
    };
    const cancelEditHandler = () => {
        console.log(localStorage.getItem("gender"));
        setFirstNameValue(
            localStorage.getItem("firstname")
                ? localStorage.getItem("firstname")
                : ""
        );
        setLastNameValue(
            localStorage.getItem("lastname")
                ? localStorage.getItem("lastname")
                : ""
        );
        setBioValue(
            localStorage.getItem("bio") ? localStorage.getItem("bio") : ""
        );
        setEmailValue(localStorage.getItem("email"));
        setImgValue(
            localStorage.getItem("avatar")
                ? localStorage.getItem("avatar")
                : null
        );
        console.log(localStorage.getItem("email"));
        if (localStorage.getItem("gender")==="true"||localStorage.getItem("gender")==="Male") {
            setGenderValue("Male")
        }
        else if (localStorage.getItem("gender")==="false"||localStorage.getItem("gender")==="Female") {
            setGenderValue("Female")
        }
        else{
            setGenderValue("Not Selected")
        }
        setUserNameValue(localStorage.getItem("username"));
        setBirthDateValue(
            localStorage.getItem("birthdate")
                ? new Date(localStorage.getItem("birthdate"))
                : null
        );
        setCountryValue(
            localStorage.getItem("country")
                ? localStorage.getItem("country")
                : "Select"
        );
        setCityValue(
            localStorage.getItem("country") !== "Select"
                ? localStorage.getItem("city")
                    ? localStorage.getItem("city")
                    : "Select"
                : "Select"
        );
        setbirthDateISOValue(
            localStorage.getItem("birthdate")
                ? moment(localStorage.getItem("birthdate")).format("YYYY-MM-DD")
                : ""
        )
        setImgValue(localStorage.getItem("avatar"))
        setEditMode(false);
    };

    const [show, setShow] = React.useState(false);
    const handleBirthDateChange = (selectedDate) => {
        
        setBirthDateValue(selectedDate);
        setbirthDateISOValue(moment(selectedDate).format("YYYY-MM-DD"))
        console.log(birthDateISOValue);
    };
    const handleClose = (state) => {
        if (isEditMode) {
            setShow(state);
        }
    };



    const submitButtonPassword = () => {};

    const submitButtonUserName = () => {};
    const submitButtonProfile = () => {
        setOnSubmitDisabledButton(true)
        const gender = genderValue;
        const birthDate = birthDateISOValue.toString();
        const country = countryValue;
        const city = cityValue;
        const avatar = imgValue;
        const bio = bioValue;
        const firstname = firstNameValue;
        const lastname = lastNameValue;
        console.log(birthDate);

        axios
            .put(
                "http://mrsz.pythonanywhere.com/Profile/me/",
                {
                    country: country,
                    city: city,
                    gender:
                        gender === "Male" || gender==="true"
                            ? true
                            : gender === "Female" || gender==="false"
                            ? false
                            : null,
                    birth_date: birthDate,
                    bio: bio,
                    profile_image: avatar,
                },
                {
                    onUploadProgress: (ProgressEvent) => {
                        const percentCompleted = Math.round((ProgressEvent.loaded *100)/ProgressEvent.total)
                        setPercentDone(percentCompleted)
                    },
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `JWT ${localStorage.getItem(
                            "acctoken"
                        )}`,
                    },
                }
            )
            .then((res) => {
                axios
                    .patch(
                        `http://mrsz.pythonanywhere.com/auth/users/me/`,
                        {
                            first_name: firstname,
                            last_name: lastname,
                        },
                        {
                            
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `JWT ${localStorage.getItem(
                                    "acctoken"
                                )}`,
                            },
                        }
                    )
                    .then((res) => {
                        localStorage.setItem("gender", genderValue)
                        localStorage.setItem("firstname",firstname)
                        localStorage.setItem("lastname",lastname)
                        localStorage.setItem("birthdate",new Date(birthDate))
                        localStorage.setItem("avatar",avatar)
                        localStorage.setItem("bio" , bio)
                        localStorage.setItem("country",country)
                        localStorage.setItem("city",city)




                        console.log(res);
                        toast.success(
                            "Congratulations! Your Edit_profile was successful!",
                            {
                                position: "top-right",
                                autoClose: 1500,
                                className: "toast-message",
                                hideProgressBar: false,
                                closeOnClick: false,
                                pauseOnHover: false,
                                draggable: false,
                                progress: undefined,
                                theme: "colored",
                            }
                        );
                        navigate(0)
                    }).catch(err => {
                        console.log(err)
                        toast.error(
                            "Error! Your Edit_profile was NOT successful! First/Last",
                            {
                                position: "top-right",
                                autoClose: 1500,
                                className: "toast-message",
                                hideProgressBar: false,
                                closeOnClick: false,
                                pauseOnHover: false,
                                draggable: false,
                                progress: undefined,
                                theme: "colored",
                            }
                        );
                    })

                
                console.log(res);
            })

            .catch((err) => {
                //message.error(err.message);
                console.error(err);
                toast.error(
                    "Error! Your Edit_profile was not successful! Profile/me " +
                        err.message,
                    {
                        position: "top-right",
                        autoClose: 1500,
                        className: "toast-message",
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: "colored",
                    }
                );
            });
    };

    return (
        <div
            className="grid grid-cols-1 gap-0 "
            style={{
                background: `url(${Wallpaper1}) no-repeat center center fixed`,
            }}
        >
            <ToastContainer />
            <Header />
            <Navbar />
            <div className=" grid justify-center items-center w-full">
                <Card className=" m-5 pl-24 pr-24  mt-32 rounded-xl  card-bg border-pallate-persian_green backdrop-blur-sm">
                    <div className="grid md:grid-cols-3 md:gap-16    sm:grid-cols-1 gap-4 ">
                        <Button
                            className={
                                isEditprofile
                                    ? "bg-pallate-finn hover:bg-pallate-wisteria"
                                    : "bg-pallate-persian_green text-pallate-persian_green hover:bg-pallate-blue_munsell"
                            }
                            onClick={editProfileModeHandler}
                            disabled={onSubmitDisabledButton}
                        >
                            Edit Profile
                        </Button>
                        <Button
                            className={
                                isChangePassword
                                    ? "bg-pallate-finn hover:bg-pallate-wisteria"
                                    : "bg-pallate-persian_green text-pallate-persian_green hover:bg-pallate-blue_munsell"
                            }
                            onClick={changePasswordModeHandler}
                            disabled={onSubmitDisabledButton}
                        >
                            Change Password
                        </Button>
                        <Button
                            className={
                                isChangeUsername
                                    ? "bg-pallate-finn hover:bg-pallate-wisteria"
                                    : "bg-pallate-persian_green text-pallate-persian_green hover:bg-pallate-blue_munsell"
                            }
                            onClick={changeUsernameModeHandler}
                            disabled={onSubmitDisabledButton}
                        >
                            Change username
                        </Button>
                    </div>
                </Card>

                {isEditprofile && (
                    <Card className=" mt-1 m-5 mb-64 rounded-xl  card-bg border-pallate-persian_green backdrop-blur-sm">
                        <div className="grid grid-cols-1 gap-4 ">
                            <div className="grid md:grid-cols-2 md:gap-0 sm:grid-cols-1 sm:gap-2">
                                <div className="leftside grid grid-cols-1 gap-10 p-8 justify-center justify-items-center">
                                    <Avatar
                                        src={imgValue}
                                        sx={{
                                            width: "12rem",
                                            height: "12rem",
                                        }}
                                    ></Avatar>
                                    {isEditMode && (
                                        <input
                                            onChange={handleImgValue}
                                            accept="image/*"
                                            class="block w-full text-sm text-pallate-persian_green border border-pallate-persian_green rounded-lg cursor-pointer bg-pallate-celeste_light "
                                            id="user_avatar"
                                            type="file"
                                        />
                                    )}
                                    
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
                                                {places.map((country) => {
                                                    return (
                                                        <option>
                                                            {country.Name}
                                                        </option>
                                                    );
                                                })}
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
                                                {countryValue ===
                                                ("Select" ||
                                                    "" ||
                                                    null ||
                                                    undefined)
                                                    ? 1
                                                    : places.find(
                                                          (country) =>
                                                              country.Name ===
                                                              countryValue
                                                      ) === undefined
                                                    ? 1
                                                    : places
                                                          .find(
                                                              (country) =>
                                                                  country.Name ===
                                                                  countryValue
                                                          )
                                                          .Cities.sort((c) => c)
                                                          .map((city) => {
                                                              return (
                                                                  <option>
                                                                      {city}
                                                                  </option>
                                                              );
                                                          })}
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2  md:gap-2 gap-1">
                                        <div className="md:w-40 w-full">
                                            <label>Birth Date:</label>
                                            <DatePicker
                                                selected={birthDateValue? birthDateValue : new Date()}
                                                onChange={(date) => handleBirthDateChange(date)}
                                                disabled={!isEditMode}
                                                className="bg-pallate-celeste_light border-pallate-persian_green w-36 rounded-lg disabled:opacity-80"
                                            ></DatePicker>
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
                            <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-20 pl-8 pr-8">
                                <div className="grid grid-cols-2 gap-4">
                                    {!isEditMode && (
                                        <Button
                                            className="bg-yellow-400 hover:bg-yellow-500"
                                            onClick={editModeHandler}
                                        >
                                            Edit
                                        </Button>
                                    )}

                                    {isEditMode && (
                                        <Button
                                            className="bg-red-500 hover:bg-red-600"
                                            onClick={cancelEditHandler}
                                            disabled={onSubmitDisabledButton}
                                        >
                                            Cancel
                                        </Button>
                                    )}
                                    {isEditMode && (
                                        <Button
                                            className="bg-pallate-persian_green hover:bg-pallate-blue_munsell"
                                            onClick={submitButtonProfile}
                                            disabled={onSubmitDisabledButton}
                                        >
                                            Submit
                                        </Button>
                                    )}
                                </div>
                                {onSubmitDisabledButton && isEditMode && <Progress
                                        progress={percentDone}
                                        labelProgress={true}
                                        progressLabelPosition="inside"
                                        textLabel="Uploading..."
                                        labelText = {true}
                                        textLabelPosition="outside"
                                        color="green"
                                        size="xl"
                                        className="w-full"
                                    ></Progress>}
                            </div>
                        </div>
                    </Card>
                )}
                {isChangePassword && (
                    <Card className="mt-1 m-5 mb-64 rounded-xl pr-12 pl-12 card-bg border-pallate-persian_green backdrop-blur-sm">
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
                            <div className="">
                                <Button className="w-full bg-pallate-persian_green hover:bg-pallate-blue_munsell">
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </Card>
                )}
                {isChangeUsername && (
                    <Card className="mt-1 m-5 mb-64 pr-12 pl-12 rounded-xl  card-bg border-pallate-persian_green backdrop-blur-sm">
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
                                    <label className="rb-2">
                                        New User Name:
                                    </label>
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
                            <div className="">
                                <Button className="w-full bg-pallate-persian_green hover:bg-pallate-blue_munsell">
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </Card>
                )}
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

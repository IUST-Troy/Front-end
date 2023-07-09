import React from "react";
import Header from "../NavigationBar/Header";
import Navbar from "../NavigationBar/Navbar";
import FooterV2 from "../HomePage/FooterV2";
import { BsPersonFill } from "react-icons/bs";
import { BsPersonFillLock } from "react-icons/bs";
import { BsXLg, BsMapFill, BsCalendar } from "react-icons/bs";
import Wallpaper1 from "../../Static/bg.jpg";
import { useNavigate, useParams } from "react-router-dom";
import hihi from "../../Static/hihii.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import { useState } from "react";
import imgValue from "../../Static/myl.png";
import { BsFillAirplaneFill } from "react-icons/bs";
import airplanpath from "../../Static/pathfinal.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { BsGenderAmbiguous } from "react-icons/bs";
import { Button, Card, Select } from "flowbite-react";
import { list } from "postcss";
// import { useNavigate } from "react-router-dom";
export default function App() {
  const [firstNameValue, setFirstNameValue] = React.useState("");
  const [lastNameValue, setLastNameValue] = React.useState("");
  const [userNameValue, setUserNameValue] = React.useState("");
  const params = useParams()
  let navigate = useNavigate();


  const [genderValue, setGenderValue] = React.useState("");
  const [inputList, setinputList]= useState([{firstname:'', lastname:'', phone:'', national_code:''}]);
  const [isFormValid, setIsFormValid] = useState(true);

  const handleFirstName = (e) => {
    e.preventDefault();
    setFirstNameValue(e.target.value.replace(/[^a-zA-Z]/g, ""));
  };
 
  const reserve = () => {
    console.log(localStorage.getItem("acctoken"));
      

        axios.post(
          `https://mrsz.pythonanywhere.com/reserve/${params.id}`,
          inputList, {
            headers: {
              Authorization: `JWT ${localStorage.getItem("acctoken")}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          toast.success("Congratulations! Your Reservation was successful! ", {
            position: "top-center",
            autoClose: 1500,
            className: "toast-message",
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
          });
          console.log(res.data);
          
          // Delay navigation to home after 5 seconds
          setTimeout(() => {
            navigate("/history");
          }, 3000);
        })
        
        .catch((err) => {
          toast.error(err.message, {
            position: "top-center",
            autoClose: 1500,
            className: "toast-message",
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
          });
          console.log(err);
          // window.location.replace('/sign-in')
        });
      }
  const validateForm = () => {
    for (let i = 0; i < inputList.length; i++) {
      const { firstName, lastName, phone, nationalcode, gender } = inputList[i];
      if (
        firstName.trim() === "" ||
        lastName.trim() === "" ||
        phone.trim() === "" ||
        nationalcode.trim() === "" ||
        gender.trim() === ""
      ) {
        setIsFormValid(false);
        return;
      }
    }
    setIsFormValid(true);
  };
  
  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
  
    list[index][name] = value;
    setinputList(list);
  
   
  };
 
  
    
  //نمیدونم چرا پایینی داره کار نمیکنه:))
  // const handleinputchange = (e, index) => {
  //   const { name, value } = e.target;
  //   const list = [...inputList];
  
  //   if (name === "firstName") {
  //     list[index][name] = value.replace(/[^a-zA-Z]/g, "");
  //   } else {
  //     list[index][name] = value;
  //   }
  
  //   setinputList(list);
  // };
  
  const main=(e,index)=> {
    handleFirstName(e);
    handleinputchange(e,index);
  }
  
 
  const handleaddclick = () => {
    console.log("here");
    // const isFormEmpty = inputList.some(
    //   (item) =>
    //     item.firstname === "" ||
    //     item.lastname === "" ||
    //     item.phone === "" ||
    //     item.national_code === ""
    // );
    // if (!isFormEmpty) {
      setinputList([...inputList, { firstname: "", lastname: "", phone: "", national_code: ""}]);
    // }
  };
  
  const handleremove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
  };
  
  

  return (
    <div>
      <Header />
      <Navbar />

      <div
        class=" backdrop-blur-sm grid p-14 gap-0 no-repeat p- bg-cover bg-center bg-fixed justify-center items-center  "
        style={{
          background: `url(${Wallpaper1}) no-repeat center center fixed `,
        }}
      >
        <div class="flex justify-center py-5 px-5 card-bg   rounded-2xl  items-center max-w-[50rem] ">
          <div class=" w-full ">
            <div id="collapseExample" data-te-collapse-item>
              <div class="block rounded-xl p-3 w-full">
                <body class="antialiased p-6 testreserve rounded-2xl w-full text-gray-900 font-sans  bg-cover overflow-y-scroll">
                  <div class="container ">
                    <div class="flex flex-wrap -mx-4">
                      <div class=" w-full ">
                        <div className=" w-full   p-8 px-8">
                          <div className="flex">
                            <h2 className="text-4xl w-1/2  text-white font-bold text-center my-4 mt-0">
                              Reservation
                            </h2>
                            <img
                              class="w-1/2  h-20 mr-auto ml-6  rounded-xl"
                              src={airplanpath}
                              alt="Default avatar"
                            ></img>
                          </div>
                          <div class="divide-y divide-dashed text-white">
                            <div className="flex">
                              <BsFillAirplaneFill />
                              {/* Tehran */}
                              {params.originCity}
                              {/* Organization:{" "}
                        {
                          Organizations.find(
                            (o) => o.id === params.id  
                          )?.Name
                        } */}
                            </div>

                            <div
                              className="flex justify-end
                             right-0"
                            >
                             {params.city}
                              <BsFillAirplaneFill />
                            </div>
                          </div>
                          {
                          inputList.map( (x,i)=> (
                            <div  class="">
                              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2  ">
                                <div className="flex flex-col text-white text-lg py-2">
                                  <div className="flex justify-start items-center">
                                    <BsPersonFill className="mr-1" />
                                    <label>Firstname</label>
                                  </div>
                                  <input
                                  
                                    className="p-2 text-gray-500 rounded-xl border text-sm border-pallate-persian_green  focus:ring-1 focus:ring-pallate-persian_green bg-pallate-celeste_light mt-2 focus:border-pallate-persian_green focus:outline-none"
                                    // onChange={handleFirstName && handleinputchange(e, i)}
                                    placeholder="Firstname"
                                    name="firstname"
                                    // value={inputList[0]}
                                    
                                    onChange={(e) => main(e, i)}

                                    maxLength={35}
                                  />
                                </div>

                                <div className="flex flex-col text-white text-lg py-2">
                                  <div className="flex justify-start items-center">
                                    <BsPersonFill className="mr-1" />
                                    <label>Lastname</label>
                                  </div>
                                  <input
                                    className="p-2 text-gray-500 rounded-xl border text-sm border-pallate-persian_green  focus:ring-1 focus:ring-pallate-persian_green bg-pallate-celeste_light mt-2 focus:border-pallate-persian_green focus:outline-none"
                                    // value={lastNameValue}
                                    placeholder="Lastname"
                                    // onChange={handleLastName}
                                    name="lastname"
                                    onChange={(e) => handleinputchange(e, i)}
                                  />
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2  ">
                                <div className="flex flex-col text-white text-lg py-2">
                                  <div className="flex justify-start items-center">
                                  <BsPersonFillLock className="mr-1" />
                                  <label>NationalCode</label>
                                  </div>
                                  <input
                                  className="p-2 text-gray-500 rounded-xl border text-sm border-pallate-persian_green  focus:ring-1 focus:ring-pallate-persian_green bg-pallate-celeste_light mt-2 focus:border-pallate-persian_green focus:outline-none"
                                  // value={userNameValue}
                                  name="national_code"
                                  placeholder="NationalCode"
                                  onChange={(e) => handleinputchange(e, i)}
                                  // onChange={handleUsername}
                                />
                                </div>

                                <div className="flex flex-col text-white text-lg py-2">
                                  <div className="flex justify-start items-center">
                                  <BsFillTelephoneFill className="mr-1" />
                                  <lable>Phone number</lable>
                                  </div>
                                  <input
                                  type="tel"
                                  id="phone"
                                  className="p-2 text-gray-500 rounded-xl border text-sm border-pallate-persian_green  focus:ring-1 focus:ring-pallate-persian_green bg-pallate-celeste_light mt-2 focus:border-pallate-persian_green focus:outline-none"
                                  placeholder="+989175879582"
                                  name="phone"
                                  onChange={(e) => handleinputchange(e, i)}
                                />
                                </div>
                              </div>
                              
                             

                             

                           
                              {inputList.length - 1 === i && (
                                <button
                                  className="w-full my-2 py-3  bg-green-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 rounded-xl font-blod text-white "
                              
                                  onClick={handleaddclick}
                                >
                                  Add
                                </button>
                              )}

                              {inputList.length !== 1 && (
                                <button
                                  className="w-full my-2 py-3 bg-red-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 rounded-xl font-blod text-white "
                               
                                  onClick={() => handleremove(i)}
                                >
                                  Remove
                                </button>
                              )}
                              {inputList.length - 1 === i && (
                                <button
                                
                                // disabled={inputList.some(
                                //   (item) =>
                                //     item.firstName === "" ||
                                //     item.lastName === "" ||
                                //     item.phone === "" ||
                                //     item.nationalcode === ""
                                // )}
                                  className="w-full my-2  py-3  bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 rounded-xl font-blod text-white "
          
                                  onClick={reserve}
                                >
                                  reserve
                                </button>
                              )}
                            </div>
                          )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </body>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterV2 />
    </div>
  );
}

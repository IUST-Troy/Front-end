import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import beachVid from '../../Static/beachVid.mp4';
import list from "./list.json";
import { useState } from "react";
import UserInfo from "../NavigationBar/UserInfo";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import userEvent from '@testing-library/user-event';
import useWebSocket from 'react-use-websocket';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { w3cwebsocket } from 'websocket';
import { ArrowBack } from '@material-ui/icons';
import { useEffectOnce } from './useEffectOnce';
import axios from 'axios';
// import AuthContext from './path/to/AuthContext';
// import AuthContext from './Components/AuthContext';

// const room = {}
// //socket for chat
// const client = useMemo(
//   () => WebSocket('http://5.34.192.111:8000/chat/${room}')
//   );

// const client = WebSocket('');
// const { user } = useContext(Authcontext);
// const useCustomHook = () => {
//   const { user } = useContext(Authcontext);
// }

// const handleSubmit = (event) => {
//   const { user } = useContext(Authcontext);
//   event.preventDefault();
//   console.log(event.target[0].value);

//   if (event.target[0].value != "") {
//     client.send(
//       JSON.stringify({
//         username : user.username,
//         user_id : user.user_id,
//         message : event.target[0].value,
//       })
//     );
//   }
//   event.target[0].value = "";         //fasele dare?
// };

// useEffect(() => {
//   client.onopen = () => {
//     console.log(
//       "WebSocket Client Connected")
//   };
//   client.onmessage = (message) => {
//     let dataFromServer = JSON.parse(message.data);
//     setmessage((e) => [...e,dataFromServer]);
//   };
//   client.onclose = () => {
//     console.log("WebSocket Client disConnected");
//   };
// }, [client.onmessage, client.onopen, client.onclose]
// );
const chatsroom ={
Tehran : "Tehran"

}


const Hero = () => {
  const acctoken = localStorage.getItem("acctoken")
  const [room, setroom] = useState("")
//socket for chat
// const client = useMemo(
//   () => WebSocket('http://5.34.192.111:8000/chat/${room}')
//   );
const [client, setClient] = useState(null);

useEffectOnce(() => {
  // const client_1 = new w3cwebsocket(
  //   `wss://5.34.192.111:8000/chat/${room}`
  // );
  const tempClient = new WebSocket(`wss://5.34.192.111:8000/chat/alaki11`,"Authorization",`JWT ${acctoken}`)
  tempClient.onopen = (event) => {
    // setClient(tempClient);
    console.log("WebSocket open succesfull")
  };

  // tempClient.onmessage = (event) => {
  //   // fetchChatHistory(router.query.chat_id);
  //   console.log(event);
  // };
  tempClient.onclose = (event) => {
    console.log(event);
    console.log("closed connection");
    // startChat();
  };
  setClient(tempClient);
});

const startChat = (room_name) => {
  setroom(room_name)
  console.log(room_name)
  console.log(`wss://5.34.192.111:8000/chat/${room}`)
  const tempClient = new WebSocket(`wss://5.34.192.111:8000/chat/alaki11`,"Authorization",`JWT ${acctoken}`)
  tempClient.onopen = (event) => {
    // setClient(tempClient);
    console.log("WebSocket open succesfull")
  };
  // tempClient.onmessage = (event) => {
  //   // fetchChatHistory(router.query.chat_id);
  //   console.log(event);
  // };
  tempClient.onclose = (event) => {
    console.log(event);
    console.log("closed connection");
    // startChat();
  };
  // tempClient.onerror = (event) => {
  //   console.log(event);
  // };
  setClient(tempClient)
}

// const client = useMemo(() => new WebSocket('ws://5.34.192.111:8000/chat/${room}'), [room]);

const username = localStorage.getItem("username");
// const password = localStorage.getItem("password");

const [socketUrl, setSocketUrl] = useState('');

  // const Authcontext = (username, email) => {
  //   fetch('http://5.34.192.111:8000/chat', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       username,
  //       // email,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {

  //       console.log(data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };

  // const Authcontext = createContext();
  


  const [message, setmessage] = useState('');

  // const { user } = useContext(Authcontext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
  
    if (event.target[0].value != "") {
      client.send(
        JSON.stringify({
          username : localStorage.getItem("username"),
          // user_id : user.user_id,
          message : event.target[0].value,
        })
      );
    }
    event.target[0].value = "";         //fasele dare?
  };



  // useEffect(() => {

  //   // const setmessage = ; // Assign a value to the 'setmessage' variable


  //   client.onopen = () => {
  //     console.log(
  //       "WebSocket Client Connected")
  //   };
  //   client.onmessage = (message) => {
  //     let dataFromServer = JSON.parse(message.data);
  //     setmessage((e) => [...e,dataFromServer]);
  //   };
  //   client.onclose = () => {
  //     console.log("WebSocket Client disConnected");
  //   };
  // }, [client.onmessage, client.onopen, client.onclose]
  // );
  const [room_names , setRoom_names] = useState([])

  useEffect(() => {
    console.log(room_names[1])
  }, [room_names])

  useEffect(() => {
axios.get(
  "http://5.34.192.111:8000/chat_room_name/" , 
  {headers :{
    'Content-Type' : 'application/json',
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Methods" : "GET,PATCH",
}}
)
.then((response) => {
setRoom_names(response.data)
console.log("room names nama")
console.log(response.data)
})
.catch((err) => {
console.log(err)
})
  }, [])


  const [isOpenActive, setIsOpenActive] = useState(false);
  const [isOpenInactive, setIsOpenInActive] = useState(false);
  return (
    <div className='w-full h-screen relative'>
      <video
        className='w-full h-full object-cover'
        src={beachVid}
        autoPlay
        loop
        muted
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-500/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center  p-4'>
      <div class="flex flex-row h-full w-full overflow-x-hidden ">
          <div class="flex-auto flex-col py-8 pl-2 pr-1 w-61  flex-shrink-0 hidden sm:block  rounded-3xl  ">
            <div class="flex flex-row items-center justify-center h-12 w-full ">
              <div class="flex items-center justify-center rounded-2xl text-pallate-persian_green h-10 w-10">
                <svg
                  class="w-16 h-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
              </div>
              <div class="ml-2 font-bold text-2xl">Chat Room</div>
            </div>
            <div class="flex flex-col items-right bg-green-50 opacity-80 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg text-sm">
              <UserInfo></UserInfo>
            </div>

            <div class="flex flex-col mt-8 card-bg p-3 rounded-lg">
              <div class="flex flex-row items-center justify-between ">
                <span class="font-bold">Active Rooms</span>
              </div>
              <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                {room_names.map((RN) => {
                <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                  <div class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"                  >
                    {RN.room_name.charAt(0).toUpperCase()}
                    r
                  </div>
                  <div class="ml-2 text-sm font-semibold">{RN.room_name}</div>
                </button>
                })}

                { <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                  <div class="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
                    k
                  </div>
                  <div class="ml-2 text-sm font-semibold">Kish</div>
                  <div class="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
                    2
                  </div>
                </button>
/*                <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                  <div class="flex items-center justify-center h-8 w-8 bg-orange-200 rounded-full">
                    P
                  </div>
                  <div class="ml-2 text-sm font-semibold">ChaBahar</div>
                </button>
                <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                  <div class="flex items-center justify-center h-8 w-8 bg-pink-200 rounded-full">
                    C
                  </div>
                  <div class="ml-2 text-sm font-semibold">Qom</div>
                </button>
                <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                  <div class="flex items-center justify-center h-8 w-8 bg-purple-200 rounded-full">
                    J
                  </div>
                  <div class="ml-2 text-sm font-semibold">Karaj</div>
                </button> */}
              </div>
            </div>
            {/* <div class="flex flex-col mt-8 card-bg rounded-lg p-2">
              <div class="flex flex-row items-center justify-between ">
                <span class="font-bold">Inactive Rooms</span>
              </div>
              <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                <button 
                class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                onClick = {() => startChat(chatsroom["Tehran"])} 
                >

                  <div class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                    T
                  </div>
                  <div class="ml-2 text-sm font-semibold">
                    {" "}
                     Tehran
                  </div>
                </button>
                <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                  <div class="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
                    E
                  </div>
                  <div class="ml-2 text-sm font-semibold">
                     Eiffel Room
                  </div>
                  <div class="flex items-center justify-center ml-auto text-xs text-white h-4 w-4 rounded leading-none"></div>
                </button>
                <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                  <div class="flex items-center justify-center h-8 w-8 bg-orange-200 rounded-full">
                    P
                  </div>
                  <div class="ml-2 text-sm font-semibold">
                     Pissa Room
                  </div>
                </button>
                
              </div>
            </div> */}
          </div>

          <div class="flex flex-col h-full p-6   ">
            <div class="ml-2 font-bold text-2xl text-center "> </div>

            <div class="  absolute  top-0 left-1/2 transform -translate-x-1/2 right-1 rounded-sm lg:hidden xs:hidden md:hidden sm:hidden">
              <button
                onClick={() => setIsOpenActive((preve) => !preve)}
                className="text-xs flex  item-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white text-white "
              >
                {" "}
                Active
                {!isOpenActive ? (
                  <AiOutlineCaretDown className="h-8" />
                ) : (
                  <AiOutlineCaretUp className="h-8" />
                )}
              </button>
              {isOpenActive && (
                <div className="bg-green-200 w-25  top-20 flex flex-col items-start rounded-lg p-2 ">
                  {list.map((item, i) => (
                    <div className="flex w-full justify-between p-4 hover:bg-slate-100 cursor-pointer rounded-lg border-l-transparent  border-l-4">
                      <h3 className="text-xs">{item.room}</h3>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div class="  absolute  top-0   rounded-sm lg:hidden xs:hidden md:hidden sm:hidden">
              <button
                onClick={() => setIsOpenInActive((prev) => !prev)}
                className="text-xs flex item-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white text-white"
              >
                {" "}
                Inactive
                {!isOpenInactive ? (
                  <AiOutlineCaretDown className="h-8" />
                ) : (
                  <AiOutlineCaretUp className="h-8" />
                )}
              </button>
              {isOpenInactive && (
                <div className=" bg-pink-100 opacity-90 w-25  top-20 flex flex-col items-start rounded-lg p-2 ">
                  {list.map((item, i) => (
                    <div className="flex w-full justify-between p-4 hover:bg-slate-100 cursor-pointer rounded-lg border-l-transparent  border-l-4">
                      <h3 className="text-xs">{item.inactive}</h3>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-green-50 bg-opacity-50  h-full p-4 ">
              <div class="flex flex-col h-full overflow-x-auto mb-4">
                <div class="flex flex-col h-full">
                  <div class="grid grid-cols-12 gap-y-2">
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-300  flex-shrink-0">
                          <div class="group  m-12 flex justify-center ">
                            <button class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-300  flex-shrink-0">
                              <img
                                src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                                class="w-32 rounded-full"
                                alt="Avatar"
                              />
                            </button>
                            <span class="w-60 absolute  scale-0 rounded-2xl bg-green-100 opacity-90 p-1 ml-80 mr-10 text-xs text-black group-hover:scale-100">
                              <img
                                src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                                class="w-20 rounded-full mx-auto"
                                alt="Avatar"
                              />
                              <p class="text-base font-semibold leading-none text-center text-gray-900 dark:text-white">
                                Jese Leos
                              </p>
                              <p class="mb-3 text-sm font-normal text-center">
                                @jeseleos
                              </p>
                              <p class="mb-4 text-sm text-center">
                                Hello! I love traveling.<p>my WebLog :</p>{" "}
                                <a
                                  href="#"
                                  class="text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                  jeseleos.com
                                </a>
                              </p>
                            </span>
                          </div>
                        </div>

                        <div class=" ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                          <div>Hey How are you today?</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-300 flex-shrink-0">
                          <div class="group  m-12 flex justify-center">
                            <button class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-300  flex-shrink-0">
                              <img
                                src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
                                class="w-32 rounded-full"
                                alt="Avatar"
                              />
                            </button>
                            <span class="w-60 absolute  scale-0 rounded-2xl bg-green-100 opacity-90 p-1 ml-80 mr-10 text-xs text-black group-hover:scale-100">
                              <img
                                src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
                                class="w-20 rounded-full mx-auto"
                                alt="Avatar"
                              />
                              <p class="text-base font-semibold leading-none text-center text-gray-900 dark:text-white">
                                Jese Leos
                              </p>
                              <p class="mb-3 text-sm font-normal text-center">
                                @jeseleos
                              </p>
                              <p class="mb-4 text-sm text-center">
                                Hello! I love traveling.<p>my WebLog :</p>{" "}
                                <a
                                  href="#"
                                  class="text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                  jeseleos.com
                                </a>
                              </p>
                            </span>
                          </div>
                        </div>
                        <div class=" ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Vel ipsa commodi illum saepe numquam maxime
                            asperiores voluptate sit, minima perspiciatis.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-6 col-end-13 p-3 rounded-lg">
                      <div class="flex items-center justify-start flex-row-reverse">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-300 flex-shrink-0">
                          A
                        </div>

                        <div class=" mr-3 text-sm bg-indigo-100  py-2 px-4 shadow rounded-xl ">
                          <div class="font-bold text-xs card-bg p-3">
                            <span  class=" rounded-full "> -reply to </span>: Hey
                            How are you today?
                          </div>
                          <div>I'm ok what about you?</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-6 col-end-13 p-3 rounded-lg">
                      <div class="flex items-center justify-start flex-row-reverse">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-300 flex-shrink-0">
                          A
                        </div>
                        <div class=" mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing.
                            ?
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-300 flex-shrink-0">
                          <div class="group relative m-12 flex justify-center">
                            <button class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-300  flex-shrink-0">
                              <img
                                src="https://tecdn.b-cdn.net/img/new/avatars/1.webp"
                                class="w-32 rounded-full"
                                alt="Avatar"
                              />
                            </button>
                            <span class="w-60 absolute top-0 scale-0 rounded-2xl bg-green-100 opacity-90 p-1 ml-80 mr-10 text-xs text-black group-hover:scale-100">
                              <img
                                src="https://tecdn.b-cdn.net/img/new/avatars/1.webp"
                                class="w-20 rounded-full mx-auto"
                                alt="Avatar"
                              />
                              <p class="text-base font-semibold leading-none text-center text-gray-900 dark:text-white">
                                Jese Leos
                              </p>
                              <p class="mb-3 text-sm font-normal text-center">
                                @jeseleos
                              </p>
                              <p class="mb-4 text-sm text-center">
                                Hello! I love traveling.<p>my WebLog :</p>{" "}
                                <a
                                  href="#"
                                  class="text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                  jeseleos.com
                                </a>
                              </p>
                            </span>
                          </div>
                        </div>
                        <div class=" ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                          <div>Lorem ipsum dolor sit amet !</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-6 col-end-13 p-3 rounded-lg">
                      <div class="flex items-center justify-start flex-row-reverse">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-300 flex-shrink-0">
                          A
                        </div>
                        <div class=" mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing.
                            ?
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-300 flex-shrink-0">
                          <div class="group relative m-12 flex justify-center">
                            <button class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-300  flex-shrink-0">
                              <img
                                src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                                class="w-32 rounded-full"
                                alt="Avatar"
                              />
                            </button>
                            <span class="w-60 absolute top-0 scale-0 rounded-2xl bg-green-100 opacity-90 p-1 ml-80 mr-10 text-xs text-black group-hover:scale-100">
                              <img
                                src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                                class="w-20 rounded-full mx-auto"
                                alt="Avatar"
                              />
                              <p class="text-base font-semibold leading-none text-center text-gray-900 dark:text-white">
                                Jese Leos
                              </p>
                              <p class="mb-3 text-sm font-normal text-center">
                                @jeseleos
                              </p>
                              <p class="mb-4 text-sm text-center">
                                Hello! I love traveling.<p>my WebLog :</p>{" "}
                                <a
                                  href="#"
                                  class="text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                  jeseleos.com
                                </a>
                              </p>
                            </span>
                          </div>
                        </div>
                        <div class=" ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perspiciatis, in.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-300 flex-shrink-0">
                          <div class="group relative m-12 flex justify-center">
                            <button class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-300  flex-shrink-0">
                              <img
                                src="https://tecdn.b-cdn.net/img/new/avatars/1.webp"
                                class="w-32 rounded-full"
                                alt="Avatar"
                              />
                            </button>
                            <span class="w-60 absolute top-0 scale-0 rounded-2xl bg-green-100 opacity-90 p-1 ml-80 mr-10 text-xs text-black group-hover:scale-100">
                              <img
                                src="https://tecdn.b-cdn.net/img/new/avatars/1.webp"
                                class="w-20 rounded-full mx-auto"
                                alt="Avatar"
                              />
                              <p class="text-base font-semibold leading-none text-center text-gray-900 dark:text-white">
                                Jese Leos
                              </p>
                              <p class="mb-3 text-sm font-normal text-center">
                                @jeseleos
                              </p>
                              <p class="mb-4 text-sm text-center">
                                Hello! I love traveling.<p>my WebLog :</p>{" "}
                                <a
                                  href="#"
                                  class="text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                  jeseleos.com
                                </a>
                              </p>
                            </span>
                          </div>
                        </div>
                        <div class=" ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Vel ipsa commodi illum saepe numquam maxime
                            asperiores voluptate sit, minima perspiciatis.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-300 flex-shrink-0">
                          <div class="group relative m-12 flex justify-center">
                            <button class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-300  flex-shrink-0">
                              <img
                                src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
                                class="w-32 rounded-full"
                                alt="Avatar"
                              />
                            </button>
                            <span class="w-60 absolute top-0 scale-0 rounded-2xl bg-green-100 opacity-90 p-1 ml-80 mr-10 text-xs text-black group-hover:scale-100">
                              <img
                                src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
                                class="w-20 rounded-full mx-auto"
                                alt="Avatar"
                              />
                              <p class="text-base font-semibold leading-none text-center text-gray-900 dark:text-white">
                                Jese Leos
                              </p>
                              <p class="mb-3 text-sm font-normal text-center">
                                @jeseleos
                              </p>
                              <p class="mb-4 text-sm text-center">
                                Hello! I love traveling.<p>my WebLog :</p>{" "}
                                <a
                                  href="#"
                                  class="text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                  jeseleos.com
                                </a>
                              </p>
                            </span>
                          </div>
                        </div>
                        <div class=" ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Vel ipsa commodi illum saepe numquam maxime
                            asperiores voluptate sit, minima perspiciatis.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div class="flex flex-row items-center">
                          <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-300 flex-shrink-0">
                            <div class="group relative m-12 flex justify-center">
                              <button class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-300  flex-shrink-0">
                                <img
                                  src="https://tecdn.b-cdn.net/img/new/avatars/1.webp"
                                  class="w-32 rounded-full"
                                  alt="Avatar"
                                />
                              </button>
                              <span class="w-60 absolute top-0 scale-0 rounded-2xl bg-green-100 opacity-90 p-1 ml-80 mr-10 text-xs text-black group-hover:scale-100">
                                <img
                                  src="https://tecdn.b-cdn.net/img/new/avatars/1.webp"
                                  class="w-20 rounded-full mx-auto"
                                  alt="Avatar"
                                />
                                <p class="text-base font-semibold leading-none text-center text-gray-900 dark:text-white">
                                  Jese Leos
                                </p>
                                <p class="mb-3 text-sm font-normal text-center">
                                  @jeseleos
                                </p>
                                <p class="mb-4 text-sm text-center">
                                  Hello! I love traveling.<p>my WebLog :</p>{" "}
                                  <a
                                    href="#"
                                    class="text-blue-600 dark:text-blue-500 hover:underline"
                                  >
                                    jeseleos.com
                                  </a>
                                </p>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div class=" ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Vel ipsa commodi illum saepe numquam maxime
                            asperiores voluptate sit, minima perspiciatis.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex flex-row items-center h-16 rounded-xl bg-emerald-100 bg-opacity-70  w-full px-4">
                <div>
                  <button class="flex items-center justify-center text-gray-400 hover:text-gray-600 ">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div class="flex-grow ml-4  ">
                  <div class="relative w-full   ">
                    <input
                      type="text"
                      class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10 CARD-BG border-green-100"
                    />
                  </div>
                </div>
                <div class="ml-4">
                  <button class="flex items-center justify-center bg-slate-400  hover:bg-indigo-300 rounded-xl text-black px-4 py-1 flex-shrink-0">
                    <span>Send</span>
                    <span class="ml-2">
                      <svg
                        class="w-4 h-4 transform rotate-45 -mt-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};


export default Hero;
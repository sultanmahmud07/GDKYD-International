"use client"
import './chatbox.css'
import { BsChat } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from 'react';
import ConversationsBox from './ConversationsBox';
import { BASEURL } from '../../../../Constant';
import axios from 'axios';

const ChatBox = () => {
  const [isOpenChat, setIsOpenChat] = useState(false);
  const [isNewChat, setIsNewChat] = useState(false);

  // Check if email exists in localStorage and update isNewChat accordingly
  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    setIsNewChat(!!savedEmail);
  }, []);

  const handleChatBoxOpenOrClose = () => {
    setIsOpenChat(!isOpenChat);
  }
  const handleChatClose = async () => {
    try {
      const response = await axios.delete(`${BASEURL}/message/delete/all/${localStorage.getItem("email")}`);
      // console.log("Response:", response.data);
      if (response?.data?.status === "success") {
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        setIsNewChat("");
      }
    } catch (error) {
      console.error("Error sending message:", error.message);
      alert("Failed to send message. Please try again.");
    }


  }

  const handleStartChat = async (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;

    // Save name and email to localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    const data = {
      fullName: name,
      email: email,
    };
    try {
      const response = await axios.post(`${BASEURL}/message/start-chat`, data);
      // setPreData(response?.data?.data);
       // Set isNewChat to true after saving user data
    setIsNewChat(true);
    } catch (err) {
      console.log(err);
    }
   
  };
  // console.log(isNewChat)
  return (
    <div className='fixed bottom-5 right-3 z-30'>
      <div className={`chat_box relative ${isOpenChat ? "open block" : "close hidden"}`}>
        <div className="absolute right-0 bottom-2 bg-white p-3 w-[300px] h-[400px] rounded-md shadow-lg">
          <div className="relative pt-7">
            <div className="chat_top absolute top-0 left-0 right-0 w-full flex items-center justify-between border-b py-1">
              <p className='text-gray-700 font-semibold text-sm'>KYD Support</p>
              <p className='text-lg flex items-center gap-4'>
                <button onClick={handleChatClose} id='delete_button' type='button' className=''><AiOutlineDelete /></button>
                <button onClick={() => setIsOpenChat(false)} id='close_button' type='button' className=' text-xl'><IoMdClose /></button>
              </p>
            </div>
            {
              !isNewChat ? (
                <form id='start_chat_form' onSubmit={handleStartChat} className=" p-2 flex flex-col gap-2 my-2">
                  <p className='text-sm my-3'>Please fill out the form below to start chatting with the next available agent.</p>
                  <label className="form-control w-full max-w-xs">
                    <span className="label-text">Full Name</span>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="input input-sm w-full"
                    />
                  </label>
                  <label className="form-control w-full max-w-xs">
                    <span className="label-text">Email</span>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your email"
                      className="input input-sm w-full"
                    />
                  </label>
                  <input
                    type="submit"
                    value="Start Chat"
                    className="bg-secondary rounded text-white font-semibold cursor-pointer shadow input-sm w-full"
                  />
                </form>
              ) : (
                <ConversationsBox />
              )
            }
          </div>
        </div>
      </div>

      <button onClick={handleChatBoxOpenOrClose} id='open_and_close_chat_box_button' type='button' className="flex items-center gap-1 rounded-full border border-white bg-secondary p-2 px-3 cursor-pointer shadow-md">
        <span className='text-xl font-bold text-white'><BsChat /></span>
        <span className='text-sm font-semibold text-white'>Ask Q</span>
      </button>
    </div>
  )
}

export default ChatBox;

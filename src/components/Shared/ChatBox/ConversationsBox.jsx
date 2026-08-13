import { IoSend } from "react-icons/io5";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { BASEURL } from "../../../../Constant";
import axios from "axios";

const ConversationsBox = () => {
  const [preData, setPreData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const email = localStorage.getItem("email");
  const name = localStorage.getItem("name");

  //===================================
  // <<<< Get Previous Message here >>>>
  //====================================
  const fetchUsers = async () => {
    const data = {
      fullName: name,
      email: email,
    };
    try {
      setLoading(true);
      const response = await axios.post(`${BASEURL}/message/start-chat`, data);
      setPreData(response?.data?.data);
    } catch (err) {
      console.log(err);
      setError(err?.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, [email]);
  //===================================
  //    <<<< Send Message here >>>>
  //====================================
  const handleSendMessage = async () => {
    if (message.trim()) {
      const messageData = {
        email: email,
        message: message,
      };
      try {
        const response = await axios.post(
          `${BASEURL}/message/chat-user/send-message`,
          messageData
        );
        // console.log("Response:", response.data);
        setMessage("");
        fetchUsers();
      } catch (error) {
        console.error("Error sending message:", error.message);
        alert("Failed to send message. Please try again.");
      }
    } else {
      alert("Please write a message before sending.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
// console.log(preData);
  return (
    <div id="conversations_box" className="relative">
      <div className="conversations">
        {preData?.previousMessages?.length > 0 ? (
          <div className="message_show flex flex-col gap-1">
            {preData?.previousMessages?.map((message, i) => {
              return (
                <div
                  key={i}
                  className={`message_card flex items-center gap-1 p-2 rounded-sm ${
                    message?.sender == "user" ? "bg-gray-200" : "bg-[#30b84000]"
                  }`}
                >
                  <p className="">
                    {message?.sender == "user" ? (
                      <span className="text-lg text-gray-600 font-semibold">
                        <FaRegUser />
                      </span>
                    ) : (
                      <span className="text-lg text-blue-400 font-semibold">
                        <FaUserShield />
                      </span>
                    )}
                  </p>
                  <p className="text-sm">{message?.message}</p>
                  {/* <p className="text-sm">{message?.createdAt}</p> */}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="">
            <p className="text-sm text-center mt-20">Start Message</p>
          </div>
        )}
      </div>
      {/* Write Message here  */}
      <div className="send_message_box relative w-full overflow-hidden">
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Write message..."
          className="input input-sm w-full"
        />
        <button
          onClick={handleSendMessage}
          id="send_message_button"
          type="button"
          className="absolute right-[1px] h-[96%] top-[1px] text-xl text-secondary font-semibold px-2 bg-gray-200 rounded-lg shadow"
        >
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default ConversationsBox;

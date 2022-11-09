import React from "react";
import phone from "../../../assets/image/contact/455705.png";
import email from "../../../assets/image/contact/4812397.png";
import whats from "../../../assets/image/contact/whatsapp-logo-light-green-png-0.png";

const Contact = () => {
  return (
    <div className="my-20 py-12 border-2 border-gray-400 rounded-lg">
      <h1 className="text-center text-xl font-bold my-6">Contact Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-3" gap-6>
        <div className="flex justify-center items-center my-4">
          <img src={phone} alt="" className="h-16 w-16" />
          <div className="ml-6">
            <p>Just call and confirm</p>
            <p>0173949444</p>
          </div>
        </div>
        <div className="flex justify-center items-center my-4">
          <img src={email} alt="" className="h-16 w-16 ml-4" />
          <div className="ml-6">
            <p>If you need email?</p>
            <p>kitchen@cloud.com</p>
          </div>
        </div>
        <div className="flex justify-center items-center my-4">
          <img src={whats} alt="" className="h-16 w-16" />

          <div className="ml-6">
            <p>If you interest sms order</p>
            <p>038474533</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

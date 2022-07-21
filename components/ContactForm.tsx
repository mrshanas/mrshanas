//@ts-nocheck
import { FC, useRef, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm: FC = ({ envVars }: any) => {
  const form = useRef();

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    console.log(form.current);

    await emailjs
      .sendForm(
        envVars.serviceId,
        envVars.templateId,
        form.current,
        envVars.publicKey
      )
      .then((result) => {
        if (result.status === 200) {
          // show success toast
          toast.success("Email sent");
          form.current.reset();
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Email not sent");
      });
  };

  return (
    <div className="my-8">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <form
        method="post"
        ref={form}
        className="flex flex-col w-[80%] mx-auto p-3 space-y-4"
        autoComplete="off"
        onSubmit={sendEmail}
      >
        <div className="flex flex-col space-y-1">
          <label htmlFor="name" className="font-bold">
            Name
          </label>
          <input
            type="text"
            name="fromName"
            placeholder="Your name"
            className="outline-purple p-1 dark:bg-darkBlue dark:placeholder:text-white placeholder:pl-2 dark:outline-lightGreen outline-[0.1px] border border-purple rounded-md dark:border-lightGreen"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            type="email"
            placeholder="Your email"
            name="email"
            className="outline-purple dark:bg-darkBlue dark:placeholder:text-white p-1 placeholder:pl-2 dark:outline-lightGreen outline-[0.1px] border border-purple  rounded-md dark:border-lightGreen"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="message" className="font-bold">
            Message
          </label>
          <textarea
            name="message"
            cols={30}
            rows={10}
            placeholder="Hello Shanas...."
            className="outline-purple p-1 placeholder:pl-2 dark:bg-darkBlue dark:placeholder:text-white dark:outline-lightGreen outline-[0.1px] border border-purple  rounded-md dark:border-lightGreen"
          ></textarea>
        </div>
        <button
          type="submit"
          className="dark:text-black text-white font-bold rounded-md p-2 w-[90%] mx-auto bg-purple dark:bg-lightGreen"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

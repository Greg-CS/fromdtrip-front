import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const ContactMe = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "fromdtrip",
          from_email: form.email,
          to_email: "from.the.trip@gmail.com",
          message: form.message,
        },
        process.env.PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Message sent! Thank you. I will get back to you as soon as possible.",
            {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000,
            },
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          toast.error("Error! Something went wrong. Please try again later.", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
        },
      );
  };

  const containerVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <section>
      <div className="">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ duration: 0.6 }}
        >
          <div className="flex-row gap-4 mt-12 overflow-hidden text-[#355070] bg-[#E56B6F] rounded-2xl shadow-lg">
            <form ref={formRef} onSubmit={handleSubmit} className="p-8 flex-3">
              <label className="mt-5 text-lg md:text-xl lg:text-2xl">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Dope"
                className="w-full px-3 py-2 mt-2 rounded-2xl focus:outline-none bg-[#A56475] focus:border-[#6D597A] focus:bg-[#6D597A]"
              />

              <label className="mt-5 text-lg md:text-xl lg:text-2xl">
                Your email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@gmail.com"
                className="w-full px-3 py-2 mt-2 rounded-2xl focus:outline-none bg-[#A56475] focus:border-[#6D597A] focus:bg-[#6D597A]"
              />

              <label className="mt-5 text-lg md:text-xl lg:text-2xl">
                Your Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hi fromdtrip!"
                className="w-full px-3 py-2 mt-2 rounded-2xl text-white focus:outline-none bg-[#A56475] focus:border-[#6D597A] focus:bg-[#6D597A]"
              />

              <div className="my-10">
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-[#E56B6F] bg-[#355070] rounded-md"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
      <ToastContainer />
    </section>
  );
};
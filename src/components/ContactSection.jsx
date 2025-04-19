import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hwucvut", // আপনার Service ID
        "template_qgzcent", // আপনার Template ID
        form.current,
        "S4t5O1gnufzRSOhs_" // আপনার Public Key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          // console.log(error);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="container mx-auto text-white py-16 -mt-10 overflow-hidden">
      <div className=" mx-auto px-4 ">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: .5 }}
        >
          <h2 className="text-center text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-center text-xl mb-10">Contact Us</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="space-y-6 overflow-hidden">
            {/* Email */}
            <motion.div
              initial={{ x: -100, y: 50, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: .5 }}
              className="bg-[#041c50] p-6 rounded-lg text-center">

              <motion.h3
                initial={{ x: -100, y: 50, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: .5 }}
                className="text-2xl font-semibold">Email</motion.h3>
              <motion.p
                initial={{ x: -100, y: 50, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: .5 }}
                className="mt-2">ronyislam2623@gmail.com</motion.p>
              <motion.a
                initial={{ x: -100, y: 50, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: .5 }}
                href="mailto:ronyislam2623@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded text-white"
              >
                Send a Message
              </motion.a>
            </motion.div>
            {/* WhatsApp */}
            <motion.div
              initial={{ x: -100, y: 50, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: .5 }}
              className="bg-[#041c50] p-6 rounded-lg text-center">
              <motion.h3
                initial={{ x: -100, y: 50, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: .5 }}
                className="text-2xl font-semibold">WhatsApp</motion.h3>
              <motion.p
                initial={{ x: -100, y: 50, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: .5 }}
                className="mt-2">+88019494734057</motion.p>
              <motion.a
                initial={{ x: -100, y: 50, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: .5 }}
                href="https://wa.me/8801949734057"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-green-600 hover:bg-green-500 rounded text-white"
              >
                Send a Message
              </motion.a>
            </motion.div>
            {/* Messenger */}
            <motion.div
              initial={{ x: -100, y: 50, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: .5 }}
              className="bg-[#041c50] p-6 rounded-lg text-center">
              <motion.h3
                initial={{ x: -100, y: 50, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: .5 }}
                className="text-2xl font-semibold">Messenger</motion.h3>
              <motion.p
                initial={{ x: -100, y: 50, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: .5 }}
                className="mt-2">Rony Islam</motion.p>
              <motion.a
                initial={{ x: -100, y: 50, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: .5 }}
                href="https://m.me/jubairrony"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white"
              >
                Send a Message
              </motion.a>
            </motion.div>
          </div>
          {/* Right Side */}
          <div>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <motion.input
                initial={{  y: 50, opacity: 0 }}
                whileInView={{  y: 0, opacity: 1 }}
                transition={{ duration: .5 }}
                type="text"
                name="from_name"
                placeholder="Enter Your Name"
                className="w-full px-4 py-3 bg-[#041c50] rounded-lg placeholder-gray-300 text-white outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <motion.input
                initial={{  y: 100, opacity: 0 }}
                whileInView={{  y: 0, opacity: 1 }}
                transition={{ duration: .5 }}
                type="email"
                name="reply_to"
                placeholder="Enter Your Email"
                className="w-full px-4 py-3 bg-[#041c50] rounded-lg placeholder-gray-300 text-white outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <motion.textarea
                initial={{  y: 100, opacity: 0 }}
                whileInView={{  y: 0, opacity: 1 }}
                transition={{ duration: .5 }}
                name="message"
                placeholder="Your Message Here..."
                rows="6"
                className="w-full px-4 py-3 bg-[#041c50] rounded-lg placeholder-gray-300 text-white outline-none focus:ring-1 focus:ring-blue-500"
                required
              ></motion.textarea>
              <motion.button
                initial={{  y: 100, opacity: 0 }}
                whileInView={{  y: 0, opacity: 1 }}
                transition={{ duration: .5 }}
                type="submit"
                className="w-full py-3 bg-transparent border border-blue-500 hover:bg-[#041c50] rounded-lg text-white font-semibold"
              >
                SEND MESSAGE
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

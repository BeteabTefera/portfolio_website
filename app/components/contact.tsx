"use client";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Linkedin, Mail, Github, HeartHandshake } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";  // Import the toast module and ToastContainer
import "react-toastify/dist/ReactToastify.css";  // Import the toast CSS

export function Contact() {
  // Initialize emailjs
  useEffect(() => {
    emailjs.init(`${process.env.EMAILJS_USER_ID}`);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    emailjs
      .send(
        `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
        formData,
        `${process.env.NEXT_PUBLIC_EMAILJS_USER_ID}`
      )
      .then(
        () => {
          toast.success("Thank you for reaching out to me, I will get back to you soon!"); // Show success toast
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message. Please try again."); // Show error toast
        }
      );
  };

  return (
    <div>
      <div className="px-3 pb-8">
        <section>
          <h1>
            <HeartHandshake /> Let’s Chat!
          </h1>
          <p>Feel free to reach out to me if you have any questions or would like to connect!</p>
        </section>
        <br />
        <section className="py-9 dark:bg-gray-700 bg-gray-100 p-8 rounded-lg">
          <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <label className="block">
              <span className="text-gray-700 dark:text-white">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Whats your name?"
                value={formData.name}
                onChange={handleChange}
                className="px-[0.5rem] mt-1 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </label>
            <label className="block">
              <span className="text-gray-700 dark:text-white">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Whats your email?"
                className="px-[0.5rem] mt-1 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </label>
            <label className="block">
              <span className="text-gray-700 dark:text-white">Message</span>
              <textarea
                name="message"
                rows={10}
                value={formData.message}
                onChange={handleChange}
                className="mb-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </label>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
      <div className="max-w-md mx-auto">
            {/*Here I will put logos for Linkedin, Gmail, Github*/}
            <div className="flex justify-center gap-4 mb-8">
                <a href="https://www.linkedin.com/in/beteabtefera/" target="_blank">
                    <Linkedin size={40}/>
                </a>
                <a href="mailto:beteabtefera@gmail.com" target="_blank">
                    <Mail size = {40}/>
                </a>
                <a href="https://github.com/BeteabTefera" target="_blank">
                    <Github size = {40}/>
                </a>
            </div>
        </div>
      <ToastContainer />
    </div>
  );
}

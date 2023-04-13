import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    if (event.target.name === "email") {
      if (validateEmail(event.target.value)) {
        event.target.classList.remove("border-red-500");
        event.target.classList.remove("focus:border-red-500");
      } else {
        if (!event.target.classList.contains("border-red-500")) {
          event.target.classList.add("border-red-500");
        }
        if (!event.target.classList.contains("focus:border-red-500")) {
          event.target.classList.add("focus:border-red-500");
        }
      }
    } else {
      event.target.classList.remove("border-red-500");
      event.target.classList.remove("focus:border-red-500");
    }

    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formData);
    console.log(event);
    if (!validateEmail(formData.email)) {
      return false;
    }

    setIsLoading(true);
    console.log(formData);
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.status === 200) {
      alert("Email sent successfully!");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      alert("Error sending email");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-center justify-center gap-8"
      id="contact-form"
    >
      <div className="flex w-full items-center justify-center gap-4">
        <div className="flex w-[50%] flex-col items-center justify-center gap-6 ">
          <div className="flex w-full flex-col items-start justify-center gap-1 font-medium">
            <label htmlFor="name">Full Name</label>
            <input
              required
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              onInvalid={(e) => {
                e.target.classList.add("border-red-500");
                e.target.classList.add("focus:border-red-500");
              }}
              className="w-full rounded-md border-2 border-gray-400 px-4 py-2 font-normal outline-none transition focus:border-blue-500"
            />
          </div>

          <div className="flex w-full flex-col items-start justify-center gap-1 font-medium">
            <label htmlFor="email">Email</label>
            <input
              required
              type="text"
              name="email"
              id="email"
              placeholder="johndoe@gmail.com"
              value={formData.email}
              onChange={handleChange}
              onInvalid={(e) => {
                e.target.classList.add("border-red-500");
                e.target.classList.add("focus:border-red-500");
              }}
              className="w-full rounded-md border-2 border-gray-400 px-4 py-2 font-normal outline-none transition focus:border-blue-500"
            />
          </div>

          <div className="flex w-full flex-col items-start justify-center gap-1 font-medium">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="John's Cafe Website"
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded-md border-2 border-gray-400 px-4 py-2 font-normal outline-none transition focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex w-[50%] items-center justify-center">
          <textarea
            required
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            onInvalid={(e) => {
              e.target.classList.add("border-red-500");
              e.target.classList.add("focus:border-red-500");
            }}
            className="w-full rounded-md border-2 border-gray-400 px-4 py-2 font-normal outline-none transition focus:border-blue-500"
          ></textarea>
        </div>
      </div>
      <button
        className="rounded-full border-2 border-gray-400 px-8 py-2 capitalize shadow-md transition hover:border-blue-400"
        type="submit"
      >
        {isLoading ? "Loading..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;

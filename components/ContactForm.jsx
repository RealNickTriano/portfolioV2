import { useState, createRef } from "react";
import AlertMessage from "./AlertMessage";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(formData.email)) {
      return false;
    }

    setIsLoading(true);

    recaptchaRef.current.execute();
  };

  const sendForm = async () => {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.status === 200) {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    } else {
      setIsLoading(false);
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 2000);
    }
  };

  const recaptchaRef = createRef();

  const onReCAPTCHAChange = (captchaCode) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }
    // Else reCAPTCHA was executed successfully so proceed with the
    // alert
    sendForm();
    // Reset the reCAPTCHA so that it can be executed again if user
    // submits another email.
    recaptchaRef.current.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-center justify-center gap-8 px-12"
      id="contact-form"
    >
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={onReCAPTCHAChange}
      />
      <div className="flex w-full flex-col items-center justify-center gap-4 lg:flex-row">
        <div className="flex w-full flex-col items-center justify-center gap-6">
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
            <label htmlFor="email">Your Email</label>
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
        <div className="flex w-full items-center justify-center">
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
      {isSuccess && (
        <AlertMessage success={true} message={"Email Sent Successfully"} />
      )}
      {isError && (
        <AlertMessage
          success={false}
          message={"Something went wrong! Check fields and try again."}
        />
      )}
    </form>
  );
};

export default ContactForm;

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Connect = () => {
  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be less than 50 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string()
      .min(5, "Subject must be at least 5 characters")
      .max(100, "Subject must be less than 100 characters")
      .required("Subject is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .max(500, "Message must be less than 500 characters")
      .required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: async(values, { resetForm, setSubmitting }) => {
      try {
        const response = await fetch("https://portfolio-zect.onrender.com/api/messages/createMessage", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })

        const data = await response.json();

        if (data.success) {
          resetForm();
          setSubmitting(false);
          alert("Message sent successfully!");
        }
      } catch (error) {
        alert("Error sending message", error);
        
      }
    },
  });

  const contactInfo = [
    {
      icon: "📍",
      label: "Location",
      value: "Kathmandu, Nepal",
      color: "from-blue-600 to-cyan-600",
      borderColor: "border-blue-500/30",
    },
    {
      icon: "📧",
      label: "Email",
      value: "lmroshan497@gmail.com",
      color: "from-green-600 to-emerald-600",
      borderColor: "border-green-500/30",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+977 9702054223",
      color: "from-purple-600 to-pink-600",
      borderColor: "border-purple-500/30",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/LMRoshan",
      color: "hover:bg-gray-800 border-gray-600",
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/roshan-lama-0462b623a/",
      color: "hover:bg-blue-700 border-blue-600",
    },
    {
      icon: <FaFacebook className="w-6 h-6" />,
      name: "Facebook",
      url: "https://www.facebook.com/roshan.lama.831171",
      color: "hover:bg-blue-600 border-blue-500",
    },
    {
      icon: <FaInstagram className="w-6 h-6" />,
      name: "Instagram",
      url: "https://www.instagram.com/lm_roshan/",
      color: "hover:bg-pink-600 border-pink-500",
    },
  ];

  // Helper function to get input border color based on validation
  const getInputBorderColor = (field) => {
    if (formik.touched[field] && formik.errors[field]) {
      return "border-red-500 focus:border-red-400 focus:ring-2 focus:ring-red-500/20";
    }
    if (formik.touched[field] && !formik.errors[field]) {
      return "border-green-500 focus:border-green-400 focus:ring-2 focus:ring-green-500/20";
    }
    return "border-gray-600 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/20";
  };

  return (
    <section
      id="connect"
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-500 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-3/4 w-28 h-28 bg-cyan-500 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Connect! <span className="text-yellow-400">📞</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to start your next project? Let's chat over virtual coffee!
              ☕
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 shadow-2xl">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  Get In Touch 📍
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-6 p-4 rounded-2xl bg-gray-700/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 border border-gray-600 hover:border-gray-500"
                    >
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl border ${item.borderColor}`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">
                          {item.label}
                        </h4>
                        <p className="text-gray-300">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h4 className="text-white font-bold text-lg mb-4 text-center">
                    Follow Me 🌟
                  </h4>
                  <div className="flex justify-center gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center text-white transform hover:scale-110 transition-all duration-300 ${social.color} border hover:shadow-lg`}
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fun Element */}
              <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 border border-yellow-500/30 shadow-2xl">
                <div className="text-4xl mb-4">💌</div>
                <h4 className="text-white font-bold text-lg mb-2">
                  Quick Response Guaranteed!
                </h4>
                <p className="text-gray-100">
                  I typically reply within 24 hours. Let's make magic happen! ✨
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Send a Message 💬
              </h3>

              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white font-medium mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                      className={`w-full bg-gray-700/50 border-2 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${getInputBorderColor(
                        "name"
                      )}`}
                      placeholder="What should I call you?"
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="mt-2 flex items-center gap-2 text-red-400 text-sm">
                        <span>⚠️</span>
                        {formik.errors.name}
                      </div>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white font-medium mb-2"
                    >
                      Your Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      className={`w-full bg-gray-700/50 border-2 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${getInputBorderColor(
                        "email"
                      )}`}
                      placeholder="Where can I reach you?"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="mt-2 flex items-center gap-2 text-red-400 text-sm">
                        <span>⚠️</span>
                        {formik.errors.email}
                      </div>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-white font-medium mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                    className={`w-full bg-gray-700/50 border-2 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${getInputBorderColor(
                      "subject"
                    )}`}
                    placeholder="What's this about?"
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <div className="mt-2 flex items-center gap-2 text-red-400 text-sm">
                      <span>⚠️</span>
                      {formik.errors.subject}
                    </div>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-white font-medium mb-2"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    rows="5"
                    className={`w-full bg-gray-700/50 border-2 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 resize-none ${getInputBorderColor(
                      "message"
                    )}`}
                    placeholder="Tell me something exciting!"
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <div className="mt-2 flex items-center gap-2 text-red-400 text-sm">
                      <span>⚠️</span>
                      {formik.errors.message}
                    </div>
                  )}
                  <div className="mt-2 text-right">
                    <span
                      className={`text-sm ${
                        formik.values.message.length > 500
                          ? "text-red-400"
                          : "text-gray-400"
                      }`}
                    >
                      {formik.values.message.length}/500
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formik.isSubmitting || !formik.isValid}
                  className={`w-full py-4 rounded-xl font-bold text-lg transform transition-all duration-300 flex items-center justify-center gap-3 border-2 ${
                    formik.isSubmitting || !formik.isValid
                      ? "bg-gray-700 text-gray-500 border-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-yellow-600 to-orange-600 text-white border-yellow-500/30 hover:scale-105 hover:shadow-2xl"
                  }`}
                >
                  {formik.isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message 🚀
                      <span className="animate-bounce">📤</span>
                    </>
                  )}
                </button>

                {/* Form Status */}
                {formik.status && (
                  <div
                    className={`p-4 rounded-xl text-center border ${
                      formik.status.type === "success"
                        ? "bg-green-500/20 text-green-400 border-green-500/30"
                        : "bg-red-500/20 text-red-400 border-red-500/30"
                    }`}
                  >
                    {formik.status.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-16 pt-8 border-t border-gray-700">
        <p className="text-gray-400">
          Made with ❤️, ☕, and a lot of fun! &copy; 2025 Roshan. All Rights
          Reserved.
        </p>
      </div>
    </section>
  );
};

export default Connect;
import React, { useState, useEffect } from "react";
import { FiPhone, FiMapPin } from "react-icons/fi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // ✅ পেজ লোড হলে পূর্বের ডেটা আনবে (ঐচ্ছিক — শেষ ইনপুট মনে রাখার জন্য)
  useEffect(() => {
    const savedData = localStorage.getItem("contactForm");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // ✅ ইনপুট চেঞ্জ হ্যান্ডলার
  const handleChange = (e) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);
    localStorage.setItem("contactForm", JSON.stringify(newFormData)); // auto-save
  };

  // ✅ ফর্ম সাবমিট
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      // ✅ Contact Messages LocalStorage এ জমা করো
      const allMessages = JSON.parse(localStorage.getItem("contactMessages")) || [];
      allMessages.push(formData);
      localStorage.setItem("contactMessages", JSON.stringify(allMessages));

      // ✅ সফল alert
      alert("✅ Message sent successfully!");

      // ✅ Input ফিল্ড খালি করো
      setFormData({ name: "", email: "", message: "" });
      localStorage.removeItem("contactForm"); // পুরনো টেম্প ডেটা মুছে ফেলা
    }, 1000);
  };

  return (
    <div>
      <section id="contact" className="mt-16 max-w-4xl mx-auto px-6 py-5 mb-5">
        <header className="mb-7 text-center underline">
          <h2 className="text-4xl font-bold text-pink-800">
            Contact <span className="text-blue-600">Us</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <form
            data-aos="zoom-in"
            onSubmit={handleSubmit}
            className="bg-gray-100 shadow-lg rounded-2xl p-6 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-pink-600 text-white py-3 rounded-lg transition cursor-pointer hover:scale-95 duration-300
              ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-pink-700"}`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div data-aos="zoom-in" className="bg-gray-100 shadow-lg rounded-2xl p-6 space-y-4">
            <h3 className="text-center">Contact info of</h3>
            <h1 className="font-bold">
              Adatala Darul Hedayat Dakhil Madrasha, Naogaon, Rajshahi
            </h1>
            <p>
              If you need address, email and phone number of Adatala Darul Hedayat
              Dakhil Madrasha, please feel free to contact them using the
              information below. Additionally, you can locate them on the map
              displayed on this webpage.
            </p>
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-2 text-black rounded-md">
                <FiPhone />
              </div>
              <span className="text-sm text-black hover:underline hover:font-bold">
                <a href="tel:+88 01798090414">+88 01798090414</a>
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 text-black">
                <FiMapPin />
              </div>
              <span className="text-sm text-black">
                Adatala 199, Naogaon, Rajshahi
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

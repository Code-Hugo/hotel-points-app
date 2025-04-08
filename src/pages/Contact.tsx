import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: email,
      email,
      title: "Feedback Submission",
      message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_o4io999",
        "template_ux42bli",
        templateParams,
        "C9pIB_bjkltekK4H4"
      )
      .then(
        () => {
          setStatus("✅ Feedback sent successfully!");
          setEmail("");
          setMessage("");

          setTimeout(() => {
            setStatus("");
          }, 4000); // Auto-hide message after 4 seconds
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send. Please try again later.");

          setTimeout(() => {
            setStatus("");
          }, 4000);
        }
      );
  };

  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8 py-10 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Contact & Feedback</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              required
              id="email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="message">
              Feedback (max 2000 characters)
            </label>
            <textarea
              id="message"
              required
              maxLength={2000}
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
              placeholder="Let us know what you think..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white text-sm py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Submit
          </button>

          {status && (
            <p className="text-sm text-center mt-2 text-green-600">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
} 
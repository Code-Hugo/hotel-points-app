import React from "react";

export default function Privacy() {
  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8 py-10 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-4">
          This privacy policy outlines how we handle your personal information when you use our feedback app.
        </p>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Data Collection</h2>
        <p className="text-sm text-gray-600 mb-4">
          We collect the following data when you submit feedback:
          <ul className="list-disc list-inside">
            <li>Email address</li>
            <li>Message content</li>
          </ul>
        </p>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Data Usage</h2>
        <p className="text-sm text-gray-600 mb-4">
          The collected data is solely used to respond to your feedback. We do not store, share, or sell your information.
        </p>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Contact</h2>
        <p className="text-sm text-gray-600 mb-4">
          If you wish to have your data removed, please contact us at <a href="mailto:hhodinka@gmail.com" className="text-blue-600">hhodinka@gmail.com</a>.
        </p>
      </div>
    </div>
  );
} 
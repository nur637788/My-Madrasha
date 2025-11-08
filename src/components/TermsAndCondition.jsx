import React from "react";
import { Link } from "react-router-dom";

function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5 mt-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl px-4 py-5">
        <h1 className="text-3xl font-bold text-center text-pink-700 mb-6 underline">
          Terms & Conditions
        </h1>

        <p className="text-gray-700 mb-5">
          Welcome to <strong>Adatala Darul Hedayat Dakhil Madrasha</strong>’s
          official website. By using our website, you agree to the following
          terms and conditions. Please read them carefully before using our
          services.
        </p>

        <h2 className="text-xl font-semibold text-pink-600 mt-6 mb-2">
          1. General Information
        </h2>
        <p className="text-gray-700 mb-4">
          This website is managed and maintained by Adatala Darul Hedayat Dakhil
          Madrasha, Naogaon. All information provided here is for educational
          and institutional purposes only.
        </p>

        <h2 className="text-xl font-semibold text-pink-600 mt-6 mb-2">
          2. Acceptance of Terms
        </h2>
        <p className="text-gray-700 mb-4">
          By accessing our site, you agree to abide by these terms and any
          updates made in the future. If you disagree with any part of these
          terms, please discontinue using our website immediately.
        </p>

        <h2 className="text-xl font-semibold text-pink-600 mt-6 mb-2">
          3. Privacy Policy
        </h2>
        <p className="text-gray-700 mb-4">
          We value your privacy. Any personal information shared through the
          contact form or registration will be kept strictly confidential and
          will not be shared with third parties.
        </p>

        <h2 className="text-xl font-semibold text-pink-600 mt-6 mb-2">
          4. Content Usage
        </h2>
        <p className="text-gray-700 mb-4">
          All text, images, and materials on this website are property of
          Adatala Darul Hedayat Dakhil Madrasha. You may not copy, reproduce, or
          distribute any content without written permission.
        </p>

        <h2 className="text-xl font-semibold text-pink-600 mt-6 mb-2">
          5. Limitation of Liability
        </h2>
        <p className="text-gray-700 mb-4">
          We are not responsible for any direct or indirect loss or damage
          resulting from the use or inability to use this website.
        </p>

        <h2 className="text-xl font-semibold text-pink-600 mt-6 mb-2">
          6. Updates to Terms
        </h2>
        <p className="text-gray-700 mb-4">
          We may update or modify these Terms & Conditions at any time. Changes
          will be reflected on this page, and it is your responsibility to check
          periodically.
        </p>

        <div className="mt-8 text-center">
          <Link
            to="/login"
            className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
          >
            ← Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Terms;

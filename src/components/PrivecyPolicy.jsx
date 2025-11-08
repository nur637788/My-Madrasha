import React from "react";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <div>
      <section className="bg-gray-900  text-gray-800 dark:text-gray-100 py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto space-y-10">
          <header data-aos="fade-up" className="text-center space-y-3">
            <h1 className="text-4xl font-bold text-green-700 dark:text-green-400">Privacy Policy</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              This policy explains how <strong>[Adatala Darul Hedayat Dakhil Madrasha]</strong> collects, uses, and protects student, teacher, and visitor information.
            </p>
          </header>

          {/* Section 1 */}
          <div data-aos="fade-right">
            <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Student and guardian details (for academic records)</li>
              <li>Teacher and staff information (for administration)</li>
              <li>Basic visitor data like name, email, or messages sent through contact forms</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div data-aos="fade-left">
            <h2 className="text-2xl font-semibold mb-2">2. How We Use This Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To manage academic and administrative activities</li>
              <li>To improve communication between students, teachers, and guardians</li>
              <li>To provide educational updates and notices</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div data-aos="zoom-in">
            <h2 className="text-2xl font-semibold mb-2">3. Data Security</h2>
            <p>
              All personal data is kept secure and confidential. We use standard security measures to prevent unauthorized access or misuse.
            </p>
          </div>

          {/* Section 4 */}
          <div data-aos="fade-up">
            <h2 className="text-2xl font-semibold mb-2">4. Third-Party Links</h2>
            <p>
              Our website may include links to educational or government sites. We are not responsible for their privacy practices or content.
            </p>
          </div>

          {/* Section 5 */}
          <div data-aos="fade-up">
            <h2 className="text-2xl font-semibold mb-2">5. Policy Updates</h2>
            <p>
              We may update this policy from time to time. Please review it periodically to stay informed.
            </p>
          </div>

          {/* Contact */}
          <div data-aos="fade-up">
            <h2 className="text-2xl font-semibold mb-2">6. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
              📧 <a href="mailto:adatalam.d.@madrasah.com" className="text-green-500 hover:underline">mailto:adatalam.d.@madrasah.com</a><br />
              📞 +88 01798090414
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

import React from "react";

export default function PrivacyPage() {
  const lastUpdated = "2026-01-30";

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white text-gray-800 leading-relaxed font-sans">
      {/* Header */}
      <header className="border-b pb-8 mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 font-medium">
          Effective Date: {lastUpdated}
        </p>
      </header>

      <section className="space-y-10">
        {/* Introduction */}
        <div>
          <p className="text-lg">
            {`This privacy policy applies to the `}
            <span className="font-bold text-blue-600">
              Fine Studio (Guitar Tuner, Metronome, Chord Dictionary)
            </span>
            {` application (hereby referred to as "Application") for mobile devices created by `}
            <span className="font-bold text-gray-900">YOHAN HAN</span>
            {` (hereby referred to as "Service Provider"). This service is provided as an Ad Supported service and is intended for use "AS IS".`}
          </p>
        </div>

        {/* Information Collection and Use (Google Login Data Added) */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">
            Information Collection and Use
          </h2>
          <p className="mb-4">
            The Application collects certain information to provide a better
            user experience, especially when using features like Google Sign-in:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              <span className="font-semibold text-gray-900">
                Personal Information:
              </span>
              {` When you use Google Sign-in, we collect your `}
              <span className="underline decoration-blue-300">
                Name, Email Address, and unique User ID
              </span>
              {` to provide account-based features and synchronization.`}
            </li>
            <li>
              <span className="font-semibold text-gray-900">Usage Data:</span>
              {` Information about how you use the Application, such as pages visited and time spent on the Application.`}
            </li>
            <li>
              <span className="font-semibold text-gray-900">
                Device Information:
              </span>
              {` Operating system version and basic device identifiers.`}
            </li>
          </ul>
        </div>

        {/* User Data Deletion Rights (Crucial for Google Play) */}
        <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
          <h2 className="text-2xl font-bold text-red-900 mb-4">
            User Data Deletion Rights
          </h2>
          <p className="mb-4 text-red-800">
            {`We value your privacy and provide clear ways for you to delete your data:`}
          </p>
          <ul className="list-disc pl-6 space-y-3 text-red-800">
            <li>
              <strong>In-App Deletion:</strong>{" "}
              {`You can delete your account and all associated data (Name, Email, Usage records) by navigating to the `}
              <span className="font-bold underline">
                Settings &gt; Delete Account
              </span>
              {` menu within the Application.`}
            </li>
            <li>
              <strong>Request via Email:</strong>{" "}
              {`You may also request data deletion by contacting us at `}
              <a
                href="mailto:work.johnhan@gmail.com"
                className="font-bold underline"
              >
                work.johnhan@gmail.com
              </a>
              {`. We will verify your identity and delete all your personal information from our servers within 7 business days.`}
            </li>
          </ul>
        </div>

        {/* Third Party Access */}
        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Third Party Access
          </h2>
          <p className="mb-4">
            The Application utilizes third-party services that have their own
            Privacy Policies to monitor usage and display advertisements:
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://support.google.com/admob/answer/6128543?hl=ko"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors shadow-sm"
            >
              AdMob Privacy Policy &rarr;
            </a>
          </div>
        </div>

        {/* Data Retention */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Data Retention Policy
          </h2>
          <p>
            {`The Service Provider will retain User Provided data for as long as you use the Application. Once an account is deleted via the app or by request, the data is purged immediately from our active databases, except for information we are legally required to retain.`}
          </p>
        </div>

        {/* Children's Privacy */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Children</h2>
          <p>
            The Service Provider does not knowingly collect data from children
            under the age of 13. If we discover that a child under 13 has
            provided personal information, we will immediately delete it from
            our servers.
          </p>
        </div>

        {/* Security */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Security</h2>
          <p>
            We provide physical, electronic, and procedural safeguards to
            protect the information we process. For instance, all data
            transmitted between the Application and servers is encrypted using
            industry-standard protocols (HTTPS/TLS).
          </p>
        </div>

        {/* Contact Us */}
        <div className="pt-10 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg mb-4">
            If you have any questions or suggestions about this Privacy Policy,
            please contact:
          </p>
          <a
            href="mailto:work.johnhan@gmail.com"
            className="text-2xl font-bold text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4"
          >
            work.johnhan@gmail.com
          </a>
        </div>
      </section>

      <footer className="mt-20 pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
        <p>© 2026 YOHAN HAN. All rights reserved.</p>
        <p className="mt-2">
          This privacy policy was generated for Fine Studio.
        </p>
      </footer>
    </div>
  );
}

import React from "react";

const TermsAndConditions = () => {
  const effectiveDate = "2026-01-28";

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white text-gray-800 leading-relaxed">
      {/* Header */}
      <header className="border-b pb-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Terms & Conditions
        </h1>
        <p className="text-sm text-gray-500">Last Updated: {effectiveDate}</p>
      </header>

      <section className="space-y-8">
        {/* Intro */}
        <div>
          <p>
            {`These terms and conditions apply to the `}
            <span className="font-semibold text-primary">
              Fine Studio (Guitar Tuner, Metronome, Chord Dictonary)
            </span>
            {` app (hereby referred to as "Application") for mobile devices that was created by `}
            <span className="font-semibold">YOHAN HAN</span>
            {` (hereby referred to as "Service Provider") as an Ad Supported service.`}
          </p>
          <p className="mt-4 font-medium text-gray-900">
            Upon downloading or utilizing the Application, you are automatically
            agreeing to the following terms. It is strongly advised that you
            thoroughly read and understand these terms prior to using the
            Application.
          </p>
        </div>

        {/* Intellectual Property */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Intellectual Property Rights
          </h2>
          <p>
            Unauthorized copying, modification of the Application, any part of
            the Application, or our trademarks is strictly prohibited. Any
            attempts to extract the source code, translate the Application into
            other languages, or create derivative versions are not permitted.
            All trademarks, copyrights, and intellectual property rights remain
            the property of the Service Provider.
          </p>
        </div>

        {/* Modifications & Charges */}
        <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Modifications & Service Charges
          </h2>
          <p>
            The Service Provider reserves the right to modify the Application or
            charge for its services at any time. Any charges for the Application
            or its services will be clearly communicated to you.
          </p>
        </div>

        {/* Security & Data */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Security Responsibility
          </h2>
          <p className="mb-4">
            The Application stores and processes personal data to provide the
            Service. It is your responsibility to maintain the security of your
            phone.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-sm text-yellow-800 font-medium">
              ⚠️ Warning: We strongly advise against jailbreaking or rooting
              your phone. Such actions could expose your device to malware,
              compromise security features, and result in the Application not
              functioning correctly.
            </p>
          </div>
        </div>

        {/* Third Party Terms */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Third-Party Services
          </h2>
          <p className="mb-3">
            The Application utilizes third-party services that have their own
            Terms and Conditions:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <a
                href="https://developers.google.com/admob/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                AdMob Terms and Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Internet & Usage */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Internet Connection & Data Usage
          </h2>
          <p>
            Some functions require an active internet connection. The Service
            Provider cannot be held responsible if the Application does not
            function at full capacity due to lack of Wi-Fi or if you have
            exhausted your data allowance. If using the application outside of
            Wi-Fi, you accept responsibility for any data charges from your
            mobile provider.
          </p>
        </div>

        {/* Termination & Updates */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Termination & Updates
          </h2>
          <p>
            The Service Provider may wish to update or cease providing the
            Application at any time. Upon termination: (a) the rights and
            licenses granted to you will end; (b) you must cease using the
            Application and delete it from your device if necessary.
          </p>
        </div>

        {/* Changes to Terms */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Changes to Terms
          </h2>
          <p>
            The Service Provider may periodically update these Terms and
            Conditions. You are advised to review this page regularly for any
            changes.
          </p>
        </div>

        {/* Contact Us */}
        <div className="pt-8 border-t border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h2>
          <p className="mb-2 text-gray-600">
            If you have any questions or suggestions about these Terms and
            Conditions:
          </p>
          <a
            href="mailto:work.johnhan@gmail.com"
            className="text-lg font-semibold text-blue-600 hover:text-blue-800"
          >
            work.johnhan@gmail.com
          </a>
        </div>
      </section>

      <footer className="mt-12 text-center text-xs text-gray-400">
        <p>
          This Terms and Conditions page was generated by App Privacy Policy
          Generator
        </p>
      </footer>
    </div>
  );
};

export default TermsAndConditions;

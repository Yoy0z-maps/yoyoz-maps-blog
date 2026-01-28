export default function PrivacyPage() {
  const lastUpdated = "2026-01-28";

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white text-gray-800 leading-relaxed">
      {/* Header */}
      <header className="border-b pb-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500">Effective Date: {lastUpdated}</p>
      </header>

      <section className="space-y-8">
        {/* Introduction */}
        {/* 텍스트 부분을 아래와 같이 {` `}로 감싸주세요 */}
        <div>
          <p>
            {`This privacy policy applies to the `}
            <span className="font-semibold text-primary">
              Fine Studio (Guitar Tuner, Metronome, Chord Dictonary)
            </span>
            {` app (hereby referred to as "Application") for mobile devices that was created by `}
            <span className="font-semibold">YOHAN HAN</span>
            {` (hereby referred to as "Service Provider") as an Ad Supported service. This service is intended for use "AS IS".`}
          </p>
        </div>

        {/* Information Collection and Use */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Information Collection and Use
          </h2>
          <p className="mb-4">
            The Application collects information when you download and use it.
            This information may include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>{`Your device's Internet Protocol address (e.g. IP address)`}</li>
            <li>
              The pages of the Application that you visit, the time and date of
              your visit, the time spent on those pages
            </li>
            <li>The total time spent on the Application</li>
            <li>The operating system you use on your mobile device</li>
          </ul>
          <p className="mt-4 italic text-sm text-gray-600">
            * The Application does not gather precise information about the
            location of your mobile device.
          </p>
        </div>

        {/* Third Party Access */}
        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Third Party Access
          </h2>
          <p className="mb-4">
            Only aggregated, anonymized data is periodically transmitted to
            external services to aid the Service Provider in improving the
            Application and their service. The Application utilizes third-party
            services that have their own Privacy Policy:
          </p>
          <a
            href="https://support.google.com/admob/answer/6128543?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium inline-flex items-center"
          >
            AdMob Privacy Policy &rarr;
          </a>
        </div>

        {/* Opt-Out Rights */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Opt-Out Rights
          </h2>
          <p>
            You can stop all collection of information by the Application easily
            by uninstalling it. You may use the standard uninstall processes as
            may be available as part of your mobile device or via the mobile
            application marketplace or network.
          </p>
        </div>

        {/* Data Retention */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Data Retention Policy
          </h2>
          <p>
            {`The Service Provider will retain User Provided data for as long as
            you use the Application and for a reasonable time thereafter. If
            you'd like them to delete User Provided Data, please contact us at:`}
            <a
              href="mailto:work.johnhan@gmail.com"
              className="text-blue-600 ml-1"
            >
              work.johnhan@gmail.com
            </a>
          </p>
        </div>

        {/* Children */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Children</h2>
          <p>
            The Service Provider does not use the Application to knowingly
            solicit data from or market to children under the age of 13. In the
            case we discover a child under 13 has provided personal information,
            we will immediately delete this from our servers.
          </p>
        </div>

        {/* Security */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Security</h2>
          <p>
            The Service Provider is concerned about safeguarding the
            confidentiality of your information. We provide physical,
            electronic, and procedural safeguards to protect information we
            process and maintain.
          </p>
        </div>

        {/* Changes */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Changes</h2>
          <p>
            This Privacy Policy may be updated from time to time for any reason.
            You are advised to consult this Privacy Policy regularly for any
            changes, as continued use is deemed approval of all changes.
          </p>
        </div>

        {/* Contact Us */}
        <div className="pt-8 border-t border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h2>
          <p className="mb-2">
            If you have any questions regarding privacy while using the
            Application, please contact the Service Provider via email:
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
          This privacy policy page was generated by App Privacy Policy Generator
        </p>
      </footer>
    </div>
  );
}

import {
  AppPrivacyPage,
  privacyMetadata,
} from "@/components/apps/AppPrivacyPage";
import { apps } from "@/constant/apps";

const app = apps.find((app) => app.slug === "fine-studio")!;
export const metadata = privacyMetadata(app);

export default function PrivacyPage() {
  return (
    <AppPrivacyPage app={app} effectiveDate="2026-01-30" contentLang="en">
      <div>
        <section>
          <div>
            <p>
              {`This privacy policy applies to the `}
              <span>
                Fine Studio (Guitar Tuner, Metronome, Chord Dictionary)
              </span>
              {` application (hereby referred to as "Application") for mobile devices created by `}
              <span>YOHAN HAN</span>
              {` (hereby referred to as "Service Provider"). This service is provided as an Ad Supported service and is intended for use "AS IS".`}
            </p>
          </div>

          <div>
            <h2>Information Collection and Use</h2>
            <p>
              The Application collects certain information to provide a better
              user experience, especially when using features like Google
              Sign-in:
            </p>
            <ul>
              <li>
                <span>Personal Information:</span>
                {` When you use Google Sign-in, we collect your `}
                <span>Name, Email Address, and unique User ID</span>
                {` to provide account-based features and synchronization.`}
              </li>
              <li>
                <span>Usage Data:</span>
                {` Information about how you use the Application, such as pages visited and time spent on the Application.`}
              </li>
              <li>
                <span>Device Information:</span>
                {` Operating system version and basic device identifiers.`}
              </li>
            </ul>
          </div>

          <div>
            <h2>User Data Deletion Rights</h2>
            <p>
              {`We value your privacy and provide clear ways for you to delete your data:`}
            </p>
            <ul>
              <li>
                <strong>In-App Deletion:</strong>{" "}
                {`You can delete your account and all associated data (Name, Email, Usage records) by navigating to the `}
                <span>Settings &gt; Delete Account</span>
                {` menu within the Application.`}
              </li>
              <li>
                <strong>Request via Email:</strong>{" "}
                {`You may also request data deletion by contacting us at `}
                <a href="mailto:work.johnhan@gmail.com">
                  work.johnhan@gmail.com
                </a>
                {`. We will verify your identity and delete all your personal information from our servers within 7 business days.`}
              </li>
            </ul>
          </div>

          <div>
            <h2>Third Party Access</h2>
            <p>
              The Application utilizes third-party services that have their own
              Privacy Policies to monitor usage and display advertisements:
            </p>
            <div>
              <a
                href="https://support.google.com/admob/answer/6128543?hl=ko"
                target="_blank"
                rel="noopener noreferrer"
              >
                AdMob Privacy Policy &rarr;
              </a>
            </div>
          </div>

          <div>
            <h2>Data Retention Policy</h2>
            <p>
              {`The Service Provider will retain User Provided data for as long as you use the Application. Once an account is deleted via the app or by request, the data is purged immediately from our active databases, except for information we are legally required to retain.`}
            </p>
          </div>

          <div>
            <h2>Children</h2>
            <p>
              The Service Provider does not knowingly collect data from children
              under the age of 13. If we discover that a child under 13 has
              provided personal information, we will immediately delete it from
              our servers.
            </p>
          </div>

          <div>
            <h2>Security</h2>
            <p>
              We provide physical, electronic, and procedural safeguards to
              protect the information we process. For instance, all data
              transmitted between the Application and servers is encrypted using
              industry-standard protocols (HTTPS/TLS).
            </p>
          </div>

          <div>
            <h2>Contact Us</h2>
            <p>
              If you have any questions or suggestions about this Privacy
              Policy, please contact:
            </p>
            <a href="mailto:work.johnhan@gmail.com">work.johnhan@gmail.com</a>
          </div>
        </section>
      </div>
    </AppPrivacyPage>
  );
}

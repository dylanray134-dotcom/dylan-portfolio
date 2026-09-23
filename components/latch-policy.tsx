import { PolicyList, PolicySection, policyLinkClass } from "@/components/policy-layout";

export const latchPolicyUrl = "https://latch-lock-dylan.web.app/privacy.html";

export function LatchPolicy() {
  return (
    <>
      <PolicySection id="latch-canonical" title="Live policy">
        <p>
          The policy for the Latch website is published at{" "}
          <a className={policyLinkClass} href={latchPolicyUrl} target="_blank" rel="noopener noreferrer">
            latch-lock-dylan.web.app/privacy.html
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          . The details below match that page.
        </p>
      </PolicySection>

      <PolicySection id="latch-what" title="What Latch does">
        <p>
          Latch creates short original lock-chime sounds on your device. On the website, the sound
          is synthesized in the browser. The chime, the waveform, and the file you download are not
          uploaded.
        </p>
        <p>
          You can play a chime, download a file named LockChime.wav, or download a zip named
          Boombox.zip that contains Boombox/LockChime.wav. Those downloads happen only when you
          choose them. The files stay on your device unless you copy or share them yourself.
        </p>
        <p>No account is required on the web app.</p>
      </PolicySection>

      <PolicySection id="latch-not" title="Information the Latch site does not collect">
        <p>
          The Latch website does not ask you to create an account or sign in. You do not need to
          give a name, email address, phone number, or payment details to use it.
        </p>
        <p>
          It does not collect personal information, location, or usage analytics. It does not
          include advertising. It does not sell personal information or share it with data brokers.
        </p>
        <PolicyList
          items={[
            "No accounts and no login",
            "No analytics, advertising, or tracking pixels",
            "No location access",
            "No upload of the audio you generate",
          ]}
        />
      </PolicySection>

      <PolicySection id="latch-hosting" title="Hosting and fonts on the Latch site">
        <p>
          Latch is a static website served by Firebase Hosting, a Google service. When your browser
          loads a page, Google receives ordinary connection data needed to deliver it, such as IP
          address, browser type, and the address requested, and may keep standard server logs for
          security and operations. Latch does not use Firebase Analytics, Google Analytics, or ads,
          and does not use those logs to build a profile of you.
        </p>
        <p>
          The typefaces on the Latch site are loaded from Google Fonts. Your browser requests those
          font files from Google.
        </p>
      </PolicySection>

      <PolicySection id="latch-cookies" title="Cookies and storage on the Latch site">
        <p>
          Latch does not set cookies and does not use browser storage to remember or track you.
          Playback uses a temporary link to the audio file your browser just created. That link is
          discarded when you generate a new sound or leave the page.
        </p>
      </PolicySection>

      <PolicySection id="latch-children" title="Children">
        <p>
          Latch is a general-audience tool. It is not directed at children, and it does not
          knowingly collect personal information from anyone, including children under 13.
        </p>
      </PolicySection>

      <PolicySection id="latch-choices" title="Your choices">
        <p>
          Because Latch does not collect an account or a profile, there is no personal information
          held by Latch to provide, correct, or delete. You can stop using the site at any time.
          Files you downloaded can be deleted from your own device.
        </p>
        <p>
          If you email about Latch, that message is used only to reply. Please avoid sending
          sensitive personal information.
        </p>
      </PolicySection>

      <PolicySection id="latch-changes" title="Changes to the Latch policy">
        <p>
          If the Latch policy changes, the updated version is posted on the live policy page with a
          new date. This portfolio copy is written to match that page.
        </p>
      </PolicySection>
    </>
  );
}

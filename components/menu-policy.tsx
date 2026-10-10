import { PolicySection } from "@/components/policy-layout";

export function MenuPolicy() {
  return (
    <>
      <PolicySection id="menu-what" title="What Menu App does">
        <p>This policy describes Menu App TestFlight 1.0.0 (2).</p>
        <p>
          Menu App reads a paper menu from your camera or photo library and turns it into a
          browsable picture menu. Each dish gets a card with a photo, its price, and a description.
        </p>
        <p>
          It is a native iOS 26 app. It reads and organizes the menu on the device. This portfolio
          website does not collect menu photos or menu text.
        </p>
      </PolicySection>

      <PolicySection id="menu-photos" title="Menu photos and text">
        <p>
          Menu photos, and the text read from them, are processed on the device. Photos are never
          uploaded.
        </p>
      </PolicySection>

      <PolicySection id="menu-saved" title="Saved menus">
        <p>Saved menus and dish images are stored only on the device.</p>
        <p>Deleting a menu in the app removes that menu and its images from the phone.</p>
        <p>Deleting the app removes them too.</p>
      </PolicySection>

      <PolicySection id="menu-camera" title="Camera and Photos">
        <p>Camera and Photos access are used only to capture the menu.</p>
      </PolicySection>

      <PolicySection id="menu-not" title="What current builds send">
        <p>Current builds send nothing off the phone.</p>
        <p>There is no account or sign-in. There are no analytics, no ads, and no third-party SDKs.</p>
      </PolicySection>

      <PolicySection id="menu-planned" title="Planned: dish image generation (not yet active)">
        <p>This feature is not turned on in TestFlight 1.0.0 (2).</p>
        <p>
          When dish image generation is turned on, the app will send each dish’s name, description,
          and cuisine as text to the developer’s server. That server asks a third-party AI image
          service to create a picture. Only that text is sent, never photos or personal information.
        </p>
        <p>This policy will be updated when this goes live.</p>
      </PolicySection>
    </>
  );
}

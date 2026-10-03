import { PolicyList, PolicySection } from "@/components/policy-layout";

export function FinancePolicy() {
  return (
    <>
      <PolicySection id="finance-what" title="What Finance does">
        <p>This policy describes Finance TestFlight 1.0 (1).</p>
        <p>
          Finance is a native iPhone app for one person’s ledger. It shows account balances,
          transactions, monthly budgets, and repeating charges.
        </p>
        <p>
          If the store is empty at launch, the app writes a fictional sample ledger so the screens
          are not blank. That sample is not your banks.
        </p>
        <p>This portfolio website does not collect finance data.</p>
      </PolicySection>

      <PolicySection id="finance-stored" title="Information stored with the ledger">
        <p>On the phone, the ledger can hold:</p>
        <PolicyList
          items={[
            "Account name, an institution label, a last-four mask, account type, balance, and credit limit",
            "Transactions: merchant, amount, date, category, memo, and tags",
            "Monthly category budgets",
            "Subscriptions: merchant, amount, cadence, status, renewal, and notes",
            "Spending suggestions calculated on the device from the ledger",
          ]}
        />
        <p>
          CSV import reads a statement file on the device and turns it into ledger rows. The file
          is not uploaded.
        </p>
      </PolicySection>

      <PolicySection id="finance-icloud" title="iCloud">
        <p>
          The app tries to mirror that ledger into your private iCloud database. If iCloud does not
          attach, Finance keeps a separate copy on the phone. It does not delete that copy.
        </p>
        <p>
          This build does not promise that the mirror completes. The ledger may stay on the phone
          only.
        </p>
        <p>
          If a copy does land in iCloud, Apple holds it under your Apple ID. Dylan Womack does not
          operate that database.
        </p>
      </PolicySection>

      <PolicySection id="finance-not" title="What this build does not do">
        <p>There is no Finance account server. The ledger is not sent to Google.</p>
        <p>This build does not send bank data anywhere. It does not link a bank.</p>
        <p>
          Settings may show a Google button. This build has no working Google sign-in. It does not
          create an account.
        </p>
        <p>
          Finance does not use ads, tracking, or analytics. It does not use location, contacts, the
          camera, photos, or the microphone.
        </p>
        <p>
          Spending suggestions are calculated on the device. They are not sent to an AI service.
        </p>
        <p>
          A background mode for remote notifications is for iCloud. It is not used for marketing
          pushes.
        </p>
      </PolicySection>

      <PolicySection id="finance-children" title="Children">
        <p>
          Finance is not made for children. It does not ask for age. It does not knowingly collect
          personal information from children.
        </p>
      </PolicySection>

      <PolicySection id="finance-delete" title="Deleting data">
        <p>There is no erase-all button. Deleting the app removes the on-device store.</p>
        <p>
          If any ledger rows were copied to the private iCloud database, deleting the app does not
          wipe those. You can remove the app’s iCloud data in iOS Settings.
        </p>
      </PolicySection>
    </>
  );
}

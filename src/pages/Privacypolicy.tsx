import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

const PrivacyPolicy = () => {
  return (
    <>
    <Navbar/>
    <div className=" pt-30 min-h-screen  text-[var(--color-text)] pb-20 px-5 md:px-20">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-[var(--color-primary)] mb-4">
          Privacy Policy
        </h1>
        <p className="text-[var(--color-text)] mb-6">
          Welcome to our Privacy Policy page. Your privacy is critically important to us.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-medium text-[var(--color-secondary)] mb-2">
            Information We Collect
          </h2>
          <p className="text-[var(--color-text)]">
            We collect personal information such as name, email, and contact details when you interact with our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-medium text-[var(--color-secondary)] mb-2">
            How We Use Your Information
          </h2>
          <p className="text-[var(--color-text)]">
            Your information helps us personalize user experience, improve our services, and communicate updates.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-medium text-[var(--color-secondary)] mb-2">
            Data Protection
          </h2>
          <p className="text-[var(--color-text)]">
            We take security measures to protect your data from unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-medium text-[var(--color-secondary)] mb-2">
            Cookies & Tracking
          </h2>
          <p className="text-[var(--color-text)]">
            We use cookies to enhance user experience. You can disable cookies in your browser settings.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-medium text-[var(--color-secondary)] mb-2">
            Third-Party Services
          </h2>
          <p className="text-[var(--color-text)]">
            We may share limited data with third-party partners to improve our services while ensuring strict confidentiality.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-medium text-[var(--color-secondary)] mb-2">
            Changes to Policy
          </h2>
          <p className="text-[var(--color-text)]">
            We reserve the right to update this policy at any time. Users will be notified of significant changes.
          </p>
        </section>

        <p className="text-sm text-[var(--color-accent)]">
          If you have any questions, feel free to contact us.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;

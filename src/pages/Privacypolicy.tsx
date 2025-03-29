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
            We collect personal information such as name, email, phone number, and contact details when you interact with our services. Additionally, we may collect non-personal data such as your IP address, browser type, and device information to enhance your experience.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-medium text-[var(--color-secondary)] mb-2">
            How We Use Your Information
          </h2>
          <p className="text-[var(--color-text)]">
            Your information helps us personalize your experience on our platform by providing relevant property listings, recommendations, and targeted marketing. We also use your data to improve our services, respond to inquiries, and send updates about new listings, offers, or changes to our policies.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-medium text-[var(--color-secondary)] mb-2">
            Data Protection
          </h2>
          <p className="text-[var(--color-text)]">
            We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. This includes encryption, secure data storage, and restricted access to sensitive data. However, while we take strong precautions, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-medium text-[var(--color-secondary)] mb-2">
            Cookies & Tracking
          </h2>
          <p className="text-[var(--color-text)]">
            We use cookies and tracking technologies to analyze website traffic, enhance your browsing experience, and provide personalized content. You can manage cookie preferences in your browser settings, but disabling them may affect the functionality of certain features on our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-medium text-[var(--color-secondary)] mb-2">
            Third-Party Services
          </h2>
          <p className="text-[var(--color-text)]">
            We may share limited data with third-party partners, including analytics providers and advertising networks, to improve our services. These partners are bound by confidentiality agreements and are prohibited from using your data for unauthorized purposes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-medium text-[var(--color-secondary)] mb-2">
            Changes to Policy
          </h2>
          <p className="text-[var(--color-text)]">
            We reserve the right to update this privacy policy at any time to reflect changes in legal requirements or our business practices. We will notify users of significant changes via email or website announcements. Continued use of our services after modifications constitutes acceptance of the revised policy.
          </p>
        </section>

        <p className="text-sm text-[var(--color-accent)]">
          If you have any questions or concerns about our privacy practices, feel free to contact us.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};



export default PrivacyPolicy;
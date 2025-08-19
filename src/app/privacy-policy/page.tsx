import React from "react";
import Head from "next/head";
import Link from "next/link";
import { HiOutlineShieldCheck, HiOutlineMail, HiOutlineDocumentText, HiOutlineClock, HiOutlineGlobe, HiOutlineTrash } from 'react-icons/hi';

export default function PrivacyPolicy() {
  const effectiveDate = 'August 19, 2025';

  return (
    <>
      <Head>
        <title>Privacy Policy — Code Mantra Technologies</title>
        <meta name="description" content="Code Mantra Technologies Privacy Policy — how we collect, use and protect your personal information when you use our website." />
        <meta name="keywords" content="privacy policy, data protection, cookie policy, Code Mantra, user data" />
        <link rel="canonical" href="https://www.mycodemantra.com/privacy-policy" />

        <meta property="og:title" content="Privacy Policy — Code Mantra Technologies" />
        <meta property="og:description" content="Learn how Code Mantra Technologies collects, uses, and protects your personal information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mycodemantra.com/privacy-policy" />
        <meta property="og:image" content="https://www.mycodemantra.com/images/og-privacy.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Code Mantra Technologies",
          "url": "https://www.mycodemantra.com",
          "logo": "https://www.mycodemantra.com/images/logo.png",
          "contactPoint": [{
            "@type": "ContactPoint",
            "telephone": "+91 0000000000",
            "contactType": "customer support",
            "email": "privacy@mycodemantra.com"
          }]
        }) }} />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-4">

          {/* Hero */}
          <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-3xl p-8 md:p-12 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <div className="inline-block bg-white/10 px-3 py-1 rounded-full text-sm font-medium mb-4">Privacy &amp; Security</div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">Privacy Policy — Code Mantra Technologies</h1>
                <p className="text-base md:text-lg text-white leading-relaxed mb-6">This page explains how we collect, use, share, and protect your information when you visit or use our services. Your trust matters — below is everything you need to know.</p>
                <div className="flex gap-3 flex-wrap">
                  <Link href="/" className="inline-block bg-transparent border border-white text-white px-5 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition" aria-label="Return to Home">Return to Home</Link>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center text-blue-600">
                      <HiOutlineShieldCheck className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Effective Date</div>
                      <div className="font-semibold text-gray-900">{effectiveDate}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 border border-gray-100 rounded-lg">
                      <div className="text-xs text-gray-500">Data Controller</div>
                      <div className="font-medium text-gray-800">Code Mantra Technologies</div>
                    </div>
                    <div className="p-3 border border-gray-100 rounded-lg">
                      <div className="text-xs text-gray-500">Contact</div>
                      <div className="font-medium text-gray-800">codemantratechnologies@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column - main content */}
            <main className="lg:col-span-2 space-y-8">

              <article className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold mb-3 text-gray-900">1. Information We Collect</h2>
                <p className="text-gray-800 leading-relaxed mb-4">We collect information you provide directly and information collected automatically when you use our website or contact us.</p>
                <ul className="list-disc pl-6 text-gray-800 space-y-2">
                  <li><strong>Personal information:</strong> name, email, phone, company details submitted via forms or email.</li>
                  <li><strong>Communications:</strong> messages, feedback, and support requests.</li>
                  <li><strong>Usage data:</strong> pages visited, device and browser details, IP address and session data via cookies and analytics.</li>
                </ul>
              </article>

              <article className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold mb-3 text-gray-900">2. How We Use Your Information</h2>
                <p className="text-gray-800 leading-relaxed mb-4">We use the information we collect for these purposes:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border border-gray-100">
                    <div className="flex items-center gap-3 mb-2"><HiOutlineMail className="w-5 h-5 text-blue-600" /><div className="font-semibold text-gray-900">Respond &amp; Support</div></div>
                    <div className="text-sm text-gray-700">To reply to inquiries, provide support, and fulfill service requests.</div>
                  </div>

                  <div className="p-4 rounded-lg border border-gray-100">
                    <div className="flex items-center gap-3 mb-2"><HiOutlineDocumentText className="w-5 h-5 text-blue-600" /><div className="font-semibold text-gray-900">Service Delivery</div></div>
                    <div className="text-sm text-gray-700">To deliver services like proposals, contracts, and project work.</div>
                  </div>

                  <div className="p-4 rounded-lg border border-gray-100">
                    <div className="flex items-center gap-3 mb-2"><HiOutlineClock className="w-5 h-5 text-blue-600" /><div className="font-semibold text-gray-900">Improve Experience</div></div>
                    <div className="text-sm text-gray-700">To analyze and enhance our website and offerings.</div>
                  </div>

                  <div className="p-4 rounded-lg border border-gray-100">
                    <div className="flex items-center gap-3 mb-2"><HiOutlineGlobe className="w-5 h-5 text-blue-600" /><div className="font-semibold text-gray-900">Legal &amp; Safety</div></div>
                    <div className="text-sm text-gray-700">To detect, prevent and address fraud, security, or legal issues.</div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-600">We do not sell or rent your personal information to third parties.</p>
              </article>

              <article className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold mb-3 text-gray-900">3. Cookies &amp; Analytics</h2>
                <p className="text-gray-800 leading-relaxed mb-3">We use cookies and analytics tools (for example Google Analytics) to understand site usage and improve performance. Cookies can be managed via your browser; disabling certain cookies may affect functionality.</p>
                <ul className="list-disc pl-6 text-gray-800 space-y-2">
                  <li>Session cookies for basic site functionality.</li>
                  <li>Analytics cookies to measure traffic and behaviour.</li>
                  <li>Preference cookies to remember settings when you return.</li>
                </ul>
              </article>

              <article className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold mb-3 text-gray-900">4. Third-Party Services</h2>
                <p className="text-gray-800">We use trusted service providers (hosting, analytics, payment processors) who may process data on our behalf. These providers have their own privacy policies; we encourage you to review them.</p>
              </article>

              <article className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold mb-3 text-gray-900">5. Data Security &amp; Retention</h2>
                <p className="text-gray-800 mb-3">We implement reasonable technical and organizational measures to protect data. However, no method of transmission is 100% secure.</p>
                <p className="text-gray-800">We retain personal data only as long as necessary to provide services, meet legal obligations, or as described when the data is collected. Unneeded data is deleted or anonymized.</p>
              </article>

              <article className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold mb-3 text-gray-900">6. Your Rights</h2>
                <p className="text-gray-800 mb-3">You have rights regarding your personal data, which may include access, correction, deletion, restriction or portability depending on applicable laws.</p>
                <p className="text-sm text-gray-700">To exercise these rights, contact us at <a href="mailto:privacy@mycodemantra.com" className="text-blue-600 font-medium">privacy@mycodemantra.com</a>.</p>
              </article>

              <article className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold mb-3 text-gray-900">7. Children’s Privacy</h2>
                <p className="text-gray-800">Our website is not intended for children under 13. We do not knowingly collect data from children. If you believe we have collected such data, please contact us to request deletion.</p>
              </article>

              <article className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold mb-3 text-gray-900">8. International Transfers</h2>
                <p className="text-gray-800">Personal data may be transferred to servers outside your country. We take steps to ensure appropriate safeguards when transfers occur.</p>
              </article>

              <article className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold mb-3 text-gray-900">9. Changes to This Policy</h2>
                <p className="text-gray-800">We may update this policy. Significant changes will be noted on this page and the effective date will be revised.</p>
              </article>

            </main>

            {/* Right column — quick actions */}
            <aside className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3"><HiOutlineMail className="w-5 h-5 text-blue-600" /><div className="font-semibold text-gray-900">Need Help?</div></div>
                <p className="text-sm text-gray-700 mb-4">Email our privacy team for any requests or concerns.</p>
                <a href="mailto:privacy@mycodemantra.com" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">Email Privacy Team</a>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3"><HiOutlineTrash className="w-5 h-5 text-blue-600" /><div className="font-semibold text-gray-900">Request Data Deletion</div></div>
                <p className="text-sm text-gray-700 mb-4">To request deletion of your personal data, contact us and include proof of identity.</p>
                <a href="mailto:privacy@mycodemantra.com?subject=Data Deletion Request" className="inline-block bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-medium">Request Deletion</a>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3"><HiOutlineDocumentText className="w-5 h-5 text-blue-600" /><div className="font-semibold text-gray-900">Policy Snapshot</div></div>
                <p className="text-sm text-gray-700 mb-4">Download a printable version of this policy.</p>
                <a href="/privacy-policy.pdf" className="inline-block bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium">Download PDF</a>
              </div>
            </aside>
          </div>

          {/* Footer CTA */}
          <section className="mt-12 bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Questions about this policy?</h3>
            <p className="mb-4">Contact our privacy team at <a href="mailto:codemantratechnologies@gmail.com" className="font-semibold underline">privacy@mycodemantra.com</a>.</p>
            <a href="/contact" className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold">Get in Touch</a>
          </section>

        </div>
      </div>
    </>
  );
}

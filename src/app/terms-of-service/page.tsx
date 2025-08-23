import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Learniva AI',
  description: 'Terms of Service for Learniva AI - Learn about the terms and conditions for using our AI-powered learning platform.',
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black overflow-hidden">
      <div className="w-[80vw] max-w-5xl mx-auto pt-28 pb-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900 dark:text-white mb-3">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div className="simple-card simple-glow rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. Acceptance of Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                By accessing and using Learniva AI ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. Description of Service</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Learniva AI provides an artificial intelligence-powered learning platform that offers personalized educational content, adaptive learning experiences, and knowledge management tools for individuals and organizations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. User Accounts</h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  To access certain features of the Service, you must create an account. You are responsible for:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Providing accurate and complete information</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. Acceptable Use</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to the Service</li>
                <li>Interfere with the proper functioning of the Service</li>
                <li>Use the Service for commercial purposes without authorization</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. AI-Generated Content</h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Our Service utilizes artificial intelligence to generate and personalize content. You acknowledge that:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>AI-generated content may not always be accurate or complete</li>
                  <li>You should verify important information from multiple sources</li>
                  <li>We are not responsible for decisions made based on AI-generated content</li>
                  <li>AI content is provided for educational purposes only</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">6. Privacy and Data Protection</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices regarding the collection and use of your information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">7. Intellectual Property</h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  The Service and its original content, features, and functionality are owned by Learniva AI and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  You retain ownership of content you submit, but grant us a license to use, modify, and display such content in connection with the Service.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">8. Subscription and Payment</h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Some features of the Service may require a paid subscription. By subscribing, you agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Pay all applicable fees in advance</li>
                  <li>Provide accurate billing information</li>
                  <li>Authorize recurring charges for subscription renewals</li>
                  <li>Cancel subscriptions according to our cancellation policy</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">9. Limitation of Liability</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                To the maximum extent permitted by law, Learniva AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">10. Termination</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">11. Changes to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">12. Governing Law</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which Learniva AI operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">13. Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
                             <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                 <p className="text-gray-700 dark:text-gray-300">
                   <strong>Email:</strong> legal@learniva.ai<br />
                   <strong>Address:</strong> Lusaka, Zambia<br />
                   <strong>Phone:</strong> +260 955 123 456
                 </p>
               </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

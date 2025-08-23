import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Learniva AI',
  description: 'Privacy Policy for Learniva AI - Learn how we collect, use, and protect your personal information on our AI-powered learning platform.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black overflow-hidden">
      <div className="w-[80vw] max-w-5xl mx-auto pt-28 pb-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900 dark:text-white mb-3">
            Privacy Policy
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Learniva AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered learning platform and related services.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                By using our Service, you consent to the data practices described in this policy. If you do not agree with our policies and practices, please do not use our Service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">2.1 Personal Information</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We may collect personal information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
                <li>Name and contact information (email address, phone number)</li>
                <li>Account credentials and profile information</li>
                <li>Payment and billing information</li>
                <li>Educational background and preferences</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">2.2 Usage Information</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We automatically collect certain information about your use of our Service:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
                <li>Log data (IP address, browser type, access times)</li>
                <li>Device information (device type, operating system)</li>
                <li>Usage patterns and learning progress</li>
                <li>Interactions with AI features and content</li>
                <li>Performance and analytics data</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">2.3 AI-Generated Data</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our AI systems may generate and store data related to your learning patterns, preferences, and interactions to improve the personalized learning experience.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. How We Use Your Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Providing and maintaining our Service</li>
                <li>Personalizing your learning experience</li>
                <li>Processing payments and managing subscriptions</li>
                <li>Communicating with you about our Service</li>
                <li>Improving our AI algorithms and platform</li>
                <li>Ensuring security and preventing fraud</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. AI and Machine Learning</h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Our Service uses artificial intelligence and machine learning to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                  <li>Analyze your learning patterns and preferences</li>
                  <li>Generate personalized content and recommendations</li>
                  <li>Adapt the learning experience to your needs</li>
                  <li>Improve our AI models and algorithms</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300">
                  This may involve processing your data to train and improve our AI systems while maintaining your privacy and data security.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our platform</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, your information may be transferred</li>
                <li><strong>Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">6. Data Security</h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  We implement appropriate technical and organizational security measures to protect your personal information, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Secure data storage and backup procedures</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300">
                  However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">7. Data Retention</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We retain your personal information for as long as necessary to provide our Service and fulfill the purposes outlined in this Privacy Policy. We may retain certain information for longer periods to comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">8. Your Rights and Choices</h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                  <li><strong>Opt-out:</strong> Opt out of certain data processing activities</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">9. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and provide personalized content. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">10. International Data Transfers</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">11. Children's Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">12. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">13. Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Email:</strong> privacy@learniva.ai<br />
                  <strong>Address:</strong> Lusaka, Zambia<br />
                  <strong>Phone:</strong> +260 955 123 456<br />
                  <strong>Data Protection Officer:</strong> dpo@learniva.ai
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

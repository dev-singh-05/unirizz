import Link from "next/link"
import { Metadata } from "next"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Terms of Service - UniRizz",
    description: "UniRizz Terms of Service - Read our terms and conditions for using the app.",
}

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <div className="bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/10 py-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <Link href="/">
                        <Button variant="ghost" className="mb-6 -ml-2 text-foreground/70 hover:text-foreground">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Terms of <span className="text-primary">Service</span>
                    </h1>
                    <p className="text-lg text-foreground/70">
                        Last updated: November 29, 2024
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto max-w-4xl px-4 py-16">
                <div className="prose prose-lg dark:prose-invert max-w-none">

                    {/* Section 1 */}
                    <section className="mb-12 pb-8 border-b border-border">
                        <h2 className="text-2xl font-bold text-foreground mb-6">1. Acceptance of Terms</h2>
                        <p className="text-foreground/80">
                            By accessing or using the UniRizz mobile application (&quot;App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;).
                            If you do not agree to these Terms, do not use the App.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">2. Eligibility</h2>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Age Requirement</h3>
                        <p className="text-foreground/80">
                            You must be at least <strong>18 years old</strong> to use UniRizz. By using the App, you represent and warrant that you are 18 years of age or older.
                        </p>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">College Affiliation</h3>
                        <p className="text-foreground/80 mb-4">UniRizz is exclusively for verified college students. You must:</p>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Have a valid college email address</li>
                            <li>Provide valid verification documents (college ID and fee receipt)</li>
                            <li>Be currently enrolled in a participating college/university</li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">3. Account Registration</h2>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Account Creation</h3>
                        <p className="text-foreground/80 mb-4">To use UniRizz, you must:</p>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Provide accurate and complete information</li>
                            <li>Maintain the security of your account credentials</li>
                            <li>Notify us immediately of any unauthorized access</li>
                            <li>Accept responsibility for all activities under your account</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Verification</h3>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>All accounts require verification through college email and documents</li>
                            <li>Providing false information may result in immediate account termination</li>
                            <li>We reserve the right to request additional verification at any time</li>
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">4. User Conduct</h2>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Prohibited Activities</h3>
                        <p className="text-foreground/80 mb-4">You agree <strong>NOT</strong> to:</p>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Harass, bully, or threaten other users</li>
                            <li>Post offensive, explicit, or inappropriate content</li>
                            <li>Impersonate others or create fake profiles</li>
                            <li>Share personal contact information publicly (phone numbers, addresses)</li>
                            <li>Spam, advertise, or solicit other users</li>
                            <li>Use the App for commercial purposes without permission</li>
                            <li>Attempt to hack, reverse engineer, or compromise the App</li>
                            <li>Create multiple accounts</li>
                            <li>Share your account with others</li>
                            <li>Use automated tools or bots</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Content Guidelines</h3>
                        <p className="text-foreground/80 mb-4">All content you post must:</p>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Comply with applicable laws</li>
                            <li>Respect others&apos; rights and dignity</li>
                            <li>Be appropriate for a college community</li>
                            <li>Not contain hate speech, violence, or illegal content</li>
                            <li>Not infringe on intellectual property rights</li>
                        </ul>
                    </section>

                    {/* Section 5 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">5. Dating Features</h2>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Matching and Communication</h3>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Matches are based on your preferences and profile information</li>
                            <li>You control your profile visibility through category selection</li>
                            <li>Revealing your identity is optional in certain dating categories</li>
                            <li>You can unmatch or block users at any time</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Surprise Questions</h3>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Surprise questions cost tokens</li>
                            <li>Tokens are non-refundable once used</li>
                            <li>You must answer received surprise questions to continue chatting</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Safety</h3>
                        <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20 mt-4">
                            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                                <li>We are not responsible for offline meetings or interactions</li>
                                <li>Always meet in public places and inform someone of your plans</li>
                                <li>Report suspicious or inappropriate behavior immediately</li>
                                <li>Use the block and report features as needed</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">6. Clubs Features</h2>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Club Membership</h3>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>You can join clubs based on your interests</li>
                            <li>Club admins have the right to remove members for violations</li>
                            <li>You are responsible for your posts and comments in clubs</li>
                            <li>Club content must follow our community guidelines</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Club Administration</h3>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Club admins must moderate content appropriately</li>
                            <li>Admins cannot discriminate or abuse their position</li>
                            <li>We reserve the right to remove clubs that violate these Terms</li>
                        </ul>
                    </section>

                    {/* Section 7 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">7. Ratings System</h2>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Giving Ratings</h3>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Ratings must be honest and based on genuine interactions</li>
                            <li>Ratings are anonymous unless you choose to reveal</li>
                            <li>Abusive or retaliatory ratings are prohibited</li>
                            <li>We may remove ratings that violate our guidelines</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Receiving Ratings</h3>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>You cannot dispute individual ratings</li>
                            <li>Ratings are aggregated to protect privacy</li>
                            <li>Consistently low ratings may affect your account standing</li>
                        </ul>
                    </section>

                    {/* Section 8 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">8. Campus Snaps</h2>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Posting Snaps</h3>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Snaps must be appropriate for all audiences</li>
                            <li>You own the content you post but grant us license to display it</li>
                            <li>Do not post content you don&apos;t have rights to</li>
                            <li>Snaps may be removed if they violate guidelines</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Snap Moderation</h3>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>We reserve the right to remove inappropriate snaps</li>
                            <li>Repeated violations may result in feature suspension</li>
                        </ul>
                    </section>

                    {/* Section 9 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">9. Tokens and Payments</h2>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Token System</h3>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Tokens are virtual currency used for premium features</li>
                            <li>Tokens can be purchased through in-app purchases</li>
                            <li>Tokens are non-refundable and non-transferable</li>
                            <li>Token balances do not expire while your account is active</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Pricing</h3>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Token prices are displayed in the app</li>
                            <li>Prices may change with notice</li>
                            <li>All sales are final</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Refunds</h3>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Tokens are generally non-refundable</li>
                            <li>Refunds may be granted at our discretion for technical errors</li>
                            <li>Contact support for refund requests</li>
                        </ul>
                    </section>

                    {/* Section 10 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">10. Intellectual Property</h2>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Our Rights</h3>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>UniRizz, its logo, and all app content are our property</li>
                            <li>You may not use our trademarks without permission</li>
                            <li>The App is protected by copyright and other laws</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Your Content</h3>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>You retain ownership of content you post</li>
                            <li>You grant us a worldwide, non-exclusive license to use, display, and distribute your content</li>
                            <li>You represent that you have rights to all content you post</li>
                            <li>We may use your content for promotional purposes</li>
                        </ul>
                    </section>

                    {/* Section 11 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">11. Privacy</h2>
                        <p className="text-foreground/80">
                            Your privacy is important to us. Please review our{" "}
                            <Link href="/privacy-policy" className="text-primary hover:underline">
                                Privacy Policy
                            </Link>{" "}
                            to understand how we collect, use, and protect your information.
                        </p>
                    </section>

                    {/* Section 12 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">12. Content Moderation</h2>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Our Rights</h3>
                        <p className="text-foreground/80 mb-4">We reserve the right to:</p>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Monitor and review user content</li>
                            <li>Remove content that violates these Terms</li>
                            <li>Suspend or terminate accounts for violations</li>
                            <li>Report illegal activity to authorities</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">User Reports</h3>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>You can report inappropriate content or behavior</li>
                            <li>We will investigate reports promptly</li>
                            <li>False reports may result in penalties</li>
                        </ul>
                    </section>

                    {/* Section 13 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">13. Account Suspension and Termination</h2>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">By You</h3>
                        <p className="text-foreground/80">You may delete your account at any time through the app settings.</p>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">By Us</h3>
                        <p className="text-foreground/80 mb-4">We may suspend or terminate your account if you:</p>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Violate these Terms</li>
                            <li>Engage in prohibited activities</li>
                            <li>Receive multiple user reports</li>
                            <li>Provide false information</li>
                            <li>Engage in illegal activities</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Effects of Termination</h3>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>You lose access to your account and content</li>
                            <li>Unused tokens are forfeited</li>
                            <li>Some data may be retained for legal compliance</li>
                        </ul>
                    </section>

                    {/* Section 14 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">14. Disclaimers</h2>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Service Availability</h3>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>The App is provided &quot;as is&quot; without warranties</li>
                            <li>We do not guarantee uninterrupted or error-free service</li>
                            <li>Features may change or be discontinued at any time</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">User Interactions</h3>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>We are not responsible for user conduct or interactions</li>
                            <li>We do not verify all user information</li>
                            <li>We do not guarantee matches or results</li>
                            <li>You use the App at your own risk</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Third-Party Services</h3>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>We use third-party services (Supabase, Cloudinary, Expo)</li>
                            <li>We are not responsible for third-party service failures</li>
                            <li>Third-party terms may apply</li>
                        </ul>
                    </section>

                    {/* Section 15 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">15. Limitation of Liability</h2>
                        <p className="text-foreground/80 mb-4">To the maximum extent permitted by law:</p>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>We are not liable for indirect, incidental, or consequential damages</li>
                            <li>Our total liability is limited to the amount you paid us in the past 12 months</li>
                            <li>We are not liable for user conduct, content, or interactions</li>
                            <li>We are not liable for data loss or security breaches beyond our control</li>
                        </ul>
                    </section>

                    {/* Section 16 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">16. Indemnification</h2>
                        <p className="text-foreground/80 mb-4">You agree to indemnify and hold us harmless from claims, damages, and expenses arising from:</p>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Your use of the App</li>
                            <li>Your violation of these Terms</li>
                            <li>Your violation of others&apos; rights</li>
                            <li>Your content</li>
                        </ul>
                    </section>

                    {/* Section 17 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">17. Dispute Resolution</h2>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Governing Law</h3>
                        <p className="text-foreground/80">
                            These Terms are governed by the laws of India, without regard to conflict of law principles.
                        </p>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Jurisdiction</h3>
                        <p className="text-foreground/80">
                            Any disputes shall be resolved in the courts of Indore, Madhya Pradesh, India.
                        </p>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Arbitration</h3>
                        <p className="text-foreground/80">
                            For disputes under ₹1,00,000, you agree to binding arbitration before litigation.
                        </p>
                    </section>

                    {/* Section 18 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">18. Changes to Terms</h2>
                        <p className="text-foreground/80 mb-4">We may update these Terms at any time. We will notify you of significant changes via:</p>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>In-app notification</li>
                            <li>Email to your registered address</li>
                            <li>Notice on app launch</li>
                        </ul>
                        <p className="text-foreground/80 mt-4">
                            Continued use after changes constitutes acceptance of updated Terms.
                        </p>
                    </section>

                    {/* Section 19 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">19. Contact Information</h2>
                        <p className="text-foreground/80 mb-4">For questions about these Terms, contact us:</p>
                        <div className="p-6 bg-card rounded-lg border border-border">
                            <p className="text-foreground/80 mb-2">
                                <strong>Email:</strong>{" "}
                                <a href="mailto:support@unirizz.com" className="text-primary hover:underline">
                                    support@unirizz.com
                                </a>
                            </p>
                            <p className="text-foreground/80">
                                <strong>Address:</strong> MediCaps University, Indore, Madhya Pradesh, India
                            </p>
                        </div>
                    </section>

                    {/* Sections 20-23 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">20. Severability</h2>
                        <p className="text-foreground/80">
                            If any provision of these Terms is found invalid, the remaining provisions remain in effect.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-6">21. Entire Agreement</h2>
                        <p className="text-foreground/80">
                            These Terms, along with our Privacy Policy, constitute the entire agreement between you and UniRizz.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-6">22. No Waiver</h2>
                        <p className="text-foreground/80">
                            Our failure to enforce any right or provision does not constitute a waiver of that right.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-6">23. Assignment</h2>
                        <p className="text-foreground/80">
                            You may not assign these Terms. We may assign our rights and obligations to any party.
                        </p>
                    </section>

                    {/* Section 24 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">24. Community Guidelines</h2>

                        <div className="grid md:grid-cols-2 gap-6 mt-4">
                            <div className="p-4 bg-card rounded-lg border border-border">
                                <h4 className="font-semibold text-foreground mb-3">Respect and Safety</h4>
                                <ul className="text-sm text-foreground/80 space-y-1">
                                    <li>• Treat all users with respect</li>
                                    <li>• No harassment, bullying, or hate speech</li>
                                    <li>• No sexually explicit content</li>
                                    <li>• No violence or threats</li>
                                    <li>• No illegal activities</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-card rounded-lg border border-border">
                                <h4 className="font-semibold text-foreground mb-3">Authenticity</h4>
                                <ul className="text-sm text-foreground/80 space-y-1">
                                    <li>• Use your real information</li>
                                    <li>• One account per person</li>
                                    <li>• No impersonation</li>
                                    <li>• Honest representation</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-card rounded-lg border border-border">
                                <h4 className="font-semibold text-foreground mb-3">Privacy</h4>
                                <ul className="text-sm text-foreground/80 space-y-1">
                                    <li>• Respect others&apos; privacy</li>
                                    <li>• Do not share others&apos; personal information</li>
                                    <li>• Do not screenshot or share private conversations without consent</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-card rounded-lg border border-border">
                                <h4 className="font-semibold text-foreground mb-3">Reporting</h4>
                                <ul className="text-sm text-foreground/80 space-y-1">
                                    <li>• Report violations immediately</li>
                                    <li>• Provide accurate information in reports</li>
                                    <li>• Do not abuse the reporting system</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 25 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">25. Special Provisions for Dating</h2>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Consent and Respect</h3>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>All interactions must be consensual</li>
                            <li>Respect boundaries and preferences</li>
                            <li>No means no – respect rejections</li>
                            <li>Do not pressure others</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Safety Tips</h3>
                        <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20 mt-4">
                            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                                <li>Meet in public places</li>
                                <li>Tell someone about your plans</li>
                                <li>Trust your instincts</li>
                                <li>Do not share financial information</li>
                                <li>Be cautious with personal information</li>
                            </ul>
                        </div>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Prohibited Dating Behavior</h3>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>No solicitation or prostitution</li>
                            <li>No financial scams or fraud</li>
                            <li>No catfishing or deception</li>
                            <li>No stalking or persistent unwanted contact</li>
                        </ul>
                    </section>

                    {/* Sections 26-28 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">26. Academic Integrity</h2>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Do not use the App to facilitate academic dishonesty</li>
                            <li>Do not share exam answers or assignments</li>
                            <li>Do not violate your college&apos;s code of conduct</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-6">27. Force Majeure</h2>
                        <p className="text-foreground/80">
                            We are not liable for failures due to circumstances beyond our control, including natural disasters, wars, pandemics, or technical failures.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-6">28. Survival</h2>
                        <p className="text-foreground/80">
                            Provisions that should survive termination (including liability limitations, indemnification, and dispute resolution) will continue after termination.
                        </p>
                    </section>

                    {/* Acknowledgment */}
                    <div className="p-6 bg-primary/10 rounded-lg border border-primary/20 mt-12">
                        <p className="text-foreground font-semibold text-center">
                            By using UniRizz, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                        </p>
                        <p className="text-foreground/70 text-center mt-2">
                            <strong>Effective Date:</strong> November 29, 2024
                        </p>
                    </div>

                    {/* Footer Links */}
                    <div className="pt-8 border-t border-border mt-16">
                        <p className="text-foreground/60 text-sm mb-4">Related documents:</p>
                        <Link href="/privacy-policy" className="text-primary hover:underline">
                            Privacy Policy →
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

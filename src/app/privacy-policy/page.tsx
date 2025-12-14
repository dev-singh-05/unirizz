import Link from "next/link"
import { Metadata } from "next"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Privacy Policy - UniRizz",
    description: "UniRizz Privacy Policy - Learn how we collect, use, and protect your information.",
}

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/10 py-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <Link href="/">
                        <Button variant="ghost" className="mb-6 -ml-2 text-foreground/70 hover:text-foreground">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Privacy <span className="text-primary">Policy</span>
                    </h1>
                    <p className="text-lg text-foreground/70">
                        Last updated: November 29, 2024
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto max-w-4xl px-4 py-16">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    {/* Introduction */}
                    <p className="text-lg leading-relaxed text-foreground/80 mb-8">
                        UniRizz (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the UniRizz mobile application (&quot;App&quot;).
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the App.
                    </p>
                    <p className="text-lg leading-relaxed text-foreground/80 mb-12 pb-8 border-b border-border">
                        By downloading, registering, or using UniRizz, you agree to the practices described in this Privacy Policy.
                    </p>

                    {/* Section 1 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">1. Information We Collect</h2>
                        <p className="text-foreground/80 mb-4">We collect the following categories of information:</p>

                        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">1.1 Personal Information</h3>
                        <p className="text-foreground/80 mb-4">You provide this during account creation, verification, and profile setup:</p>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Full name</li>
                            <li>College name</li>
                            <li>College email address</li>
                            <li>College ID and fee receipt (for verification)</li>
                            <li>Gender, branch, year</li>
                            <li>Profile photos</li>
                        </ul>
                        <p className="text-foreground/80 mt-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
                            <strong>Note:</strong> We DO NOT collect your phone number unless you willingly share it in chat (not recommended).
                        </p>

                        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">1.2 Verification Documents</h3>
                        <p className="text-foreground/80 mb-4">To ensure only real college students join UniRizz, we collect:</p>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>College ID</li>
                            <li>Fee receipt</li>
                            <li>College email domain</li>
                        </ul>
                        <p className="text-foreground/80 mt-4">These are stored securely and used only for account verification.</p>

                        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">1.3 Automatically Collected Information</h3>
                        <p className="text-foreground/80 mb-4">When you use the App, we automatically collect:</p>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Device type</li>
                            <li>Operating system</li>
                            <li>App version</li>
                            <li>IP address (Supabase default logs)</li>
                            <li>Usage patterns</li>
                            <li>Crash logs</li>
                        </ul>
                        <p className="text-foreground/80 mt-4">This is standard for app security and debugging.</p>

                        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">1.4 User-Generated Content</h3>
                        <p className="text-foreground/80 mb-4">Depending on your activity, we collect:</p>

                        <div className="grid md:grid-cols-2 gap-6 mt-4">
                            <div className="p-4 bg-card rounded-lg border border-border">
                                <h4 className="font-semibold text-foreground mb-2">Dating</h4>
                                <ul className="text-sm text-foreground/80 space-y-1">
                                    <li>• Dating preferences</li>
                                    <li>• Category selection</li>
                                    <li>• Answers to surprise questions</li>
                                    <li>• Profile description</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-card rounded-lg border border-border">
                                <h4 className="font-semibold text-foreground mb-2">Ratings</h4>
                                <ul className="text-sm text-foreground/80 space-y-1">
                                    <li>• Ratings you give and receive</li>
                                    <li>• XP and ranking calculations</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-card rounded-lg border border-border">
                                <h4 className="font-semibold text-foreground mb-2">Clubs</h4>
                                <ul className="text-sm text-foreground/80 space-y-1">
                                    <li>• Messages in club chats</li>
                                    <li>• Event participation</li>
                                    <li>• XP submissions</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-card rounded-lg border border-border">
                                <h4 className="font-semibold text-foreground mb-2">Campus Snaps</h4>
                                <ul className="text-sm text-foreground/80 space-y-1">
                                    <li>• Photos you upload</li>
                                    <li>• Captions</li>
                                    <li>• Reactions & likes</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">1.5 Push Notification Tokens</h3>
                        <p className="text-foreground/80 mb-4">We collect Expo push tokens to send:</p>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Match notifications</li>
                            <li>Chat messages</li>
                            <li>Club updates</li>
                            <li>Admin announcements</li>
                        </ul>
                    </section>

                    {/* Section 2 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">2. How We Use Your Information</h2>
                        <p className="text-foreground/80 mb-4">We use your information to:</p>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Create and manage your account</li>
                            <li>Verify your student status</li>
                            <li>Show you matches based on your preferences</li>
                            <li>Show your Ratings, XP, and leaderboard data</li>
                            <li>Allow club creation, joining, and chatting</li>
                            <li>Enable posting and viewing Campus Snaps</li>
                            <li>Improve app performance and security</li>
                            <li>Send important notifications</li>
                            <li>Prevent fraud, fake profiles, and misuse</li>
                        </ul>
                        <p className="text-foreground/80 mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20 font-semibold">
                            ✓ We never sell your data.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">3. How We Store Your Information</h2>
                        <p className="text-foreground/80 mb-4">We store data using:</p>
                        <div className="grid md:grid-cols-2 gap-6 mt-4">
                            <div className="p-4 bg-card rounded-lg border border-border">
                                <h4 className="font-semibold text-foreground mb-2">Supabase</h4>
                                <ul className="text-sm text-foreground/80 space-y-1">
                                    <li>• Authentication</li>
                                    <li>• User profiles</li>
                                    <li>• Chats</li>
                                    <li>• Ratings</li>
                                    <li>• Clubs</li>
                                    <li>• XP & Tokens</li>
                                    <li>• Verification documents</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-card rounded-lg border border-border">
                                <h4 className="font-semibold text-foreground mb-2">Cloudinary</h4>
                                <ul className="text-sm text-foreground/80 space-y-1">
                                    <li>• Campus Snaps</li>
                                    <li>• Profile photos</li>
                                </ul>
                                <p className="text-sm text-foreground/60 mt-2">
                                    Campus Snaps may auto-delete after 3 days based on your settings.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">4. How We Protect Your Information</h2>
                        <p className="text-foreground/80 mb-4">We use:</p>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Row Level Security (RLS)</li>
                            <li>Supabase built-in authentication</li>
                            <li>Database encryption</li>
                            <li>SSL for all data transfers</li>
                            <li>Restricted access for admin tools</li>
                        </ul>
                        <p className="text-foreground/80 mt-4">Only authorized team members can access verification documents.</p>
                    </section>

                    {/* Section 5 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">5. Sharing of Information</h2>
                        <p className="text-foreground/80 mb-4 p-4 bg-primary/10 rounded-lg border border-primary/20 font-semibold">
                            We DO NOT sell, rent, or trade your data.
                        </p>
                        <p className="text-foreground/80 mb-4">We may share information only with:</p>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Service Providers</h3>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Supabase (hosting, authentication, database)</li>
                            <li>Cloudinary (image hosting)</li>
                            <li>Expo (push notifications)</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Legal Requirements</h3>
                        <p className="text-foreground/80">We may disclose information if required:</p>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2 mt-2">
                            <li>by law</li>
                            <li>by court order</li>
                            <li>to protect a user or prevent harm</li>
                        </ul>
                    </section>

                    {/* Section 6 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">6. Your Privacy Controls</h2>
                        <p className="text-foreground/80 mb-4">You have the right to:</p>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Edit your profile information</li>
                            <li>Delete your account anytime</li>
                            <li>Remove photos and snaps you uploaded</li>
                            <li>Block or report other users</li>
                            <li>Control who sees your Dating categories</li>
                            <li>Restrict profile visibility in some features</li>
                        </ul>
                        <p className="text-foreground/80 mt-6">Deleting your account removes your:</p>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2 mt-2">
                            <li>Chats</li>
                            <li>Profile data</li>
                            <li>Ratings given</li>
                            <li>Snaps</li>
                            <li>Preferences</li>
                            <li>Matching history</li>
                        </ul>
                        <p className="text-foreground/60 mt-4 text-sm">
                            Note: Verification documents may be retained for legal compliance for a limited time.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">7. Data Retention</h2>
                        <p className="text-foreground/80 mb-4">We retain:</p>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li><strong>Active user data:</strong> as long as your account exists</li>
                            <li><strong>Deleted accounts:</strong> removed permanently</li>
                            <li><strong>Snaps:</strong> based on your expiration settings (e.g., 3 days)</li>
                            <li><strong>Verification documents:</strong> short-term for compliance</li>
                        </ul>
                    </section>

                    {/* Section 8 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">8. Children&apos;s Privacy</h2>
                        <p className="text-foreground/80">
                            UniRizz is strictly for <strong>18+ college students</strong>. We do not knowingly allow minors to use the App.
                            Any underage accounts will be deleted immediately.
                        </p>
                    </section>

                    {/* Section 9 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">9. Links to External Services</h2>
                        <p className="text-foreground/80 mb-4">We may link to:</p>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>GitHub Pages (legal documents)</li>
                            <li>App Stores</li>
                            <li>Social pages</li>
                        </ul>
                        <p className="text-foreground/80 mt-4">We are not responsible for third-party privacy practices.</p>
                    </section>

                    {/* Section 10 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">10. Security Limitations</h2>
                        <p className="text-foreground/80 mb-4">
                            While we use modern security practices, no system is 100% secure. Users are responsible for:
                        </p>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Not sharing login details</li>
                            <li>Avoiding sharing private information in chats</li>
                            <li>Reporting suspicious behavior</li>
                        </ul>
                    </section>

                    {/* Section 11 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">11. Changes to This Privacy Policy</h2>
                        <p className="text-foreground/80 mb-4">We may update this Privacy Policy for:</p>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>New features</li>
                            <li>Legal requirements</li>
                            <li>Security improvements</li>
                        </ul>
                        <p className="text-foreground/80 mt-4">Users will be notified via:</p>
                        <ul className="list-disc pl-6 text-foreground/80 space-y-2 mt-2">
                            <li>In-app message</li>
                            <li>Email</li>
                            <li>App update notes</li>
                        </ul>
                    </section>

                    {/* Section 12 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">12. Contact Us</h2>
                        <p className="text-foreground/80 mb-4">For privacy questions, contact us at:</p>
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

                    {/* Section 13 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">13. Jurisdiction</h2>
                        <p className="text-foreground/80">
                            This Privacy Policy is governed by the laws of India. Any disputes will be handled in courts of Indore, Madhya Pradesh.
                        </p>
                    </section>

                    {/* Footer Links */}
                    <div className="pt-8 border-t border-border mt-16">
                        <p className="text-foreground/60 text-sm mb-4">Related documents:</p>
                        <Link href="/terms-of-service" className="text-primary hover:underline">
                            Terms of Service →
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

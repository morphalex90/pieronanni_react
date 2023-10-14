import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '@layouts/Layout';

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL + '/privacy-policy'} />
                <title>Privacy Policy | Piero Nanni</title>
                <meta name="description" content="Privacy Policy for Piero Nanni" />

                <meta property="og:type" content="profile" />
                <meta property="og:title" content="Privacy Policy | Piero Nanni" />
                <meta property="og:description" content="Privacy Policy for Piero Nanni" />
                <meta property="og:image" content="" />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL + '/privacy-policy'} />
            </Head>

            <Layout className="privacy-policy">
                <h1>Privacy Policy</h1>

                <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
                    <h3>What are cookies?</h3>
                    <p>A cookie is a small text file made up of letters and numbers that can be stored on your browser or on your computer&apos;s hard drive when you visit websites. Cookies contain information about your visits to each related website.</p>
                </motion.div>

                <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }}>
                    <h3>Third party cookies</h3>
                    <p>By visiting a website, you can receive cookies both from the visited site (first part), and from sites managed by other organizations (third parties). Notable examples are the presence of embed videos or social plugins from social network services. These are parts of the visited page generated directly by the aforementioned sites and integrated into the host site page.</p>
                    <p>This site also includes components from Google Analytics, a web traffic analysis service provided by Google. Again, these are third-party cookies collected and managed anonymously to monitor and improve the performance of the host site (performance cookie).</p>
                    <p>Google Analytics can collect and analyze information on usage behavior anonymously. This information is collected by Google Analytics, which processes it for the purpose of drawing up reports on the websites themselves. This site does not use (and does not allow third parties to use) the Google analysis tool to monitor or collect personal identification information. Google does not associate the IP address with any other data held by Google nor does it try to connect an IP address with the identity of a user. Google can also communicate this information to third parties where this is required by law or where such third parties process the aforementioned information on behalf of Google.</p>
                    <p>For more information, please refer to the link below:<br />
                        <a href="https://www.google.it/policies/privacy/partners/" target="_blank" rel="noreferrer">https://www.google.it/policies/privacy/partners/</a></p>
                    <p>The user can selectively disable the action of Google Analytics by installing the opt-out component provided by Google on his browser. To disable the action of Google Analytics, please refer to the link below:<br />
                        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">https://tools.google.com/dlpage/gaoptout</a></p>
                </motion.div>

                <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.4 }}>
                    <h3>How to change cookie settings</h3>
                    <p>Most browsers allow you to delete cookies from your computer&apos;s hard drive, to block the acceptance of cookies or to receive a warning before a cookie is stored.</p>
                    <p>How to change the settings for:</p>
                    <ul>
                        <li><a href="https://support.google.com/chrome/answer/95647?hl=it" target="_blank" title="Google Chrome" rel="noreferrer">Google Chrome</a></li>
                        <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" title="Firefox" rel="noreferrer">Mozilla Firefox</a></li>
                        <li><a href="https://support.microsoft.com/kb/196955" target="_blank" title="Internet Explorer" rel="noreferrer">Internet Explorer</a></li>
                        <li><a href="https://support.apple.com/kb/PH5042" target="_blank" title="safari" rel="noreferrer">Safari</a></li>
                    </ul>
                </motion.div>
            </Layout>
        </>
    );
}

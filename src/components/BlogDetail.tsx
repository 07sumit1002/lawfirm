import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DOMPurify from 'dompurify';

// JSON data (unchanged)
const articles = [
  {
  "id": 1,
  "title": "Cyber Fraud in India",
  "subtitle": "How to Protect Yourself and What to Do If Targeted",
  "description": "Explore the most common types of cyber fraud in India, preventive measures you can take, and the steps to follow if you fall victim.",
  "image": "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=900&q=80",
  "slug": "cyber-fraud-in-india",
  "date": "2025-06-19",
  "author": "Legal Team",
  "content": "<p>In an increasingly digital India, cyber fraud has become a pervasive threat, targeting individuals and businesses alike. From sophisticated phishing attacks to deceptive lottery scams, fraudsters are constantly evolving their tactics to exploit vulnerabilities and steal money, data, or identities. The ease of online transactions and communication, unfortunately, also provides fertile ground for these illicit activities.</p><p>Understanding the common types of cyber fraud, implementing preventive measures, and knowing the immediate steps to take if targeted are crucial for safeguarding yourself in the digital landscape. As an Indian lawyer, we regularly advise clients on navigating the complexities of cybercrime.</p><h2 style=\"font-size:2rem;margin-top:2.5em;margin-bottom:1.2em;font-weight:800;\">Common Types of Cyber Fraud in India</h2><ul><li><strong>Phishing:</strong> Fraudsters send deceptive emails, messages, or websites that mimic legitimate entities (banks, government agencies, e-commerce sites) to trick you into revealing sensitive information like passwords, credit card details, or UPI PINs.</li><li><strong>Vishing (Voice Phishing):</strong> This involves fraudulent calls where callers impersonate bank officials, government agents (e.g., from RBI, income tax department), or tech support, pressuring you to share OTPs, PINs, or download malicious apps.</li><li><strong>Smishing (SMS Phishing):</strong> Similar to phishing, but delivered via SMS. These messages often contain malicious links or urgent requests for personal information.</li><li><strong>UPI Fraud:</strong> Scammers exploit UPI (Unified Payments Interface) by sending \"collect requests\" with deceptive messages, or by tricking users into entering their PIN to \"receive\" money instead of sending it.</li><li><strong>Job Scams/Lottery Scams:</strong> Fake offers of lucrative jobs or lottery winnings that demand an \"advance fee\" for processing, taxes, or security deposits.</li><li><strong>Fake Customer Care Numbers:</strong> Fraudulent customer care numbers listed online (often on fake websites or search results) that lead victims to scammers who ask for remote access to devices or sensitive banking details.</li><li><strong>Social Media Impersonation/Account Takeover:</strong> Fraudsters hack into social media accounts or create fake profiles to solicit money from your friends and family.</li><li><strong>E-commerce/Online Shopping Fraud:</strong> Fake websites offering incredible deals, non-delivery after payment, or delivering counterfeit products.</li><li><strong>Loan Scams:</strong> Offers of quick, easy loans with minimal paperwork that require an upfront \"processing fee,\" after which the loan never materializes.</li><li><strong>QR Code Scams:</strong> Scammers send QR codes that, when scanned, initiate a payment from your account instead of sending money to you.</li></ul><h2 style=\"font-size:2rem;margin-top:2.5em;margin-bottom:1.2em;font-weight:800;\">How to Protect Yourself: Preventive Measures</h2><ul><li>Verify the Sender/Source: Always double-check email addresses, website URLs, and caller identities. Look for subtle misspellings or unusual domain names.</li><li>Be Skeptical of Urgent Requests: Fraudsters often create a sense of urgency or fear to make you act without thinking. Never rush into sharing information or making payments.</li><li>Never Share OTPs, PINs, Passwords, or CVV: Your bank or any legitimate entity will never ask for these details over the phone, SMS, or email. OTPs are for transactions initiated by you.</li><li>Use Strong, Unique Passwords: Create complex passwords for different accounts and consider using a password manager. Enable Two-Factor Authentication (2FA) wherever possible.</li><li>Beware of Unsolicited Links/Attachments: Do not click on suspicious links or download attachments from unknown sources.</li><li>Use Secure Networks: Avoid conducting financial transactions on public Wi-Fi networks.</li><li>Regularly Monitor Bank Statements: Check your bank and credit card statements frequently for any unauthorized transactions.</li><li>Keep Software Updated: Ensure your operating system, web browser, and antivirus software are always up-to-date.</li><li>Be Cautious on Social Media: Limit the amount of personal information you share publicly, as it can be used for targeted attacks.</li><li>Install Reputable Antivirus/Anti-Malware: Use security software on your devices and keep it updated.</li></ul><h2 style=\"font-size:2rem;margin-top:2.5em;margin-bottom:1.2em;font-weight:800;\">What to Do If Targeted: Immediate Steps to Take</h2><ul><li>Block Your Account/Card Immediately: Contact your bank, credit card company, or wallet service provider immediately to block your card/account and prevent further unauthorized transactions. Use the official customer care numbers, not numbers found through a quick search that might be fake.</li><li>Report to National Cybercrime Helpline:<ul><li>Call 1930: This is the national helpline number for reporting financial cyber fraud.</li><li>Visit <a href=\"https://cybercrime.gov.in\" target=\"_blank\" rel=\"noopener noreferrer\">cybercrime.gov.in</a>: File an online complaint on the official Cybercrime Reporting Portal. Provide all details and evidence.</li></ul></li><li>Preserve All Evidence: Take screenshots of suspicious messages, emails, websites, transaction details, and any communication with the fraudsters. This evidence will be crucial for the police investigation.</li><li>Inform Your Bank/Financial Institution: Follow up your call with a written complaint to your bank.</li><li>Change Passwords: Immediately change passwords for all compromised accounts (email, banking, social media) and any other accounts using similar passwords.</li><li>Scan Your Devices: Run a full scan with your antivirus software to check for any malware or spyware.</li><li>Report to Internet Service Provider (ISP): If your email or internet service was compromised.</li><li>Seek Legal Counsel: Consult with a lawyer specializing in cyber law. They can guide you through the legal process, help with filing appropriate complaints, and represent your interests if further legal action is required.</li></ul><h2 style=\"font-size:2rem;margin-top:2.5em;margin-bottom:1.2em;font-weight:800;\">Legal Recourse in India</h2><p>Cybercrimes in India are primarily governed by the Information Technology Act, 2000 (IT Act), along with relevant sections of the Indian Penal Code, 1860 (IPC). Depending on the nature of the fraud, sections related to cheating (Section 420 IPC), identity theft (Section 66C IT Act), cheating by personation by using computer resource (Section 66D IT Act), and data theft (Section 43, 66 IT Act) can be invoked.</p><h2 style=\"font-size:2rem;margin-top:2.5em;margin-bottom:1.2em;font-weight:800;\">Conclusion</h2><p>Cyber fraud is a real and growing threat, but with vigilance, awareness, and prompt action, you can significantly reduce your risk. Stay informed, be cautious, and remember that immediate reporting is key if you ever fall victim. Your proactive steps, combined with appropriate legal guidance, can make all the difference in recovering from a cyberattack.</p><p><strong>Disclaimer:</strong> <em>This blog post provides general information and does not constitute legal advice. For specific legal guidance regarding your situation or if you have been a victim of cyber fraud, it is essential to consult with a qualified legal professional specializing in cyber law.</em></p><p><strong>Facing a cyber fraud incident or need proactive legal advice on cybersecurity? Contact us today for expert assistance.</strong></p>"
},
  {
    "id": 2,
    "title": "NRI Marriage and Divorce",
    "subtitle": "Navigating the Complex Web of Legal Challenges and Solutions",
    "description": "An in-depth look into the legal intricacies faced by NRIs during marriage disputes and divorce proceedings under Indian law.",
    "image": "/images/nri blog.jpg",
    "slug": "nri-marriage-and-divorce",
    "date": "2025-06-19",
    "author": "Legal Team",
    "content": "<p>Marriage, for Non-Resident Indians (NRIs), often carries an added layer of complexity. When cross-border relationships encounter difficulties, the legal landscape of separation and divorce can become incredibly intricate. Dealing with different legal systems, cultural nuances, and geographical distances presents unique challenges that require specialized legal understanding.</p><p>As an Indian lawyer, we often encounter NRIs grappling with matrimonial disputes that span continents. This blog post aims to shed light on the common legal challenges in NRI marriages and divorces, and outline practical solutions available under Indian law.</p><h2 style=\"font-size:2rem;margin-top:2.5em;margin-bottom:1.2em;font-weight:800;\">The Unique Challenges in NRI Marriages and Divorces</h2><ul><li><strong>Jurisdiction Confusion:</strong> One of the primary hurdles is determining which country's courts have the jurisdiction to hear the divorce petition. Is it where the marriage took place, where the couple last resided together, where one spouse currently resides, or where property is located? This ambiguity can lead to \"forum shopping,\" where one spouse files for divorce in a jurisdiction perceived to be more favorable.</li><li><strong>Applicable Law:</strong> Even if jurisdiction is established, which country's law applies to the divorce proceedings, alimony, child custody, and property division? Indian law, personal laws (Hindu Marriage Act, Muslim Personal Law, Christian Marriage Act, Special Marriage Act), or the laws of the country of residence/citizenship?</li><li><strong>Service of Summons/Notices:</strong> Serving legal documents (summons, petitions) to a spouse residing in another country can be a logistical nightmare, involving international conventions (like the Hague Service Convention) or specific protocols. Delays here can significantly prolong the case.</li><li><strong>Enforcement of Foreign Decrees:</strong> An Indian divorce decree may not be automatically enforceable in a foreign country, and vice-versa. Spouses often face the need for \"execution\" or \"recognition\" of foreign court orders, which can involve a fresh set of legal battles.</li><li><strong>Child Custody and Abduction:</strong> This is often the most contentious issue. If children are involved, determining custody across international borders is complex. Cases of one parent unilaterally moving a child to India (or vice versa) can trigger international child abduction laws (like the Hague Convention on Child Abduction, though India is not a signatory, Indian courts generally consider the child's welfare paramount).</li><li><strong>Property Division Across Jurisdictions:</strong> Assets acquired in different countries during the marriage pose a challenge. The laws governing matrimonial property may vary significantly from one country to another.</li><li><strong>Dowry Harassment (Section 498A IPC):</strong> Many NRI women residing abroad face dowry demands and harassment. Filing a complaint under Section 498A of the Indian Penal Code often presents challenges in terms of evidence collection and jurisdiction for the victim.</li></ul><h2 style=\"font-size:2rem;margin-top:2.5em;margin-bottom:1.2em;font-weight:800;\">Solutions and Legal Recourse Under Indian Law</h2><ul><li><strong>Indian Courts' Jurisdiction:</strong> Indian courts can entertain divorce petitions filed by NRIs if one of the spouses is an Indian citizen, the marriage was solemnized in India, or the couple last resided together in India, or even if the respondent resides in India. The Supreme Court of India has held that even if a foreign decree of divorce is obtained, an Indian spouse can still seek relief under Indian law if the foreign decree was not obtained on mutual consent or if it violates principles of natural justice.</li><li><strong>Personal Laws and Special Marriage Act:</strong> Divorces for Hindus, Sikhs, Jains, and Buddhists can be sought under the Hindu Marriage Act, 1955. Muslims, Christians, and Parsis have their respective personal laws. The Special Marriage Act, 1954, governs civil marriages and can be invoked regardless of religious affiliation, often providing a streamlined process for divorce, especially by mutual consent.</li><li><strong>Service Through Ministry of External Affairs:</strong> For serving summons abroad, Indian courts can utilize the Ministry of External Affairs (MEA) route, which facilitates service through Indian embassies or consulates in the respective countries. This is often more reliable than private international service.</li><li><strong>Recognition of Foreign Decrees:</strong> While not automatic, foreign divorce decrees can be recognized and enforced in India under Section 13 and 14 of the Civil Procedure Code, 1908, provided certain conditions are met (e.g., the decree was passed by a court of competent jurisdiction, it was not obtained by fraud, and it does not violate Indian public policy).</li><li><strong>Child Custody and Welfare:</strong> Indian courts prioritize the \"welfare of the child\" above all else in custody matters. Even in cases of international child abduction, if the child is brought to India, Indian courts will assess what is best for the child's future, rather than automatically repatriating them. Applications for custody can be filed under the Guardians and Wards Act, 1890.</li><li><strong>Property Claims:</strong> Indian courts have jurisdiction over matrimonial property located in India. Separate civil suits can be filed for the partition of jointly owned properties. Claims for Stridhan (property given to a woman at the time of marriage) can also be pursued.</li><li><strong>Protection Against Dowry Harassment:</strong> NRI women can file complaints under Section 498A IPC in India. The Supreme Court has clarified jurisdiction, allowing a complaint to be filed where the bride lived with her husband (even if briefly) or where the mental/physical harassment was felt. The Indian government has also established dedicated NRI Cells in various state police departments to address such grievances.</li></ul><h2 style=\"font-size:2rem;margin-top:2.5em;margin-bottom:1.2em;font-weight:800;\">Conclusion</h2><p>NRI marriages and divorces are inherently complex due to the interplay of different legal systems and personal laws. However, Indian law provides a robust framework to address these challenges. If you are an NRI facing matrimonial difficulties, it is crucial to seek expert legal advice from a lawyer with experience in cross-border family law matters. Early intervention and strategic legal planning can significantly mitigate the challenges and ensure your rights are protected.</p><p><strong>Disclaimer:</strong> <em>This blog post provides general information and does not constitute legal advice. For specific legal guidance regarding your situation, it is essential to consult with a qualified legal professional.</em></p><p><strong>Ready to discuss your NRI legal matter? Contact us today for a confidential consultation.</strong></p>"
  }
];


const BlogDetail = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Article Not Found</h2>
        <Link to="/blog" className="text-blue-700 underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 lg:px-12">
        {/* Image Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[28rem] object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* Title, Subtitle, Author, Date */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          {article.title}
        </h1>
        <div className="text-2xl text-slate-700 mb-2">{article.subtitle}</div>
        <div className="text-base text-slate-400 mb-10">
          By <span className="font-semibold">{article.author}</span> &middot; {article.date}
        </div>

        {/* Description Card */}
        <div className="bg-slate-100 rounded-xl px-10 py-8 shadow flex items-center gap-4 mb-14">
          <span className="inline-block w-2 h-12 bg-slate-300 rounded-full"></span>
          <span className="text-xl text-slate-700 font-medium">{article.description}</span>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow p-10 md:p-16 mb-16">
          <div
            className="prose prose-slate max-w-none text-xl leading-9"
            style={{
              fontSize: '1.18rem',
              lineHeight: '2.1',
              wordBreak: 'break-word',
              textWrap: 'pretty',
            }}
            // Sanitize HTML before rendering for security
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                article.content.replace(/<\/p><p>/g, '</p><p>&nbsp;</p><p>')
              ),
            }}
          />
        </div>

        {/* Back Button */}
        <div className="flex justify-end mt-12">
          <Link
            to="/blog"
            className="inline-block px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg shadow border-2 border-slate-800 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

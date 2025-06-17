import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const servicesData=[
  {
    "id": 1,
    "slug": "matrimonial-cases",
    "title": "Matrimonial Cases",
    "description": "Guiding families through divorce, custody, and support with empathy and expertise.",
    "details": "Our Matrimonial Cases practice supports clients during sensitive family matters, including divorce, legal separation, child custody, child and spousal support, adoption, and protection from domestic violence. We tailor our approach to minimize emotional and financial strain, combining compassionate guidance with assertive legal strategies. Our attorneys work closely with you to protect your family’s interests, whether through mediation for amicable resolutions or robust court representation. We are dedicated to ensuring your loved ones’ well-being and securing favorable outcomes in complex family disputes.",
    "image": "/images/nri matrimonial.jpg",
    "features": [
      "Divorce & Legal Separation",
      "Child Custody & Visitation Arrangements",
      "Child & Spousal Support",
      "Adoption & Guardianship",
      "Domestic Violence Restraining Orders",
      "Prenuptial & Postnuptial Agreements"
    ],
    "faqs": [
      {
        "question": "What documents should I bring to my first consultation?",
        "answer": "Bring relevant documents like marriage certificates, court orders, financial records, and a list of your concerns."
      },
      {
        "question": "How long does a divorce typically take?",
        "answer": "Contested cases may take 6-12 months, depending on complexity, while uncontested cases may resolve faster."
      }
    ],
    "process": [
      "Conducts a detailed consultation to assess your family’s unique situation and needs.",
      "Collects and reviews documents like financial records and court orders to build a strong case.",
      "Pursues negotiation or mediation to achieve amicable resolutions and reduce conflict.",
      "Provides assertive representation in court when disputes require litigation.",
      "Offers ongoing support post-resolution to ensure your family’s interests remain protected."
    ],
    "cta": "Contact our Family Law team for a confidential consultation to safeguard your family’s future.",
    "ipc_sections": [
      "Section 498A – Cruelty by husband or relatives",
      "Section 125 CrPC – Maintenance of wife and children",
      "Section 376 – Rape",
      "Section 354 – Assault or criminal force to woman",
      "Hindu Marriage Act, 1955 – Divorce, Maintenance, Custody",
      "Protection of Women from Domestic Violence Act, 2005"
    ]
  },
  {
    "id": 2,
    "slug": "criminal",
    "title": "Criminal Law",
    "description": "Vigorously defending against charges like DUI, assault, drug offenses, and more.",
    "details": "Our Criminal Defense practice offers strategic and aggressive representation for clients facing charges such as DUI, drug offenses, assault, theft, white-collar crimes, and juvenile offenses. We prioritize protecting your rights, reputation, and freedom by thoroughly investigating cases, challenging evidence, and crafting strong defenses. From bail hearings to trials and appeals, our experienced attorneys provide personalized guidance and clear communication to navigate the criminal justice system and aim for reduced or dismissed charges.",
    "image": "/images/criminal law.jpg",
    "features": [
      "DUI & DWI Defense",
      "Drug Offense Representation",
      "Assault & Battery Cases",
      "Theft & Burglary Defense",
      "White Collar Crimes",
      "Juvenile Defense"
    ],
    "faqs": [
      {
        "question": "What should I do if arrested?",
        "answer": "Remain calm, exercise your right to remain silent, and request an attorney immediately."
      },
      {
        "question": "Can charges be dropped before trial?",
        "answer": "Yes, charges may be reduced or dismissed based on evidence strength and legal arguments."
      }
    ],
    "process": [
      "Evaluates the case through a detailed consultation to develop a defense strategy.",
      "Investigates facts and gathers evidence to challenge the prosecution’s case.",
      "Files pre-trial motions to suppress evidence or seek dismissals where possible.",
      "Provides robust trial representation to defend your rights in court.",
      "Handles appeals if necessary to challenge unfavorable outcomes."
    ],
    "cta": "Facing criminal charges? Contact us immediately for a strong defense.",
    "ipc_sections": [
      "Section 302 – Murder",
      "Section 307 – Attempt to murder",
      "Section 376 – Rape",
      "Section 420 – Cheating",
      "Section 120B – Criminal conspiracy",
      "Section 34 – Common intention"
    ]
  },
  {
    "id": 3,
    "slug": "appellate-law",
    "title": "Appellate Law",
    "description": "Challenging court decisions with strategic and precise legal representation.",
    "details": "Our Appellate Law practice specializes in appealing court decisions in civil, criminal, and administrative cases. We meticulously review trial records, identify legal errors, and craft compelling arguments to overturn or modify rulings. Our attorneys are skilled in brief writing, oral advocacy, and navigating complex appellate processes, ensuring your case is presented effectively to higher courts for favorable outcomes.",
    "image": "/images/appleate.jpg",
    "features": [
      "Civil Appeals",
      "Criminal Appeals",
      "Administrative Appeals",
      "Brief Writing & Filing",
      "Oral Arguments",
      "Case Review & Strategy"
    ],
    "faqs": [
      {
        "question": "What is an appeal?",
        "answer": "An appeal is a request to a higher court to review and overturn a lower court’s decision."
      },
      {
        "question": "How long does an appeal process take?",
        "answer": "Appeals may take months to years, depending on case complexity and court schedules."
      }
    ],
    "process": [
      "Reviews trial records to identify grounds for appeal.",
      "Files a notice of appeal to initiate the appellate process.",
      "Prepares and submits detailed legal briefs to present arguments.",
      "Presents oral arguments in court if required.",
      "Follows up on court decisions and advises on next steps."
    ],
    "cta": "Need to appeal a court decision? Contact our Appellate Law specialists.",
    "ipc_sections": [
      "Code of Criminal Procedure (CrPC) – Section 372 (Appeals)",
      "Code of Civil Procedure (CPC) – Section 96 (First appeal)",
      "CPC – Section 100 (Second appeal)",
      "CrPC – Section 397 (Revision)",
      "Constitution of India – Article 136 (Special Leave Petition)",
      "Supreme Court Rules, 2013"
    ]
  },
  {
    "id": 4,
    "slug": "civil-litigation",
    "title": "Civil Litigation",
    "description": "Resolving disputes in contracts, injuries, and commercial matters efficiently.",
    "details": "Our Civil Litigation practice represents clients in disputes involving contracts, personal injuries, property, insurance, and commercial issues. We aim for favorable resolutions through negotiation, mediation, or assertive trial advocacy. Our attorneys conduct thorough investigations, develop robust legal strategies, and keep you informed, ensuring your rights are protected while minimizing costs and risks.",
    "image": "/images/civil litigation.jpg",
    "features": [
      "Contract Disputes",
      "Personal Injury Claims",
      "Insurance Litigation",
      "Commercial Disputes",
      "Debt Recovery",
      "Alternative Dispute Resolution"
    ],
    "faqs": [
      {
        "question": "What does civil litigation involve?",
        "answer": "It involves disputes between individuals or entities seeking compensation or specific performance."
      },
      {
        "question": "How long does a civil case typically take?",
        "answer": "Cases may resolve in 6-18 months, depending on complexity and court schedules."
      }
    ],
    "process": [
      "Assesses the dispute through a detailed consultation to determine the best approach.",
      "Drafts pleadings and conducts discovery to gather evidence.",
      "Engages in settlement negotiations or mediation to resolve disputes.",
      "Represents you in court if litigation is necessary.",
      "Enforces judgments and provides post-trial guidance."
    ],
    "cta": "Facing a legal dispute? Contact our Civil Litigation experts for resolution.",
    "ipc_sections": [
      "Section 415 – Misrepresentation",
      "Specific Relief Act – Contract enforcement",
      "Code of Civil Procedure (CPC), 1908 – Section 9 (Jurisdiction)",
      "CPC – Section 10 (Stay of suit)",
      "CPC – Section 151 (Inherent powers)",
      "Indian Contract Act, 1872"
    ]
  },
  {
    "id": 5,
    "slug": "intellectual-property",
    "title": "Intellectual Property",
    "description": "Safeguarding inventions, trademarks, copyrights, and IP rights effectively.",
    "details": "Our Intellectual Property practice protects your innovations, brands, and creative works through patents, trademarks, copyrights, and trade secrets. We handle registration, enforcement, licensing, and litigation, ensuring your IP assets are secure and maximized for value. Our attorneys offer strategic advice for portfolio management and commercialization, helping clients from startups to corporations stay competitive.",
    "image": "/images/intellectual.jpg",
    "features": [
      "Patent Registration & Enforcement",
      "Trademark Filing & Protection",
      "Copyright Registration",
      "Trade Secret Protection",
      "IP Litigation",
      "Licensing Agreements"
    ],
    "faqs": [
      {
        "question": "How can I protect my invention?",
        "answer": "Filing a patent grants exclusive rights to prevent unauthorized use."
      },
      {
        "question": "What’s the difference between copyright and trademark?",
        "answer": "Copyright protects creative works; trademarks protect brand identifiers like logos."
      }
    ],
    "process": [
      "Evaluates IP assets to develop a tailored protection strategy.",
      "Files applications for patents, trademarks, or copyrights.",
      "Addresses office actions and objections from authorities.",
      "Monitors for infringement and enforces rights through legal action.",
      "Handles litigation to resolve IP disputes effectively."
    ],
    "cta": "Protect your ideas—consult our Intellectual Property specialists today.",
    "ipc_sections": [
      "Section 63 of Copyright Act – Infringement",
      "Section 104 of Trademarks Act – False trademark use",
      "Section 120 IPC – Criminal conspiracy",
      "Section 463 – Forgery",
      "Information Technology Act – Section 66 (Computer-related offenses)"
    ]
  },
  {
    "id": 6,
    "slug": "employment-law",
    "title": "Employment Law",
    "description": "Advising on workplace rights, contracts, harassment, and termination disputes.",
    "details": "Our Employment Law practice supports employees and employers in navigating workplace issues, including contracts, discrimination, harassment, wrongful termination, and wage disputes. We ensure compliance with labor laws and resolve conflicts through negotiation, mediation, or litigation. Our attorneys also assist employers with policy development to prevent legal issues, fostering fair and compliant workplaces.",
    "image": "https://images.pexels.com/photos/4427612/pexels-photo-4427612.jpeg?auto=compress&cs=tinysrgb&w=600",
    "features": [
      "Employment Contracts",
      "Workplace Discrimination",
      "Harassment Claims",
      "Wrongful Termination",
      "Wage & Hour Disputes",
      "Employee Handbook Policies"
    ],
    "faqs": [
      {
        "question": "What qualifies as wrongful termination?",
        "answer": "Termination due to discrimination, retaliation, or contract breaches may be wrongful."
      },
      {
        "question": "How do I address workplace harassment?",
        "answer": "Document incidents and consult an attorney to explore your legal options."
      }
    ],
    "process": [
      "Conducts a consultation to review your workplace situation and legal options.",
      "Investigates claims and gathers evidence to support your case.",
      "Negotiates or mediates to achieve fair resolutions outside court.",
      "Files claims with authorities or courts if informal resolution fails.",
      "Represents you in litigation to secure a favorable outcome."
    ],
    "cta": "Protect your workplace rights—contact our Employment Law team.",
    "ipc_sections": [
      "Section 509 – Insulting modesty",
      "Section 506 – Criminal intimidation",
      "Sexual Harassment of Women at Workplace Act, 2013",
      "Industrial Disputes Act, 1947",
      "Minimum Wages Act, 1948",
      "Factories Act, 1948"
    ]
  },
  {
    "id": 7,
    "slug": "digital-crime",
    "title": "Cyber Crime",
    "description": "Defending against hacking, fraud, and data breaches with expertise.",
    "details": "Our Digital Crime/Cyber Crime practice addresses legal issues involving hacking, identity theft, cyber fraud, data breaches, and online harassment. We provide robust defense and proactive strategies to protect your digital assets, reputation, and rights. Our attorneys handle investigations, compliance with cyber laws, and litigation, ensuring swift action to mitigate damages and secure justice in the digital realm.",
    "image": "/images/cyber-law.jpg",
    "features": [
      "Hacking & Data Breach Defense",
      "Identity Theft Cases",
      "Cyber Fraud Representation",
      "Online Harassment & Cyberbullying",
      "Data Privacy Compliance",
      "Cybercrime Litigation"
    ],
    "faqs": [
      {
        "question": "What should I do if I’m a victim of cybercrime?",
        "answer": "Report the incident, secure your accounts, and consult a lawyer to protect your rights."
      },
      {
        "question": "Are cybercrimes prosecutable?",
        "answer": "Yes, with proper evidence, cybercrimes like hacking or fraud can be prosecuted."
      }
    ],
    "process": [
      "Assesses the cyber incident and develops a legal strategy.",
      "Collects and analyzes digital evidence to support your case.",
      "Coordinates with authorities and pursues legal action as needed.",
      "Represents you in court to defend or seek remedies.",
      "Advises on preventive measures to avoid future cyber risks."
    ],
    "cta": "Victimized by cybercrime? Contact our Cyber Law experts for immediate support.",
    "ipc_sections": [
      "Information Technology Act – Section 66 (Hacking, data theft)",
      "Section 66C – Identity theft",
      "Section 66D – Cheating by personation",
      "Section 420 IPC – Cheating",
      "Section 120B – Criminal conspiracy",
      "Section 463 – Forgery"
    ]
  },
  {
    "id": 8,
    "slug": "medical-negligence",
    "title": "Medical Negligence",
    "description": "Seeking justice for injuries caused by medical malpractice or negligence.",
    "details": "Our Medical Negligence practice represents clients harmed by medical malpractice, misdiagnosis, surgical errors, or inadequate care. We work with medical experts to build strong cases, seeking fair compensation for injuries, medical costs, and emotional distress. Our attorneys navigate complex healthcare laws to hold providers accountable and ensure justice for victims of negligence.",
    "image": "/images/medical negligence.jpg",
    "features": [
      "Medical Malpractice Claims",
      "Misdiagnosis & Delayed Diagnosis",
      "Surgical Error Cases",
      "Hospital Negligence",
      "Birth Injury Claims",
      "Wrongful Death due to Negligence"
    ],
    "faqs": [
      {
        "question": "What constitutes medical negligence?",
        "answer": "Negligence occurs when a healthcare provider fails to meet the standard of care, causing harm."
      },
      {
        "question": "How long do I have to file a negligence claim?",
        "answer": "The statute of limitations varies, typically 1-3 years from the incident or discovery."
      }
    ],
    "process": [
      "Evaluates the case with a consultation and medical record review.",
      "Gathers expert testimony and evidence to support your claim.",
      "Negotiates with insurers or healthcare providers for settlements.",
      "Files claims with courts if negotiation fails.",
      "Represents you in litigation to secure compensation."
    ],
    "cta": "Harmed by medical negligence? Contact us for justice and compensation.",
    "ipc_sections": [
      "Section 304A – Causing death by negligence",
      "Section 337 – Causing hurt by negligence",
      "Section 338 – Causing grievous hurt by negligence",
      "Consumer Protection Act – Medical negligence",
      "Indian Medical Council Act, 1956",
      "Tort Law – Negligence"
    ]
  },
  {
    "id": 9,
    "slug": "motor-vehicle-accidental-claims",
    "title": "Motor Vehicle Accidental Claims",
    "description": "Securing compensation for injuries and damages from vehicle accidents.",
    "details": "Our Motor Vehicle Accidental Claims practice helps clients recover compensation for injuries, property damage, and losses from car, motorcycle, or truck accidents caused by negligence. We handle negotiations with insurers, gather evidence like police reports, and pursue litigation if needed to ensure fair settlements for medical expenses, lost wages, and pain and suffering.",
    "image": "/images/accident.jpg",
    "features": [
      "Car Accident Claims",
      "Motorcycle Accident Claims",
      "Truck Accident Litigation",
      "Pedestrian Accident Cases",
      "Wrongful Death Claims",
      "Insurance Negotiations"
    ],
    "faqs": [
      {
        "question": "What can I claim after a vehicle accident?",
        "answer": "You may claim medical costs, lost wages, pain and suffering, and property damage."
      },
      {
        "question": "Do I need a lawyer for an accident claim?",
        "answer": "A lawyer ensures fair compensation and handles complex insurer negotiations."
      }
    ],
    "process": [
      "Reviews the accident details through a consultation.",
      "Collects evidence, including police reports and witness statements.",
      "Negotiates with insurers to secure a fair settlement.",
      "Files claims if negotiations fail to meet your needs.",
      "Represents you in court to pursue compensation."
    ],
    "cta": "Injured in a vehicle accident? Contact us for expert claim support.",
    "ipc_sections": [
      "Section 279 – Rash driving",
      "Section 304A – Causing death by negligence",
      "Section 337 – Causing hurt by negligence",
      "Section 338 – Causing grievous hurt by negligence",
      "Motor Vehicles Act, 1988 – Section 166 (Compensation claims)",
      "Consumer Protection Act – Insurance disputes"
    ]
  },
  {
    "id": 10,
    "slug": "insurance-claims",
    "title": "Insurance Claims",
    "description": "Resolving disputes and denials for property, health, and auto insurance claims.",
    "details": "Our Insurance Claims practice assists clients facing denied or underpaid claims for property, health, auto, or other insurance policies. We review policies, negotiate with insurers, and pursue litigation to secure the coverage you’re entitled to. Our attorneys handle bad faith insurance practices and ensure your rights are protected in complex claim disputes.",
    "image": "/images/insurance.jpg",
    "features": [
      "Property Insurance Disputes",
      "Health Insurance Claims",
      "Auto Insurance Claims",
      "Bad Faith Insurance Practices",
      "Policy Review & Analysis",
      "Claim Denials & Appeals"
    ],
    "faqs": [
      {
        "question": "What is a bad faith insurance claim?",
        "answer": "It occurs when an insurer unreasonably denies or delays a valid claim."
      },
      {
        "question": "How long does an insurance claim dispute take?",
        "answer": "Disputes may take months, but we work to expedite fair resolutions."
      }
    ],
    "process": [
      "Reviews your insurance policy and claim details.",
      "Collects evidence to support your claim against denials.",
      "Negotiates with insurers to secure rightful coverage.",
      "Files appeals or claims in court if disputes persist.",
      "Represents you in litigation to enforce your rights."
    ],
    "cta": "Denied an insurance claim? Contact our experts to fight for your coverage.",
    "ipc_sections": [
      "Section 420 – Cheating",
      "Section 406 – Criminal breach of trust",
      "Consumer Protection Act – Insurance disputes",
      "Insurance Act, 1938 – Section 45 (Policy disputes)",
      "Section 415 – Misrepresentation",
      "Contract Act – Breach of contract"
    ]
  },
  {
    "id": 11,
    "slug": "nri-cases",
    "title": "NRI Cases",
    "description": "Supporting NRIs with property, family, and cross-border legal disputes.",
    "details": "Our NRI Cases practice assists Non-Resident Indians with legal matters such as property disputes, matrimonial issues, inheritance, and cross-border litigation. We offer remote representation through power of attorney, coordinate across jurisdictions, and ensure seamless legal support to protect your interests in India while you’re abroad.",
    "image": "/images/nri.jpg",
    "features": [
      "Property Disputes & Management",
      "Matrimonial & Family Law",
      "Inheritance & Succession",
      "Cross-Border Litigation",
      "Power of Attorney Services",
      "Taxation for NRIs"
    ],
    "faqs": [
      {
        "question": "Can NRIs file cases from abroad?",
        "answer": "Yes, we handle cases remotely via power of attorney or virtual consultations."
      },
      {
        "question": "What documents are needed for NRI property disputes?",
        "answer": "Property deeds, ownership records, and related legal agreements are essential."
      }
    ],
    "process": [
      "Assesses your case through a consultation, including cross-border needs.",
      "Verifies documents like property deeds or family records.",
      "Develops a legal strategy tailored to your situation.",
      "Coordinates across jurisdictions for seamless representation.",
      "Resolves disputes and enforces outcomes as needed."
    ],
    "cta": "NRI facing legal issues? Contact us for expert cross-border support.",
    "ipc_sections": [
      "Section 420 – Cheating",
      "Section 406 – Criminal breach of trust",
      "Section 498A – Cruelty in matrimonial cases",
      "Hindu Succession Act, 1956",
      "FEMA – Foreign exchange violations",
      "Transfer of Property Act, 1882"
    ]
  },
  {
    "id": 12,
    "slug": "drafting",
    "title": "Drafting",
    "description": "Crafting precise legal documents, contracts, and agreements for your needs.",
    "details": "Our Drafting practice creates clear, enforceable legal documents, including contracts, wills, trusts, business agreements, and compliance documents. We ensure precision and compliance with applicable laws, minimizing risks and protecting your interests. Our attorneys work closely with you to tailor documents to your specific needs, offering ongoing support for revisions or execution.",
    "image": "/images/drafting.jpg",
    "features": [
      "Contract Drafting & Review",
      "Wills & Trusts",
      "Business Agreements",
      "Lease & Property Agreements",
      "Power of Attorney",
      "Compliance Documents"
    ],
    "faqs": [
      {
        "question": "Why is professional drafting important?",
        "answer": "Professional drafting ensures clarity, enforceability, and legal compliance."
      },
      {
        "question": "Can drafted documents be modified later?",
        "answer": "Yes, documents can be amended with mutual consent and proper execution."
      }
    ],
    "process": [
      "Consults with you to understand document needs and objectives.",
      "Drafts precise legal documents tailored to your requirements.",
      "Reviews drafts with you to incorporate feedback and ensure accuracy.",
      "Finalizes and executes documents for legal enforceability.",
      "Provides ongoing support for amendments or related issues."
    ],
    "cta": "Need precise legal documents? Contact our Drafting experts today.",
    "ipc_sections": [
      "Indian Contract Act, 1872 – Section 10 (Valid agreements)",
      "Section 406 – Criminal breach of trust",
      "Section 420 – Cheating",
      "Indian Succession Act, 1925 – Wills",
      "Transfer of Property Act, 1882",
      "Registration Act, 1908"
    ]
  },
  {
  "id": 13,
  "slug": "consumer-cases",
  "title": "Consumer Cases",
  "description": "Protecting consumer rights in disputes over defective products, unfair practices, and services.",
  "details": "Our Consumer Cases practice advocates for clients in disputes involving defective products, unfair trade practices, consumer fraud, and service-related issues. We ensure fair compensation and accountability from businesses, leveraging consumer protection laws to safeguard your rights. Our attorneys provide personalized guidance, from filing complaints to representing you in consumer forums or courts.",
  "image": "/images/consumer-cases.jpg",
  "features": [
    "Defective Product Claims",
    "Unfair Trade Practice Disputes",
    "Consumer Fraud Cases",
    "Service Contract Disputes",
    "Warranty Claims",
    "Consumer Protection Litigation"
  ],
  "faqs": [
    {
      "question": "What qualifies as a consumer case?",
      "answer": "Consumer cases involve disputes over goods or services, such as defective products, misleading advertisements, or unfair business practices."
    },
    {
      "question": "How long do I have to file a consumer complaint?",
      "answer": "Under the Consumer Protection Act, complaints must typically be filed within two years from the date of the issue."
    }
  ],
  "process": [
    "Consults with you to understand the consumer dispute and objectives.",
    "Collects evidence, including receipts, contracts, and communication records.",
    "Files complaints with consumer forums or relevant authorities.",
    "Negotiates or mediates with businesses for fair resolutions.",
    "Represents you in consumer courts for litigation and resolution."
  ],
  "cta": "Facing a consumer dispute? Contact our Consumer Cases experts for justice and compensation.",
  "ipc_sections": [
    "Consumer Protection Act, 2019 – Section 2 (Definitions)",
    "Consumer Protection Act, 2019 – Section 35 (Filing complaints)",
    "Consumer Protection Act, 2019 – Section 47 (Unfair trade practices)",
    "Indian Contract Act, 1872 – Section 10 (Valid agreements)",
    "Sale of Goods Act, 1930 – Section 12 (Implied warranties)",
    "Indian Penal Code, 1860 – Section 420 (Cheating)"
  ]
}
];

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-deepRoyal">Service Not Found</h1>
        <p className="mb-8 text-gray-600">
          Sorry, we couldn’t find the service you are looking for.
        </p>
        <button
          onClick={() => navigate("/practise areas")}
          className="px-6 py-3 bg-deepRoyal text-white rounded hover:bg-indigo-800 transition"
        >
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <div className="text-black">
      {/* Hero Section */}
      <div className="relative w-full h-96 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold text-center">{service.title}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <p className="text-lg mb-6 text-gray-700 text-justify">{service.details}</p>

        {/* Features Section */}
        {service.features?.length > 0 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:bg-gray-100/70">
              <h2 className="text-2xl font-bold text-deepRoyal mb-4">Key Features</h2>
              <ul className="list-disc ml-6 text-gray-800 space-y-3 text-lg">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:bg-gray-100/70">
              <h2 className="text-2xl font-bold text-deepRoyal mb-4">IPC Sections</h2>
              <ul className="list-disc ml-6 text-gray-800 space-y-3 text-lg">
                {service.ipc_sections.map((ipc, index) => (
                  <li key={index}>{ipc}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* FAQs Section */}
        {service.faqs?.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-deepRoyal mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-deepRoyal rounded p-4 shadow"
                >
                  <h3 className="font-semibold text-lg text-deepRoyal">{faq.question}</h3>
                  <p className="text-gray-700 mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Process Section */}
        {service.process?.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-deepRoyal mb-6">Our Process</h2>
            <div className="space-y-6">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Dot */}
                  <span className="mt-2 w-3 h-3 bg-deepRoyal rounded-full flex-shrink-0" />
                  
                  {/* Text */}
                  <p className="text-gray-800 text-lg leading-relaxed text-justify ">{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Final Contact Button */}
        <div className="mt-16 flex justify-center">
          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-deepRoyal rounded-lg hover:bg-deepRoyal/40 transition duration-300 text-lg font-semibold shadow-md"
          >
            Contact Us to know more about {service.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
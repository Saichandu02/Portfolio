export interface Certification {
  title: string;
  issuer: string;
  issued?: string;
  credentialId: string;
  credentialUrl: string;
  skills: string[];
}

export const certificationsData: Certification[] = [
  {
    title: "Generative AI with LLMs",
    issuer: "DeepLearning.AI",
    credentialId: "3f6289cf-15ac-4f2d-a460-805409888823",
    credentialUrl: "",
    skills: ["Generative AI", "LLMs", "Prompt Engineering", "Hugging Face", "LangChain"]
  },
  {
    title: "AI for Medicine",
    issuer: "DeepLearning.AI",
    credentialId: "17c5cd0f-35a7-41e2-aef4-a64ed0ad62f0",
    credentialUrl: "",
    skills: ["AI for Medicine", "Healthcare AI", "Machine Learning", "Deep Learning"]
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    issued: "Mar 2023",
    credentialId: "286DA1DF680241FF",
    credentialUrl: "",
    skills: ["Azure AI", "Machine Learning", "Responsible AI", "Cognitive Services"]
  },
  {
    title: "GitHub Copilot",
    issuer: "Microsoft",
    credentialId: "336AD720FDF1447C",
    credentialUrl: "",
    skills: ["GitHub Copilot", "AI Coding", "Software Engineering Practices"]
  },
  {
    title: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    issued: "Mar 2023",
    credentialId: "3AE30551C25857A7",
    credentialUrl: "",
    skills: ["Azure", "Cloud Administration", "Identity", "Networking", "Monitoring"]
  },
  {
    title: "Crash Course on Python",
    issuer: "Google",
    issued: "Aug 2023",
    credentialId: "KNTL4GCV4XBQ",
    credentialUrl: "",
    skills: ["Python", "Automation", "Scripting"]
  },
  {
    title: "Oracle Database@AWS Certified Architect Professional",
    issuer: "Oracle",
    credentialId: "",
    credentialUrl: "",
    skills: ["Oracle Database", "AWS", "Cloud Architecture"]
  },
  {
    title: "Oracle AI Vector Search Certified Professional",
    issuer: "Oracle",
    credentialId: "",
    credentialUrl: "",
    skills: ["Vector Search", "AI Search", "Databases", "Oracle AI"]
  },
  {
    title: "Oracle Certified AI Foundations Associate",
    issuer: "Oracle",
    credentialId: "",
    credentialUrl: "",
    skills: ["AI Foundations", "Machine Learning", "Generative AI"]
  },
  {
    title: "AI Engineer for Developers Associate",
    issuer: "DataCamp",
    credentialId: "AIEDA0012031525305",
    credentialUrl: "",
    skills: ["Prompt Engineering", "Hugging Face Products", "Software Engineering Practices", "AI Governance", "Chatbot Development", "LangChain", "Python"]
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    credentialId: "8f435359-e15f-4af3-838f-5cd5f8ede7e1",
    credentialUrl: "",
    skills: ["Machine Learning", "Python", "Deep Learning", "TensorFlow", "Predictive Modeling", "Keras", "Scikit-Learn", "NumPy", "Pandas", "Jupyter", "Supervised Learning", "Unsupervised Learning", "Neural Networks", "XGBoost"]
  }
];

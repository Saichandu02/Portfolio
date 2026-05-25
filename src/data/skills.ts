export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Programming",
    skills: ["Python", "SQL", "R", "Scala", "Java", "C++", "Bash/Shell Scripting"]
  },
  {
    category: "AI / ML",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement Learning",
      "Feature Engineering",
      "Data Preprocessing",
      "Model Optimization",
      "Hyperparameter Tuning",
      "Time Series Forecasting",
      "Recommendation Systems",
      "Anomaly Detection"
    ]
  },
  {
    category: "Generative AI & LLMs",
    skills: [
      "Generative AI",
      "LLMs",
      "RAG",
      "Prompt Engineering",
      "LoRA",
      "PEFT",
      "OpenAI API",
      "Azure OpenAI",
      "Hugging Face",
      "LangChain",
      "LlamaIndex",
      "Transformers",
      "FAISS",
      "Pinecone",
      "ChromaDB"
    ]
  },
  {
    category: "NLP & Computer Vision",
    skills: [
      "NLP",
      "NER",
      "Sentiment Analysis",
      "Text Classification",
      "Semantic Search",
      "Conversational AI",
      "Computer Vision",
      "OCR",
      "OpenCV"
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Keras",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "Pandas",
      "NumPy",
      "SciPy",
      "spaCy",
      "NLTK"
    ]
  },
  {
    category: "MLOps & Deployment",
    skills: [
      "MLflow",
      "Kubeflow",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "FastAPI",
      "Flask",
      "REST APIs",
      "Model Serving",
      "TorchServe",
      "ONNX Runtime"
    ]
  },
  {
    category: "Cloud",
    skills: [
      "AWS SageMaker",
      "AWS S3",
      "AWS Lambda",
      "AWS EC2",
      "GCP Vertex AI",
      "GCP BigQuery",
      "Azure ML",
      "Azure OpenAI"
    ]
  },
  {
    category: "Data Engineering",
    skills: [
      "Apache Spark",
      "Kafka",
      "Hadoop",
      "Hive",
      "ETL/ELT Pipelines",
      "Apache Airflow",
      "Big Data Technologies"
    ]
  },
  {
    category: "Databases",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Cassandra",
      "DynamoDB",
      "NoSQL",
      "Vector Databases"
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Jenkins",
      "Terraform",
      "Helm",
      "Jupyter Notebook",
      "VS Code",
      "Databricks",
      "Jira",
      "Confluence"
    ]
  },
  {
    category: "Monitoring & Visualization",
    skills: [
      "Prometheus",
      "Grafana",
      "ELK Stack",
      "Tableau",
      "Power BI",
      "Matplotlib",
      "Seaborn",
      "Plotly"
    ]
  }
];

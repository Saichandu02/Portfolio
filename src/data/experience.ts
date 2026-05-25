export interface Experience {
  company: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
}

export const experienceData: Experience[] = [
  {
    company: "Comerica",
    role: "AI / Machine Learning Engineer",
    location: "Dallas, Texas, USA",
    dates: "Nov 2025 – Present",
    bullets: [
      "Designed scalable end-to-end AI/ML pipelines using Python, SQL, Apache Spark, and Apache Airflow for enterprise banking and financial analytics.",
      "Developed ML and deep learning models using TensorFlow, PyTorch, Scikit-learn, XGBoost, and LightGBM for fraud detection, credit risk scoring, anomaly detection, and forecasting.",
      "Built Generative AI and LLM solutions using OpenAI API, Azure OpenAI, Hugging Face, LangChain, RAG, Prompt Engineering, LoRA/PEFT, FAISS, Pinecone, and ChromaDB.",
      "Implemented NLP pipelines for text classification, sentiment analysis, NER, semantic search, topic modeling, and automated document processing.",
      "Built MLOps frameworks using MLflow, Kubeflow, Docker, Kubernetes, CI/CD, Jenkins, and DVC.",
      "Developed REST APIs and AI microservices using FastAPI and Flask integrated with AWS SageMaker, Lambda, S3, and GCP Vertex AI.",
      "Implemented model monitoring, drift detection, explainability, SHAP, LIME, Prometheus, and Grafana."
    ]
  },
  {
    company: "Memorial Hermann Health System",
    role: "Machine Learning Engineer",
    location: "Houston, Texas, USA",
    dates: "Nov 2024 – Oct 2025",
    bullets: [
      "Designed ML and AI solutions for healthcare analytics using Python, SQL, TensorFlow, PyTorch, and Scikit-learn.",
      "Built LLM applications using OpenAI, Hugging Face, LangChain, RAG, FAISS, and Pinecone for clinical document search, summarization, and conversational AI.",
      "Developed deep learning models using CNNs, RNNs, LSTMs, Transformers, XGBoost, and LightGBM for patient risk prediction and outcome forecasting.",
      "Designed LangChain agents for document authoring, semantic search, and clinical recommendation workflows.",
      "Deployed healthcare AI workloads using MLflow, Kubeflow, Docker, Kubernetes, FastAPI, Flask, GCP Vertex AI, and Azure ML.",
      "Built ETL and real-time processing frameworks using Apache Spark, Kafka, Airflow, PostgreSQL, and MongoDB."
    ]
  },
  {
    company: "Equitas Small Finance Bank",
    role: "Data Scientist",
    location: "Chennai, India",
    dates: "Apr 2022 – Jul 2024",
    bullets: [
      "Developed predictive models using Python, Scikit-learn, TensorFlow, XGBoost, and LightGBM for credit risk, fraud detection, customer segmentation, and forecasting.",
      "Built ETL pipelines using Apache Spark, Pandas, PostgreSQL, and MongoDB.",
      "Implemented NLP solutions using spaCy, NLTK, Transformers, and Hugging Face for feedback analysis, document classification, and sentiment analysis.",
      "Deployed model services using FastAPI, Flask, Docker, Kubernetes, MLflow, and AWS SageMaker.",
      "Built Tableau and Power BI dashboards for business intelligence and executive reporting."
    ]
  },
  {
    company: "MRF Tyres",
    role: "Data Scientist",
    location: "Chennai, India",
    dates: "Mar 2020 – Mar 2022",
    bullets: [
      "Developed ML models using Python, Scikit-learn, TensorFlow, PySpark, and Spark MLlib for demand forecasting, quality defect prediction, anomaly detection, and operations optimization.",
      "Built big data pipelines using Apache Spark, Kafka, Azure Databricks, Hive, and Hadoop.",
      "Applied PCA, cross-validation, hyperparameter tuning, ROC-AUC, precision-recall, segmentation, and time-series forecasting.",
      "Delivered interactive dashboards using Tableau, Power BI, Matplotlib, and Seaborn."
    ]
  }
];

export interface Project {
  title: string;
  tech: string[];
  description: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    title: "RAG-Powered Document Intelligence Platform",
    tech: ["LangChain", "OpenAI API", "FAISS", "Pinecone", "FastAPI", "ChromaDB", "Azure OpenAI"],
    description: "Built a production-grade RAG system for financial and healthcare document Q&A using PDF ingestion, chunking, embedding pipelines, vector search, multi-turn conversational memory, LangChain agents, tool-calling, and guardrails."
  },
  {
    title: "Healthcare Patient Risk Prediction System",
    tech: ["PyTorch", "XGBoost", "SageMaker", "MLflow", "FastAPI", "SHAP", "Evidently AI"],
    description: "Built a clinical risk prediction platform for 30-day readmission and patient deterioration using ensemble ML models and a custom PyTorch Transformer architecture, with SHAP explainability and drift monitoring."
  },
  {
    title: "Real-Time Fraud Detection & Anomaly Pipeline",
    tech: ["XGBoost", "Isolation Forest", "Apache Kafka", "PySpark", "AWS Lambda", "MLflow"],
    description: "Designed a real-time fraud detection system processing streaming transactions using Kafka, PySpark feature computation, anomaly scoring, MLflow tracking, AWS Lambda retraining, and CloudWatch monitoring."
  },
  {
    title: "Demand Forecasting & Time Series Intelligence Platform",
    tech: ["LSTM", "Prophet", "Apache Airflow", "SageMaker", "Plotly", "MLflow"],
    description: "Built a multi-horizon demand forecasting system using Prophet and stacked LSTM models, automated retraining with Airflow and SageMaker, and delivered interactive forecast dashboards."
  }
];

-- Insert sample projects
INSERT INTO public.projects (title, slug, description, long_description, technologies, github_url, category, featured, metrics) VALUES
(
  'Customer Churn Prediction Model',
  'customer-churn-prediction',
  'Machine learning model to predict customer churn with 89% accuracy using ensemble methods',
  'Developed a comprehensive churn prediction system using Random Forest and XGBoost algorithms. The model analyzes customer behavior patterns, transaction history, and engagement metrics to identify at-risk customers. Implemented feature engineering techniques and hyperparameter tuning to achieve optimal performance.',
  '["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib"]'::jsonb,
  'https://github.com/yourusername/churn-prediction',
  'Machine Learning',
  true,
  '{"accuracy": "89%", "precision": "87%", "recall": "91%", "f1_score": "89%"}'::jsonb
),
(
  'Real-time Sentiment Analysis Dashboard',
  'sentiment-analysis-dashboard',
  'Real-time Twitter sentiment analysis using NLP and streaming data processing',
  'Built a scalable sentiment analysis pipeline that processes streaming Twitter data in real-time. Utilized BERT-based models for accurate sentiment classification and Apache Kafka for data streaming. Created an interactive dashboard using Streamlit to visualize sentiment trends and insights.',
  '["Python", "BERT", "Apache Kafka", "Streamlit", "Docker"]'::jsonb,
  'https://github.com/yourusername/sentiment-dashboard',
  'NLP',
  true,
  '{"tweets_processed": "1M+", "accuracy": "92%", "latency": "<100ms"}'::jsonb
),
(
  'Big Data ETL Pipeline',
  'big-data-etl-pipeline',
  'Scalable ETL pipeline processing 10TB+ of data daily using Apache Spark',
  'Designed and implemented a robust ETL pipeline for processing large-scale e-commerce data. The pipeline extracts data from multiple sources, transforms it using Apache Spark, and loads it into a data warehouse. Implemented data quality checks and monitoring to ensure reliability.',
  '["Apache Spark", "Python", "AWS S3", "PostgreSQL", "Airflow"]'::jsonb,
  'https://github.com/yourusername/etl-pipeline',
  'Data Engineering',
  true,
  '{"data_processed": "10TB/day", "processing_time": "2 hours", "cost_reduction": "40%"}'::jsonb
),
(
  'Recommendation System',
  'recommendation-system',
  'Collaborative filtering recommendation engine for e-commerce platform',
  'Implemented a hybrid recommendation system combining collaborative filtering and content-based approaches. The system provides personalized product recommendations based on user behavior and item features. Achieved significant improvements in user engagement and conversion rates.',
  '["Python", "TensorFlow", "Redis", "FastAPI", "Docker"]'::jsonb,
  'https://github.com/yourusername/recommendation-system',
  'Machine Learning',
  false,
  '{"click_through_rate": "+35%", "conversion_rate": "+22%", "users_served": "500K+"}'::jsonb
);

-- Insert sample blog posts
INSERT INTO public.blog_posts (title, slug, excerpt, content, category, tags, reading_time, published) VALUES
(
  'Getting Started with Machine Learning: A Beginner''s Guide',
  'getting-started-machine-learning',
  'Learn the fundamentals of machine learning and how to build your first predictive model',
  'Machine learning has become one of the most sought-after skills in the tech industry. In this comprehensive guide, we''ll walk through the basics of ML, from understanding different types of learning to building your first model...',
  'Tutorial',
  '["Machine Learning", "Python", "Beginner"]'::jsonb,
  8,
  true
),
(
  'Building Scalable Data Pipelines with Apache Spark',
  'scalable-data-pipelines-spark',
  'Best practices for designing and implementing production-ready data pipelines',
  'Apache Spark has revolutionized big data processing. In this article, I share lessons learned from building production data pipelines that process terabytes of data daily...',
  'Technical',
  '["Big Data", "Apache Spark", "Data Engineering"]'::jsonb,
  12,
  true
),
(
  'Understanding Transformer Architecture in NLP',
  'transformer-architecture-nlp',
  'Deep dive into the architecture that powers modern language models like BERT and GPT',
  'Transformers have transformed the field of natural language processing. Let''s explore how attention mechanisms work and why they''re so effective...',
  'Deep Dive',
  '["NLP", "Deep Learning", "Transformers"]'::jsonb,
  15,
  true
);

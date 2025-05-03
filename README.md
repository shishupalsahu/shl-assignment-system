**Title**: SHL Assessment Recommendation System

**Objective**:
To build a system that recommends SHL assessments based on job descriptions or queries.

**Approach**:
- Parsed metadata of SHL assessments from public product catalog.
- Used NLP (e.g., TF-IDF or Sentence Transformers) to embed job descriptions.
- Performed similarity search to rank assessments by relevance.

**Tech Stack**:
- Frontend: React/HTML
- Backend: Flask/FastAPI
- ML/NLP: Scikit-learn / HuggingFace Transformers
- Deployment: Netlify + Render

**Evaluation**:
- Manual validation on sample queries.
- Ensured metadata accuracy and response time < 1s.

**Links**:
- Web UI: https://shl-assignment-system.onrender.com
- API Endpoint: https://shl-assignment-system.onrender.com/recommend
- GitHub Repo: https://github.com/shishupalsahu/shl-assignment-system


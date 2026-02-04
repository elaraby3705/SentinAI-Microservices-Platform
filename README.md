# 👁️ Sentin-AI: Intelligent Microservices Surveillance System

![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)
![Python](https://img.shields.io/badge/Service_A-Python_3.9-blue?style=for-the-badge&logo=python&logoColor=white)
![Node.js](https://img.shields.io/badge/Service_B-Node.js_18-green?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Docker](https://img.shields.io/badge/Container-Docker-blue?style=for-the-badge&logo=docker&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-lightgrey?style=for-the-badge)

**Sentin-AI** is a cloud-native, polyglot microservices architecture designed for intelligent surveillance. It leverages **Python** for computer vision (Object Detection) and **Node.js** for real-time alerting and orchestration. The system is containerized using Docker and designed for scalable deployment on Kubernetes or Serverless platforms like IBM Code Engine.

---

## 🏗️ Architecture

The system follows a distributed microservices pattern, separating heavy computational tasks from high-concurrency I/O operations.

1.  **Sentin-Eye (Python/Flask):**
    * **Role:** The "Brain" (Compute Bound).
    * **Function:** Processes image feeds/URLs using Computer Vision logic (OpenCV/TensorFlow).
    * **Output:** Returns JSON analysis of detected anomalies, objects, or threats.

2.  **Sentin-Alert (Node.js/Express):**
    * **Role:** The "Messenger" (I/O Bound).
    * **Function:** Consumes analysis data, triggers logic-based alerts (simulated email/SMS), and manages WebSocket connections.
    * **Performance:** Handles high-throughput notification requests asynchronously.

3.  **Frontend Dashboard:**
    * **Role:** The "View".
    * **Function:** Visualizes the live status and logs incoming alerts.

---

## 🚀 Key Features

* **Polyglot Design:** Demonstrates the ability to integrate distinct languages (Python & Node.js) in a single ecosystem.
* **Containerized:** Fully Dockerized services ensuring consistency across Development and Production environments.
* **Restful Communication:** Services communicate via standard HTTP/JSON APIs.
* **Scalable Architecture:** Stateless design ready for horizontal scaling on Kubernetes (K8s) or IBM Code Engine.

---

## 🛠️ Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Service A** | **Python 3.9+ / Flask** | Backend for AI Logic & Image Processing. |
| **Service B** | **Node.js 18 / Express** | Backend for Alert Orchestration & Real-time I/O. |
| **Frontend** | **HTML5 / JavaScript** | Simple

## 2. Run with Docker Compose

We use **Docker Compose** to spin up the entire ecosystem (Python Service + Node Service) locally with a single command.

```bash
docker-compose up --build
```

---

## 3. Access the Services

Once the containers are running, you can access them at:

- **Python AI Service:** http://localhost:5000  
- **Node.js Alert Service:** http://localhost:3000  
- **Dashboard:** http://localhost:8080 *(If configured)*

---

## 📡 API Endpoints

### 🧠 Service A: Sentin-Eye (Python)

#### `POST /analyze`

**Description:**  
Analyzes an image for threats.

**Input:**
```json
{
  "image_url": "http://example.com/cam1.jpg"
}
```

**Output:**
```json
{
  "threat_level": "High",
  "objects": ["person", "unattended_bag"]
}
```

---

### 🚨 Service B: Sentin-Alert (Node.js)

#### `GET /status`

**Description:**  
Health check to ensure the alert system is active.

---

#### `POST /trigger`

**Description:**  
Receives analysis data from the Python service and logs alerts.

---

## 🗺️ Project Roadmap (Milestones)

The project is divided into **5 strategic milestones**:

- [x] **MS1: Foundation** – Project Architecture, Git Repository, and Folder Structure setup  
- [ ] **MS2: The Eye (Python)** – Implement Flask server and Computer Vision logic  
- [ ] **MS3: The Alert (Node.js)** – Implement Express server and notification logic  
- [ ] **MS4: Containerization** – Create Dockerfiles and Docker Compose orchestration  
- [ ] **MS5: Cloud Deployment** – Deploy services to IBM Cloud Code Engine and test public endpoints  

---

## 👤 Author

**Hammad Ibrahim**  
*Software Engineer | DevOps Enthusiast | Python Backend Developer*

Building scalable, automated, and intelligent backend systems.

🔗 LinkedIn Profile | GitHub Profile

---

## 📜 License

This project is licensed under the **MIT License** — see the `LICENSE` file for details.

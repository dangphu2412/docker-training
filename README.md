Here's a `TECHNICAL_GUIDELINES.md` section you can include in your repo to help your team get familiar with essential tools and concepts you’re using:

---

# 📘 Technical Guidelines

This repository provides a platform for hands-on practice and understanding of core backend engineering topics, including Docker, Kubernetes, and JavaScript locking mechanisms. Below are guidelines and learning resources to help you get up to speed.

---

## 🐳 Docker Training

This project uses Docker and Docker Compose to containerize services for development and deployment.

### 🔹 Topics to Learn
- **Dockerfile**: Understand how app images are built.
- **Docker Compose**: Manage multi-container setups.
- **Volumes**: Persistent data across container restarts.
- **Networks**: How containers communicate internally.
- **Environment Variables**: Configure containers securely.

### 🔸 Commands to Practice
```bash
# Build and run containers
docker-compose up --build

# Stop containers
docker-compose down

# View logs
docker-compose logs -f

# Execute into a container
docker exec -it <container_name> bash
```

> 📚 Suggested Resource: [Docker Getting Started Guide](https://docs.docker.com/get-started/)

---

## ☸️ Kubernetes (K8s) Basics

Familiarize yourself with K8s concepts for scalable, production-ready deployments.

### 🔹 Core Concepts
- **Deployment**: Manages application rollout (replicas, strategy, updates).
- **Service**: Exposes Pods to internal or external traffic.
- **ConfigMap**: Externalize app configuration.
- **Secret**: Securely pass sensitive data.
- **Pod**: The smallest unit of compute.
- **Namespace**: Logical grouping of K8s resources.

### 🔸 Useful Commands
```bash
# View deployments, pods, services
kubectl get deployments
kubectl get pods
kubectl get svc

# Apply configuration
kubectl apply -f deployment.yaml

# View pod logs
kubectl logs <pod_name>

# Port-forward for local testing
kubectl port-forward svc/my-service 8080:80
```

> 📚 Suggested Resource: [Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/)

---

## 🔐 Locking Demo in JavaScript

This repository includes a small demo to showcase locking techniques used to prevent race conditions, especially useful when dealing with cache and concurrency in Node.js.

### 🔹 Concepts to Explore
- **In-memory locking** with `Map` or `Set`
- **Distributed locking** (e.g., via Redis)
- **Promise-based locking** to prevent overlapping operations

### 🔸 Basic Example
```js
const locks = new Set();

async function lockAndRun(resourceKey, action) {
  if (locks.has(resourceKey)) {
    throw new Error('Resource is locked');
  }

  try {
    locks.add(resourceKey);
    await action();
  } finally {
    locks.delete(resourceKey);
  }
}
```

> 📚 Suggested Reading: [Node.js Concurrency and Locking Patterns](https://advancedweb.hu/understanding-javascript-locking-patterns/)

---

Feel free to expand this guide as more training topics and internal tools are introduced.
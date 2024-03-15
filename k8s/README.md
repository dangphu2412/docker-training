# K8S Training

## Prerequisites
- Setup minikube: https://kubernetes.io/docs/tasks/tools/install-minikube/
```bash
minikube start # start minikube

minikube status # check status

minikube ip # get minikube ip

```

Which will output:
```bash
minikube
type: Control Plane
host: Running
kubelet: Running
apiserver: Running
kubeconfig: Configured
```

Get nodes:
```bash
kubectl get node
kubectl get pod
kubectl get svc
kubectl get all

```

- ConfigMap and Secret must be created before the deployment
```bash
#kubectl create configmap my-config --from-literal=key1=config
#kubectl create secret generic my-secret

#Apply manages app through files defining in k8s resources
kubectl apply -f k8s/mongo-config.yaml
kubectl apply -f k8s/mongo-secret.yaml
```

- Deploy the application
```bash
kubectl apply -f k8s/mongo.yaml
kubectl apply -f k8s/webapp.yaml
```

- Get the minikube ip to access the application
```bash
minikube ip
 minikube service webapp-service

# To get the port
kubectl get node -o wide
# Delete all deployments
kubectl delete deployment --all --namespace=default
kubectl delete -f  configmap.yaml  -n  namespacename
```


- https://stackoverflow.com/questions/71634186/cannot-connect-to-kubernetes-nodeport-service

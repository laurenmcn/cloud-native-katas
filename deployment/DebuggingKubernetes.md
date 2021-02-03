# Kata: Debugging Kubernetes

## Problem

The Hyper Drive isn’t working and we need to find out why. Let’s debug the hyper-drive deployment so that we can reach 
light speed again.

## Setup the environment

```shell
kubectl apply -f https://raw.githubusercontent.com/ibm-cloud-architecture/learning-cloudnative-101/master/lab-setup/lab-5-debug-k8s-setup.yaml
```

## Review the deployed apps

Fix the deployment and verify the service is accessible using `kubectl port-forward`

## Validate

Once you get the Hyper Drive working again. Verify it by checking the endpoints.

```shell
kubectl get ep hyper-drive
```

# Problem

From https://cloudnative101.dev/lectures/kube-overview/activities/labs/lab1

## Requirements

Create a pod named `yoda-pod` in the cluster. Expose the pod with a service named `yoda-service`.
The specifications for the pod and services are as follows:

- Create the pod and service in the `web` namespace
- Name the pod `yoda-pod`
- Label the pod with `app=yoda`
- Use the `bitnami/nginx` container image
- The container needs a containerPort of `8080`
- Set the liveness and readiness probes to check port `8080`
- Name the service `yoda-service`
- Use port `80` for the service port that exposes the target port `8080` of the pod
- Use `ClusterIP` for the service type
- Use the `app=yoda` label for the selector in the service

## Verification

When you have completed this lab, use the following commands to validate your solution.

```shell
kubectl get pods -n web
kubectl describe pod nginx -n web
```

Use port-forward to bind port `8080` on the local machine to port `80` of the service.

```shell
kubectl port-forward svc yoda-service 8080:80
```

Once done you should be able to open a browser to `http://localhost:8080` and see the default
nginx page.

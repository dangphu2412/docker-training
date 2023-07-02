# Prepare scripts for running our app

## List images or containers
```
docker image ls
docker images -a |  grep "chuotcona123"
docker ps -a |  grep "chuotcona123"
docker rmi $(docker images | grep 'chuotcona123')
docker stop $(docker ps | grep <your_container_name> | awk '{print $1}')
```

```
## Build our image
```
docker build . -t chuotcona123/training:latest
```

## Run our image
- Simply run it
```
docker run --name training chuotcona123/training:latest
```
- Expose it to the external
```
docker run --name training2 -d -p 3000:3000 chuotcona123/training:latest
```

- Tagging image:
```
docker tag chuotcona123/training:latest chuotcona123/training:1.0.0
docker push chuotcona123/training:1.0.0
```

export VERSION=1.0.0
export CONTAINER_NAME=website-container
export TAG=website-docker:${VERSION}

docker build . -t ${TAG}
docker stop ${CONTAINER_NAME} || true && docker rm ${CONTAINER_NAME} || true
docker run --rm -d --name ${CONTAINER_NAME} --privileged -p 8081:80/tcp ${TAG}

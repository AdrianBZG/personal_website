export VERSION=1.0.0
export CONTAINER_NAME=website-container
export TAG=website-docker:${VERSION}
export EXPOSE_PORT=3100

docker build . -t ${TAG}
docker stop ${CONTAINER_NAME} || true && docker rm ${CONTAINER_NAME} || true
sleep 5
docker run --rm -it --entrypoint bash --name ${CONTAINER_NAME} --privileged -p ${EXPOSE_PORT}:3000/tcp -v ${PWD}/data.tsx:/website/src/data/data.tsx -v ${PWD}/template/src:/website/src ${TAG}

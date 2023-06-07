FROM node:20.2-bullseye 

# https://techoverflow.net/2019/05/18/how-to-fix-configuring-tzdata-interactive-input-when-building-docker-images/
ENV DEBIAN_FRONTEND=noninteractive TZ=Europe/London MKL_THREADING_LAYER=GNU

ENV LANG=C.UTF-8 \
    DEBIAN_FRONTEND=noninteractive

WORKDIR /website

COPY template/ .
COPY entrypoint.sh .

ENTRYPOINT ["bash", "entrypoint.sh"]
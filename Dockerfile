# base image
FROM node:current-alpine

# set working directory
WORKDIR /app

ADD . /app

RUN npm install -g -s --no-progress yarn && \
    yarn && \ 
    yarn cache clean

# expose preferred port
EXPOSE 3000

CMD [ "yarn", "start" ]

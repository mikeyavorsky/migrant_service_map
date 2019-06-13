# base image
FROM node:current-alpine

# set working directory
WORKDIR /app

# copy files to working directory
ADD . /app

# install dependencies
RUN yarn 

# expose preferred port
EXPOSE 3000

# on `docker run` fire `yarn start`
CMD [ "yarn", "start" ]

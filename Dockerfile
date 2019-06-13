#
# --- base image ---
FROM node:current-alpine AS base

# set working directory
WORKDIR /app

# copy project file
COPY package*.json .
COPY yarn.lock .

#
# --- dependencies ---
FROM base AS dependencies
# global npm dependencies in non-root-user directory
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

# install dependencies
RUN yarn

#
# --- dev ---
FROM dependencies AS dev

# copy files to working directory
ADD . .

# expose preferred port
EXPOSE 3000

# set the user to use when running this image
USER node

# on `docker run` fire `yarn start`
CMD [ "yarn", "start" ]

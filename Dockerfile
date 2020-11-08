# ---------- stage 0 -----------
FROM node:latest

# create directory
RUN mkdir -p /home/app
WORKDIR /home/app

# install dependencies
COPY package.json .
RUN npm install

# build project
COPY . .
RUN npm run build

# ---------- stage 1 -----------
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# copy build project from stage 0
COPY --from=0 /home/app/build .
COPY nginx.conf /etc/nginx

# export port
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;"]



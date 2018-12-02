FROM node:latest
WORKDIR /usr/src/app
COPY walletapi /user/src/app
RUN npm install
EXPOSE 10010
CMD node app.js
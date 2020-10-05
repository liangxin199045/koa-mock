FROM node:10
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
EXPOSE 7000
CMD npm run start

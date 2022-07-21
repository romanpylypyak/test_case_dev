FROM node

WORKDIR /app

COPY . /app
RUN npm ci
EXPOSE 8090

CMD npm start


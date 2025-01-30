From node:16.20.2
WORKDIR /urs/src/app
COPY packgae*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "nodemon","app.js" ]

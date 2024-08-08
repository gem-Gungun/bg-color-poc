FROM node:latest
WORKDIR /app
COPY . /app
RUN npm i
EXPOSE 5173
CMD [ "npm","run","dev" ]


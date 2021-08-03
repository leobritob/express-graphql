FROM node:lts

WORKDIR /

COPY ./src /

RUN npm i

CMD ["npm", "run", "start"]

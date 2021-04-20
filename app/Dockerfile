FROM node:alpine
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN apk add --no-cache --virtual build-dependencies \
    python2 \
    python3 \
    make \
    g++ \
    && npm install --production \
    && apk del build-dependencies
COPY . /app
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
FROM node:16
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
# Files required by pnpm install
#COPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

RUN pnpm install

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "node", "index.js" ]
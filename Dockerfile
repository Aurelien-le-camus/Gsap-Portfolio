FROM node:16
WORKDIR /app
COPY package.json package*.json ./
# Install and ignore dev dependencies
COPY . .
RUN npm install --legacy-peer-deps
RUN npm install -g serve
RUN npm run build
EXPOSE 3000
# Run build
CMD [ "npx", "serve", "-s", "build" ]
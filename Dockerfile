From node:18.14.0 as build
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build


FROM nginx:stable-alpine
COPY --from=build /usr/src/app/dist/confusion /usr/share/nginx/html

EXPOSE 80

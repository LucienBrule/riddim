FROM node:20-alpine AS build
WORKDIR /app

# Workspaces install
COPY web/package*.json web/turbo.json ./web/
COPY web/apps/app/package*.json ./web/apps/app/
RUN cd web && npm install

# Copy sources
COPY web ./web

RUN cd web && npm run build --workspace @riddim/app

FROM nginx:1.27-alpine
COPY deployment/images/web-frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/web/apps/app/dist /usr/share/nginx/html/riddim/app

EXPOSE 80

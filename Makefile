.PHONY: build test clean dashboard dev build-docs build-web docker-build docker-up docker-down docker-ps

COMPOSE_FILE := deployment/compose/docker-compose.yml

build:
	./gradlew build
	./scripts/generate_dashboard.sh

test:
	./gradlew test

clean:
	./gradlew clean

dashboard:
	./scripts/generate_dashboard.sh

dev:
	./gradlew :modules:app-api:quarkusDev

build-docs:
	cd docs && npm run docs:bundle

build-web:
	cd web && npm install
	cd web && npm run build

docker-build: build build-web
	docker build -t riddim-app-api:latest -f deployment/images/app-api/Dockerfile .
	docker build -t riddim-web:latest -f deployment/images/web-frontend/Dockerfile .

docker-up:
	docker compose -f $(COMPOSE_FILE) up -d

docker-down:
	docker compose -f $(COMPOSE_FILE) down

docker-ps:
	docker compose -f $(COMPOSE_FILE) ps

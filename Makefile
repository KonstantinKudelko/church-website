###################
### Production  ###
###################
prod-rebuild:
	docker-compose -f docker-compose.yaml -f docker-compose-production.yaml build
	docker-compose -f docker-compose.yaml -f docker-compose-production.yaml up --no-deps -d

prod-start:
	make prod-up-db
	make prod-build-server
	make prod-up-server
	make prod-build-client
	make prod-up-client
	make prod-build-router
	make prod-up-router

prod-up-db:
	 docker-compose -f docker-compose.yaml -f docker-compose-production.yaml up -d db

prod-build-server:
	 docker-compose -f docker-compose.yaml -f docker-compose-production.yaml build server

prod-up-server:
	 docker-compose -f docker-compose.yaml -f docker-compose-production.yaml up -d server

prod-build-client:
	 docker-compose -f docker-compose.yaml -f docker-compose-production.yaml build client

prod-up-client:
	 docker-compose -f docker-compose.yaml -f docker-compose-production.yaml up -d client

prod-build-router:
	 docker-compose -f docker-compose.yaml -f docker-compose-production.yaml build nginx

prod-up-router:
	 docker-compose -f docker-compose.yaml -f docker-compose-production.yaml up -d nginx

###################
### Development ###
###################
dev-start:
	make clean-uploads
	docker-compose up -d

dev-stop:
	docker-compose stop

# Cleaning all images besides test ones
clean-uploads:
	find server/public/uploads -type f -not \( -name '*-test.jpg' -or -name '.gitkeep' \) -delete

###################
### Production  ###
###################
prod-start:
	make prod-start-db
	make prod-start-server
	make prod-start-client
	make prod-start-router

prod-start-db:
	 docker-compose -f docker-compose.yaml -f docker-compose.production.yaml up -d db

prod-start-server:
	 docker-compose -f docker-compose.yaml -f docker-compose.production.yaml build server
	 docker-compose -f docker-compose.yaml -f docker-compose.production.yaml up -d server

prod-start-client:
	 docker-compose -f docker-compose.yaml -f docker-compose.production.yaml build client
	 docker-compose -f docker-compose.yaml -f docker-compose.production.yaml up -d client

prod-start-router:
	 docker-compose -f docker-compose.yaml -f docker-compose.production.yaml up -d nginx

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

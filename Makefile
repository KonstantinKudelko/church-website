###################
### Production  ###
###################
prod-start:
	docker-compose -f docker-compose.yaml -f docker-compose-production.yaml up -d

prod-restart:
	docker-compose -f docker-compose.yaml -f docker-compose-production.yaml build
	docker-compose -f docker-compose.yaml -f docker-compose-production.yaml up --no-deps -d

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

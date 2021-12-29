###################
### Production  ###
###################
prod-start:
	 docker-compose -f docker-compose-production.yaml build db server
	 docker-compose -f docker-compose-production.yaml up -d db server
	 docker-compose -f docker-compose-production.yaml build client nginx
	 docker-compose -f docker-compose-production.yaml up -d client nginx


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

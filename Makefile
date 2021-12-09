###################
### Development ###
###################
dev-start:
	make clean-uploads
	docker-compose up -d

dev-stop:
	docker-compose stop

dev-destroy:
	docker-compose down --volume

# Cleaning all images besides test ones
clean-uploads:
	find server/public/uploads -type f -not \( -name '*-test.jpg' -or -name '.gitkeep' \) -delete

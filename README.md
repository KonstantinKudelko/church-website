# Church website

The Platform where we would store different types of content.

## Development

To run this project on your local machine you have to do the following steps:

- Add `127.0.0.1 admin.localhost` recording to your `etc/hosts` file
- Run docker command `docker-compose --file docker-compose.yaml up --detach`
- Then you can reach the admin panel by [this url](http://admin.localhost:8080/)
- Front end application is reachable [here](http://localhost:8080/)

:warning: For each first run of our app, we generate fixture data. As well we assign test images to our models. But we don't clean them after each container removal. **So, if you would remove the container, please, clean [uploads](https://github.com/KonstantinKudelko/rozhdestvo-youth-website/tree/master/server/public/uploads) folder as well.**

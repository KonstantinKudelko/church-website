# Church website

The Platform where we would store different types of content.

## Project setup

Follow these instructions to set the project up locally.

First, clone this repo, do this:

```sh
  git clone https://github.com/KonstantinKudelko/church-website.git
  cd ./church-website
```

Add this recording to your `etc/hosts` file:

```sh
127.0.0.1        admin.localhost
```

Run docker container with this command:

```sh
docker-compose up -d
```

You can use commands from `Makefile` to run project locally as well.

You should be able to open [admin panel](http://admin.localhost:8080/) & [website itself](http://localhost:8080/) and rock!

# Documentation
Execute bash:
https://perchrunway.com/blog/2017-01-19-getting-started-with-docker-for-local-development

Docker Componse:
https://docs.docker.com/compose/gettingstarted/
https://www.goodbytes.be/blog/article/docker-a-simple-example-for-a-php-mysql-setup

# Building and running
**Add  --build to when making changes on the Dockerfile **

Start container:
docker-compose up

Start container as daemon:
docker-compose up -d

Check running daemons:
docker-compose ps

Stop all containers:
docker-compose stop

Read logs (see instance name with docker-compose ps):
docker logs -f --details <name>

Execute bash:
docker exec -it <name> /bin/sh

# Browser sync
https://browsersync.io/#install

-- Own server
browser-sync start --server --files "css/*.css"

-- Using Apache
browser-sync start --proxy "http://localhost/" --files "**/*"

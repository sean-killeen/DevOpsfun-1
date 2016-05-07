# DevOpsfun
![](https://api.travis-ci.org/remojansen/DevOpsfun.svg)

Playing with http://ritazh.github.io/devopsfun/

Runing this app in a container https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

## Installation issues
I downloaded docker-machine from https://www.docker.com/docker-toolbox and installed on OSX.
I start Docker Quickstart Terminal and on the console, then it shows to me:
```
Machine default already exists in VirtualBox. 
Setting environment variables for machine default...
                    ##         .
              ## ## ##        ==
           ## ## ## ## ##    ===
       /"""""""""""""""""\___/ ===
  ~~~ {~~ ~~~~ ~~~ ~~~~ ~~~ ~ /  ===- ~~~
       \______ o           __/
         \    \         __/
          \____\_______/
Error getting IP address: Something went wrong running an SSH command!
command : ip addr show dev eth1
err : exit status 255
output : 
docker is configured to use the default machine with IP For help getting started, check out the docs at https://docs.docker.com 

Error running connection boilerplate: Error getting driver URL: Something went wrong running an SSH command!
command : ip addr show dev eth1
err : exit status 255
output :
```
I fixed this error using:
```
$ docker-machine rm default
$ docker-machine create --driver virtualbox default
```

## Useful docker commands
Create a Docker image
```
$ docker build -t something .
```
Show Docker images
```
$ docker images
```
Show Docker containers:
```
$ docker ps -a
```
Stop a Docker container:
```
$ 
```
Remove a container:
```
$ docker rm 6194bd169678
```
Remove an image:
```
$ docker rmi 6194bd169678
```

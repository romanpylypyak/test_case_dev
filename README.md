# comics-case

Test cases based on comics data scraping

## start after cloning repo

install required packages using
```
npm install
```
## to start app without docker

```
npm start
```
## to start app with docker

```
docker build -t comics --name comics .
docker run -d -p 8080:8080 comics
```

## to view in browser

Open [localhost:8080](http://localhost:8080/) in browser
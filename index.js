const express = require('express');
const fetch = require('node-fetch');
const redis = require('redis');

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const client = redis.createClient(REDIS_PORT);

app = express();

const setResponse = (username, repos) => {
  return '<h2>' + username + ' : ' + repos + '</h2>';
}

const cache = (req, res, next) => {
  const { username } = req.params;

  client.get(username, (err, data) => {
    if (err) {
      throw err;
    }

    if (data !== null) {
      res.send(setResponse(username, data));
    } else {
      next();
    }
  });

}

const getRepos = async (req, resp, next) => {
  try {
    console.log('Fetching data ...');

    const { username } = req.params;

    const response = await fetch('https://api.github.com/users/' + username);

    const data = await response.json();

    const repos = data.public_repos;

    client.setex(username, 3600, repos);

    resp.send(setResponse(username, repos));
  } catch (err) {
    console.log(erro);
    resp.send(500);
  }
}

app.get('/repos/:username', cache, getRepos);

app.listen(PORT, () => console.log('App server running at port: ' + PORT))

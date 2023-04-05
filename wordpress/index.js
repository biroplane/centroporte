/* eslint-disable @typescript-eslint/no-var-requires */
// const path = require('path')
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const { render } = require("mustache");

// let products = []
require("dotenv").config();

// const _axios = axios.create({ baseUrl: process.env.WORDPRESS_URL })
let page = 1;
const pageSize = 21;
const latest = new Date("2001-01-01T00:00:00Z");

/**
// ? TODO: modified_after=2021-10-01T00:00:00Z
*/

const renderToFile = (items, folder, tempFile = "posts") => {
  const template = fs
    .readFileSync(path.join(__dirname, tempFile + ".md"))
    .toString();
  const base = path.join(__dirname, "../content", folder);

  // fs.rmdirSync(base, { recursive: true })
  if (!fs.existsSync(base)) {
    fs.mkdirSync(base);
  }
  items.forEach((post) => {
    const output = render(template, post);
    if (!fs.existsSync(`${base}`)) {
      fs.mkdirSync(`${base}`);
    }

    if (post.type === "post") {
      fs.writeFileSync(`${base}/${post.slug}.md`, output);
    } else {
      fs.writeFileSync(`${base}/${post.slug}.md`, output);
    }
  });

  // console.log('Dirname ', __dirname)
  // fs.writeFileSync(
  //   path.join(__dirname, "../static", "latest.json"),
  //   JSON.stringify({
  //     latest: new Date(),
  //   })
  // );
};

const getPosts = async (page, endpoint) => {
  try {
    console.log("TRY AXIOS ", process.env.WORDPRESS_URL + endpoint);
    const _req = {
      method: "GET",
      url: process.env.WORDPRESS_URL + endpoint,
      params: {
        per_page: pageSize,
        page,
        _embed: true,
        modified_after: latest,
      },
    };
    console.log("Request", _req);
    const _posts = await axios(_req);
    console.log("Post loaded", _posts);
    page++;
    if (_posts.data.length === pageSize) {
      // return posts.concat(_posts.data.slice(0, pageSize - 1), aw)
      return _posts.data
        .slice(0, pageSize - 1)
        .concat(setTimeout(async () => await getPosts(page, endpoint), 3000));
    } else {
      return _posts.data;
    }
  } catch (error) {
    console.log("Errore axios", error);
  }
};

const init = () => {
  /**
   * Controllo che esite il file latest
   * il file "latest.json" memorizza l'ultimo fetch
   */
  // if (fs.existsSync(path.join(__dirname, "../static", "latest.json"))) {
  //   const _latest = fs
  //     .readFileSync(path.join(__dirname, "../static", "latest.json"))
  //     .toString();
  //   latest = JSON.parse(_latest).latest;
  // }

  getPosts(page, `/posts`).then((_posts) => {
    // console.log(`Attendo posts `, _posts.length)
    page = 0;
    renderToFile(_posts, "/news");
  });

  getPosts(page, "/pages").then((_posts) => {
    // console.log('Attendo Location ', _posts.length)
    page = 0;
    renderToFile(_posts, "/pages", "locations");
  });
};

init();

const Unsplash = require("unsplash-js").default;
const fetch = require('node-fetch');
global.fetch = fetch;

const APP_ACCESS_KEY = "7s4P1kGqf86iB7ns3O-yil-s85gGYkqsGFgyt_PJI2I";

const unsplash = new Unsplash({
    accessKey: APP_ACCESS_KEY,
    // Optionally you can also configure a custom header to be sent with every request
    headers: {
      "X-Custom-Header": "foo"
    },
    // Optionally if using a node-fetch polyfill or a version of fetch which supports the timeout option, you can configure the request timeout for all requests
    timeout: 500 // values set in ms
  });

exports.getFondos = async(req, res) => {
    try {
        const { page } = req.query;
        unsplash.search.photos("mexico", page, 10, { orientation: "landscape" })
        .then(response => response.json())
        .then(response => {
            res.status(200).send(response);
        });
    } catch(error) {
        console.log(error);
        return res.status(500).send(error);
    }
};
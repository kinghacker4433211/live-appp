const axios = require("axios")
const urls = ["https://hyper-branched-college.glitch.me"]
const urls = ["https://kinghac.glitch.me"]

setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 60 * 1000);

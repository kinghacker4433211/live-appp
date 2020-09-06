const axios = require("axios")
const urls = ["رابط بورجيكتك"]
const urls = ["هنا رابط بورجيكت ثاني لو تبا تحط"]

setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 60 * 1000);

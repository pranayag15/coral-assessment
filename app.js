const express = require("express");
var os = require("os");
const app = express();
var moment = require('moment')

// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs')

console.log(moment().format("YYYY-MM-DD HH:mm:ss"))
app.get("/", function(req, res) {
  var free_memory = os.freemem();
  var free_mem_in_kb = free_memory / 1024;
  var free_mem_in_mb = free_mem_in_kb / 1024;
  var free_mem_in_gb = free_mem_in_mb / 1024;

  free_mem_in_kb = Math.floor(free_mem_in_kb);
  free_mem_in_mb = Math.floor(free_mem_in_mb);
  free_mem_in_gb = Math.floor(free_mem_in_gb);

  free_mem_in_mb = free_mem_in_mb % 1024;
  free_mem_in_kb = free_mem_in_kb % 1024;
  free_memory = free_memory % 1024;
  console.log(free_memory)
  var freeMemory = "Free memory: " +
  free_mem_in_gb +
  "GB " +
  free_mem_in_mb +
  "MB " +
  free_mem_in_kb +
  "KB and " +
  free_memory +
  "Bytes"
  res.render('index', {freeMemory: freeMemory, dateAndTime: moment().format("YYYY-MM-DD HH:mm:ss")})
});
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});

var http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      `<html>
      <head>
      <title>First Node App</title>
      <style>
      .header{
          color:green;
          padding: 13px;
          font-size: 21px;
          font-weight: bold;
          background-color: lightgray;
        }
        body{
            margin:0px;
        }
        a{
           font-size: 18px;
        }
        .link{
            padding:13px
        }
        .time{
            text-align: center;
            margin-top: 40px;
            font-size: 21px;
            color: blue;
        }
        </style>
      </head>
      <body>`
    );

    if (req.url === "/") {
      res.write(`<div class='header'><span>Home Page</span></div>`);
      res.write(
        `<div>
        <div class='link'>
          <a href="/monday">Monday</a>  
           </div>    
           <div class='link'>
           <a href="/tuesday">Tuesday</a>
          </div>    
          <div class='link'>
          <a href="/wednesday">Wednesday</a>
          </div>    
          <div class='link'>
          <a href="/thursday">Thursday</a>
          </div>    
          <div class='link'>
          <a href="/friday">Friday</a>
          </div>    
          <div class='link'>
          <a href="/saturday">Saturday</a>
          </div>    
          <div class='link'>
          <a href="/sunday">Sunday</a>
          </div>    
        </div>`
      );
      return res.end();
    }

    const day = req.url.split("/")[1];
    const date = new Date();
    const time = date.toLocaleTimeString();
    res.write(
      `<div class='header'><span>` + day.toUpperCase() + `</span></div>`
    );

    res.write(
      `<div class='time'>
        <b>
        Current Time:` +time +`</b>
        <div class='link'><a href="/">Home</a></div></div>`
    );

    res.write(`</body></html>`);
    res.end();
  })
  .listen(3000, () => {
    console.log("server:3000");
  });

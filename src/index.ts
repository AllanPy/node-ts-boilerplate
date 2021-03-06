import debug from "debug";
import http from "http";
import env from "./config/environment";
import app from "./app";

const logger = debug("log");
const server = http.createServer(app);

server.listen(env.PORT, async () => {
  app.set("host", `http://localhost:${env.PORT}`);

  logger(`Application running on port ${env.PORT}`);
});

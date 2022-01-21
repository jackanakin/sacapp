import "dotenv/config";
import fs from "fs";
import https from "https";

import app from "./app";
import appConfig from "./config/appConfig";
import { NodeEnv } from "./ts/config/NodeEnv";

if (appConfig.NODE_ENV === NodeEnv.DEVELOPMENT) {
  app.listen(appConfig.DEVELOPMENT_PORT, () => {
    console.log(
      `Started listening on ${appConfig.DEVELOPMENT_PORT}/http at ${new Date()} in ${appConfig.NODE_ENV} mode`
    );
  });
} else {
  const privateKey = fs.readFileSync(appConfig.SSL_KEY, "utf8");
  if (privateKey) {
    console.log(`privateKey OK`)
  } else {
    console.log(`privateKey FAILED`)
  }

  const certificate = fs.readFileSync(appConfig.SSL_CERT, "utf8");
  if (certificate) {
    console.log(`certificate OK`)
  } else {
    console.log(`certificate FAILED`)
  }

  const credentials = { key: privateKey, cert: certificate };
  const httpsServer = https.createServer(credentials, app);
  httpsServer.listen(appConfig.PRODUCTION_PORT, () => {
    console.log(
      `Started listening on ${appConfig.PRODUCTION_PORT}/https at ${new Date()} in ${appConfig.NODE_ENV} mode`
    );
  });
}
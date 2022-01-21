import express, { NextFunction, Request, Response } from "express";
import path from 'path';
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";

import routes from "./routes/routes";
import "./lib/database/main";
import cronJobs from "./cron_jobs/createCronJobs";
import loggingMiddleware from "./middlewares/LoggingMiddleware";

class App {
  server: express.Application;
  inProduction: boolean;

  constructor() {
    this.server = express();
    this.inProduction = false;
    //this.setupStaticResource();
    this.setupExpress();
    this.setupMiddlewares();
    this.routes();
    //this.setupSentryHandler();
    this.setupCronJobs();
    this.setupExceptionHandler();
  }

  setupStaticResource(): void {
    const resourcePath = this.inProduction ? path.join(__dirname, 'public') : path.join(__dirname, '../public');
    this.server.use('/static', express.static(resourcePath));
  }

  setupExpress(): void {
    this.server.use(express.json());
  }

  setupMiddlewares(): void {
    this.server.use(loggingMiddleware);
  }

  routes(): void {
    this.server.use(routes);
    //this.server.use(Sentry.Handlers.errorHandler());
  }

  setupExceptionHandler(): void {
    this.server.use((req: Request, res: Response, next: NextFunction) => {
      res.status(404).json("Not found");
    });
  }

  setupCronJobs(): void {
    cronJobs();
  }

  setupSentryInitializer(): void {
    Sentry.init({
      dsn: "dsn",
      integrations: [
        // enable HTTP calls tracing
        new Sentry.Integrations.Http({ tracing: true }),
        // enable Express.js middleware tracing
        new Tracing.Integrations.Express({ app: this.server }),
      ],

      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 1.0,
    });
  }

  setupSentryOptions(): void {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(Sentry.Handlers.tracingHandler());
  }

  setupSentryHandler(): void {
    this.server.use(Sentry.Handlers.errorHandler());
  }
}

export default new App().server;

import express from "express";
import { registerRoutes } from "../server/routes";
import { createServer } from "http";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Create a dummy server for registerRoutes if needed
const server = createServer(app);

// Initialize routes immediately.
// Since registerRoutes performs route attachment synchronously before any awaits,
// this works safely without an IIFE or lazy initialization.
registerRoutes(server, app);

export default app;

import express, { Request, Response, NextFunction } from "express";
import { registerRoutes } from "../server/routes.js";
import { createServer } from "http";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = createServer(app);

// Mount routes directly since setupAuth is fully synchronous
// This avoids tricky promise-chains that cause AWS lambda timing bugs
registerRoutes(server, app);

// Global Error Handler
app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    console.error("Vercel Express Error:", err);

    if (!res.headersSent) {
        res.status(status).json({ message });
    } else {
        next(err);
    }
});

// IMPORTANT: Vercel serverless functions require exporting the Express app directly.
// If you wrap it in an asynchronous handler (like `export default async function`),
// Vercel will instantly kill the process before Express finishes sending the response,
// causing a FUNCTION_INVOCATION_FAILED error.
export default app;

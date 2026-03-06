import express, { Request, Response, NextFunction } from "express";
import { registerRoutes } from "../server/routes";
import { createServer } from "http";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = createServer(app);

// Prevent unhandled promise rejections by lazily assigning routes
let initialized = false;
let initPromise: Promise<any> | null = null;

export default async function (req: Request, res: Response) {
    try {
        if (!initialized) {
            if (!initPromise) {
                initPromise = registerRoutes(server, app).then(() => {
                    // Add error handler specifically AFTER routes are mounted!
                    app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
                        const status = err.status || err.statusCode || 500;
                        const message = err.message || "Internal Server Error";
                        console.error("Vercel Express Error:", err);
                        if (!res.headersSent) {
                            res.status(status).json({ message });
                        }
                    });
                    initialized = true;
                });
            }
            await initPromise;
        }

        // Pass control to Express app safely
        return app(req, res);
    } catch (error: any) {
        console.error("Critical Vercel setup error:", error);
        if (!res.headersSent) {
            res.status(500).json({ message: "Server setup failed", error: error?.message });
        }
    }
}

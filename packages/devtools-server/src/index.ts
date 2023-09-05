import express from "express";

import { serveClient } from "./serve-client";
import { serveWs } from "./serve-ws";
import { reloadOnChange } from "./reload-on-change";
import { setupServer } from "./setup-server";
import { DevtoolsEvent, receive, send } from "@refinedev/devtools-shared";
import { createDb } from "./create-db";
import { serveApi } from "./serve-api";

export const server = async () => {
    const app = express();
    const ws = serveWs();

    const db = createDb();

    ws.on("connection", (client) => {
        // Initialize development client
        receive(client as any, DevtoolsEvent.DEVTOOLS_INIT, (data) => {
            if (db.connectedApp) {
                // send client the devtools client url if already connected
                send(client as any, DevtoolsEvent.DEVTOOLS_ALREADY_CONNECTED, {
                    url: db.connectedApp,
                });
            } else {
                db.connectedApp = data.url;
                db.clientWs = client;

                ws.clients.forEach((c) => {
                    send(c as any, DevtoolsEvent.DEVTOOLS_CONNECTED_APP, {
                        url: db.connectedApp,
                    });
                });
            }
        });

        // close connected app if client disconnects
        client.on("close", (_, reason) => {
            if (__DEVELOPMENT__) {
                console.log("Client disconnected", ws.clients.size);
            }

            if (db.clientWs) {
                if (!ws.clients.has(db.clientWs)) {
                    db.clientWs = null;
                    db.connectedApp = null;

                    ws.clients.forEach((c) => {
                        send(
                            c as any,
                            DevtoolsEvent.DEVTOOLS_DISCONNECTED_APP,
                            {
                                url: db.connectedApp,
                            },
                        );
                    });
                }
            }
        });

        if (__DEVELOPMENT__) {
            console.log("Client connected", ws.clients.size);
        }
    });

    reloadOnChange(ws);
    serveClient(app);
    setupServer(app);
    serveApi(app, db);
};

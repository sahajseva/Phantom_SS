import nock from "nock";

nock("https://api.strapi.refine.dev:443", { encodedQueryParams: true })
    .post("/auth/local", { identifier: "demo", password: "demo123" })
    .reply(
        200,
        {
            jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE5OTUzODU5LCJleHAiOjE2MjI1NDU4NTl9.hndbp-vtQ65VPafTE05E6Wbg0OKzNJnSKyBRjO9MHg4",
            user: {
                id: 1,
                username: "demo",
                email: "demo@mail.com",
                provider: "local",
                confirmed: true,
                blocked: false,
                role: {
                    id: 1,
                    name: "Authenticated",
                    description: "Default role given to authenticated user.",
                    type: "authenticated",
                },
                created_at: "2021-04-27T15:20:35.395Z",
                updated_at: "2021-04-27T15:20:35.406Z",
            },
        },
        [
            "Server",
            "nginx/1.17.10",
            "Date",
            "Sun, 02 May 2021 11:10:59 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Content-Length",
            "457",
            "Connection",
            "close",
            "Vary",
            "Accept-Encoding",
            "Vary",
            "Origin",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Frame-Options",
            "SAMEORIGIN",
            "X-RateLimit-Limit",
            "10",
            "X-RateLimit-Remaining",
            "9",
            "X-RateLimit-Reset",
            "1619953920",
            "X-Powered-By",
            "Strapi <strapi.io>",
            "X-Response-Time",
            "1038ms",
        ],
    );

nock("https://api.strapi.refine.dev:443", { encodedQueryParams: true })
    .get("/users/me")
    .reply(
        200,
        {
            id: 1,
            username: "demo",
            email: "demo@mail.com",
            provider: "local",
            confirmed: true,
            blocked: false,
            role: {
                id: 1,
                name: "Authenticated",
                description: "Default role given to authenticated user.",
                type: "authenticated",
            },
            created_at: "2021-04-27T15:20:35.395Z",
            updated_at: "2021-04-27T15:20:35.406Z",
        },
        [
            "Server",
            "nginx/1.17.10",
            "Date",
            "Sun, 02 May 2021 11:15:38 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Content-Length",
            "302",
            "Connection",
            "close",
            "Vary",
            "Accept-Encoding",
            "Vary",
            "Origin",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Frame-Options",
            "SAMEORIGIN",
            "X-Powered-By",
            "Strapi <strapi.io>",
            "X-Response-Time",
            "23ms",
        ],
    );

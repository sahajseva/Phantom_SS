import axios from "axios";
// import nock from "nock";

import JsonServer from "../../src/index";
import "./index.mock";

axios.defaults.adapter = require("axios/lib/adapters/http");

describe("custom", () => {
    const API_URL = "https://refine-fake-rest.pankod.com";

    it("correct get response", async () => {
        const response = await JsonServer(API_URL, axios).custom(
            `${API_URL}/users`,
            "get",
        );

        expect(response.data[0]["id"]).toBe(1);
        expect(response.data[0]["email"]).toBe("tiana_gleason63@hotmail.com");
    });

    it("correct filter response", async () => {
        const response = await JsonServer(API_URL, axios).custom(
            `${API_URL}/users`,
            "get",
            {
                filters: [
                    {
                        field: "email",
                        operator: "eq",
                        value: "tiana_gleason63@hotmail.com",
                    },
                ],
            },
        );

        expect(response.data[0]["id"]).toBe(1);
        expect(response.data[0]["email"]).toBe("tiana_gleason63@hotmail.com");
    });

    it("correct sort response", async () => {
        const response = await JsonServer(API_URL, axios).custom(
            `${API_URL}/users`,
            "get",
            {
                sort: [
                    {
                        field: "id",
                        order: "asc",
                    },
                ],
            },
        );

        expect(response.data[0]["id"]).toBe(1);
    });

    it("correct post request", async () => {
        const response = await JsonServer(API_URL, axios).custom(
            `${API_URL}/users`,
            "post",
            {
                payload: {
                    firstName: "test",
                    lastName: "test",
                    email: "test@mail.com",
                    status: true,
                },
            },
        );

        expect(response.data).toEqual({
            email: "test@mail.com",
            firstName: "test",
            id: 51,
            lastName: "test",
            status: true,
        });
    });
});

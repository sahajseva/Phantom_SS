import axios from "axios";

import JsonServer from "../../src/index";
import "./index.mock";

axios.defaults.adapter = require("axios/lib/adapters/http");

const YOUR_SECRET_API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnZJZCI6IjYxMzczZGVkMjQ5NWMzMDAxOTliZTAxNiIsImtleUlkIjoiNjEzNzNlMzYyNDk1YzMwMDE5OWJlMDJkIiwiaWF0IjoxNjMxMDEwMzU4LCJleHAiOjI0OTUwMTAzNTh9.2fL28Bzd97mqfAvcsTrYj1mZ_hqf3WRnr2DOtV3lsc0";

const axiosInstance = axios.create();
axiosInstance.defaults.headers = {
    Authorization: YOUR_SECRET_API_KEY,
};

describe("deleteOne", () => {
    it("correct response", async () => {
        const response = await JsonServer(
            "https://dev001.na-dev-engine.altogic.com",
            axiosInstance,
        ).deleteOne("post", { id: "613b2f5494cdf00019bfb963" });

        const { data } = response;

        expect(data).toEqual("");
    });
});

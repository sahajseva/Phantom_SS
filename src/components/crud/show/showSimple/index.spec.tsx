import React from "react";

import { render, TestWrapper } from "@test";

import { TextField } from "@components";

import { ShowSimple } from "./index";

describe("<ShowSimple/>", () => {
    it("renders Card with labeled data", async () => {
        const { getByTestId, getByText } = render(
            <ShowSimple
                record={{ id: 1, slug: "testslug" }}
                data-testid="showsimple"
            >
                <TextField renderRecordKey="id" />
                <TextField renderRecordKey="slug" />
            </ShowSimple>,
            {
                wrapper: TestWrapper({
                    resources: [{ name: "posts" }],
                }),
            },
        );

        const showSimple = getByTestId("showsimple");
        expect(showSimple.classList.contains("ant-card"));

        const idTitle = getByText("Id");
        expect(idTitle.tagName).toBe("H5");

        getByText("testslug");
    });
});

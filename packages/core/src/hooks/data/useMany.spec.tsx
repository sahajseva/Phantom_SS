import { renderHook } from "@testing-library/react-hooks";

import { MockJSONServer, TestWrapper } from "@test";

import { useMany } from "./useMany";

describe("useMany Hook", () => {
    it("with rest json server", async () => {
        const { result, waitFor } = renderHook(
            () => useMany("posts", ["1", "2"]),
            {
                wrapper: TestWrapper({
                    dataProvider: MockJSONServer,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        console.log("res", result);

        await waitFor(() => {
            return result.current.isSuccess;
        });

        const { status, data } = result.current;

        expect(status).toBe("success");
        expect(data?.data.length).toBe(2);
    });
});

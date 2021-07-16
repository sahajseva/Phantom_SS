import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";

import { MockJSONServer, TestWrapper } from "@test";

import { useModal } from ".";

const Wrapper = TestWrapper({
    dataProvider: MockJSONServer,
    resources: [{ name: "posts", route: "posts" }],
});

describe("useModal Hook", () => {
    it("should visible false on init", async () => {
        const { result } = renderHook(() => useModalForm(), {
            wrapper: Wrapper,
        });

        const { modalProps } = result.current;

        expect(modalProps.visible).toEqual(undefined);
    });

    it("should visible true on pass visible true with prop", async () => {
        const { result } = renderHook(
            () =>
                useModalForm({
                    modalProps: {
                        visible: true,
                    },
                }),
            {
                wrapper: Wrapper,
            },
        );

        const { modalProps } = result.current;

        expect(modalProps.visible).toEqual(true);
    });

    it("should visible true on called show", async () => {
        const { result, waitFor, waitForNextUpdate } = renderHook(
            () => useModalForm(),
            {
                wrapper: Wrapper,
            },
        );

        const { show } = result.current;

        act(() => {
            show();
        });

        expect(result.current.modalProps.visible).toEqual(true);
    });

    it("should visible false on called show after close", async () => {
        const { result } = renderHook(() => useModalForm(), {
            wrapper: Wrapper,
        });

        const { show, close } = result.current;

        act(() => {
            show();
        });

        expect(result.current.modalProps.visible).toEqual(true);

        act(() => {
            close();
        });

        expect(result.current.modalProps.visible).toEqual(false);
    });

    it("should call close on modal onCancel", async () => {
        const mockedOnClose = jest.fn();
        const { result } = renderHook(
            () =>
                useModalForm({
                    modalProps: {
                        onCancel: mockedOnClose,
                    },
                }),
            {
                wrapper: Wrapper,
            },
        );

        const { show, modalProps } = result.current;

        act(() => {
            show();
        });

        expect(result.current.modalProps.visible).toEqual(true);

        act(() => {
            modalProps.onCancel &&
                modalProps.onCancel(
                    new MouseEvent("click", {
                        bubbles: true,
                        cancelable: true,
                    }) as any,
                );
        });

        expect(result.current.modalProps.visible).toEqual(false);
        expect(mockedOnClose).toBeCalledTimes(1);
    });

    it("should call close if modalProps onCancel is undefined", async () => {
        const { result } = renderHook(() => useModalForm(), {
            wrapper: Wrapper,
        });

        const { show, modalProps } = result.current;

        act(() => {
            show();
        });

        expect(result.current.modalProps.visible).toEqual(true);

        act(() => {
            modalProps.onCancel &&
                modalProps.onCancel(
                    new MouseEvent("click", {
                        bubbles: true,
                        cancelable: true,
                    }) as any,
                );
        });

        expect(result.current.modalProps.visible).toEqual(false);
    });
});

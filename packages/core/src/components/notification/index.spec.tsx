import React from "react";

import { render, TestWrapper } from "@test";

import { Notification } from "./index";
import { NotificationContext } from "@contexts/notification";

const doMutation = jest.fn();
const cancelMutation = jest.fn();

const openMock = jest.fn();
const closeMock = jest.fn();

const notificationDispatch = jest.fn();

const mockNotification = [
    {
        id: "1",
        resource: "posts",
        cancelMutation,
        doMutation,
        seconds: 5000,
        isRunning: true,
    },
];

jest.useFakeTimers();

describe("Cancel Notification", () => {
    it("should trigger notification open function", async () => {
        render(
            <NotificationContext.Provider
                value={{
                    notificationDispatch,
                    notifications: mockNotification,
                }}
            >
                <Notification notifications={mockNotification} />
            </NotificationContext.Provider>,
            {
                wrapper: TestWrapper({
                    notificationProvider: {
                        open: openMock,
                        close: closeMock,
                    },
                }),
            },
        );

        expect(openMock).toBeCalledTimes(1);
        expect(openMock).toBeCalledWith({
            cancelMutation: cancelMutation,
            key: "1-posts-notification",
            message: "You have 5 seconds to undo",
            type: "progress",
            undoableTimeout: 5,
        });

        jest.runAllTimers();

        expect(notificationDispatch).toBeCalledTimes(1);
        expect(notificationDispatch).toBeCalledWith({
            payload: {
                id: "1",
                resource: "posts",
                seconds: 5000,
            },
            type: "DECREASE_NOTIFICATION_SECOND",
        });
    });

    it("should call doMutation on seconds zero", async () => {
        mockNotification[0].seconds = 0;
        render(<Notification notifications={mockNotification} />);

        expect(doMutation).toBeCalledTimes(1);
    });
});

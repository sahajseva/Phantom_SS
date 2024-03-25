import { renderHook, waitFor } from "@testing-library/react";

import { TestWrapper, act } from "@test";

import { useId } from ".";

import { mockRouterBindings, mockLegacyRouterProvider } from "@test";

describe("useId Hook", () => {
  it("returns id from props", () => {
    const { result } = renderHook(() => useId(123), {
      wrapper: TestWrapper({
        routerProvider: mockRouterBindings({
          params: {
            id: 456,
          },
        }),
      }),
    });

    expect(result.current).toBe(123);
  });

  it("returns id from router", () => {
    const { result } = renderHook(() => useId(), {
      wrapper: TestWrapper({
        routerProvider: mockRouterBindings({
          id: "123",
        }),
      }),
    });

    expect(result.current).toBe("123");
  });

  it("returns id from legacy router", () => {
    const { result } = renderHook(() => useId(), {
      wrapper: TestWrapper({
        legacyRouterProvider: {
          ...mockLegacyRouterProvider(),
          useParams: () =>
            ({
              resource: "posts",
              action: "edit",
              id: 123,
            }) as any,
        },
      }),
    });

    expect(result.current).toBe(123);
  });

  it("returns id from props and ignores router", () => {
    const { result } = renderHook(() => useId(123), {
      wrapper: TestWrapper({
        routerProvider: mockRouterBindings({
          id: "456",
        }),
      }),
    });

    expect(result.current).toBe(123);
  });

  it("returns id from props and ignores legacy router", () => {
    const { result } = renderHook(() => useId(123), {
      wrapper: TestWrapper({
        legacyRouterProvider: {
          ...mockLegacyRouterProvider(),
          useParams: () =>
            ({
              resource: "posts",
              action: "edit",
              id: 456,
            }) as any,
        },
      }),
    });

    expect(result.current).toBe(123);
  });
});

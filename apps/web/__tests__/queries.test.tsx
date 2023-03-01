import { QueryClient, QueryClientProvider } from "react-query";
import { useCustomHook } from "../queries";
import { renderHook } from "@testing-library/react-hooks";
import { PropsWithChildren } from "react";

describe("React-query", () => {
  it("working hooks", async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: PropsWithChildren) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result, waitFor } = renderHook(() => useCustomHook(), { wrapper });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toEqual("Hello");
  });
});

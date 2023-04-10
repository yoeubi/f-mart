import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import ToastContainer from "../components/ToastContainer";
import { GlobalStyle } from "../style";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Global styles={GlobalStyle} />
        <Component {...pageProps} />
        <ToastContainer />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default MyApp;

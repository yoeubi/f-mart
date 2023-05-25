import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "../style";
import { NextPage } from "next";
import { ReactElement, ReactNode, useState } from "react";

export type NextPageWithLayout<P = {}, IP = {}> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const [queryClient] = useState(() => new QueryClient());
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <Global styles={GlobalStyle} />
          {getLayout(<Component {...pageProps} />)}
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;

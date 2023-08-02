import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { RouterProvider } from "react-router-dom";
import router from "./chapter03/Routes/router";
import GlobalStyle from "./chapter03/Styles/global";
import ErrorFallBack from "./chapter05/ErrorFallBack";

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            <ErrorBoundary FallbackComponent={ErrorFallBack}>
                <RouterProvider router={router} />
            </ErrorBoundary>
        </QueryClientProvider>
    );
}

export default App;

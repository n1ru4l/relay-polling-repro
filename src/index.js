import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RelayEnvironmentProvider } from "react-relay";
import RelayEnvironment from './relay';

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
);

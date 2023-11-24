import React from "react";
import { useRoutes } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { AxiosInterceptor } from "./utils/axios";
import "./App.css";

import routes from "./routes";

import { SidebarProvider } from "./context/SidebarContext";
import { LayoutProvider } from "./context/LayoutContext";
import SW from "./components/sw/SW";

function App() {
  const content = useRoutes(routes);

  return (
    <HelmetProvider>
      <SW />
      <SidebarProvider>
        <LayoutProvider>
          <AxiosInterceptor>
            <div className="App h-100 w-100">{content}</div>
          </AxiosInterceptor>
        </LayoutProvider>
      </SidebarProvider>
    </HelmetProvider>
  );
}

export default App;

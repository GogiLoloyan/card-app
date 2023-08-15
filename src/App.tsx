import React from "react";

import Layout from "./components/Layout";

import Cards from "./screens/Cards";
import Actions from "./screens/Cards/Actions";
import CardsContextProvider from "./screens/Cards/store";

const App = () => {
  return (
    <CardsContextProvider>
      <Layout>
        <Layout.Header>
          <Actions />
        </Layout.Header>
        <Layout.Main>
          <Cards />
        </Layout.Main>
        <Layout.Sidebar>(instructions)</Layout.Sidebar>
        <Layout.Footer />
      </Layout>
    </CardsContextProvider>
  );
};

export default App;

import { BaseStyles, PageLayout } from "@primer/react";
import GlobalBar from "./features/bars/GlobalBar";
import SideBar from "./features/bars/SideBar";
import Myself from "./features/about/Myself";
import MyFavourites from "./features/about/MyFavourites";
import Home from "./features/home/Home";
import Projects from "./features/projects/Projects";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <BaseStyles>
      <Router>
        <PageLayout
          containerWidth="full"
          padding="none"
          rowGap="none"
          columnGap="none"
          sx={{ backgroundColor: "backgroundColor.primary", height: "100vh" }}
        >
          <PageLayout.Header>
            <GlobalBar />
          </PageLayout.Header>
          <PageLayout.Pane
            sx={{ position: "sticky" }}
            position="start"
            aria-label="Secondary navigation"
          >
            <SideBar />
          </PageLayout.Pane>
          <PageLayout.Content width="large">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Myself" element={<Myself />} />
              <Route path="MyFavourites" element={<MyFavourites />} />
              <Route path="Projects" element={<Projects />} />
            </Routes>
          </PageLayout.Content>
          <PageLayout.Footer></PageLayout.Footer>
        </PageLayout>
      </Router>
    </BaseStyles>
  );
}

export default App;

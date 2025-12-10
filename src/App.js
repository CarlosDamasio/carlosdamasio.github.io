import { BaseStyles, Box, PageLayout } from "@primer/react";
import { useEffect } from "react";
import GlobalBar from "./features/Bars/GlobalBar";
import DynamicSideBar from "./features/Bars/DynamicSideBar";
import Myself from "./features/about/Myself";
import Home from "./features/home/Home";
import CV from "./features/career/CV";
import PlayStation from "./features/career/PlayStation";
import Novabase from "./features/career/Novabase";
import Education from "./features/career/Education";
import Projects from "./features/projects/Projects";
import MarkdownRenderer from "./components/MarkdownRenderer";
import { initializeSecurity } from "./security";
import { logEnvConfig } from "./utils/env";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  // Initialize security on app load
  useEffect(() => {
    initializeSecurity();
    logEnvConfig();
  }, []);
  return (
    <BaseStyles>
      <Router>
        <PageLayout
          containerWidth="full"
          padding="none"
          columnGap="none"
          sx={{
            backgroundColor: "bg.primary",
            height: "100vh",
            overflow: "auto",
          }}
        >
          <PageLayout.Header>
            <GlobalBar />
          </PageLayout.Header>
          <PageLayout.Pane
            sx={{ position: "sticky" }}
            position="start"
            aria-label="Secondary navigation"
          >
            <DynamicSideBar />
          </PageLayout.Pane>
          <PageLayout.Content padding="none" sx={{ overflow: "auto" }}>
            <Box
              sx={{
                maxWidth: 1200,
                width: "100%",
                height: "100%",
                maxHeight: 1200,
                p: [4, 5, 6, 7],
                mx: "auto ",
                color: "text.primary",
              }}
            >
              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home />} />
                <Route path="About" element={<Myself />} />
                <Route path="CV" element={<CV />} />
                <Route path="Projects" element={<Projects />} />
                <Route
                  path="CarlosDamasio"
                  element={
                    <MarkdownRenderer url="https://raw.githubusercontent.com/CarlosDamasio/carlosdamasio.github.io/main/README.md" />
                  }
                />
                <Route path="PlayStation" element={<PlayStation />} />
                <Route path="Novabase" element={<Novabase />} />
                <Route path="Education" element={<Education />} />
              </Routes>
            </Box>
          </PageLayout.Content>
          <PageLayout.Footer></PageLayout.Footer>
        </PageLayout>
      </Router>
    </BaseStyles>
  );
}

export default App;

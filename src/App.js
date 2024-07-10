import { BaseStyles, Box, PageLayout } from "@primer/react";
import GlobalBar from "./features/bars/GlobalBar";
import SideBar from "./features/bars/SideBar";
import Myself from "./features/about/Myself";
import Home from "./features/home/Home";
import PlayStation from "./features/career/PlayStation";
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
          columnGap="none"
          sx={{ backgroundColor: "bg.primary", height: "100vh" }}
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
          <PageLayout.Content padding="none">
            <Box
              sx={{
                maxWidth: 1200,
                width: "100%",
                p: [4, 5, 6, 7],
                mx: "auto ",
                color: "text.primary",
              }}
            >
              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home />} />
                <Route path="About" element={<Myself />} />
                <Route path="Projects" element={<Projects />} />
                <Route path="PlayStation" element={<PlayStation />} />
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

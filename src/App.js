import { BaseStyles, PageLayout } from '@primer/react'
import GlobalBar from './features/Bars/GlobalBar'
import SideBar from './features/Bars/SideBar'
import Myself from './features/about/Myself'
import MyFavourites from './features/about/MyFavourites'
import Home from './features/home/Home.js'
import Projects from './features/projects/Projects'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BaseStyles>
      <Router>
        <PageLayout containerWidth='full' padding="none" rowGap="none" columnGap="none">
          <PageLayout.Header>
            <GlobalBar />
          </PageLayout.Header>
          <PageLayout.Pane sx={{ ml: 80, position: 'sticky' }} position="start" aria-label="Secondary navigation" divider="line">
            <SideBar />
          </PageLayout.Pane>
          <PageLayout.Content sx={{ mr: 110, }}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="Myself" element={<Myself />} />
              <Route path="MyFavourites" element={<MyFavourites />} />
              <Route path="Home" element={<Home />} />
              <Route path="Projects" element={<Projects />} />
            </Routes>
          </PageLayout.Content>
        </PageLayout>
      </Router>
    </BaseStyles >
  );
}

export default App;

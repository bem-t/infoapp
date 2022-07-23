import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Events } from '../pages/Events'
import { Home } from '../pages/Home'
import { Members } from '../pages/Members'
import { NotFound } from '../pages/NotFound'
import { Repo } from '../pages/Repo'


const MainRoutes = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/members" element={<Members />} />
      <Route exact path="/repos" element={<Repo />} />
      <Route exact path="/events" element={<Events />} />

      <Route path="/*" element={<NotFound />} />
    </Routes>
  </React.Suspense>
)

export default MainRoutes
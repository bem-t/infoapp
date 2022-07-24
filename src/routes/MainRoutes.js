import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Events } from '../pages/Events'
import { Home } from '../pages/Home'
import { Members } from '../pages/Members'
import { NotFound } from '../pages/NotFound'
import { Repo } from '../pages/Repo'


const MainRoutes = () => (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/members" element={<Members />} />
      <Route exact path="/repos" element={<Repo />} />
      <Route exact path="/events" element={<Events />} />

      <Route path="/*" element={<NotFound />} />
    </Routes>
)

export default MainRoutes
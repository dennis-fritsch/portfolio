import { Routes, Route, Navigate } from 'react-router-dom'
import { ROUTES } from 'config/routes'
import Home from 'features/Home'
import NotFound from 'features/NotFound'
import Food from 'features/Food'
import Portfolio from 'features/Portfolio'
import Photography from 'features/Photography'

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Navigation() {
  const { pathname } = useLocation()

  useEffect(() => {
    // When the user scrolled down - they should be jump back to the top after navigating
    if (window?.scrollY) {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return (
    <Routes>
      <Route path={ROUTES.home}>
        <Route index element={<Home />} />
      </Route>
      <Route path={ROUTES.food} element={<Food />} />
      <Route path={ROUTES.portfolio} element={<Portfolio />} />
      <Route path={ROUTES.photography} element={<Photography />} />
      <Route path={ROUTES.notFound} element={<NotFound />} />
      <Route path="*" element={<Navigate to={ROUTES.notFound} />} />
    </Routes>
  )
}

import { Routes, Route, Navigate } from 'react-router-dom'
import { ROUTES } from 'config/routes'
import Home from 'features/Home'
import NotFound from 'features/NotFound'
import Food from 'features/Food'
import Portfolio from 'features/Portfolio'
import Photography from 'features/Photography'

export default function Navigation() {
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

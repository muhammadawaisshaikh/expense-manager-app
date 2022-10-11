import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './index'

function RouterProvider() {
  return (
    <Router>
      <Routes>
        {
          routes.map(route => 
            <Route key={route.path} path={route.path} element={route.component} />
          )} 
      </Routes>
    </Router>
  )
}

export default RouterProvider;
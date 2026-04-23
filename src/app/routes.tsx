import { createBrowserRouter } from 'react-router';
import { Root } from './components/Root';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { About } from './pages/About';
import { ProcessPage } from './pages/Process';
import { Careers } from './pages/Careers';
import { FrontendService } from './pages/services/Frontend';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'portfolio', Component: Portfolio },
      { path: 'about', Component: About },
      { path: 'process', Component: ProcessPage },
      { path: 'careers', Component: Careers },
      { path: 'services/frontend', Component: FrontendService },
    ],
  },
]);

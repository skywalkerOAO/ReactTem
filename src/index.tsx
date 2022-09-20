
import { createRoot } from 'react-dom/client';
import './index.css';
import RootComponent from './root.component';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RootComponent/>
)


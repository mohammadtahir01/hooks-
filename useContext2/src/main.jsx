
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Usercontext from './usercontext.jsx'

createRoot(document.getElementById('root')).render(
    <Usercontext>
      <App />
    </Usercontext>
)

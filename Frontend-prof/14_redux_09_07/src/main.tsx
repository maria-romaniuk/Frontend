import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { Provider } from 'react-redux'
import storeRTK from './reduxRTK/storeRTK.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={storeRTK}>
    <App />
  </Provider>,
)

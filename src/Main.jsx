import ReactDOM from 'react-dom/client'
import './styles/main.less';
import App from './App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter><App></App></BrowserRouter>
)

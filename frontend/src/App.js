import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import Login from './components/Login';


const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  }, 
  {
    path:"/register",
    element:<SignUp/>
  }, 
  {
    path:"/login",
    element:<Login/>
  },    

])

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router}>  </RouterProvider>
    </div>
  );
}

export default App;

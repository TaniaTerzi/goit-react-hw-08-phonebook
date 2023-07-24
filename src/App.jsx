import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { useAuth } from './hooks/index';
import Login from './pages/Login';
import Register from './pages/Register';
import Contacts from 'pages/Contacts';
import NotFound from './pages/NotFound';
import ProtectedRoute from './routes/ProtectedRoute';
import LoadingBar from './components/LoadingBar/LoadingBar';
import Home from 'pages/Home';
import SharedLayout from 'components/Navigation/Navigation';

function App() {
  const { isLoggedIn, isRefreshing, isLoading } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  useEffect(() => {
    if (isLoggedIn) {
        navigate('/contacts');
    }  
  }, [isLoggedIn, navigate]);

  if (isRefreshing || isLoading) {
    return <LoadingBar />
  }

  return <Routes>
    <Route path='/' element={ <SharedLayout />}>
      <Route index element={ <Home /> } />
      <Route path='/login' element={ <Login />} />
      <Route path='/signup' element={ <Register /> } />
      <Route path='/contacts' element={<ProtectedRoute isLoggedIn={isLoggedIn}> <Contacts /> </ProtectedRoute>} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
}

export default App;
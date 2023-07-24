import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRegError,
  selectIsLogError,
  selectIsRefreshing,
  selectIsLoading,
} from './../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRegError = useSelector(selectIsRegError);
  const isLogError = useSelector(selectIsLogError);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);
  
  return {
    user,
    isLoggedIn,
    isRegError,
    isLogError,
    isRefreshing,
    isLoading,
  };
};
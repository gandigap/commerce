import { useAppSelector } from './redux-hooks';

export const useAuth = () => {
  const { user } = useAppSelector((state) => state.userReducer);
  return {
    isAuth: !!user.email,
    user,
  };
};

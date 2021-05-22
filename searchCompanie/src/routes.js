import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import LoginPage from './pages/LoginPage/LoginPage'
import SearchPage from './pages/SearchPage/SearchPage'
import ChangePassPage from './pages/ChangePassPage/ChangePassPage'
import FavoriteCompanyPage from './pages/FavoriteCompanyPage/FavoriteCompanyPage'


const routes = [
    {
        path: '/',
        exact : true,
        main : () => <HomePage/>
    },
    {
        path: '/login',
        exact : true,
        main : () => <LoginPage/>
    },
    {
        path: '/change-pass',
        exact : true,
        main : () => <ChangePassPage/>
    },
    {
        path: '/company',
        exact : true,
        main : () => <SearchPage/>
    },
    {
        path: '/favorite-company',
        exact : true,
        main : () => <FavoriteCompanyPage/>
    },
    {
        path: '',
        exact : false,
        main : () => <NotFoundPage/>
    }
];

export default routes
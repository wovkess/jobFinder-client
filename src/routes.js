import Form from './components/Form/Form';
import Table from './components/Table/Table';
import Home from './components/Home/Home';


export const publicRoutes = [
    {
        path: '/',
        Element: Home
    },    {
        path: '/form',
        Element: Form
    },
    {
        path: '/table',
        Element: Table
    },
]
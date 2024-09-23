import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/**import all components */
import Username from './components/Username';
import Password from './components/Password';

/**root routes */
const router = createBrowserRouter([
    {
        path : '/',
        element : <Username></Username>
    },
    {
        path : '/password',
        element : <Password></Password>
    },

])
export default function App() {
    return (
        <main>
            <RouterProvider router={router}></RouterProvider>
        </main>
    )
}

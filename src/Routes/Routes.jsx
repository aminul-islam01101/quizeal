import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Quiz from '../pages/quiz/Quiz';
import Statistics from '../pages/Statistics';

import Root from './Root';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<Root />}
            errorElement={<Error />}
            // loader={async () => fetch('')}
        >
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Quiz />} />

            <Route path="/orders" element={<Statistics />} />
            <Route path="/login" element={<Login />} />
        </Route>
    )
);

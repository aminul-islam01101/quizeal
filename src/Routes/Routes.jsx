import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Blogs from '../pages/Blogs';
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
            <Route path="/quiz" element={<Quiz />} />

            <Route path="/statistics" element={<Statistics />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/login" element={<Login />} />
        </Route>
    )
);

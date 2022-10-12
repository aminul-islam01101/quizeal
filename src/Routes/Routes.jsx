import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Blogs from '../pages/Blogs/Blogs';
import Error from '../pages/Error';
import Home from '../pages/Home/Home';
import Login from '../pages/Login';
import Quizzes from '../pages/quiz/Quizzes';
import QuizTopics from '../pages/quiz/QuizTopics';
import SignUp from '../pages/SignUp';
import Statistics from '../pages/Statistics';

import Root from './Root';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<Root />}
            errorElement={<Error />}
            loader={async () => fetch(`https://openapi.programming-hero.com/api/quiz`)}
        >
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/quiz" element={<QuizTopics />} />

            <Route
                path="/quiz/:id"
                element={<Quizzes />}
                loader={async ({ params }) =>
                    fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
                }
            />

            <Route path="/statistics" element={<Statistics />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Route>
    )
);

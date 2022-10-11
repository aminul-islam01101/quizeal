import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    console.log('welcome');

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;

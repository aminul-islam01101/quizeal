import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';

function App() {
    console.log('welcome');

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;

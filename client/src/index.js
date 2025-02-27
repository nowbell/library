import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserService from "./service/UserService";
import BookService from "./service/BookService";

export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Context.Provider value={{
        user: new UserService(),
        book: new BookService(),
    }}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Context.Provider>,
);

reportWebVitals();

import "./styles/style.css";

import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite";
import React, {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {Spinner} from "react-bootstrap";
import {check} from "./http/userAPI";


const App = observer( () => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            check().then(data => {
                user.setUser(true)
                user.setIsAuth(true)
            }).finally(() => setLoading(false))
        }, 1000)
    }, []);

    if (loading) {
        return <Spinner animation="border"  className="spinner" />
    }

  return (
      <BrowserRouter>
          <AppRouter>
              <div className="App">

              </div>
          </AppRouter>
      </BrowserRouter>
  );
});

export default App;

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer } from '../../components';
import BuatPost from '../buatPost';
import DetailBlog from '../DetailBlog';
import Home from '../home/home';
import "./mainapp.scss"

function MainApp() {
    return (
        <div className="main-wrap">
            <div className="head-wrap">
                <Header />
            </div>
            <div className="content-wrap">
                <Router>
                    <Switch>
                        <Route path='/buat_post'>
                            <BuatPost />
                        </Route>
                        <Route path='/DetailPost'>
                            <DetailBlog />
                        </Route>
                        <Route path='/'>
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <div className="foot-wrap">
                <Footer />
            </div>
        </div>

    )
}

export default MainApp

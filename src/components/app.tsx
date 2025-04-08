import {BrowserRouter, HashRouter, Route, Router, Routes} from "react-router-dom";
import Start from "./start";
import {Container} from "react-bootstrap";
import Navigation from "./nav";
import Me from "./me";
import Work from "./work";
import Skills from "./skills";

const App = () => {
    const getDate = () => {
        return new Date()
            .toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            })
            .replace(/\//g, ".")
    }

    return (
        <Container>
            <div className={'centered'}>
                <div className={'cur-date'}>
                    <a href={'https://github.com/6lyxt'} target={'_blank'}>
                        <img src={'https://github.com/6lyxt.png?size=75'} className={'github-avatar me-1'}
                             alt={'github avatar'}/>
                    </a>
                    {getDate()}
                </div>
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<Start/>}/>
                        <Route path="/me" element={<Me/>}/>
                        <Route path="/work" element={<Work/>}/>
                        <Route path="/skills" element={<Skills/>}/>
                    </Routes>
                </HashRouter>
                <Navigation/>
            </div>
        </Container>
    )
}

export default App;

import {BrowserRouter, HashRouter, Route, Router, Routes} from "react-router-dom";
import Start from "./start";
import {Container} from "react-bootstrap";
import Navigation from "./nav";
import Me from "./me";
import Work from "./work";

const App = () => {
    const getDate = () => {
        const date = new Date();
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }

    return (
        <Container>
            <div className={'centered'}>
                <div className={'cur-date'}>{getDate()}</div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Start/>}/>
                        <Route path="/me" element={<Me/>}/>
                        <Route path="/work" element={<Work/>}/>
                    </Routes>
                </BrowserRouter>
                <Navigation/>
            </div>
        </Container>
    )
}

export default App;

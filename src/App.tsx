import React, {FC} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {AppBase} from './App.style';
import {Navigation} from "./components/Nav";
import {Container} from "react-bootstrap";
import {Education} from "./components/Education";
import {Skill} from "./components/Skill";
import {About} from "./components/About";
import {socialDatas} from "./assets/content";
import {Experience} from "./components/Experience";

interface IProps {
    id?: number;
};

const App: FC<IProps> = (props) => {

    return <AppBase>
        <Router>
            <Navigation img={"port-3.jpg"} name={"Sapphire Fowler"} />

            {/* About */}
            <Container className="p-0" fluid>
                <Switch>
                    {/* Skill */}
                    <Route path="/skill">
                        <hr className="m-0"/>
                        <Skill title={"Skills"}
                               subTitle={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}/>
                    </Route>
                    {/* Experience */}
                    <Route path="/experience">
                        <hr className="m-0"/>
                        <Experience title={"Experience"}/>
                    </Route>
                    <Route path="/">
                        {/* About */}
                        <About firstName={"Sapphire"} lastName={"Fowler"}
                               address={"123 Berry Street · Londo, L 9902 · (+40 01) xxx-xxxx"}
                               email={"sapphire.fowler@msn.com"}
                               description={`Morbi nec dui augue. Fusce arcu dui, malesuada eget consequat et, dignissim sed massa. 
                       Mauris a purus sem. Nam venenatis metus id mauris facilisis, sed bibendum arcu facilisis. Cras dapibus, 
                       ipsum non vehicula iaculis, massa eros pellentesque elit,  eget aliquet metus turpis eget eros. 
                       Donec vel enim ac lorem suscipit aliquet quis sit amet mi. Ut facilisis auctor convallis. `}
                               content={socialDatas}
                        />
                    </Route>
                </Switch>
            </Container>
        </Router>
    </AppBase>
};

export default App;

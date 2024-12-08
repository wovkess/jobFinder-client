import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "../routes.js";
import {JobsProvider} from "./JobsContext.jsx";


const AppRouter = () => {
    return (
        <JobsProvider>
            <Routes>
                {publicRoutes.map(({path, Element}) =>
                    <Route key={path} path={path} element={<Element />} exact/>
                )}
            </Routes>
        </JobsProvider>
    );
};

export default AppRouter;
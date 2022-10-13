import { FunctionComponent } from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import './index.css'
import List from './components/List'
import Details from "./components/Details";
// import NotFound from "./components/NotFound";


export type AppProps = {};

export const App: FunctionComponent<AppProps> = () => {
  return (
    <BrowserRouter>
      <div className="flex max-w-3xl">
        <Routes>
          <Route index element={<List />} />
          <Route path={"/details/:id"} element={<Details />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
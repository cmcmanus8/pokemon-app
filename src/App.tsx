import { FunctionComponent } from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import './index.css'
import List from './components/List'
import Details from "./components/Details";

export type AppProps = {};

export const App: FunctionComponent<AppProps> = () => {
  return (
    <BrowserRouter>
      <div className='flex justify-center'>
        <div className="flex max-w-5xl w-full mx-8 font-sans">
          <Routes>
            <Route index element={<List />} />
            <Route path={"/details/:id"} element={<Details />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
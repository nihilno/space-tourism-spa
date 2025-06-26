import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuProvider } from "./contexts/MenuContext";

import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import AudioPlayer from "./components/AudioPlayer";

import "./assets/styles/global.css";

export default function App() {
  return (
    <>
      <MenuProvider>
        <AudioPlayer />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="destination" element={<Destination />}></Route>
            <Route path="crew" element={<Crew />}></Route>
            <Route path="technology" element={<Technology />}></Route>
            <Route path="*" element={<p>Page not found</p>}></Route>
          </Routes>
        </BrowserRouter>
      </MenuProvider>
    </>
  );
}

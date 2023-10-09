import './App.css';
import Header from "./components/Header";
import GiftsContainer from "./components/GiftsContainer";
import Footer from "./components/Footer";
import InfoContainer from "./components/InfoContainer";
import {createContext, useEffect, useState} from "react";

export const Gifts = createContext([])
export const Offset = createContext(0)

function App() {

    const [gifts, setGifts] = useState([])

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="App">
            <Gifts.Provider value={{gifts, setGifts}}>
                <Offset.Provider value={{offset, setOffset}}>
                <Header/>
                <InfoContainer/>
                <GiftsContainer/>
                <Footer/>
                     </Offset.Provider>
            </Gifts.Provider>
        </div>
    );
}

export default App;

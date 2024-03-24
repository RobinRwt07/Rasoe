import React from "react";
import ReactDOM from "react-dom/client";
import Body from './components/Body';
import Header from './components/Header';

// main component
const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
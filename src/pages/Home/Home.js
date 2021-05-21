import React, { useEffect } from "react";
import { fetch } from "store/actions/state1";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetch());
    }, []);

    return <div>Home</div>;
};

export default Home;

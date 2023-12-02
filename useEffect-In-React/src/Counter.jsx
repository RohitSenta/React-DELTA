import { useState, useEffect } from "react";

export default function Counter() {
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    let incCountx = () => {
        setCountx((currCount) => currCount + 1);
    }

    let incCounty = () => {
        setCounty((currCount) => currCount + 1);
    }

    // useEffect(function printSomething() {
    //     console.log("This is the Side-Effect!");
    // }, [countx, county]);
 
    useEffect(function printSomethingOnce() {
        console.log("This is the Side-Effect for first Re-Rander!");
    }, []);

    return (
        <div>
            <h1>useEffect In React</h1>
            <h3>Count-x = {countx}</h3>
            <button onClick={incCountx}>+1</button>
            <h3>Count-y = {county}</h3>
            <button onClick={incCounty}>+1</button>
            <br /><br />
            <hr /><hr />
        </div>       
    )
}
import "./Amazon.css";
import AmPrice from "./AmPrice";

function Amazon ({ title, idx }) {
    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];
    let description = [
        ["8,000 DPI", "5 Programmeble buttons"], ["intutive surface", "designed for iPad Pro"], ["designed for iPad Pro", "intutive surface"], ["wireless", "optical oriantation"]
    ];
    
    return (
        <div className="Amazon">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <AmPrice oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Amazon;
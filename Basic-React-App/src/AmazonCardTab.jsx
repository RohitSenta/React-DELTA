import Amazon from "./Amazon";

function AmazonCardTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <>
            <h2>Blocbuster Deal | Shop Now</h2>
            <div style={styles}>
                <Amazon title="Logitech MX Master" idx={0}/>
                <Amazon title="Apple Pencil (2nd Gen)" idx={1}/>
                <Amazon title="Zebronics Zeb-Transformer" idx={2}/>
                <Amazon title="Petronics Toad 23" idx={3}/>
            </div>
            <br /><hr /><hr />
        </>
    );
}

export default AmazonCardTab;
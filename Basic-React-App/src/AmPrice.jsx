export default function AmPrice({oldPrice, newPrice}) {
    let oldStyles = {
        textDecorationLine: "line-through",
        alignContent: "center",
    }
    let newStyles = {
        fontWeight: "bold",
    }
    let styles = {
        backgroundColor: "#e0c367",
        height: "30px",
        width: "200px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
    return (
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    );
}
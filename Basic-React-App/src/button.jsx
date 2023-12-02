function handleClick(event) {
    console.log("Hello!");
    console.log(event);
}

function handleMouseOver() {
    console.log("Mouse hovered on paragraph, Bye!");
}

function handleDblClick() {
    console.log("You double clicked!");
}

export default function Button() {
    return(
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <p onMouseOver={handleMouseOver}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, magnam quae nostrum ipsum dolorem repellendus modi cumque reprehenderit placeat excepturi itaque similique cum laudantium sunt blanditiis impedit consectetur soluta repudiandae repellat suscipit eaque deserunt sint amet facilis. Suscipit sint id doloribus reprehenderit cum nesciunt esse! Pariatur sunt nobis iure animi quia ducimus vel error architecto, eveniet temporibus minus commodi veniam quas ullam ad beatae fuga nulla repellat maiores hic. Reiciendis molestiae, iure nemo, laboriosam culpa corrupti rem, cum officiis obcaecati hic ipsam possimus suscipit praesentium odit! Praesentium quia dolorum pariatur aperiam. Quo ut eos quas impedit ab nulla et quibusdam.
            </p>
            <br />
            <button onDoubleClick={handleDblClick}>double click me!</button>
        </div>
    );
}
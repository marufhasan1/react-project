// import { MouseEvent } from "react";
import { useState } from "react";
function ListGroup() {
    let items = ["Maruf Hasan", "Abul Hasan", "Ruman Rajvar"];
    // items = [];
    // const handleClick = (event: MouseEvent) => {
    //     console.log(event);
    // };
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <>
            <h1>This is a list</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex == index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}
export default ListGroup;

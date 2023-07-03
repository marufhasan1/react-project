// import { MouseEvent } from "react";
import { useState } from "react";
interface Props {
    items: string[];
    heading: string;
    onSelected: (item: String) => void;
}
function ListGroup({ items, heading, onSelected }: Props) {
    // items = [];
    // const handleClick = (event: MouseEvent) => {
    //     console.log(event);
    // };
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <>
            <h1>{heading}</h1>
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
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelected(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}
export default ListGroup;

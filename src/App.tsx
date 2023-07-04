import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

const onItemSelected = (item: string) => {
    console.log(item);
};

function App() {
    const [isVisible, setVisibility] = useState(false);
    let names = ["Maruf Hasan", "Abul Hasan", "Ruman Rajvar"];
    // let languages = ["HTML", "CSS", "Javascript", "PHP", "MySQL"];
    return (
        <div>
            {isVisible && (
                <Alert onClose={() => setVisibility(false)}>
                    This is an alert.
                </Alert>
            )}
            <Button
                onClick={() => {
                    // console.log("Click");
                    setVisibility(true);
                }}
            >
                My Button
            </Button>
            <ListGroup
                items={names}
                heading="Names"
                onSelected={onItemSelected}
            />
            {/* <ListGroup items={languages} heading="Technologies" /> */}
        </div>
    );
}
export default App;

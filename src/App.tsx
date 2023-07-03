import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

const onItemSelected = (item: string) => {
    console.log(item)
}
function App() {
    let names = ["Maruf Hasan", "Abul Hasan", "Ruman Rajvar"];
    // let languages = ["HTML", "CSS", "Javascript", "PHP", "MySQL"];
    return (
        <div>
            <Alert>Hello world <span>asdfasdf</span></Alert>
            <ListGroup items={names} heading="Names" onSelected={onItemSelected} />
            {/* <ListGroup items={languages} heading="Technologies" /> */}
        </div>
    );
}
export default App;

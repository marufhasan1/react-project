import ListGroup from "./components/ListGroup";

function App() {
    let names = ["Maruf Hasan", "Abul Hasan", "Ruman Rajvar"];
    let languages = ["HTML", "CSS", "Javascript", "PHP", "MySQL"];
    return (
        <div>
            <ListGroup items={names} heading="Names" />
            <ListGroup items={languages} heading="Technologies" />
        </div>
    );
}
export default App;

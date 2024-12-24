import Card from "./components/Card";
import DateCounter from "./components/DateCounter";
import TextExpander from "./components/TextExpander";
import "./index.css";
import StarRating from "./components/StarRating";

const appStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: "4rem",
    alignItems: "center",
    // height: "100vh",
    padding: "4rem 0",
};

function App() {
    return (
        <div style={appStyle}>
            <Card />
            <TextExpander />
            <DateCounter />

            <div>
                <StarRating color="#be4bdb" defaultRating={3} size={5} />
                <StarRating color="#63e6be" defaultRating={4} size={10} />
                <StarRating color="#f08c00" defaultRating={5} size={15} />
            </div>
        </div>
    );
}

export default App;

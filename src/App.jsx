import Card from "./components/Card";
import "./index.css";

const appStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: "4rem",
    alignItems: "center",
    height: "100vh",
};

function App() {
    return (
        <div style={appStyle}>
            <Card />
        </div>
    );
}

export default App;

import "./App.css"
import Discovery from "./components/discovery/discovery";
import Newfeed from "./pages/newfeed/newfeed";

function App() {
    return (
       <div className="container">
            {/* <Newfeed />
            <Newfeed />
            <Newfeed /> */}
            <Discovery />
       </div>
    )
}

export default App;
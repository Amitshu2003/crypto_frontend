import Navbar from "./components/Navbar";
import LeftContainer from "./components/LeftContainer";
import MiddleContainer from "./components/MainContainer";
import RightContainer from "./components/RightContainer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row h-[100vh]">
      <LeftContainer />
      <MiddleContainer />
      <RightContainer />  
      </div>
    </div>
  );
}

export default App;

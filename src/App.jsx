import "./App.css";
import Lottary from "./Lottary";

let winCondition = (ticket) => {
  return ticket[0] === 0;
};

function App() {
  return (
    <>
      <Lottary n={2} winCondition={winCondition} />
    </>
  );
}

export default App;

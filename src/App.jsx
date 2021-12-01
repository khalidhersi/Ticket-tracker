import "./App.scss";
import sunrise from "./assets/images/sunrise.png";
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon.png";
import Nav from "./components/Nav/Nav";
import Ticket from "./components/Ticket/Ticket";
import Employee from "./components/Employee/Employee";
import team from "./data/team";

const App = () => {

  const currentHour = new Date().getHours();
  let greetingImg = sunrise;
  let greetingTime = "Morning!";

  const teamArr = team.map(employee => {
    return employee.id
  })

  if (currentHour >= 12) {
    greetingImg = sun;
    greetingTime = "Afternoon!";
  }

  if (currentHour >= 18) {
    greetingImg = moon;
    greetingTime = "Evening!";
  }

  return (
    <div className="app">
      <Nav />
      <header className="greeting">
        <img src={greetingImg} alt={greetingTime} className="greeting__img" />
        <h1 className="greeting__heading">
          Good {greetingTime} <br /> Everyone
        </h1>
      </header>
      <main className="main">
        <Ticket id={teamArr}/> 
        <Employee />
        <Ticket /> 
        <Ticket /> 
        <Ticket /> 
      </main>
    </div>
  );
};

export default App;

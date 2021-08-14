
import './App.css';
import Form from "./components/form";
import Card from './components/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";
import ToggleTheme from './components/ToggleTheme';

function App() {
  const theme = useSelector((state) => state.theme);
  console.log(theme);
  return (
    <div className={theme ? "App dark" : "App"}>
      <Form />
      <Card />
      <ToggleTheme/>
    </div>
  );
}

export default App;

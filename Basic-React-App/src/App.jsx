import "./App.css"

//import
import Title from "./Title.jsx";
// import { Title } from "./Title.jsx";
import ProductTab from "./ProductTab";
import Msgbox from "./MsgBox.jsx";
import Button from "./button.jsx";
import Form from "./From.jsx";


function App() {
  return (
    <>     
      <Title /> 
      <hr />
      <Msgbox userName="Rohit" textColor="red"/> 
      <Msgbox userName="Apna-College" textColor="green"/>
      <Msgbox userName="Senta-Broters" textColor="blue"/> 
      <hr /><br />
      <ProductTab /> 
      <br /><hr /><hr /><br />
      <Button/> 
      <br /><hr /><br />
      <Form/> 
      <br /><hr /><hr /><br />
    </>
  );
}

export default App

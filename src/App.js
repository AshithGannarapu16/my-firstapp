
import ButtonComponent from "./components/button/button-component";
import ListComponent from "./components/list/list";
import OrderedList from "./components/list/orderedlist/orderedlist";
import UnorderedList from "./components/list/unorderedlist/unorderedlist"
import Table from "./components/table/table";
import Counter from "./components/counter/counter";
import Ashith,{HeadingComponent2 as Ashithh,HeadingComponent3 as Gannarapu} from "./components/heading/heading";
import { Greeting } from "./components/greeting/greeting";
import { TodoList } from "./components/todo/todo-list";
import Buttoncomponent from "./components/classBased/button-component";
import Box from "./components/box/class-box";
// import Box from "./components/box/box";
import ApiCall from "./components/exceptionalHandling/api-call";
import InlineStyles from "./components/styling/inline-style";
import ExternalStyles from "./components/styling/external";
import ModuleStyles from "./components/styling/module-styles";
import BootstrapLayout from "./components/bootstarp/first-component";
import MapMethod from "./components/bootstarp/mapMethod";
import NavBar from "./components/bootstarp/navbar"
import ParentComponent from "./components/props/parent";

function App(){
  return(
    
    <div>
      {/* <ModuleStyles/> */}
     {/* <ApiCall/>  */}
      {/* <InlineStyles/> */}
      {/* <ExternalStyles/> */}
      {/* <BootstrapLayout/>
      <MapMethod/> */}
      {/* <NavBar/> */}
      <ParentComponent/>

      
    




  
    
    </div>
  )
}
export default App
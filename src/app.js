import React, { useState } from "react"
import { Route, BrowserRouter } from 'react-router-dom'
import Accordion from "./components/accordion"
import Search from "./components/search"
import Dropdown from "./components/dropdown"
import DropDown from "./components/dropdown"

const items = [
    {
        title: "Question 1",
        content: "This is Answer 1"
    },
    {
        title: "Question 2",
        content: "This is Answer 2"
    },
    {
        title: "Question 3",
        content: "This is Answer 3"
    },
]
const Colors = [
    {
        Label: "Red",
        Color: "red"
    },
    {
        Label: "Blue",
        Color: "blue"
    },
    {
        Label: "Green",
        Color: "green"
    }
]    
const App = ()=>{
    const [selected, setSelected] = useState(Colors[0])

    return(
        <div>
            <BrowserRouter>
                <div>
                    {/* React router V5 method for passing the prop to the component */}
                    <Route path="/" exact> <Accordion items={items} /> </Route> 

                    <Route path="/search" exact component={Search} />
                    
                    {/* React router V4 method for passing the prop to the component */}
                    <Route  path="/dropdown" 
                            exact 
                            render={()=>  <DropDown colors={Colors} 
                                                    selected={selected}
                                                    onSelectChange={setSelected}
                                            />
                                    } />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
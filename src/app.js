import React, { useState } from "react"
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
            <DropDown selected={selected} onSelectChange={setSelected} colors={Colors} ></DropDown>
        </div>
    )
}

export default App
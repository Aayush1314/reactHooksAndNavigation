import React from "react"
import Accordion from "./components/accordion"
import Search from "./components/search"
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
const App = ()=>{
    return(
        <div>
            <br></br>
            <Search />
        </div>
    )
}

export default App
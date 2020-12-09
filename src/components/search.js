import React, { useState, useEffect } from "react"
import axios from 'axios'
import Accordian from './accordion'
import Accordion from "./accordion"

const Search = () => {

    const [Term, setTerm] = useState("Program")
    const [DebouncedTerm, setDebouncedTerm] = useState(Term)
    const [Results, setResults] = useState([])
    //var timeOutId

    useEffect(()=>{
        const timeOutId = setTimeout(()=>{
            setDebouncedTerm(Term)
        }, 1000)

        return(()=>{
            clearTimeout(timeOutId)
        })
    },[Term])

    useEffect(()=>{
        const APIcall = async ()=>{
            const { data } = await axios.get("https://en.wikipedia.org/w/api.php",{
                params:{
                    action: "query",
                    list:"search",
                    origin: "*",
                    format: "json",
                    srsearch: DebouncedTerm
                }
            })
            if (data.query){  
              setResults(data.query.search)
            }
        }
        APIcall()
    },[DebouncedTerm])

    /*
    We have to declare 2 diff useEffects due to this warning in console:
        React Hook useEffect has a missing dependency: 'Results.length'. 
        Either include it or remove the dependency array  react-hooks/exhaustive-deps
    
    useEffect(function(){
        // Cannot declare first argument of useEffect as async
        // So create a new function inside useEffect and declare it async and then call it.
        
        
        ============First method to declare a async function in useEffect=========

        (async ()=>{
            await axios.get("URL")
        })()

        
        //===============Second method to declare a async function in useEffect========================= 
        const APIcall = async ()=>{
          const { data } = await axios.get("https://en.wikipedia.org/w/api.php",{
              params:{
                  action: "query",
                  list:"search",
                  origin: "*",
                  format: "json",
                  srsearch: Term
              }
          })
          if (data.query){  
            setResults(data.query.search)
          }
          
        }
        if (Term && !Results.length ){
            APIcall()
        }
        else{
            timeOutId = setTimeout(()=>{
                if (Term){
                    APIcall();
                }
            },1000)
            // This is return statement for useEffect.
            // This returns only a function which is called first whenever the page is rerendered.
            return(()=>{
                clearTimeout(timeOutId)
            })
        }

        
        
    },[Term])
    */

    return (
        <div>
            <div class="form-group">
                <label htmlFor="Search">Search Here</label>
                <input 
                    type="text" 
                    value= {Term} 
                    onChange={ (event)=> {
                        setTerm(event.target.value)
                        /*
                        //My way to use clear time out
                        if (timeOutId){
                            clearTimeout(timeOutId)
                        }}
                        */
                        } 
                    }
                    class="form-control" 
                    id="Search"  
                    placeholder="Enter Search Term" 
                />  
            </div>
            <br />
            <Accordion items= {Results} />
        </div>
    )
}

export default Search
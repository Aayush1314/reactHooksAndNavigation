import React, { useState } from "react"

const Accordion = ({ items }) => {


    const [activeinddex, setActiveIndex] = useState(null)


    //HELPER FUNCTION FOR ONCLICK
    const onTitleClick = (index) => {
        setActiveIndex(index)
    }
    //MAIN FUNTION TO EXPORT
    const renderedItems = items.map((item, index) => {
        return (
            <React.Fragment key={item.title}>

                <div class="card" onClick={() => onTitleClick(index)}>
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target={`#toggle${index}`} aria-expanded="true" aria-controls={`toggle${index}`}>
                                {item.title}
                            </button>
                        </h2>
                    </div>
                    <div id={`toggle${index}`} class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                            <div class="media">
                                <div class="media-body">
                                    <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
                                </div>
                                <a href= {`https://en.wikipedia.org?cruid=${item.pageid}`} class="align-self-center ml-3 btn btn-dark">GO</a>
                            </div>
                                
                            </div>
                        </div>
                    </div>
            </React.Fragment>

        )
    })
    return(
                <div className="col-6 ">
                    <div className="accordion border border-dark" id="accordionExample">
                        {renderedItems}
                    </div>
                </div>
    )
}

export default Accordion
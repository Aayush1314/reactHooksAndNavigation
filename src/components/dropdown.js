import React from 'react'

const DropDown = ({ colors, selected, onSelectChange }) => {
    
    const renderedColors = colors.map((color) => {

        if (selected.Color===color.Color){
            return null
        }

        return (
            <React.Fragment>
                <a onClick={ ()=> onSelectChange(color) }  class="dropdown-item" href="#">{color.Label}</a>
            </React.Fragment>
        )
    })
    

    return (
       
        <div class="dropdown w-100 d-flex justify-content-center">
            <button class="btn btn-secondary dropdown-toggle w-50" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {selected.Label}
            </button>
            <div class="dropdown-menu w-50" aria-labelledby="dropdownMenuButton">
                {renderedColors}
            </div>
        </div>
        
        
    )
}

export default DropDown
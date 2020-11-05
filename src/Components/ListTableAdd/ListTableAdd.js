import React, { Component } from 'react'

class ListTableAdd extends Component {
    render() {

        const {handlerStateInput, handleState} = this.props

        return(
            <div class="container">
               <div class="row justify-content-md-center">
                    <div class="col col-lg-8">
                <form className="list-add">
                    <div class="form-row align-items-center col-lg-12">
                        <div className="col-auto">
                            <input type="text" class="form-control mb-2" id="inlineFormInput" 
                            placeholder="Title" onChange={handlerStateInput}/>
                            <button type="submit" class="btn btn-primary mb-2" onClick={handleState}>Submit</button>
                        </div>
                    </div>
                </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default ListTableAdd;
import React, { Component } from 'react';
class ClassBased extends Component {

    state ={

        showtext : true,
        changecolor : true
    }

    handleclick = () =>{
        console.log("button clicked");
        const {showtext, changecolor} = this.state
        this.setState({
            showtext : !showtext,
            changecolor : !changecolor
        });
        // this.showtext = !this.showtext;
        // console.log(this.showtext);
    }

    render(){
        console.log("showtext",this.state.showtext);
        const {showtext,changecolor} = this.state

        return(
            <div>
                <h1>hello classabased </h1>
                {
                    showtext ? <h1 style={{color: changecolor ? 'red' : 'green'}}>Toggled </h1> : null
                }
                <button onClick={this.handleclick}>Toggle</button>
            </div>
        );
    }
}
export default ClassBased;
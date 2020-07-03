import React from 'react'

class Buttons extends React.Component {
/*constructor(props){
    super(props)
}*/

    render(){
        return (
            <div className="buttons">
                <span>{this.props.headerDate.month}{this.props.headerDate.year}</span>
                <button >M-</button>
                <button >Now</button>
                <button >M+</button>
            </div>
        )
    }
}

export default Buttons
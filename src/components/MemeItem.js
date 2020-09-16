import React,{Component} from 'react'
import {connect} from 'react-redux'
import {createMeme} from '../actions'
class MemeItem extends Component
{
    constructor()
    {
        super()
        this.state={
            hoverState:false
        }
    }
    postMemes()
    {
        console.log('this.props',this.props)
        const {text0,text1}=this.props;
        const memeObj={
            template_id	:this.props.id,
            text0,
            text1
        }
        this.props.createMeme(memeObj)
    }
    render()
    
    {let meme=this.props;
        return(<div className='meme-item'
        onMouseEnter={()=>this.setState({hoverState:true})}
        onMouseLeave={()=>this.setState({hoverState:false})}
        onClick={()=>this.postMemes()}
        >

                
            <img src={meme.img} alt={meme.name} className={this.state.hoverState ?'meme-img darken-img':'meme-img'}/>
            <h4 className={this.state.hoverState? 'meme-text':'no-txt'}>{meme.name}</h4>

        </div>)
    }
}
export default connect(null,{createMeme}) (MemeItem)
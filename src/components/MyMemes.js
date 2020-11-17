import React, { Component } from 'react'
import {connect} from 'react-redux'
 class MyMemes extends Component {
    

    render() {
        return (
            
                 <div>

                {this.props.myMemes.length ?
                
                
                this.props.myMemes.map((meme,index)=>{
                    return (<div><img key={index} src={meme.data.url} className='my-meme-img'/>  
                    <a href={meme.data.url}>Download yours memes </a> </div>)
                }) : ''
                
                }

               
            </div> 
            
        )
    }
}
function mapStateToProps(state)
{
    return{ myMemes:state.myMeme}
}

export default connect(mapStateToProps,null)(MyMemes)

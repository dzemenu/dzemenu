import React,{Component} from 'react'
import {connect }from 'react-redux'
import {Form} from 'react-bootstrap'
import MemeItem from './MemeItem'
import MyMeme from './MyMemes'
import '../styles/index.css'
class App    extends Component{
    constructor ()
    {
        super()
        this.state={
            memeLimit:10,
            text0:'',
            text1:''
        }
    }
    render()

{
    return(<div>
        <div><u>Welcome to Meme Generator</u></div>
        <MyMeme />
        <Form inline>
            <h4>Write something</h4>
        <Form.Group>
            <Form.Label>Top</Form.Label>
            <Form.Control type='text' onChange={event=>this.setState({text0:event.target.value})}></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label>Bottom</Form.Label>
            <Form.Control type='text' onChange={event=>this.setState({text1:event.target.value})}></Form.Control>
        </Form.Group>
        </Form>
        
        {
            this.props.memes.slice(0,this.state.memeLimit).map((meme,index)=>{
                
            return <MemeItem key={index} id={meme.id}img={meme.url} name={meme.name}
             text0={this.state.text0}
              text1={this.state.text1}/>
            })
        }
        <div onClick={()=>this.setState({memeLimit:this.state.memeLimit+10})} className='meme-button'>Load More Memes ...</div>
        </div>
    )
}}
function mapStateToProps(state)
{
    return state;
}
export default connect(mapStateToProps,null) (App);
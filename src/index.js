import React,{Component} from 'react'
import ReacDOM from 'react-dom'
import './index.css'
const root=document.getElementById('root')
class Form extends Component{
    state={
        firstname:'',
        role:'',
        skills:{
            html:false,
            css:false,
            js:false
        },
        

    }
handleChange=(e)=>{
    const {name,value,type,checked}=e.target
    console.log(checked,'check message');

    if(type==='checkbox'){
    this.setState({
        skills:{...this.state.skills,[name]:checked}})




    }
    else{
        this.setState({[name]:value})
    }

}
render(){
    let skills=this.state.skills
    let skillList=[]
    for(const k in skills){
        if(skills[k]){
skillList.push(k)
        }
    }
   let skillDiv= skillList.map((e)=><li key={e}>{e}</li>)

    console.log(skillDiv);

    return(
        <div className='main'>
        <div className='form'>
            <div>
        <label htmlFor='fname'>Your Name Please?</label>
        <input type='text' id='fname' name='firstname'onChange={this.handleChange}  value={this.state.firstname} /></div>
        <div>
        <label htmlFor='role'>What's Your Role</label>
        <input type='text' id='role' name='role'onChange={this.handleChange}  value={this.state.role} /></div>
       <div>
        <label htmlFor='html'>HTML</label>
        <input type='checkbox' id='html' name='html'onChange={this.handleChange}  value={this.state.skills['html']} /></div>
        <div>
        <label htmlFor='css'>CSS</label>
        
        <input type='checkbox' id='css' name='css'onChange={this.handleChange}  value={this.state.skills['css']} /></div>
       <div>
        <label htmlFor='js'>JS</label>
        
        <input type='checkbox' id='js' name='js'onChange={this.handleChange}  value={this.state.skills['js']} />
        </div></div>
       <div className='card'>
        <h1>Resume</h1>
        <h3>Myself</h3>
        <h2>{this.state.firstname}, iam a <strong> {this.state.role}</strong></h2>
        <h3>My Skills:</h3>
        <ul>{skillDiv}</ul>
        </div>

        </div>
    )
}

}
ReacDOM.render(<Form/>,root)
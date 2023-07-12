import { useRef, useState } from "react";
import {toast } from "react-toastify";




function Form1(props){
const [text,setText]=useState('');
// let newText="This is changed State";

// setText('newText');


function textChangeHandler(event){
   let  newText=event.target.value;
   setText(newText);
    // console.log(newText);
    
}

function uppercaseHandler(){

    console.log('uppercase');
    // setText('this is chsnged stste');
    let uc=text.toUpperCase();
    setText(uc);
    console.log(uc);
    
}
const clearTextHandler=() =>{
    setText('');
}

const camelCaseHandler =()=>{
    let newWord=text.split(" ").map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
    setText(newWord)
    // console.log(newWord);
}

const downloadHandler =()=>{

    const blob=new Blob([text],{type:'text/plain'});
    const url=URL.createObjectURL(blob);
    const link=document.createElement('a');
    link.href=url;
    link.setAttribute('download','textFile.txt');
    document.body.appendChild(link);
    link.click();

}

const paraRef=useRef(null);
const copyHandler =()=>{
    toast('Text Copied to Clipboard');

    navigator.clipboard.writeText(text);
    // console.log('copy');
    // alert('copy');
    
}


function lowercaeHandler(){
    let lc=text.toLowerCase();
    setText(lc);
    // console.log(lc)

}

const [style,setStyle]=useState({
        backgroundColor:'white',
        color:"black",    
});
const [btntext,setbtnText]=useState('Enable Dark Mode');



const darkMode =()=>{
    
    if(style.backgroundColor==='black'){
        setStyle({
        backgroundColor:'white',
        color:"black"
    })
        setbtnText('Enable Light Mode');

        
}else{
    setStyle({
        backgroundColor:'black',
        color:"#fff"
    })
    setbtnText('Enable Light Mode');

    }
   
}
    
    let character=text.trim().length;
    let spaces=text.trim().split(" ").length-1;
    // console.log(spaces);
    let words=text.trim().split(" ").length;
    // console.log(words)

    return (
        <div className="container my-5 " style={{backgroundColor:props.mode==='dark'?'grey':'white'}}>
            <h2>Enter Text Here to Analyse</h2>
        <div className="form-floating">
            <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black',height:'200px',cursor:'inherit'}} ref={paraRef} placeholder="Leave a comment here" value={text}  onChange={textChangeHandler}></textarea>
            <label htmlFor="floatingTextarea">Comments</label>
        </div>
        <div className="container my-3">
            <button className="btn btn-info mx-2" style={style} onClick={uppercaseHandler}>Uppercase</button>
            <button className="btn btn-info mx-2" style={style} onClick={lowercaeHandler}>Lowercase</button>
            <button className="btn btn-info mx-2" style={style} onClick={camelCaseHandler}>Camel Case</button>
            <button className="btn btn-info mx-2" style={style} onClick={downloadHandler}>Download</button>
            <button className="btn btn-info mx-2" style={style} onClick={copyHandler}>Copy</button>
            <button className="btn btn-info mx-2" style={style} onClick={clearTextHandler}>Clear</button>
        </div>
        <p>{character-spaces} character and {words} words</p>
        <p>{ (text.split(" ").length * 0.008 )  } min read</p>
        <p></p>
        <div>
        {/* <button className="btn btn-info" style={style} onClick={darkMode}>{btntext}</button> */}
        </div>
        </div>
    )
}

export default Form1;
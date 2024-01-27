
 // 1--ways to print in js
//console.log("hello world");
// alert("me");
// document.write("this is doc.")

// 2--js console API
console.log("hello world",4+5,"another log");
// alert("me");// document.write("this is doc.")
console.warn("this is warning")
console.error("this is an error");
let eleclass = document.getElementsByClassName("container")
//  console.log(eleclass);  eleclass[0].classList.add("bg-primary")
eleclass[0].classList.add("text-success")
 //  console.log(ele.innerHTML);
 //  console.log(ele.innerText);
 //  console.log(eleclass[0].innerHTML);
 //  console.log(eleclass[0].innerText);

 tn = document.getElementsByTagName('div');
//  console.log(tn);
 
 // Corrected type in the next two lines
 createdElement = document.createElement('p');//je batavse k code ma ketla 'p'==paragraph chhe.
 createdElement.innerText = "This is a created paragraph";
 tn[0].appendChild(createdElement);
 //tn[0]== showing first div.
 
 //selecting using query
//  sel = document.querySelector('.container') // class contair batavse console ma.
//  console.log(sel)

//  sel = document.querySelectorAll('.container')
//  console.log(sel)

//  //events
// function clicked()
// {
//    console.log('button most clicked');//je batave k tamaru button click karelu chhe.
// }
//  window.onload = function(){
//         console.log('the doc. was loaded');//je click,over,up,down , in-fact any events console par print thayeli batave je je karo ae.
//  }
// firstContainer.addEventListener('click',function(){
       
//         console.log("click hua");
// })
// // firstContainer.addEventListener('mouseover',function(){
// //         console.log("click on mouseover container");
// //  })

// let prevHTML =document.querySelectorAll('.container')[1].innerHTML;
//  firstContainer.addEventListener('mouseup',function(){
//        document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//        console.log("click on mouseup container");
// })
firstContainer.addEventListener('mousedown',function(){
       document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b>"
       console.log("click on mousedown container");
})

//arrow functions
// function sum(a,b){
//  return a+b;
// }
sum=(a,b)=>{
       return a+b;
}

logkaro=()=>{
       console.log("i am ur log");
}

//setTimeout and setInterval
// setTimeout(logkaro,1000);

// setInterval(logkaro,2000);
// clr =setInterval(logkaro,2000);

// js localStorage: => jema private categories save na karay bcz its are in front of view to easily see in public -- only name are nice to store.

// localStorage.setItem('name','vidhi')
// undefined
// localStorage
// Storage {name: 'vidhi', length: 1}
// localStorage.getItem('name')
// 'vidhi'
//localstorage.removeItem('name')
//localStorage.clear()

// JSON::

obj={name: 'vidhi', length: 1, a: {this:'tha""t'}}//json are not eccept double-quotes.
jso=JSON.stringify(obj);
console.log(typeof jso)
console.log(jso)
parsed=JSON.parse(`{"name": "vidhi", "length": 1, "a": {"this":"that"}}`)
console.log(parsed);

//template literals - backTicks:
a=34;
console.log(`this is my ${a}`)
   
    
    
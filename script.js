// // // // var name = 'grigoriy'

// // // // console.log(name)

// // // // // var age = prompt('Сколько вам лет');
// // // // // console.log(age);

// // // // var myMass = ['Grisha', 'sasha', 'petya'];

// // // // console.log(myMass.length);
// // // // console.log(myMass[2]);
// // // // for(var i = 0; i < myMass.length; i++)
// // // // console.log("Privet " + myMass[i]);
// // // // var name = prompt('Введите имя');
// // // // // if ( age > 18 ){
// // // // //     alert("priver")
// // // // // }
// // // // //  else if(age > 16 ){
// // // // //     alert('privet'); 
// // // // //  }
// // // //  switch(name) {
// // // //      case 'petr':{
// // // //          alert('petr shop');
// // // //          break;
// // // //      }
// // // //      case 'vasiliy':{
// // // //      alert('что-то другое')
// // // //      break;
// // // //      }
         
// // // //  }
// // // //  function myfun(number1,number2){
// // // //      return number1 - number2;
    
// // // //  }

 
// // // //  var a = myfun(3,2);
// // // // console.log(a);

// // // // var object = {
// // // // age: 25,
// // // // height: 175,
// // // // name: 'petr'

// // // // }
// // // //  var object3 = {
// // // //      age: 22,
// // // //      height: 180,
// // // //      name: 'sacha'
// // // //  } 
// // // // var myMass = [object,object3]
// // // // for(var i = 0; i < myMass.length; i++)
// // // // {
// // // //     console.log(myMass[i].age )
// // // // }
// // //  var a =  [12,14,16];
  
// // //  var b = a.map( function( e ){
// // //     return e * e
// // //  } );
// // // console.log(b);


// // // var a1 = [ 2, 3, 4];
 
// // // a1.forEach(function(r)
// // // {
// // //     console.log(r)
// // // }
// // // )
// // //  var a3 =  [20, 30, 40];
// // //   var a4 = a3.filter(function(w)
// // //   {
// // //       if(
// // //           w > 20
        
// // //       )
// // //       return true
// // //   }


// // //   )
// // // console.log(a4);
     
// // var a = [2,4,6,8];
// // // var a2 = a.reduce (function (accum, elem, index ){
// // //     return accum+elem 
// // // }, 0)


// // var a2 = a.reduce( (accum,elem) =>
// // accum+elem,0
 
// // )

// // console.log(a2);
// // var text = document.getElementsByTagName('h1');
// // text[0].innerHTML = 'привет'
// // function clickHandler(e){
// //     console.log("hehe")
// //     text[0].style.color = 'blue'; 
// // }
// // var ourDiv =document.getElementsByTagName('div')
// // ourDiv = ourDiv[0];
// // // ourDiv[0].onclick =() => {
// // //     alert('Hello');
// // // } 
// // ourDiv.addEventListener('mouseenter' , () => {ourDiv.style.backgroundColor ="red" } ) 
// // ourDiv.addEventListener('mouseleave' , () => {ourDiv.style.backgroundColor ="white" } ) 

// // const name = "Grisha";
// // let  greeting =  prompt('Введите значение')
// // alert(name + greeting);
// // function buttonClickHandler(e){

// //     var name=document.getElementsByName('name')[0]
// //     var password=document.getElementsByName('password')[0]
// //     alert(name.value + password.value
// //         )

// //}
//  function getIp ()  {

//     let span = document.getElementById('text')
//       if(span.innerHTML){
//           span.innerHTML= ''
        
//       }
//       else {
//         const prom = fetch ("https://api6.ipify.org/?format=json").then( (res)=>res.json() ).then(
//             (res)=>{
              
//                span.innerHTML = res.ip;
   
//             }
//         )
            
//       }

   

//  }

//   let button = document.getElementById('button')
//   button.addEventListener('click',myfunc)
   
//   function myfunc() {
//       getIp();
      
//   }
  var myMass = new Array(21)
myMass.fill(1)
myMass.fill('petya',7)
myMass.fill(3,14)  
// console.log(myMass)
var found = myMass.find(c=> c == 'petya')
console.log(found);
var found = myMass.indexOf('petya')
console.log(found)
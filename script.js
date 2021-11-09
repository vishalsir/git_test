
// const logic_array=function(age)
// {
//     return 2030-age;
// }

// const year=[1990,1998,1996];

// year.push(111);



// document.write(year.length)

// const cureent_temp=([22,3,44,5,6,7,8]);

// const cal_temp=function(temps)
// {
//     let max=temps[0];
//     let min=temps[0];
//     for(let i=0;i<temps.length;i++){

//         const curtemp=temps[i];

//         if(temps[i]>max)  max=curtemp;

//         if(temps[i]<min) min=curtemp;
        
        
//     }
//     document.writeln(max+", "+min)
   
//     return max-min;
// };
// //cal_temp([20,33,1,9,88]);
// const amplitude= cal_temp(cureent_temp);

// document.write(amplitude);

// var arr1=[2,3,5,6];
// var arr2=[3,4,5,6];

// function myfun(arr1){
//  let str='';

// for(let i=0;i<arr1.length;i++){

//     str=str+`${arr1[i]}*c in${i+1} days...`;
//   }

//   document.write(str);
// }

// myfun(arr1);

// console.log("jjj");

// let a=document;
// a=document.all;
// a=document.body;
// a=document.forms[0];
// console.log(a);

function calculate()
{
  const wd1=document.getElementById('wd').value;
  const mts=document.getElementById('mts').value;
  const comp=document.getElementById('comp').value;
  const ph=document.getElementById('ph').value;
  
  const total=parseInt(wd1) +parseInt( mts) +parseInt( comp) +parseInt( ph);

  //alert(total);

  let percentage=(total/400)*100;

 //alert(percentage);
let grades="";

 if (percentage <= 100 && percentage >=80)
 {
   grades='A'
 }
 else if(percentage <= 79 && percentage>=60){
 grades='B'
 }

 else if(percentage<=59 && percentage>=36){
   grades='C'
 }
 else if(percentage<=35){
  grades='Fail'
}
 else{
   grades='wrong choice';
 }

 if(percentage<=100 && percentage >=36)
 {
  document.getElementById('showdata').innerHTML=`Total:= ${total} ,  percentage:= ${percentage}% and 
  grades:= ${grades} , You are pass`;
 }
 else if(percentage>101){
  document.getElementById('showdata').innerHTML=` wrong data entered`;
 }
  else
  {
    document.getElementById('showdata').innerHTML=`Total:= ${total} out of 400. ,  percentage:= ${percentage}% and 
            grades:= ${grades} , You are fail`;
  }

}


calculate();


function first1(){
    // document.getElementById('testlocal12').innerHTML= Object.values(data);
    document.getElementById('lada').style.diplay = "none" ;
}

function logIn(){
    let accounts1 = JSON.parse(localStorage.getItem("key"))
    for(let i=0 ; i < accounts.length; i++){
    if(document.getElementById('e').value == JSON.parse(accounts1[i].email) &&  
    document.getElementById('p').value == JSON.parse(accounts1[i].password)){
        // document.getElementById("signIn").addEventListener("click", console.log("success"));
       console.log("success");
         }
         console.log('test');    
    }
    console.log('test');
}

class Account{
    constructor(email,password,firstName,lastName,phoneNumber){
        this.email = email;
        //this.email.type = "email";
        this.password = password;
        this.firstName = firstName;
        this.lastName =  lastName;
        this.PhoneNumber = phoneNumber;
    }
}
let text1 = "";
let account = {};
let accounts = [];
let s = 1;
function viewAll(){
   
    for(i=1;i<5;i++){
    text1 = JSON.parse(localStorage.getItem(s));
   // document.getElementById("myPara").innerHTML = Object.values(text1);
    console.log("hello");
    console.log(accounts);
    }
}
function signUp(){
    let _email = document.getElementById('email').value;
 let _password = document.getElementById('password').value;
 let _firstName = document.getElementById('fName').value;
 let _lastName = document.getElementById('lName').value;
 let _phoneNumber = document.getElementById('phoneNumber').value;

// let account = new Account() ;
 account = {_email,_password,_firstName,_lastName,_phoneNumber};

// account = new Account(_email,_password,_firstName,_lastName,_phoneNumber);
accounts.push(account);
console.log(accounts);
localStorage.setItem(s,JSON.stringify(accounts));
localStorage.setItem("key",JSON.stringify(accounts));
s++;
//viewAll();
}
let array = [];
class RiskCase{
    constructor(rcName,rcDangerLevel,rcDelayDuration,rcIsKnownBefore,rcSolutionNeeded,rcStatus,rcDescription){
        this.rcName=rcName,
        this.rcDangerLevel = rcDangerLevel,
        this.rcDelayDuration = rcDelayDuration,
        this.rcIsKnownBefore = rcIsKnownBefore,
        this.rcSolutionNeeded = rcSolutionNeeded,
        this.rcStatus = rcStatus,
        this.rcDescription = rcDescription
    }
    // get rcName() {
    //     return this.rcName;
    //  }
    //  set rcName(n){
    //      this.rcName=n;
    //  }
    //  get rcDangerLevel() {
    //     return this.rcDangerLevel;
    //  }
    //  get delay() {
    //     return this.rcDelayDuration;
    //  }
    //  get isKnown() {
    //     return this.rcIsKnownBefore;
    //  }
    //  get solutionNeeded() {
    //     return this.rcSolutionNeeded;
    //  }
    //  get status() {
    //     return this.rcStatus;
    //  }
    //  get description() {
    //     return this.rcDescription;
    //  }

}
// let RiskCase;
// let  RiskCase1 = new RiskCase(getValue('riskName'),getValue('dangerLevel'),getValue('delay'),getValue('isKnownBefore'),
// getValue('solutionNeeded'),getValue('description'),getValue('status'));

// function getValue(id){
//  l =  document.getElementById(id).value;
 
// }

// let addRiskBtn1 =   document.getElementById("addRisk").addEventListener("click", addRiskCase());

// let rcName1  =  document.getElementById('riskName').value;
// let dangerLevel1  =  document.getElementById('dangerLevel').value;
// let delay1  =  document.getElementById('delay').value;
// let isKnownBefore1  =  document.getElementById('isKnownBefore').value;
// let  solutionNeeded1 =  document.getElementById('solutionNeeded').value;
// let description1  =  document.getElementById('description').value;
// let rcstatus1  =  document.getElementById('status').value;


// let     riskCase1 = new RiskCase(rcName1,dangerLevel1,delay1,isKnownBefore1,solutionNeeded1,rcstatus1,description1);;




  
//console.log(JSON.stringify(riskCase1));

let i =1;
let     riskCases123  =[];
function create(){
   

        let rcName1  =  document.getElementById('riskName').value;
        let dangerLevel1  =  document.getElementById('dangerLevel').value;
        let delay1  =  document.getElementById('delay').value;
        let isKnownBefore1  =  document.getElementById('isKnownBefore').value;
        let  solutionNeeded1 =  document.getElementById('solutionNeeded').value;
        let description1  =  document.getElementById('description').value;
        let rcstatus1  =  document.getElementById('status').value;
        
        let riskCase1  = new RiskCase(rcName1,dangerLevel1,delay1,isKnownBefore1,solutionNeeded1,rcstatus1,description1);
       
        riskCases123.push(riskCase1);
        localStorage.setItem(i,JSON.stringify(riskCases123));
        console.log(JSON.stringify(riskCases123));
        
        i++;
        //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        document.getElementById('riskName').value='';
           document.getElementById('dangerLevel').value='';
        document.getElementById('delay').value='';
         document.getElementById('isKnownBefore').value='';
         document.getElementById('solutionNeeded').value='';
      document.getElementById('description').value='';
        document.getElementById('status').value='';
        
        document.getElementById('l').innerHTML="Risk successfully added";
    }
   
//document.getElementsByClassName('form-control').innerHTML='';  



let data = JSON.parse(localStorage.getItem(i));;
function vieww() {
// localStorage.getItem()
//document.getElementById('lada').innerHTML = "Trip added successfully" ;

// for(let i=1;i<k;i++){
   
//   console.log(data);
//   console.log("adel");
//  //document.getElementById('testlocal').innerHTML = Object.values(data);
//  console.log(Object.values(data));
// }
//data = JSON.parse(localStorage.getItem(17));
    // console.log(data.tId);
// console.log("hey");
    // console.log(JSON.stringify(riskCase1));
 
  }
  

  //#$#$#$#$#$#$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$#################################################33
  //############################################$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//   class Trip{
//     constructor(tId,tCargoCompanies,tOrigin,tDestination,tDeparture,tArrival,tRoute){
//         this.tId=tId,
//    this.tCargoCompanies=tCargoCompanies,
//    this.tOrigin=tOrigin,
//    this.tDestination=tDestination,
//    this.tDeparture=tDeparture,
//    this.tDestination=tDestination,
//    this.tArrival=tArrival,
//    this.tRoute=tRoute
//     }
// }
 


//let j =1;
let trip;
let number = 3;
console.log(number);
// function add(){
   

        let tId  =  document.getElementById('trip').value;
        let tCargoCompanies  =  document.getElementById('cargoCompanies').value;
        let tOrgin  =  document.getElementById('origin').value;
        let tDestination  =  document.getElementById('destination').value;
        let  tDepartue =  document.getElementById('departure').value;
        let tArrival  =  document.getElementById('arrival').value;
        let tVessels = document.getElementById('vessels').value;
        let tRoute  =  document.getElementById('route').value;
        
//         trip  = new Trip(tId,tCargoCompanies,tOrgin,tDestination,tDepartue,tArrival,tVessels,tRoute);
//        array.push(trip);
  
//         localStorage.setItem("key",JSON.stringify(array));
//         console.log(JSON.stringify(array));
      
 
//         //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        document.getElementById('trip').value='';
           document.getElementById('cargoCompanies').value='';
        document.getElementById('origin').value='';
         document.getElementById('destination').value='';
         document.getElementById('departure').value='';
      document.getElementById('arrival').value='';
        document.getElementById('vessels').value='';
        document.getElementById('route').value='';
        document.getElementById('lada').innerHTML = "Trip added successfully" ;

      document.getElementById('lada').style.display = "block";
      //  create();
        // document.getElementById('t').innerHTML="Trip successfully added";
    
   
// //document.getElementsByClassName('form-control').innerHTML='';  




// // function view() {
// // // localStorage.getItem()
// // document.getElementById('l').innerHTML="successfully added";
     

// //     // console.log(JSON.stringify(riskCase1));
  
// //   }


//   let table = document.createElement('tripTable');
//   let row_1;
// function createTable2(){
  
   





//     console.log(number);
   
//     for(i=0 ; i < 5 ; i++){
    
//    //    row_1 = table.insertRow(1);
        
//         let cell_01 = row_1.insertCell(0);
//         let id = document.createElement("label");
//         id.type = "text";
        
//         //input1.placeholder="Enter the subject";
//         //input1.className = "";
//         cell_01.appendChild(id);

//         let cell_02 = row_1.insertCell(1);
//         var input2 = document.createElement("input");
//         input2.type = "text";
//         input2.placeholder="Enter the grade";
//         input2.className = "numericInput";
//         cell_02.appendChild(input2);
        
//      }

// }
let res="";
let name = document.getElementById('name');
let sum = 0;
let text ="hello";
let average =0;
let  inputs = document.getElementsByClassName("numericInput");
function getSum(){
   
    let number = document.getElementById('nb').value;
    for(i=0 ; i < number ; i++){
     
       sum = sum + parseInt( inputs[i].value);
 // sum += inputs[i].value;

}
document.getElementById('total').innerHTML = sum;
document.getElementById('fname').innerHTML = document.getElementById('name').value;


check();
average = sum/number;
document.getElementById('avg').innerHTML = average;
document.getElementById('result').innerHTML = res;
console.log(average);



//     if(0<= average < 50) { 
//         text = "Unfortunately you failed!";
//     console.log("Unfortunately you failed!");
// }
     
//     else if(50 <= average <= 60){
//         text = "Congratulations, you passed but you have to work better";
//         console.log("congratulations, you passed but you have to work better");
//     }
//    else if(60 < average <= 80){
//     text = "Congratulations, you succeeded";
//     console.log("congratulations, you succeded");
//    }
//    else {
//     text = "Congratulations, you've achieved an excellent score!";
//         console.log("Congratulations, you've achieved an excellent score!");
//    }

//  score = 70;

// switch(average){
//     case average < 50:
//         text="Unfortunately you failed!";
//         console.log("Unfortunately you failed!");
//         break;
//      case 50 <= average < 60:
//             text="Congratulations, you passed but you have to work better";
//             console.log("Congratulations, you passed but you have to work better");
//             break;    
//      case 60 <= average < 80:
//             text="congratulations, you succeded";
//             console.log("congratulations, you succeded");
//             break;
            
//     case 80 <= average <= 100:
//             text="Congratulations, you've achieved an excellent score!";
//             console.log("Congratulations, you've achieved an excellent score!");
//             break;
// }



}
class Trip{
    constructor(tIds,tCargoCompaniess,tOrigins,tDestinations,tDepartures,tArrivals,tVesselss,tRoutes){
        this.tIds=tIds,
   this.tCargoCompaniess=tCargoCompaniess,
   this.tOrigins=tOrigins,
   this.tDestinations=tDestinations,
   this.tDepartures=tDepartures,
   this.tDestinations=tDestinations,
   this.tArrivals=tArrivals,
   this.tVesselss=tVesselss,
   this.tRoutes=tRoutes
    }
}


let k= 1;
 let p = document.createElement('p');
 let p1 =document.getElementById('testlocal');

let tripsList =  JSON.parse(localStorage.getItem(k));
let tripp;

function load(){
    var testObject = { 'one': 1, 'two': 2, 'three': 3 };

    // Put the object into storage
    localStorage.setItem('testObject', JSON.stringify(testObject));
    
    // Retrieve the object from storage
    var retrievedObject = JSON.parse(localStorage.getItem('testObject'));
    p1.innerHTML = retrievedObject;
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    document.getElementById('testlocal').innerHTML = 'retrievedObject: ' + (JSON.parse(retrievedObject));
    for(let key in tripsList){
        tripsList = JSON.parse(localStorage.getItem(k));
        console.log(key + ":", tripsList[key]);
        document.getElementById('testlocal').innerHTML=tripsList;
    }
    if(localStorage.getItem(k) != null){
         document.getElementById('testlocal').innerHTML = tripp;
    }
p1.innerHTML =  JSON.parse(localStorage.getItem(1));
console.log(JSON.stringify(JSON.parse(localStorage.getItem(1))+"jasbisabbasjvbwjvbwqbvwj"));
console.log(JSON.parse(localStorage.getItem(k)));
console.log("testing load");


}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111111111111111111111111


console.log(JSON.parse(localStorage.getItem("k")));
//Classes defined
let arrayt=[];
//console.log(JSON.parse(localStorage.getItem(k)));

function addd(){
  // console.log(Object.values(data)); // document.getElementById('td1').innerHTML = tripsList ;
    let table1 = document.getElementById("tablefa");

let tId  =  document.getElementById('trip').value;
let tCargoCompanies  =  document.getElementById('cargoCompanies').value;
let tOrigin  =  document.getElementById('origin').value;
let tDestination  =  document.getElementById('destination').value;
let  tDepartue =  document.getElementById('departure').value;
let tArrival  =  document.getElementById('arrival').value;
let tVessels = document.getElementById('vessels').value;
let tRoute  =  document.getElementById('route').value;
    let trippp = new Trip(tId, tCargoCompanies, tOrigin, tDestination, tDepartue, tArrival,tVessels,tRoute);
    arrayt.push(trippp)
    document.getElementById('trip').value='';
    document.getElementById('cargoCompanies').value='';
 document.getElementById('origin').value='';
  document.getElementById('destination').value='';
  document.getElementById('departure').value='';
document.getElementById('arrival').value='';
 document.getElementById('vessels').value='';
 document.getElementById('route').value='';
 if(tId !="" && tCargoCompanies !="" && tOrigin !="" && tDestination !="" && tDepartue !="" && tArrival !=""&&
  tVessels !=""&& tRoute !="" ){
    document.getElementById('lada').innerHTML = "Trip added successfully" ;
    document.getElementById('lada').style.display = "block" ;
 }
 else{
    document.getElementById('lada').innerHTML = "Please fill all the informations" ;
    document.getElementById('lada').style.display = "block" ;
 }

    // function: Pushses new skill, in "Skills" array
 
  //Employee Database "Localstorage"

//  tripp=tripsList[k];
     //tripList.push (new Trip("sad", "Asds", "asd", "qwrq2r", "qwr12f", "[[[wfwqf]]]","ffkff"));
      //tripsList.push (new Trip(tId, tCargoCompanies, tOrigin, tDestination, tDepartue, tArrival,tVessels,tRoute));
    //  employeeList.push (new Employee("Mads", 12345,"IT", 1999,  "1234@email.com", '1'));
    //  employeeList.push (new Employee("Jessica", 54321, "Sales",1998, "Mail2@mail.dk",'1'));
    //  employeeList.push (new Employee("Benjamin", 4321,"IT", 1997, "blabla@mail.dk", '1'));
  console.log(trippp);
  //tripsListString = JSON.stringify(tripsList)
     localStorage.setItem(k, JSON.stringify(trippp));
     localStorage.setItem("array", JSON.stringify(arrayt));
console.log(JSON.stringify(localStorage.getItem("array")));
    //console.log(JSON.parse(localStorage.getItem(k)));
    //tripsList = JSON.parse(localStorage.getItem(k))
   k++;
   
 //buildTable();
//  for(let m=0;m<k;m++){
    let row = table.insertRow(0);
//      for(let n=0;n<8;n++){
  let cell1 = row.insertCell(0);
  
//   p2.innerHTML = JSON.parse(localStorage.getItem(k));
    //    let cell.appendChild(p2);
        let cell2 = row.insertCell(1);
         let cell3 = row.insertCell(2);
         let cell4 = row.insertCell(3);
         let cell5 = row.insertCell(4);
         let cell6 = row.insertCell(5);
         let cell7 = row.insertCell(6);
         let cell8 = row.insertCell(7);
     
 
 //document.querySelector('#tripsData').appendChild(buildTable(tripList));

 

//   for(let i=0;i<k;i++){
//     console.log(JSON.parse(localStorage.getItem(k)));
//     console.log(JSON.parse(localStorage.getItem(k)));
//   }
 


//   cell1.appendChild(p1);
  //cell1.innerHTML = JSON.parse(localStorage.getItem(k));

  cell1.innerHTML =JSON.parse(localStorage.getItem(k)).tId;
  cell2.innerHTML = JSON.parse(localStorage.getItem(k)).tCargoCompanies;
  cell3.innerHTML = JSON.parse(localStorage.getItem(k)).tOrigin;
  cell4.innerHTML = JSON.parse(localStorage.getItem(k)).tDestination;
  cell5.innerHTML = JSON.parse(localStorage.getItem(k)).tDepartue;
  cell6.innerHTML = JSON.parse(localStorage.getItem(k)).tArrival;
  cell7.innerHTML = JSON.parse(localStorage.getItem(k)).tVessels;
  cell8.innerHTML = JSON.parse(localStorage.getItem(k)).tRoute;

  
}


// 2soma 2 functions we7de t3ml add w tenye print ta ma ttb3lak kl chi kl marra

// function buildTable(table,data) {
 
  
        // function: Pushses new skill, in "Skills" array
     
      //Employee Database "Localstorage"
    
      
         //tripList.push (new Trip("sad", "Asds", "asd", "qwrq2r", "qwr12f", "[[[wfwqf]]]","ffkff"));
    //     //   tripList.push (new Trip(tId, tCargoCompanies, tOrigin, tDestination, tDepartue,tVessels, tArrival,tRoute));
    // let table = document.createElement("table");
    
    // // Create table head and body
    // table.appendChild(document.createElement('thead'));
    // table.appendChild(document.createElement('tbody'));
    
    // let fields = Object.keys(tripList[0]);
    // let headRow = document.createElement("tr");
    // fields.forEach(function(field) {
    //     let headCell = document.createElement("th");
    //     headCell.textContent = field;
    //     headRow.appendChild(headCell);
    // });
    // table.querySelector('thead').appendChild(headRow);
    // tripList.forEach(function(object) {
    //     let row = document.createElement("tr");
    //     fields.forEach(function(field) {
    //         let cell = document.createElement("td");
    //         cell.textContent = object[field];
           
    //         row.appendChild(cell);
    //     });
    //     table.querySelector('tbody').appendChild(row);
    // });
    
    //  return table;


    function buildTable1(){
//     function generateTableHead(table, data) {
//         let thead = table.createTHead();
//         let row = thead.insertRow();
//         for (let key of data) {
//           let th = document.createElement("th");
//           let text = document.createTextNode(key);
//           th.appendChild(text);
//           row.appendChild(th);
        
      
     
//       function generateTable(table, data) {
//         for (let element of data) {
//           let row = table.insertRow();
//           for (key in element) {
//             let cell = row.insertCell();
//             let text = document.createTextNode(element[key]);
//             cell.appendChild(text);
//           }
//         }
//       }
      
//        table = document.querySelector("tripsData");
//        data = Object.keys(mountains[0]);
//       generateTableHead(table, data);
//       generateTable(table, tripList);
//     }
// }


//     let table = document.getElementById("myTable");
//    let row = table.insertRow(0);
//    let cell1 = row.insertCell(0);
//     let cell2 = row.insertCell(1);
//     cell1.innerHTML = "NEW CELL1";
//     cell2.innerHTML = "NEW CELL2";
  
}


function clear(){
    document.getElementById('f').display = "none";
}




function calculate(){


    let a= Number(document.getElementById("sub1").value);
    let b= Number(document.getElementById("sub2").value);
    if (a>100 || b>100){
        let z= document.getElementById("result");
            z.innerHTML="Not valid, Enter a no. betweeen 0 and 100";
    } else {

    let e=(a+b)/2;
    let f= document.getElementById("avg");
    f.innerHTML=e;
    if(e>=80 && e<=100){
        let z= document.getElementById("result");
        z.innerHTML="Very Good"
    }
    else if(e>=35 && e<80){
        let z= document.getElementById("result");
        z.innerHTML="Average"
    }
    else if(e>=10 && e<35){
        let z= document.getElementById("result");
        z.innerHTML="Fail"
    }
    
    else {
        let z= document.getElementById("result");
        z.innerHTML="Bad"
    }
} 
}
window.onload = function() {
    const element = document.getElementById("abc");
    // element.innerHTML = "New Heading";

    const element2 = document.getElementsByTagName("p");
    // element2[2].innerHTML = "this is the 2nd lelment"
    // element2[3].innerHTML = "this is the 3nd lelment"

    // console.log(element2[2] );

    for(let i = 0;i<element2.length;i++) {
        element2[i].innerHTML = `this is the ${i}th element`;
    }   

    //your code goes here
    const element3= document.getElementsByTagName("ul")[0];
    let list = "";
     for (let u=1; u<5; u++) {
        // element3.innerHTML = `category ${u}`;    
        list += `<li>category ${u}</li>` 
    }

    element3.innerHTML = list;

    // your code goes here
    const element4= document.getElementsByTagName("ol")[0];
    let list2="";
    for(let w=0;w<5;w++){
        list2 += `<li>cat ${w}</li>`

    }
element4.innerHTML=list2;
console.log(list2)


    // select by class name
    const imgClass = document.getElementsByClassName("images")[0];
    imgClass.innerHTML = `<p>ttttttcc </p>`

    const query1 = document.querySelector(".images");
    const query2 = document.querySelector("#abc");
    const query3 = document.querySelector("div");
    const query4 = document.querySelectorAll("div");


    console.log(query4[1])


    
}

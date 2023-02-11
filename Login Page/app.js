// let p=document.getElementById('mail').value;
// let f=mail(p)
// function mail(txt)
// {
//     if (txt.length!=0){
//         if (typeof(txt)=='string'){
//             return txt;
//         }
//         else {
//             alert("Enter your mailid")
//         }
//     }
// }

// function validate() {
//     let mail1=document.getElementById("mail");
//     let username1=document.getElementById("username");
//     let password1=document.getElementById("password");

//     if (username1 == "") {
//         alert("Enter Your User Name");
//         document.form1.name.focus();
//         return false;
//     }
//     if (!isNaN(username1)) {
//         alert("Enter ALphabhetes only");
//         document.form1.name.value="";
//         document.form1.name.focus();
//         return false;
//     }

//     if (password1.lenth>=6){
//         alert("Enter atleast  6 character");
//         document.form1.name.value="";
//         document.form1.name.focus();
//         return false;
//     }
// }







function validate() {
    var mail1=document.getElementById("mail");
    var username1=document.getElementById("username");
    var password1=document.getElementById("password");

    if (username1.value == "") {
        alert("Enter Your User Name");
        return false;
        usename1.focus();
        username1.style.border="solid 5px blue";
        // document.form1.name.focus();
        // document.getElementById("p1").innerHTML="Name";
       
        
    }
    if (!isNaN(username1.value)) {
        alert("Enter ALphabhetes only");
        document.form1.name.value="";
        document.form1.name.focus();
        return false;
    }

    if (password1.length>6 || password1.length==0){
        alert("Enter atleast  6 character");
        // document.form1.name.value="";
        // document.form1.name.focus();
        password1.focus();
        password1.style.border="solid 5px red";
        return false;
    }
    return true;
}

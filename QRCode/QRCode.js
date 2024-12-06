
let qrcode= new QRCode(document.querySelector(".qrcode"));
qrcode.makeCode("Why did scan me?");
function generate(){
    if(document.querySelector("input").value === "" || document.querySelector("input").value===" "){
        alert("Input field can't be empty");
    
    }
    else{
        qrcode.makeCode(document.querySelector("input").value);
        document.querySelector("input").value="";
    }
}
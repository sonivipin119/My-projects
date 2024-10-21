const str = document.getElementById("pass");
const test1 = document.getElementById("upc");
const test2 = document.getElementById("lowc");
const test3 = document.getElementById("spec");
const test4 = document.getElementById("digi");
const test5 = document.getElementById("vali");
const clearbtn = document.getElementById("clear-btn");
const d = document.getElementById("addtext");
function pasubmit() {
    var value = str.value;
    const upcasetest = /[A-Z]/.test(value);
    test1.innerHTML = upcasetest ? "✓" : "✗";
    test1.style.color = upcasetest ? "green" : "red";

    const lowcasetest = /[a-z]/.test(value);
    test2.innerHTML = lowcasetest ? "✓" : "✗";
    test2.style.color = lowcasetest ? "green" : "red";

    const specasetest = /[@&#$^!%]/.test(value);
    test3.innerHTML = specasetest ? "✓" : "✗";
    test3.style.color = specasetest ? "green" : "red";

    const digcasetest = /[0-9]/.test(value);
    test4.innerHTML = digcasetest ? "✓" : "✗";
    test4.style.color = digcasetest ? "green" : "red";

    let len = value.length;
    test5.innerHTML = len >= 6 ? "✓" : "✗";
    test5.style.color = len >= 6 ? "green" : "red";

    if (upcasetest && lowcasetest && digcasetest && specasetest) {
        if (len >= 6 && len <= 8) {
            d.innerHTML = "Weak 👎";
            d.style.color = "red";
        }
        if (len >= 8 && len <= 10) {
            d.innerHTML = "Medium 👌";
            d.style.color = "yellow";
        }
        if (len > 10) {
            d.innerHTML = "Strong 💪";
            d.style.color = "green";
        }
    }

    else if (len < 4) {
        d.innerHTML = "Too small! Not valid";
        d.style.color = "red";
    }
    else {
        d.innerHTML = "Missing Something";
        d.style.color = "red";
    }

}
clearbtn.addEventListener('click',()=>{
    var val = str.value;
    str.value = '';
    test1.innerHTML ='';
    test2.innerHTML ='';
    test3.innerHTML ='';
    test4.innerHTML ='';
    test5.innerHTML ='';
    d.innerHTML='';

})

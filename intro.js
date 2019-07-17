document.querySelector(".c1");
var x = $("div").outerWidth();
console.log(x);



function afterclick() {
    var phone = document.getElementById("phone").value;
    // output4.innerHTML = "( " + phone + ")";

    var fn = document.getElementById("fname").value;
    console.log(fn);
    var ln = document.getElementById("lname").value;
    // output.innerHTML = fn + " " + lname;
    var total_name = fn + " " + ln;

    console.log(total_name);


    // var output1 = document.getElementById("p");
    // output1.innerHTML = fn + " " + ln;

    var date = document.getElementById("date").value;
    var output1 = document.getElementById("d");
    output1.innerHTML = date;

    var emailll = document.getElementById("mail").value;
    // var output9 = document.getElementById("ema");
    //output9.innerHTML = emailll;
    var desc = document.getElementById("DES").value;
    var output2 = document.getElementById("desc");
    output2.innerHTML = desc;
    checkEmail(emailll); //اقرا

    checkCharacters(total_name);

    telephoneCheck(phone);


    function previewFile() {
        var preview = document.querySelector('img');
        var file = document.querySelector('prof').files[0];
        var reader = new FileReader();

        reader.onloadend = function() {
            preview.src = reader.result;
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }

    function telephoneCheck(str) {
        document.getElementById("messg1").innerHTML = "";

        if (isEmpty(str)) {
            return true;
        } else {
            var isphone = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(str);

            if (isphone) {

                document.getElementById("ph").innerHTML = str;
                return true;
            } else {
                document.getElementById("messg1").innerHTML = "You have entered an invalid number phone!";

                return false;
            }
        }
    }

    function checkCharacters(str) {
        document.getElementById("messg2").innerHTML = "";

        if (isEmpty(str)) {
            return true;
        } else {
            var isCharacter = /^[A-Za-z  ]+$/.test(str);
            if (isCharacter) {
                document.getElementById("p").innerHTML = str; //اطبع
                return true;
                console.log(str);

            } else {
                document.getElementById("messg2").innerHTML = "Please enter name without numbers!";
                return false;
            }
        }

    }

    function checkEmail(str) {
        document.getElementById("messg3").innerHTML = "";
        if (isEmpty(str)) {
            document.getElementById("messg3").innerHTML = "Please enter  Email";
            return true;
        } else {
            var isEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(str);
            if (isEmail) {
                document.getElementById("ema").innerHTML = str;
                return true;


            } else {
                document.getElementById("messg3").innerHTML = "Please enter valid Email";
                return false;
            }

        }
    }


}

function isEmpty(val) {
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}
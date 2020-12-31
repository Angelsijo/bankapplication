class Bank {
    static getaccountDetails = () => {
        var accountDetails = {
            userone: { accno: 1000, balace: 10000, username: "userone", password: "testuser" },
            usertwo: { accno: 1001, balace: 12000, username: "usertwo", password: "testuser1" },
            userthree: { accno: 1002, balace: 15000, username: "userthree", password: "testuser2" },
            userfour: { accno: 1003, balace: 20000, username: "userfour", password: "testuser3" }
        }
        return accountDetails;
    }
    //var obj=new Bank()
    //obj.login()
    // for calling in html page set method as static and call using class name Bank.login()
    //or create obj and call obj.login()
    static login = () => {
        // alert("login")
        var uname = document.querySelector("#uname").value;
        var pwd = document.querySelector("#pwd").value;
        // alert(uname+","+pwd)
        var dataset = Bank.getaccountDetails();
        if (uname in dataset) {
            //alert("user exist")
            if (pwd === dataset[uname].password) {
                //alert("successfull login")
                // setting to another page
                window.location.href = "homelogin.html";

            }
            else {
                alert("invalid password")
               //var plb=document.querySelector("#plabel")
               // plb.textContent("invalid password")
            }
        }
        else {
            alert("no user exist")
           //var ulb=document.querySelector("#ulabel")
       // ulb.textContent("invalid username")
        }
    }


    static deposit = () => {
    var uname = document.querySelector("#uname").value;
    var pwd = document.querySelector("#pwd").value;
    // to convert into number type use Number()
    var amt = Number(document.querySelector("#amt").value);
    var dataset = Bank.getaccountDetails();
    if (uname in dataset) {
        //alert("user exist")
        if (pwd === dataset[uname].password) {
            //alert("successfull login")
            dataset[uname].balace += amt;
            alert("your account is credited with Rs" + amt + "your balance is " + dataset[uname].balace)
        }
        else {
            alert("invalid password")
            
        }
    }
    else {
        alert("no user exist")
       
    }
}
static withdraw=()=>{
    var uname = document.querySelector("#uname").value;
    var pwd = document.querySelector("#pwd").value;
    // to convert into number type use Number()
    var amt = Number(document.querySelector("#amt").value);
    var dataset = Bank.getaccountDetails();
    if (uname in dataset) {
        //alert("user exist")
        if (pwd === dataset[uname].password) {
            //alert("successfull login")
            if(dataset[uname].balace>=amt)
            {
            dataset[uname].balace -= amt;
            alert("your account is debited with Rs" + amt + "your balance is " + dataset[uname].balace)
            }
            else{
                alert("insufficient balance")
              
            }
        }
        else {
            alert("invalid password")
            
        }
    }
    else {
        alert("no user exist")
        
    }
}

}
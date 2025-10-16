//  Notification Generator

function  sendNotification(email){
    if(email.includes('@')){
        email = email.split("@");
        const username = email[0];
        const domain = email[1];
        return username + " sent you an email from " + domain;
    } else {
        return "Invalid Email";
    }
}

const Email = sendNotification("zihad.ph@gmail.com");
console.log(Email);
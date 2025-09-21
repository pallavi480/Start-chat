function GenerateOTP (length){

let OTP='';

for(let i=0;i<length;i++){

    OTP+=Math.floor(Math.random()*10).toString();

}

return OTP;

}

console.log(GenerateOTP(6))
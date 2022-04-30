
const verifyPassword=(password,confirmPassword)=>{
    const errors=[]
    if(password!==confirmPassword){
        errors.push('Passwords do not match!')
    }
    if(password.length<6){
        errors.push('Password must be 6 or more characters')
    }
    const regEx=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    if(!regEx.test(password)||!regEx.test(confirmPassword))
    {
        errors.push('Password must be contained at least 1 number and 1 special character')
    }
    return errors

}
module.exports={verifyPassword}
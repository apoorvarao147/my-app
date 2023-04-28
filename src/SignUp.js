import { useState } from "react"

function SignUp(){

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const HandleSubmission = (event) => {
        event.preventDefault()
        console.log(`First name is ${firstName}, last name is ${lastName} and E-mail is ${email}`)
    }

    return(
        <div>
            <form className="signUpForm" onSubmit={HandleSubmission}>

                <input type="text" placeholder="First Name" name="FirstName" value={firstName} 
                onChange={e=>setFirstName(e.target.value)} required/>

                <input type="text" placeholder="Last Name" name="LastName"
                onChange = {e => setLastName(e.target.value)} value={lastName} required/>

                <input type="email" placeholder="Enter email" name="email" value={email} 
                onChange = {e => setEmail(e.target.value)} required/>
                <input className="submitButton" type="submit" value="SignUp"/>
            </form>
        </div>
    )
}

export default SignUp

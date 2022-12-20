import {useState}from "react"
export default function App5(){
    const [loggedIn,setloggedIn]=useState(false)
    // if we change the value true from false then it reflected welcome saurabh
    return(

        <div>
        

            {loggedIn?<h1> Welcome Saurabh</h1>:<h1>Welcome Guest</h1>}
            {/* loggedIn ? = we are using ? for If This is Correct the This
            :is using for else part */}
        </div>
    )
}
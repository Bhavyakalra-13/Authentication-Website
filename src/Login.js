import React,{useState} from "react"
import {url} from "./util/data"

function Login() {
    const [Email, setEmail] = useState("")
	const [Password, setPassword] = useState("")
	const submit=()=>{
		fetch(`${url}/signin`, {
			body:JSON.stringify({
				email:Email,
				password:Password
			}),
			method:"POST"
		})
		.then((res)=>res.json())
		.then((data)=>{
			if(data.ok){
				console.log("signin")
			}
		})
		.catch((er)=>console.log(er))
	}
    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center h-screen px-6">
                <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                    <div className="w-6/12 h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                        style={{backgroundImage: "url('https://images.unsplash.com/photo-1586252999747-9c4393922b69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80')"}} >
                    </div>
                    <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
                        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                            <div className="mb-4 w-full">
                                <label className="block text-gray-900 text-sm font-bold mb-2">Username</label>
                                <input
                                onChange={(e)=>setEmail(e.target.value)}
								value={Email}
                                className=" border rounded border-black w-full py-4 px-3 text-gray-900 bg-white"
                                    id="username" type="text" placeholder="Username"/>
						    </div>

                            <div className="mb-4 w-full">
                                <label className="block text-gray-900 text-sm font-bold mb-2">
                                    Password
                                </label>
                                <input 
                                onChange={(e)=>setPassword(e.target.value)}
                                value={Password}
                                className="border rounded border-black w-full py-4 px-3 text-gray-900 mb-3" id="password"
                                    type="password" placeholder="Password"/>
                            </div>
                            <div className="mb-6 text-center">
                                <button
                                onClick={()=>submit()}
                                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    type="button">
                                    Sign In
                                </button>
                            </div>
                            <hr className="mb-6 border-t" />
                            <div className="text-center">
                                <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="/#">
                                    Forgot Password?
                                </a>
                            </div>
                            <div className="text-center">
                                <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                    href="./signup">
                                    Don't have account? Register Now!
                                </a>
                            </div>
					    </form>
                    </div>
			    </div>
            </div>
        </div>
    );
}

export default Login;
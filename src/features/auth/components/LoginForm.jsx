import { useState } from "react"
import Input from "../../../components/Input"

function LoginForm () {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
    <>
     <div className="w-[40vh] h-[60vh] m-auto flex flex-col justify-around items-center">
        <h1 className="text-5xl">Login</h1>
        <form className="w-full h-3/5 flex flex-col justify-around" onSubmit={handleSubmit}>
            <div>
                <Input
                    label="Username"
                    type="text"
                    placeholder="Input Username"
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                    name="username"
                    value={username}
                />
            </div>

            <div>
                <Input
                    label="Password"
                    type="password"
                    placeholder="Input Password"
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    value={password}
                />
            </div>

            <button type="submit" className="border p-4 rounded-2xl">Login</button>
            <a href="" className="text-center">Or Register</a>
        </form>
     </div>
    </>
    )
}

export default LoginForm
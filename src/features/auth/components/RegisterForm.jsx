import { useState } from "react"
import Input from "../../../components/Input"

function RegisterForm() {


    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [mobile, setMobile] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
        <div className="w-[40vh] h-[100vh] m-auto flex flex-col justify-around items-center">
        <h1 className="text-4xl">Register</h1>
        <form className="w-full h-5/6 flex flex-col justify-around" onSubmit={handleSubmit}>
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

            <div>
                <Input
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                />
            </div>

            <div>
                <Input
                    label="E-mail"
                    type="email"
                    placeholder="Input Email"
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    value={email}
                />
            </div>

            <div>
                <Input
                    label="Firstname"
                    type="text"
                    placeholder="Input Firstname"
                    onChange={(e) => setFirstName(e.target.value)}
                    id="firstname"
                    name="firstname"
                    value={firstName}
                />
            </div>

            <div>
                <Input
                    label="Lastname"
                    type="text"
                    placeholder="Input Lastname"
                    onChange={(e) => setLastName(e.target.value)}
                    id="lastname"
                    name="lastname"
                    value={lastName}
                />
            </div>

            <div>
                <Input
                    label="Moblie"
                    type="text"
                    placeholder="Input Mobile"
                    onChange={(e) => setMobile(e.target.value)}
                    id="mobile"
                    name="mobile"
                    value={mobile}
                />
            </div>
            
            <div className="flex justify-between">
            <button className="border p-4 rounded-2xl" type="submit">Register for User</button>
            <button className="border p-4 rounded-2xl" type="submit">Register for Agent</button>
            </div>
            <button>Or Login</button>
            
        </form>
    </div>
        </>
    )
}

export default RegisterForm
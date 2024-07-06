import React from 'react'
import TextField from "../components/textField"
import CheckBox from '../components/CheckBox';
import Button from '../components/Button';
import GoogleButton from '../components/GoogleButton';
import PasswordInput from '../components/PasswordInput';
import backgroundImage from "../assets/imgs/67c49a851fcad994de242421fa24d52c.jpg"
import { logInUser } from "../services/authService"

const SignIn = () => {


    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // ensures the background image covers the entire div
        backgroundPosition: 'center', // centers the background image
        height: '100vh', // makes the div full height
        width: "55%"
    };


    const [text, setText] = React.useState('');
    const [isChecked, setIsChecked] = React.useState(false);

    const handleChange = (e) => {
        setText(e.target.value);
    };




    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleClick = () => {

        const res = logInUser({ "username": "michaelw", "password": "michaelwpass" }
        )
    };
    return (
        <div className='flex w-[100%] ' >
            <div className="p-6 max-w-md mx-auto bg-white  space-y-4 w-[45%]">
                <p>logoipsum</p>

                <div className='w-[10px]'>
                    <span className="text-[50px] font-bold">Welcome Back</span>
                </div>
                <p className='text-gray-600'>You need to be signed in to access the dashboard.</p>
                <TextField
                    className="w-full border border-gray-300 p-2 rounded-none focus:outline-none focus:border-blue-500"
                    placeholder="Enter text"
                    value={text}
                    onChange={handleChange}
                    label="Email or username"
                    type="text"
                />
                <PasswordInput
                    className="w-full border border-gray-300 p-2 rounded-none focus:outline-none focus:border-blue-500"
                    placeholder="Enter text1"
                    value={text}
                    onChange={handleChange}
                    label="Password"

                />
                <div className="flex justify-between items-center">
                    <CheckBox
                        className="my-checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        label="Keep me Signed In"
                    />
                    <a href="#" className="text-blue-500 hover:underline">Forgot Password</a>
                </div>
                <Button
                    className="w-full bg-green-300 text-black rounded-none py-2 px-4"
                    onClick={handleClick}
                    label="Click Me"
                />
                <GoogleButton
                    className="w-full border  border-gray-300 bg-white text-black rounded-none py-2 px-4"
                    onClick={handleClick}
                    label="Sign in with Google"
                />

                <p className="text-center text-sm text-gray-500">
                    Haven't you joined yet? <a href="#" className="text-blue-500 hover:underline">Sign In</a>
                </p>

            </div>

            <div style={divStyle}>

            </div>
        </div>
    )
}

export default SignIn

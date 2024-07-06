import React from 'react'
import TextField from '../components/textField'
import PasswordInput from '../components/PasswordInput'
import CheckBox from '../components/CheckBox'
import Button from '../components/Button'
import GoogleButton from '../components/GoogleButton'
import backgroundImage from "../assets/imgs/Right.jpg"
import logogIpsum from "../assets/imgs/logoipsum-297.svg"
import { Link } from 'react-router-dom'

const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    width: "100%"
};

const Signup = () => {

    const [isChecked, setIsChecked] = React.useState(false);
    const [emailOrUsername, setEmailOrUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showMessage, setShowMessage] = React.useState(false);

    const handleChangeEmailOrUsername = (e) => {
        setEmailOrUsername(e.target.value);
        if (e.target.value !== '' && password !== '') {
            setShowMessage(false);
        }
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value !== '' && emailOrUsername !== '') {
            setShowMessage(false);
        }
    };

    const handleClick = async () => {
        if (emailOrUsername === '' || password === '') {
            setShowMessage(true);
        } else {
            setShowMessage(false);
        }
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    return (

        <div className="flex flex-col md:flex-row w-full h-screen">
            <div className="p-6 md:max-w-md mx-auto bg-white space-y-4 w-full md:w-[50%]">
                <img alt='logoIpsum' src={logogIpsum} className="pb-2"></img>
                <div className='leading-none'>
                    <span className="text-[50px] font-bold">Get started with Blank</span>
                </div>
                <p className='text-gray-500 pb-2'>Join Blank for free today. No credit card required.</p>
                <TextField
                    className="w-full border border-gray-300 p-2 rounded-none focus:outline-none focus:border-blue-500"
                    placeholder="Enter"
                    value={emailOrUsername}
                    onChange={handleChangeEmailOrUsername}
                    label="Email "
                    type="text"
                />
                <PasswordInput
                    className="w-full border border-gray-300 p-2 rounded-none focus:outline-none focus:border-blue-500"
                    placeholder="Enter password"
                    value={password}
                    onChange={handleChangePassword}
                    label="Password"

                />
                {showMessage && (
                    <p className="text-red-500 text-sm">Please fill out both fields.</p>
                )}
                <div className="flex justify-between items-center">
                    <CheckBox
                        className="my-checkbox bg-green-400"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        label=<span> I agree to <span className="underline font-semibold">terms of use</span> and <span className="underline font-semibold">privacy statement</span></span>
                    />

                </div>
                <Button
                    className="w-full bg-green-400 text-black rounded-none py-2 px-4"
                    onClick={handleClick}
                    label="Continue "
                />
                <GoogleButton
                    className="w-full border border-gray-300 bg-white text-black rounded-none py-2 px-4"
                    onClick={handleClick}
                    label="Continue with Google"
                />
                <p className="text-center text-sm text-gray-500">
                    Already have account <Link to="/" className="text-black underline font-semibold hover:no-underline">Log in</Link>
                </p>
            </div>
            <div className='hidden md:block md:w-[50%]'>
                <div className='w-full h-full'>
                    <img alt='nn' className='h-screen w-full' src={backgroundImage} />
                </div>
            </div>
        </div>
    )
}

export default Signup

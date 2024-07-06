import React from 'react'
import TextField from "../components/textField"
import CheckBox from '../components/CheckBox';
import Button from '../components/Button';
import GoogleButton from '../components/GoogleButton';
import PasswordInput from '../components/PasswordInput';
import backgroundImage from "../assets/imgs/67c49a851fcad994de242421fa24d52c.jpg"
import logogIpsum from "../assets/imgs/logoipsum-297.svg"
import { logInUser } from "../services/authService"
import { Link } from 'react-router-dom';


const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    width: "100%"
};

const SignIn = () => {

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

            try {
                const res = await logInUser({ "username": emailOrUsername, "password": password });



                alert(`Login successful: ${JSON.stringify(res)}`);
            } catch (error) {
                alert(`Login failed: ${error.message}`);
            }
        }
    };





    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };
    return (


        <div className="flex flex-col md:flex-row w-full h-screen">
            <div className="p-6 md:max-w-md mx-auto bg-white space-y-4 w-full md:w-[50%]">
                <img alt='logoIpsum' src={logogIpsum} className="pb-4"></img>
                <div className='leading-none'>
                    <span className="text-[50px] font-bold">Welcome back</span>
                </div>
                <p className='text-gray-500 pb-4'>You need to be signed in to access the dashboard.</p>
                <TextField
                    className="w-full border border-gray-300 p-2 rounded-none focus:outline-none focus:border-blue-500"
                    placeholder="Enter email"
                    value={emailOrUsername}
                    onChange={handleChangeEmailOrUsername}
                    label="Email"
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
                        className="text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        label="Keep me signed in"
                    />
                    <a href="#" className="text-black underline font-semibold hover:no-underline">Forgot Password?</a>
                </div>
                <Button
                    className="w-full bg-green-400 text-black rounded-none py-2 px-4"
                    onClick={handleClick}
                    label="Click Me"
                />
                <GoogleButton
                    className="w-full border border-gray-300 bg-white text-black rounded-none py-2 px-4"
                    onClick={handleClick}
                    label="Sign in with Google "
                />
                <p className="text-center text-sm text-gray-500 pt-4">
                    Haven't you joined yet? <Link to="/Sig-Up" className="text-black underline font-semibold hover:no-underline">Sign in</Link>
                </p>
            </div>
            <div className='hidden md:block md:w-[50%]'>
                <div style={divStyle}></div>
            </div>
        </div>

    )

}

export default SignIn

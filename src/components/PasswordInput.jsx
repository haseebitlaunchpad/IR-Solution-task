import React from 'react'

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
const PasswordInput = ({ label, className, placeholder, value, onChange, ...props }) => {


    const [showPassword, setShowPassword] = React.useState(false);
    const [type, setType] = React.useState();


    const toggleShowPassword = () => {
        setShowPassword(prevShowPassword => (!prevShowPassword));
    };
    React.useEffect(() => {
        setType(
            showPassword ? 'text' : 'password'
        )
    }, [showPassword])

    return (
        <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <div className="relative">
                <input
                    type={type}
                    className={`w-full pr-10 ${className}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    {...props}
                />
                <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center justify-center text-sm leading-5"
                >
                    <span className="h-full flex items-center">
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </span>
                </button>
            </div>
        </div>
    )
}

export default PasswordInput

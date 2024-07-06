import React from 'react'
import googleIcon from "../assets/imgs/google-icon.png"

const GoogleButton = ({ className, onClick, label, ...props }) => {
    return (
        <div>
            <button
                className={`w-full border border-gray-300 bg-white text-black rounded-none py-2 px-4 flex items-center justify-center ${className}`}
                onClick={onClick}
                {...props}
            >
                <img
                    alt="logo"
                    src={googleIcon}
                    className="w-6 h-6 mr-2"
                    style={{ height: '30px', width: '30px' }}
                />
                <span className="ml-2">{label}</span>
            </button>
        </div>
    )
}

export default GoogleButton

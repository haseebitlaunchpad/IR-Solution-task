import React from 'react'


const Button = ({ className, onClick, label, ...props }) => {
    return (
        <div>

            <button
                className={className}
                onClick={onClick}
                {...props}
            >

                <span className="ml-2">{label}</span>
            </button>

        </div>
    )
}

export default Button

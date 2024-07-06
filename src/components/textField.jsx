import React from 'react'

const TextField = ({ className, placeholder, value, onChange, label, type, ...props }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <input
                type={type}
                className={className}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...props}
            />

        </div>
    )
}

export default TextField

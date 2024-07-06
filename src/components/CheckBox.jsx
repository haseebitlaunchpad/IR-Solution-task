import React from 'react'

const CheckBox = ({ className, checked, onChange, label, ...props }) => {
  return (
    <div>
      <label className="flex items-center">
        <input
          className={`h-6 w-6 border-0 rounded-none ${className} `}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          {...props}
        />
        <span className="ml-2"> {label}</span>
      </label>

    </div>
  )
}

export default CheckBox

import React from "react";

const CustomInput = (props) => {
  const {
    type,
    icon,
    placeholder,
    inputclassName,
    divClassName,
    name,
    id,
    value,
    defaultValue,
    onChange,
    ref,
  } = props;

  return (
    <div
      className={`border flex items-center px-3 py-2 rounded-xl ${divClassName}`}
    >
      {icon && <i className={icon}></i>}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full h-full p-2 bg-transparent outline-none ${inputclassName}`}
        name={name}
        id={id}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        ref={ref}
      />
    </div>
  );
};

export default CustomInput;

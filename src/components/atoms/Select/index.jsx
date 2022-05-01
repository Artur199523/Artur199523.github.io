import React,{memo} from "react"
import "./style.scss"
import Select from 'react-select'



const customStyles = {
    menu: (provided, state) => ({
        ...provided,
        backgroundColor: state.selectProps.backColor,
        fontSize: state.selectProps.fontSize,
        color: state.selectProps.color
    }),
    option: (provided, state) => ({
        ...provided,
        border: state.selectProps.border,
        color: state.isFocused ? state.selectProps.selectedColor : state.selectProps.textColor,
        padding: state.selectProps.optionSize,
        backgroundColor: state.selectProps.backColor,
        '&:active': {
            background: "none",
        },
    }),
    control: (base, {selectProps: {backColor, border, fontSize, inputSize,}}) => ({

        display: "flex",
        border: border,
        backgroundColor: backColor,
        fontSize: fontSize,
        padding: inputSize,
        "&:focus":{
            border: "1px solid red !important"
        }
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: state.selectProps.textColor
    }),
    multiValue:(provided,sate)=>({
      ...provided,
      background:   "#BA8926",

        "& button:hover":{
          color:"blue"
        }
    })
}

const SimpleSelect = ({selectedColor,textColor,backColor,fontSize,border,optionSize,inputSize,label,onChange,options,defaultValue,placeholder,isMulti,value}) => {
    return (
        <>
            {
                label && <label className="select-label">{label}</label>
            }
        <Select
            options={options}
            styles={customStyles}
            selectedColor={selectedColor}
            textColor={textColor}
            backColor={backColor}
            fontSize={fontSize}
            border={border}
            optionSize={optionSize}
            inputSize={inputSize}
            onChange = {(e)=>onChange({name:"currency",value:e})}
            defaultValue={defaultValue}
            value = {value}
            placeholder={placeholder}
            isMulti = {isMulti ? isMulti : false}
        />
        </>
    )
}

export default memo(SimpleSelect)
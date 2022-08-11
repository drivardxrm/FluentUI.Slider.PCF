import { Badge, CounterBadge, FluentProvider, Label, makeStyles, Slider, SliderProps, teamsDarkTheme, teamsHighContrastTheme, teamsLightTheme, Theme, useId, webDarkTheme, webLightTheme } from '@fluentui/react-components'
import * as React from 'react';
import { useState } from 'react';


export interface IFluentSliderProps {
    //properties : PCF =>
    input: number
    min: number
    max: number
    step: number | undefined
    vertical: boolean
    showlabel: boolean
    label:string
    theme: "WebLight" | "WebDark" | "TeamsLight" | "TeamsDark" | "TeamsHighContrast"
    size: "small" | "medium"
 
    disabled: boolean
    // masked: boolean
 
    //Callback function : => PCF
    onChange: (input: number) => void;
 }

const themes: Record<"WebLight" | "WebDark" | "TeamsLight" | "TeamsDark" | "TeamsHighContrast", Theme> = {
    "TeamsLight": teamsLightTheme,
    "TeamsDark": teamsDarkTheme,
    "TeamsHighContrast": teamsHighContrastTheme,
    "WebLight": webLightTheme,
    "WebDark": webDarkTheme,
};

const FluentUISliderApp = (props:IFluentSliderProps): JSX.Element => {
    
    const activetheme: Theme = themes[props.theme]

    const id = useId()

    const [sliderValue, setSliderValue] = useState(props.input)
    
    const onSliderChange: SliderProps['onChange'] = (_, data) => {
        setSliderValue(data.value)
        props.onChange(data.value)
    }
    
    return (
        
        
        <FluentProvider theme={activetheme}>
            {/* {props.showlabel && <Label htmlFor={id}>{props.label}</Label>} */}
            {/* <CounterBadge count={min} appearance='filled' color='informative' /> */}
            <Slider
                aria-valuetext={`Value is ${sliderValue}`}
                value={sliderValue}
                min={props.min}
                max={props.max}
                onChange={onSliderChange}
                id={id}
                size={props.size} 
                step={props.step}
                vertical={props.vertical}
                disabled={props.disabled}
            />
            {/* <CounterBadge count={max} appearance='filled' color='informative' /> */}
        </FluentProvider>
        
    )
}

export default FluentUISliderApp

import { Badge, CounterBadge, FluentProvider, Label, makeStyles, PositioningShorthand, Slider, SliderProps, teamsDarkTheme, teamsHighContrastTheme, teamsLightTheme, Theme, Tooltip, useId, webDarkTheme, webLightTheme } from '@fluentui/react-components'
import * as React from 'react';
import { useEffect, useState } from 'react';


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
    onSliderChange: (input: number) => void;
 }

const themes: Record<"WebLight" | "WebDark" | "TeamsLight" | "TeamsDark" | "TeamsHighContrast", Theme> = {
    "TeamsLight": teamsLightTheme,
    "TeamsDark": teamsDarkTheme,
    "TeamsHighContrast": teamsHighContrastTheme,
    "WebLight": webLightTheme,
    "WebDark": webDarkTheme,
};

// https://react.fluentui.dev/?path=/docs/concepts-upgrading-from-v8-components-flex-stack--page
// const useStyles = makeStyles({
//     stack: {
//       display: 'flex',
//       flexDirection: 'column',
//       flexWrap: 'nowrap',
//       // width: 'auto',
//       // height: 'auto',
//       // boxSizing: 'border-box',
//       // '> *': {
//       //   textOverflow: 'ellipsis',
//       // },
//       // '> :not(:first-child)': {
//       //   marginTop: '0px',
//       // },
//       // '> *:not(.ms-StackItem)': {
//       //   flexShrink: 1,
//       // },
//     },
//   })

const FluentUISliderApp = (props:IFluentSliderProps): JSX.Element => {
    
    // const classes = useStyles();
    const tooltipposition = props.vertical ? 'after' : 'above'
    const activetheme: Theme = themes[props.theme]

    const id = useId()

    const getTooltipPosition = (value: number):PositioningShorthand => 
    {
        if(value / props.max < 0.33)
        {
          return props.vertical ? 'after-bottom' : 'above-start'
        }
        else if(value / props.max > 0.66)
        {
          return props.vertical ? 'after-top' : 'above-end'
        }
        else{
          return props.vertical ? 'after' : 'above'
        }
    }

    const [tooltipPos, setTooltipPos] = useState(getTooltipPosition(props.input))
    const [sliderValue, setSliderValue] = useState(props.input)
    
    const onSliderChange: SliderProps['onChange'] = (_, data) => {
        setSliderValue(data.value)
        setTooltipPos(getTooltipPosition(data.value))
        props.onSliderChange(data.value)
    }

    // If value is changed from outside the PCF
    useEffect(() => {
        if (sliderValue !== props.input) {
            setSliderValue(props.input)
        }
     }, [props.input]); //Props are changed
    
    return (
        
        
        <FluentProvider theme={activetheme}>
            <div>
                {/* {props.showlabel && <Label htmlFor={id}>{props.label}</Label>}  */}
                {/* <CounterBadge count={min} appearance='filled' color='informative' /> */}
                <Tooltip
                  content={sliderValue}
                  relationship="label"
                  withArrow 
                  positioning={tooltipPos}
                >
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
                </Tooltip>
                
                {/* <CounterBadge count={max} appearance='filled' color='informative' /> */}
            </div>
            
        </FluentProvider>
        
    )
}

export default FluentUISliderApp

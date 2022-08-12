import { FluentProvider, Label, makeStyles, mergeClasses, Slider, SliderProps, teamsDarkTheme, teamsHighContrastTheme, teamsLightTheme, Theme, Tooltip, useId, webDarkTheme, webLightTheme } from '@fluentui/react-components'
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
    showminmax: boolean
    showtooltip: boolean
 
    disabled: boolean
    // masked: boolean
 
    //Callback function : => PCF
    onSliderChange: (input: number) => void;
 }

 // https://react.fluentui.dev/?path=/docs/concepts-upgrading-from-v8-components-flex-stack--page
 // https://react.fluentui.dev/?path=/docs/concepts-upgrading-from-v8-components-flex-stack-item--page
 const useStyles = makeStyles({
  stack: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    width: 'auto',
    height: 'auto',
    boxSizing: 'border-box',
    '> *': {
      textOverflow: 'ellipsis',
    },
    '> :not(:first-child)': {
      marginTop: '0px',
    },
    '> *:not(.ms-StackItem)': {
      flexShrink: 1,
    },
  },
  stackHorizontal: {
    flexDirection: 'row',
  },
  stackitem: {
    height: 'auto',
    width: 'auto',
    flexShrink: 1,
    alignSelf: 'center'
  }
})

const themes: Record<"WebLight" | "WebDark" | "TeamsLight" | "TeamsDark" | "TeamsHighContrast", Theme> = {
    "TeamsLight": teamsLightTheme,
    "TeamsDark": teamsDarkTheme,
    "TeamsHighContrast": teamsHighContrastTheme,
    "WebLight": webLightTheme,
    "WebDark": webDarkTheme,
};


const FluentUISliderApp = (props:IFluentSliderProps): JSX.Element => {

    const classes = useStyles();
    const tooltipposition = props.vertical ? 'after' : 'above'
    const activetheme: Theme = themes[props.theme]

    const id = useId()
    const [thumbRef, setThumbRef] = useState<HTMLDivElement | null>(null);
    
    const [sliderValue, setSliderValue] = useState(props.input)
    
    const onSliderChange: SliderProps['onChange'] = (_, data) => {
        setSliderValue(data.value)
        props.onSliderChange(data.value)
    }

    const stackClasses = mergeClasses(classes.stack, props.vertical ? undefined : classes.stackHorizontal);

    // If value is changed from outside the PCF
    useEffect(() => {
        if (sliderValue !== props.input) {
            setSliderValue(props.input)
        }
     }, [props.input]); //Props are changed
    
    return (
        
        
        <FluentProvider theme={activetheme}>
            <div className={stackClasses}>
            {/* {props.showlabel && <Label htmlFor={id}>{props.label}</Label>}  */}
            {/* <CounterBadge count={min} appearance='filled' color='informative' /> */}
            {/* <div>
              </> */}
            {props.showminmax && <div className={classes.stackitem}><Label>{props.vertical ? props.max : props.min}</Label></div>}

            <Tooltip
              content={sliderValue}
              relationship="label"
              withArrow 
              positioning={{ target: thumbRef, position: tooltipposition }}
            >
              <div className={classes.stackitem}>
                <Slider
                  id={id}
                  aria-valuetext={`Value is ${sliderValue}`}
                  value={sliderValue}
                  min={props.min}
                  max={props.max}
                  onChange={onSliderChange}
                  
                  size={props.size} 
                  step={props.step}
                  vertical={props.vertical}
                  disabled={props.disabled}
                  
                  thumb={{ ref: setThumbRef }}
                />
              </div>
            </Tooltip>
            
            {props.showminmax && <div className={classes.stackitem}><Label>{props.vertical ? props.min : props.max}</Label></div>}
          </div>    
            
            
        </FluentProvider>
        
    )
}

export default FluentUISliderApp
function mergestyles(stack: string): string | undefined {
  throw new Error('Function not implemented.');
}


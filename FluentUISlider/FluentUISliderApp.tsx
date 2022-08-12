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
  stack: {  // must be merged with stackHorizontal or stackVertical

    display: 'flex',
    flexWrap: 'nowrap',
    width: 'fit-content',
    height: 'fit-content',
    boxSizing: 'border-box',
    '> *': {
      textOverflow: 'ellipsis',
    },
    
    
  },
  stackHorizontal: {  // overrides for horizontal stack
    flexDirection: 'row',
    marginLeft: '5px',
    '> :not(:last-child)': {
      marginRight: '12px',
    }
  },
  stackVertical: {  // overrides for vertical stack
    
    flexDirection: 'column',
    marginLeft: '5px',
    '> :not(:first-child)': {
      marginTop: '10px',
    }
    
  },
  
  stackitem: {
    height: 'fit-content',
    width: 'fit-content',
    alignSelf: 'center',
    flexShrink: 1
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

    const stackClasses = mergeClasses(classes.stack, props.vertical ? classes.stackVertical : classes.stackHorizontal)

    // If value is changed from outside the PCF
    useEffect(() => {
        if (sliderValue !== props.input) {
            setSliderValue(props.input)
        }
     }, [props.input]); //Props are changed
    
    return (
        
        
        <FluentProvider theme={activetheme}>
            {/* {props.showlabel && <Label htmlFor={id}>{props.label}</Label>}  */}
            <Tooltip
              content={sliderValue}
              relationship="label"
              withArrow 
              positioning={{ target: thumbRef, position: tooltipposition }}
            >
              
              <div className={stackClasses}>
              
              
                {props.showminmax && <div className={classes.stackitem}><Label>{props.vertical ? props.max : props.min}</Label></div>}

              
                
                <Slider
                  id={id}
                  className={classes.stackitem}
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
                
                
                
                {props.showminmax && <div className={classes.stackitem}><Label>{props.vertical ? props.min : props.max}</Label></div>}
            </div>    
          </Tooltip>   
            
        </FluentProvider>
        
    )
}

export default FluentUISliderApp



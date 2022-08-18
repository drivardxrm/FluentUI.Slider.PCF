import { Badge, Divider, FluentProvider, makeStyles, mergeClasses, Slider, SliderProps, Tooltip, useId } from '@fluentui/react-components'
import * as React from 'react';
import { useEffect, useState } from 'react';
import { getTheme } from './utils/theme';


export interface IFluentSliderProps {
    //properties : PCF =>
    input: number
    min: number
    max: number
    step: number | undefined
    vertical: boolean
    theme: "WebLight" | "WebDark" | "TeamsLight" | "TeamsDark" | "TeamsHighContrast"
    size: "small" | "medium"
    showminmax: boolean
    showtooltip: boolean
    showValue: boolean
    prefix: string | undefined
    suffix: string | undefined
 
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
  },
  stackitemSliderVertical: {
    alignSelf: 'left',
    marginLeft: '10px',
    flexShrink: 1
  },
  stackitemBadgeVertical: {
    alignSelf: 'left',
    marginLeft: '5px',
    flexShrink: 1
  },
  tooltip: {
    paddingLeft: '0px',
    paddingRight: '0px',
    paddingTop: '0px',
    paddingBottom: '0px'
  }
})

const FluentUISliderApp = (props:IFluentSliderProps): JSX.Element => {

    const classes = useStyles();
    const tooltipposition = props.vertical ? 'after' : 'above'
    const activetheme = getTheme(props.theme)

    const id = useId()
    const [thumbRef, setThumbRef] = useState<HTMLDivElement | null>(null);
    
    const [sliderValue, setSliderValue] = useState(props.input)
    
    const onSliderChange: SliderProps['onChange'] = (_, data) => {
        setSliderValue(data.value)
        props.onSliderChange(data.value)
    }

    const stackClasses = mergeClasses(classes.stack, props.vertical ? classes.stackVertical : classes.stackHorizontal)
    const sliderStackItemClasses = mergeClasses(classes.stackitem, props.vertical ? classes.stackitemSliderVertical : undefined)
    const badgeStackItemClasses = mergeClasses(classes.stackitem, props.vertical ? classes.stackitemBadgeVertical : undefined)
    // If value is changed from outside the PCF
    useEffect(() => {
        if (sliderValue !== props.input) {
            setSliderValue(props.input)
        }
     }, [props.input]); //Props are changed
    
    return (
        
        
        <FluentProvider theme={activetheme}>
            <Tooltip
              content={{
                children: <Badge shape='rounded' appearance='ghost'>
                            {props.prefix}{sliderValue}{props.suffix}
                        </Badge>,
                className: classes.tooltip
              }}              
              relationship="label"
              withArrow 
              positioning={{ 
                target: thumbRef, 
                position: tooltipposition 
              }}
            >
              
              <div className={stackClasses}>
              
                {/* Display value Vertical mode */}
                {props.showValue && props.vertical === true && 
                  <>
                    <div className={badgeStackItemClasses}>
                      <Badge shape='rounded' appearance='filled'>
                        {props.prefix}{sliderValue}{props.suffix}
                      </Badge>
                    </div>
                    <div className={classes.stackitem}>
                      <Divider/>
                    </div>
                  </>
                }
              
                {props.showminmax &&
                  <div className={badgeStackItemClasses}>
                    <Badge shape='rounded' appearance='tint'>
                      {props.prefix}{props.vertical ? props.max : props.min}{props.suffix}
                    </Badge>
                  </div>
                }

              
                
                <Slider
                  id={id}
                  className={sliderStackItemClasses}
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
                
                
                
                {props.showminmax && 
                  <div className={badgeStackItemClasses}>
                    <Badge shape='rounded' appearance='tint'>
                      {props.prefix}{props.vertical ? props.min : props.max}{props.suffix}
                    </Badge>
                  </div>}

                {/* Display value horizontal mode */}
                {props.showValue && props.vertical === false && 
                  <>
                    <div className={badgeStackItemClasses}>
                      <Divider vertical={true} />
                    </div>
                    <div className={badgeStackItemClasses}>
                      <Badge shape='rounded' appearance='filled'>
                        {props.prefix}{sliderValue}{props.suffix}
                      </Badge>
                    </div>
                  </>
                }
            </div>    
          </Tooltip>   
            
        </FluentProvider>
        
    )
}

export default FluentUISliderApp



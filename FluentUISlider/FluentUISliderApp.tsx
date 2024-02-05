import { Badge, Divider, FluentProvider, IdPrefixProvider, mergeClasses, Slider, SliderProps, Tooltip, useId } from '@fluentui/react-components'
import * as React from 'react';
import { useEffect, useState } from 'react';
import { getTheme } from './utils/theme';
import { useStyles } from './styles/Styles';


export interface IFluentSliderProps {
    //properties : PCF =>
    instanceid: string
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


const FluentUISliderApp = (props:IFluentSliderProps): JSX.Element => {

    const styles = useStyles();
    const tooltipposition = props.vertical ? 'after' : 'above'
    const activetheme = getTheme(props.theme)

    const id = useId()
    const [thumbRef, setThumbRef] = useState<HTMLDivElement | null>(null);
    
    const [sliderValue, setSliderValue] = useState(props.input)
    
    const onSliderChange: SliderProps['onChange'] = (_, data) => {
        setSliderValue(data.value)
        props.onSliderChange(data.value)
    }

    const stackClasses = mergeClasses(styles.stack, props.vertical ? styles.stackVertical : styles.stackHorizontal)
    const sliderStackItemClasses = mergeClasses(styles.stackitem, props.vertical ? styles.stackitemSliderVertical : undefined)
    const badgeStackItemClasses = mergeClasses(styles.stackitem, props.vertical ? styles.stackitemBadgeVertical : undefined)
    // If value is changed from outside the PCF
    useEffect(() => {
        if (sliderValue !== props.input) {
            setSliderValue(props.input)
        }
     }, [props.input]); //Props are changed
    
    return (
        
      <IdPrefixProvider value={`fluentuislider-${props.instanceid}-`}> 
        <FluentProvider theme={activetheme}>
            <Tooltip
              content={{
                children: <Badge shape='rounded' appearance='ghost'>
                            {props.prefix}{sliderValue}{props.suffix}
                        </Badge>,
                className: styles.tooltip
              }}              
              relationship="label"
              withArrow 
              positioning={{ 
                target: thumbRef, 
                position: tooltipposition 
              }}
              visible={props.showtooltip == false || props.disabled ? false : undefined}
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
                    <div className={styles.stackitem}>
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
      </IdPrefixProvider> 
    )
}

export default FluentUISliderApp



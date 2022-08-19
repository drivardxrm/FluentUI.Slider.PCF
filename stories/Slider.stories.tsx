import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FluentUISliderApp, {IFluentSliderProps} from '../FluentUISlider/FluentUISliderApp';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/FluentUI Slider',
  component: FluentUISliderApp,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof FluentUISliderApp>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FluentUISliderApp> = (args) => <FluentUISliderApp {...args} />;

export const Horizontal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Horizontal.args = {
  input: 0,
  min: 0,
  max: 100,
  step: 0,
  size: "medium",
  vertical: false,
  theme: "WebLight",
  showminmax: true,
  showtooltip: true,
  showValue: true,
  prefix:'',
  suffix:'',
  disabled: false,
  onSliderChange: (newvalue:number) => console.log(newvalue)
 };

 export const Vertical = Template.bind({});
 Vertical.args = {
  input: 0,
  min: 0,
  max: 100,
  step: 0,
  size: "medium",
  vertical: true,
  theme: "WebLight",
  showminmax: true,
  showtooltip: true,
  showValue: true,
  prefix:'',
  suffix:'',
  disabled: false,
  onSliderChange: (newvalue:number) => console.log(newvalue)
 };

 export const WithStep = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithStep.args = {
  input: 0,
  min: 0,
  max: 100,
  step: 10,
  size: "medium",
  vertical: false,
  theme: "WebLight",
  showminmax: true,
  showtooltip: true,
  showValue: true,
  prefix:'',
  suffix:'%',
  disabled: false,
  onSliderChange: (newvalue:number) => console.log(newvalue)
 };

 export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
  input: 0,
  min: 0,
  max: 100,
  step: 0,
  size: "small",
  vertical: false,
  theme: "WebLight",
  showminmax: true,
  showtooltip: true,
  showValue: true,
  prefix:'',
  suffix:'',
  disabled: false,
  onSliderChange: (newvalue:number) => console.log(newvalue)
 };

 export const Simple = Template.bind({});
 Simple.args = {
  input: 0,
  min: 0,
  max: 100,
  step: 0,
  size: "medium",
  vertical: false,
  theme: "WebLight",
  showminmax: false,
  showtooltip: false,
  showValue: false,
  prefix:'',
  suffix:'',
  disabled: false,
  onSliderChange: (newvalue:number) => console.log(newvalue)
 };

 export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  input: 0,
  min: 0,
  max: 100,
  step: 0,
  size: "medium",
  vertical: false,
  theme: "WebLight",
  showminmax: true,
  showtooltip: true,
  showValue: true,
  prefix:'',
  suffix:'',
  disabled: true,
  onSliderChange: (newvalue:number) => console.log(newvalue)
 };

export const WebLight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WebLight.args = {
  input: 0,
  min: 0,
  max: 100,
  step: 0,
  size: "medium",
  vertical: false,
  theme: "WebLight",
  showminmax: true,
  showtooltip: true,
  showValue: true,
  prefix:'',
  suffix:'',
  disabled: false,
  onSliderChange: (newvalue:number) => console.log(newvalue)
 };

 export const WebDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WebDark.args = {
  input: 0,
  min: 0,
  max: 100,
  step: 0,
  size: "medium",
  vertical: false,
  theme: "WebDark",
  showminmax: true,
  showtooltip: true,
  showValue: true,
  prefix:'',
  suffix:'',
  disabled: false,
  onSliderChange: (newvalue:number) => console.log(newvalue)
 };

 export const TeamsLight = Template.bind({});
 // More on args: https://storybook.js.org/docs/react/writing-stories/args
 TeamsLight.args = {
   input: 0,
   min: 0,
   max: 100,
   step: 0,
   size: "medium",
   vertical: false,
   theme: "TeamsLight",
   showminmax: true,
   showtooltip: true,
   showValue: true,
   prefix:'',
   suffix:'',
   disabled: false,
   onSliderChange: (newvalue:number) => console.log(newvalue)
  };

  export const TeamsDark = Template.bind({});
 // More on args: https://storybook.js.org/docs/react/writing-stories/args
 TeamsDark.args = {
   input: 0,
   min: 0,
   max: 100,
   step: 0,
   size: "medium",
   vertical: false,
   theme: "TeamsDark",
   showminmax: true,
   showtooltip: true,
   showValue: true,
   prefix:'',
   suffix:'',
   disabled: false,
   onSliderChange: (newvalue:number) => console.log(newvalue)
  };

  export const TeamsHighContrast = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  TeamsHighContrast.args = {
    input: 0,
    min: 0,
    max: 100,
    step: 0,
    size: "medium",
    vertical: false,
    theme: "TeamsHighContrast",
    showminmax: true,
    showtooltip: true,
    showValue: true,
    prefix:'',
    suffix:'',
    disabled: false,
    onSliderChange: (newvalue:number) => console.log(newvalue)
   };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };

import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FluentUISliderApp, {IFluentSliderProps} from '../FluentUISlider/FluentUISliderApp';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'FluentUI Slider',
  component: FluentUISliderApp,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof FluentUISliderApp>;

// private _props:IFluentSliderProps = {
//   input: 0,
//   min: 0,
//   max: 100,
//   step: 1,
//   size: "medium",
//   vertical: false,
//   showlabel: false,
//   label: "",
//   theme: "WebLight",
//   disabled: false,
//   showminmax: true,
//   showtooltip: true,
//   showValue: true,
//   prefix:undefined,
//   suffix:undefined,
//   onSliderChange: this.notifyChange.bind(this)
// }



// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FluentUISliderApp> = (args) => <FluentUISliderApp {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
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
  prefix:undefined,
  suffix:undefined,
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

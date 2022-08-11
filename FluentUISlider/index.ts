import { createElement } from 'react';
import { createRoot, Root } from 'react-dom/client';
import FluentUISliderApp, { IFluentSliderProps } from './FluentUISliderApp';
import {IInputs, IOutputs} from "./generated/ManifestTypes";

export class FluentUISlider implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    
    private _notifyOutputChanged: () => void;
    private _root: Root
    private _props:IFluentSliderProps
    private _inputvalue:number
    /**
     * Empty constructor.
     */
    constructor()
    {

    }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
     */
    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement): void
    {
        // Add control initialization code
        this._root = createRoot(container!)

        //static props
        this._props.min = context.parameters.min.raw ?? 0
        this._props.max = context.parameters.max.raw ?? 100
        this._props.step = context.parameters.step.raw ?? undefined
        this._props.vertical = context.parameters.vertical?.raw === 'true' ?? false
        this._props.showlabel = context.parameters.showLabel?.raw === 'true' ?? false
        this._props.disabled = context.parameters.input.security?.editable ?? false

        this._props.label = context.parameters.customlabel.raw !== null ?
                    context.parameters.customlabel.formatted ?? context.parameters.customlabel.raw :
                    context.parameters.input.attributes?.DisplayName ?? ''

        this._props.size = context.parameters.size.raw ?? 'medium'

        this._props.theme = context.parameters.theme.raw ?? 'medium'
        this._props.onChange = this.notifyChange.bind(this)
    }


    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     */
    public updateView(context: ComponentFramework.Context<IInputs>): void
    {
        this._props.input = context.parameters.input.raw ?? (context.parameters.min.raw ?? 0)
        
        // Add code to update control view
        this._root.render(createElement(FluentUISliderApp, this._props)) 
    }


    //Callback method : React => PCF
   private notifyChange(newinputvalue: number) {
        this._inputvalue = newinputvalue;
        this._notifyOutputChanged();
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
     */
    public getOutputs(): IOutputs
    {
        return {
            input: this._inputvalue,
         };
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void
    {
        // Add code to cleanup control if necessary
        this._root.unmount();
    }
}

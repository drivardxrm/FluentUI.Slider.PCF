import { createElement } from 'react';
import { createRoot, Root } from 'react-dom/client';
import FluentUISliderApp, { IFluentSliderProps } from './FluentUISliderApp';
import {IInputs, IOutputs} from "./generated/ManifestTypes";
import { v4 as uuidv4 } from 'uuid';

export class FluentUISlider implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    
    private _notifyOutputChanged: () => void;
    private _root: Root
    private _isDesignMode: boolean
    private _props:IFluentSliderProps = {
        instanceid: uuidv4(),
        input: 0,
        min: 0,
        max: 100,
        step: 0,
        size: "medium",
        vertical: false,
        theme: "WebLight",
        disabled: false,
        showminmax: true,
        showtooltip: true,
        showValue: true,
        prefix:undefined,
        suffix:undefined,
        onSliderChange: this.notifyChange.bind(this)
    }
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
        this._notifyOutputChanged = notifyOutputChanged;

    }


    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     */
    public updateView(context: ComponentFramework.Context<IInputs>): void
    {
        //https://butenko.pro/2023/01/08/pcf-design-time-vs-run-time/
        if (location.ancestorOrigins[0] === "https://make.powerapps.com" ||
            location.ancestorOrigins[0] === "https://make.preview.powerapps.com") {
            this._isDesignMode = true;
        }
        
        
        //static props
        this._props.min = context.parameters.min?.raw ?? 0
        this._props.max = context.parameters.max?.raw ?? 100
        this._props.step = context.parameters.step?.raw ?? undefined // Run mode
        this._props.vertical = context.parameters.vertical?.raw === 'true' ?? false
        

        // If the bound attribute is disabled because it is inactive or the user doesn't have access
		let isReadOnly = context.mode?.isControlDisabled;

		// When a field has FLS enabled, the security property on the attribute parameter is set
		if (context.parameters?.input?.security) {
			isReadOnly = isReadOnly || !context.parameters.input.security.editable;		
		}

        this._props.disabled = isReadOnly

        this._props.showtooltip = context.parameters.showTooltip?.raw === 'true' ?? true
        this._props.showminmax = context.parameters.showMinMax?.raw === 'true' ?? true
        this._props.showValue = context.parameters.showValue?.raw === 'true' ?? true

        this._props.prefix = context.parameters.prefix?.raw ?? undefined
        this._props.suffix = context.parameters.suffix?.raw ?? undefined
        this._props.size = context.parameters.size?.raw ?? 'medium'
        
        this._props.theme = context.parameters.theme?.raw ?? 'WebLight'
        
        // Main value
        this._props.input = this._isDesignMode ?
                                (this._props.max - this._props.min) / 2 :                           // Design mode
                                context.parameters.input.raw ?? (context.parameters.min.raw ?? 0)   // Run mode
        
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

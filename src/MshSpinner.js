class MshSpinner extends HTMLElement {
    defaultSettings = {
        initialValue: 0,
        min: -Infinity,
        max: Infinity,
        upBtnText: "+",
        downBtnText: "-",
        step: 1
    };

    settings = {};

    constructor(){
        super();
        
        this.OnIncreaseClickHandler = this.OnIncreaseClickHandler.bind(this);
        this.OnDecreaseClickHandler = this.OnDecreaseClickHandler.bind(this);
    }

    CreateStyleElement(){
        var styleElement = document.createElement('style');
        styleElement.textContent = ".wrapper {"+
            "color: white;" +
        "}";

        return styleElement;
    }

    CreateButton(text, onClickHandler){
        var button = document.createElement("button");
        button.addEventListener('click', onClickHandler);
        button.textContent = text;
        button.style.fontSize = "12pt";
        button.style.fontWeight = "bold";
        return button;
    }

    OnIncreaseClickHandler(){
        if(this.settings.max < this.value + 1)
            return;

        this.value += this.settings.step;
        this.UpdateUi();
    }

    OnDecreaseClickHandler(){
        if(this.settings.min > this.value - 1)
            return;

        this.value -= this.settings.step;
        this.UpdateUi();
    }

    UpdateUi(){
        this.valueHolder.textContent = this.value.toString();
    }

    connectedCallback(){
        var initialValue = this.GetSetting("initialValue", Number, (value) => !isNaN(value));
        var min = this.GetSetting("min", Number, (value) => !isNaN(value));
        var max = this.GetSetting("max", Number, (value) => !isNaN(value));
        var step = this.GetSetting("step", Number, (value) => !isNaN(value));
        var upBtnText = this.GetSetting("upBtnText", (value) => value, () => true);
        var downBtnText = this.GetSetting("downBtnText", (value) => value, () => true);

        if(min > max)
            throw new Error("min cannot be greater than max");

        if(initialValue > max)
            initialValue = max;

        if(initialValue < min)
            initialValue = min;

        this.settings = {
            initialValue,
            min,
            max,
            upBtnText,
            downBtnText,
            step
        }

        this.value = this.settings.initialValue;

        this.BuildUi();
    }

    GetSetting(settingKey, parser, validator){
        var value = this.hasAttribute(settingKey) ? 
            parser(this.getAttribute(settingKey)) : 
            parser(this.defaultSettings[settingKey]) ;

        if(validator(value) === false)
            throw new Error("Invalid value for " + settingKey + ": " + value);

        return value;
    }

    BuildUi(){
        var shadow = this.attachShadow({mode: 'open'});

        this.wrapper = document.createElement('div');
        this.valueHolder = document.createElement('div');
        this.wrapper.append(this.valueHolder);

        var increaseButtton = this.CreateButton(this.settings.upBtnText, 
            this.OnIncreaseClickHandler);

        var decreaseButton = this.CreateButton(this.settings.downBtnText, 
            this.OnDecreaseClickHandler);
        
        this.UpdateUi();

        this.wrapper.append(increaseButtton);
        this.wrapper.append(decreaseButton);
        shadow.appendChild(this.wrapper);
    }
}

customElements.define("msh-spinner", MshSpinner);
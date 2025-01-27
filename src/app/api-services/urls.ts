export class APIRequest {
    url: string;
    parameters: Array<Parameter>;
    requestType: string;
    body: any;

    constructor(object: any) {
        this.url = object.url ? object.url : null;
        this.parameters = object.parameters ? object.parameters : null;
        this.requestType = object.requestType ? object.requestType : null;    
        this.body = object.body ? object.body : null;
    }

    get_url() {
        return this.url;
    }
    set_url(url: string) {
        this.url = url;
    }
    get_parameters() {
        return this.parameters;
    }
    set_parameters(parameters: Array<Parameter>) {
        this.parameters = parameters;
    }
    get_requestType() {
        return this.requestType;
    }
    set_requestType(requestType: string) {
        this.requestType    = requestType;
    }
    get_body() {
        return this.body;
    }
    set_body(body: any) {
        this.body = body;
    }
}

export class Parameter {
    parameterName: string;
    parameterValue: string;

    constructor(object: any) {
        this.parameterName = object.parameterName ? object.parameterName : null;
        this.parameterValue = object.parameterValue ? object.parameterValue : null;
    }
    get_parameterName() {
        return this.parameterName;
    }
    set_parameterName(parameterName: string) {
        this.parameterName = parameterName;
    }
    get_parameterValue() {
        return this.parameterValue;
    }
    set_parameterValue(parameterValue: string) {
        this.parameterValue = parameterValue;
    }
}
export default class IrrigationSuggestion {
    constructor(
        actualTemperature,
        actualHumidity,
        irrigation
    ) {
        this.actualTemperature = actualTemperature;
        this.actualHumidity = actualHumidity;
        this.irrigation = irrigation;
    }
    static fromJson(json) {
        return new IrrigationSuggestion(
            json.actualTemperature,
            json.actualHumidity,
            json.irrigation
        );
    }
    toJson() {
        return {
            actualTemperature: this.actualTemperature,
            actualHumidity: this.actualHumidity,
            irrigation: this.irrigation
        };
    }
}

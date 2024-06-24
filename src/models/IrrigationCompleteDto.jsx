export default class IrrigationComplete {
    constructor(
        id,
        irrigationDate,
        duration,
        startTime,
        endTime,
    ) {
        this.id = id;
        this.irrigationDate = irrigationDate;
        this.duration = duration;
        this.startTime = startTime;
        this.endTime = endTime;
    }
    static fromJson(json) {
        return new IrrigationComplete(
            json.id,
            json.irrigationDate,
            json.duration,
            json.startTime,
            json.endTime,
        );
    }
    toJson() {
        return {
            id: this.id,
            irrigationDate: this.irrigationDate,
            duration: this.duration,
            startTime: this.startTime,
            endTime: this.endTime,
        };
    }
}
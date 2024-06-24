export default class CropField {
  constructor(
    cropFieldId,
    cropFieldName,
    cropFieldDescription,
    latitudeData,
    longitudeData,
    cropFieldSize,
    soilType,
    cropType,
    cropVariety,
    cropPlant,
    cropPlantingDate,
    numPlants,
    idealTemperature,
    idealHumidity,
    irrigationRecords
  ) {
    this.cropFieldId = cropFieldId;
    this.cropFieldName = cropFieldName;
    this.cropFieldDescription = cropFieldDescription;
    this.latitudeData = latitudeData;
    this.longitudeData = longitudeData;
    this.cropFieldSize = cropFieldSize;
    this.soilType = soilType;
    this.cropType = cropType;
    this.cropVariety = cropVariety;
    this.cropPlant = cropPlant;
    this.cropPlantingDate = cropPlantingDate;
    this.numPlants = numPlants;
    this.idealTemperature = idealTemperature;
    this.idealHumidity = idealHumidity;
    this.irrigationRecords = irrigationRecords;
  }
  static fromJson(json) {
    return new CropField(
      json.cropFieldId,
      json.cropFieldName,
      json.cropFieldDescription,
      json.latitudeData,
      json.longitudeData,
      json.cropFieldSize,
      json.soilType,
      json.cropType,
      json.cropVariety,
      json.cropPlant,
      json.cropPlantingDate,
      json.numPlants,
      json.idealTemperature,
      json.idealHumidity,
      json.irrigationRecords
    );
  }
  toJson() {
    return {
      cropFieldId: this.cropFieldId,
      cropFieldName: this.cropFieldName,
      cropFieldDescription: this.cropFieldDescription,
      latitudeData: this.latitudeData,
      longitudeData: this.longitudeData,
      cropFieldSize: this.cropFieldSize,
      soilType: this.soilType,
      cropType: this.cropType,
      cropVariety: this.cropVariety,
      cropPlant: this.cropPlant,
      cropPlantingDate: this.cropPlantingDate,
      numPlants: this.numPlants,
      idealTemperature: this.idealTemperature,
      idealHumidity: this.idealHumidity,
      irrigationRecords: this.irrigationRecords,
    };
  }
}

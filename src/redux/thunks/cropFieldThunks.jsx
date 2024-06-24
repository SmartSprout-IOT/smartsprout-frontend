import { createAsyncThunk } from "@reduxjs/toolkit";
import CropField from "../../models/CropFieldDto";
import { getCropFieldById, getCropFields, updateCropField, updateCropFieldById } from "../../provider/cropFieldProvider";


export const fetchCropFields = createAsyncThunk(
    "cropField/getCropFields",
    async (_, thunkAPI) => {
        try {
            const response = await getCropFields();
            const cropFields = response.map(cropField => CropField.fromJson(cropField).toJson());
            return cropFields;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

export const fetchCropFieldById = createAsyncThunk(
    "cropField/getCropFieldById",
    async (cropFieldId, thunkAPI) => {
        try {
            const response = await getCropFieldById(cropFieldId);
            const cropFieldModel = CropField.fromJson(response);
            return cropFieldModel.toJson();
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

export const updateCropFieldDto = createAsyncThunk(
    'cropField/updateCropField',
    async ({ cropField, cropFieldId }, thunkAPI) => {
      try {
        let response;
        if (cropFieldId) {
          response = await updateCropField(cropField, cropFieldId); // Llama a la función de actualización con el ID
        } else {
          response = await updateCropField(cropField); // Llama a la función de creación sin ID
        }
        const cropFieldModel = CropField.fromJson(response);
        return cropFieldModel.toJson();
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
      }
    }
  );
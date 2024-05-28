import { createAsyncThunk } from "@reduxjs/toolkit";
import CropField from "../../models/CropFieldDto";
import { getCropFields } from "../../provider/cropFieldProvider";


export const fetchCropFields = createAsyncThunk(
    "cropField/getCropFields",
    async (_, thunkAPI) => {
        try {
            const response = await getCropFields();
            const cropFields = response.map(cropField => CropField.fromJson(cropField));
            return cropFields;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);
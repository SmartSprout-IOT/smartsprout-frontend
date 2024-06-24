import { createAsyncThunk } from "@reduxjs/toolkit";
import IrrigationSuggestion from "../../models/IrrigationSuggestionDto";
import { getIrrigationSuggestionsByCropFieldId } from "../../provider/irrigationSuggestionProvider";


export const fetchIrrigationSuggestionByCropFieldId = createAsyncThunk(
    'irrigationSuggestion/getIrrigationSuggestionByCropFieldId',
    async (cropFieldId, thunkAPI) => {
        try {
            const response = await getIrrigationSuggestionsByCropFieldId(cropFieldId);
            const irrigationSuggestion = IrrigationSuggestion.fromJson(response);
            return irrigationSuggestion.toJson();
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);
import { createAsyncThunk } from "@reduxjs/toolkit";
import { startIrrigation, stopIrrigation } from "../../provider/iotManagement";


export const fetchStartIrrigation = createAsyncThunk(
    'iotManagement/startIrrigation',
    async (cropFieldId, thunkAPI) => {
        try {
            const response = await startIrrigation(cropFieldId);
            return response;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

export const fetchStopIrrigation = createAsyncThunk(
    'iotManagement/stopIrrigation',
    async (cropFieldId, thunkAPI) => {
        try {
            const response = await stopIrrigation(cropFieldId);
            return response;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);
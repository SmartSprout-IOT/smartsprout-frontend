import { createAsyncThunk } from "@reduxjs/toolkit";
import { getIrrigationRecordsByCropFieldId } from "../../provider/irrigationRecordsProvider";
import IrrigationRecordModel from "../../models/IrrigationRecord";


export const fetchIrrigationRecords = createAsyncThunk(
    "irrigationRecords/fetchIrrigationRecords",
    async (cropFieldId, thunkAPI) => {
        try {
            const response = await getIrrigationRecordsByCropFieldId(cropFieldId);
            const irrigationRecords = response.map(irrigationRecord => IrrigationRecordModel.fromJson(irrigationRecord).toJson());
            return irrigationRecords;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);
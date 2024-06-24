import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../slices/loginSlice";
import registerSlice from "../slices/registerSlice";
import sidebarReducer from "../slices/sidebarSlice";
import userSlice from "../slices/userSlice";
import cropFieldSlice from "../slices/cropFieldSlice";
import updateCropFieldSlice from "../slices/updateCropFieldSlice";
import irrigationSuggestionSlice from "../slices/irrigationSuggestionSlice";
import iotManagementSlice from "../slices/iotManagementSlice";
import stopIoTManagementSlice from "../slices/stopIoTManagementSlice";
import irrigationRecordsService from "../slices/irrigationRecordsSlice";

const store = configureStore({
    reducer: {
        login: loginSlice,
        register: registerSlice,
        sidebar: sidebarReducer,
        user: userSlice,
        cropfield: cropFieldSlice,
        updateCropField: updateCropFieldSlice,
        irrigationSuggestion: irrigationSuggestionSlice,
        iotManagement: iotManagementSlice,
        stopIrrigation: stopIoTManagementSlice,
        irrigationRecords: irrigationRecordsService,
    },
});

export default store;

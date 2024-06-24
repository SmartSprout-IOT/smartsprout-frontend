import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { HeaderAnalytics } from "../components/analytics/HeaderAnalytics";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchCropFields } from "../redux/thunks/cropFieldThunks";
import { fetchIrrigationRecords } from "../redux/thunks/irrigationRecordsThunks";
import { LineChart } from "@mui/x-charts";

export const Analytics = () => {
  const dispatch = useDispatch();
  const {
    items: cropFields,
    status: cropFieldsStatus,
    error: cropFieldsError,
  } = useSelector((state) => state.cropfield);
  const [selectedCropField, setSelectedCropField] = useState(null);
  const {
    items: records,
    status: recordsStatus,
    error: recordsError,
  } = useSelector((state) => state.irrigationRecords);

  useEffect(() => {
    dispatch(fetchCropFields());
  }, [dispatch]);

  useEffect(() => {
    if (cropFields.length > 0 && selectedCropField === null) {
      setSelectedCropField(cropFields[0]);
      dispatch(fetchIrrigationRecords(cropFields[0].cropFieldId));
    }
  }, [cropFields, selectedCropField, dispatch]);

  const handleChange = (event) => {
    const selectedFieldId = Number(event.target.value);
    const selectedField = cropFields.find(
      (field) => field.cropFieldId === selectedFieldId
    );
    setSelectedCropField(selectedField);
    dispatch(fetchIrrigationRecords(selectedFieldId));
  };

  console.log("CropFields:", cropFields);
  console.log("Selected CropField:", selectedCropField);
  console.log("Irrigation Records:", records);

  if (cropFieldsStatus === "loading" || recordsStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (cropFieldsStatus === "failed") {
    return <div>Error: {cropFieldsError}</div>;
  }

  if (recordsStatus === "failed") {
    return <div>Error: {recordsError}</div>;
  }

  const chartData = records.map((record) => ({
    date: record.irrigationDate,
    duration: record.duration,
  }));

  return (
    <div>
      <HeaderAnalytics />

      <div>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          <FormControl fullWidth>
            <InputLabel id="cultive-label">Select Cultive</InputLabel>
            <Select
              labelId="cultive-label"
              id="cultive-select"
              value={selectedCropField ? selectedCropField.cropFieldId : ""}
              label="Select Cultive"
              onChange={handleChange}
            >
              {cropFields.map((field) => (
                <MenuItem key={field.cropFieldId} value={field.cropFieldId}>
                  {field.cropFieldName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="flex justify-center items-center">
        <LineChart
          xAxis={[
            {
              scaleType: "point",
              data: [
                "Enero",
                "Feb",
                "Mar",
                "Abr",
                "May",
                "Jun",
                "Jul",
                "Ago",
                "Sept",
                "Oct",
                "Nov",
                "Dic",
              ],
            },
          ]}
          series={[
            {
              data: [
                200, 400, 120, 780, 350, 760, 180, 960, 600, 410, 540, 900,
              ],
            },
          ]}
          width={1000}
          height={400}
        />
      </div>
      <div className="flex justify-center items-center mt-4">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Irrigation Date
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Start Time
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  End Time
                </th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id}>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {record.id}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {record.irrigationDate}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {record.duration}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {record.startTime}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {record.endTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

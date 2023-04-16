import axios from "axios"

export const getSpreadSheetData = async (request:any) => {
    const url = process.env.REACT_APP_SPREADSHEET_URL || ''

    const response = await axios.get(url, request);
    return response.data
}
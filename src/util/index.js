import moment from "moment"

export const formatDDMMYYYY = date => moment(date, "YYYYMMDD").format("DD/MM/YYYY");

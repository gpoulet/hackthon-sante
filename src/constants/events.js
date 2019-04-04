import moment from "moment";

export const getColorFromType = (type, date) => {
  if(moment(date, "YYYYMMDD").isAfter(moment())) {
    return "grey";
  }

  switch (type) {
    case "VACCIN":
      return "red"
    case "SAGEFEMME":
      return "pink"
    default:
      return "blue"
  }
}
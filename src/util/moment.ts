import moment from "moment";
import "moment/locale/pt-br";

export const getHourNow = (data: string | number) =>
  moment(data).locale("pt-br").format("LT");

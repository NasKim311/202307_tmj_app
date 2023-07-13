import moment from 'moment';
import 'moment/locale/ko';

export const dateFormat = (date : Date , format? : string) => {
    if (!format){
        format = "YYYY.MM.DD";
    }
    return moment(date).format(format);
}

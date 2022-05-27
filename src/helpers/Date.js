export function dateFromISO (Date) {
  let day=Date.substring(8,10);
 let month=Date.substring(6,7)
 
 
 let fMonth = "sad"

 switch (parseInt(month))
 {
   case 0: fMonth="января"; break;
   case 1: fMonth="февраля"; break;
   case 2: fMonth="марта"; break;
   case 3: fMonth="апреля"; break;
   case 4: fMonth="мая"; break;
   case 5: fMonth="июня"; break;
   case 6: fMonth="июля"; break;
   case 7: fMonth="августа"; break;
   case 8: fMonth="сентября"; break;
   case 9: fMonth="октября"; break;
   case 10: fMonth="ноября"; break;
   case 11: fMonth="декабря"; break;
   default:break;
 
  }
  return `${day} ${fMonth}`
}
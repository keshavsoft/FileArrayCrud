import fs from "fs";
const CommonDataPath = "Data";
const CommonFileName = "QrCodes";

const StartFunc = ({FromDate,ToDate}) => {
  const LocalFileName = CommonFileName;

  const filePath = `${CommonDataPath}/${LocalFileName}.json`;
  let LocalReturnObject = {};
  LocalReturnObject.KTF = false;
   
  try {
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      

      const filteredData = data.filter(item => {
        const itemDate = new Date(item.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB').split('/').join('-');
        return itemDate >= FromDate && itemDate <= ToDate;
      });
      LocalReturnObject.KTF = true;
      LocalReturnObject.JsonData = filteredData;

      return LocalReturnObject;
    } else {
      LocalReturnObject.KReason = `File ${LocalFileName}.json does not exist in ${CommonDataPath} folder.`;
      console.warn(LocalReturnObject.KReason);

      return LocalReturnObject;
    };
  } catch (err) {
    console.error('Error:', err);
  };

  return LocalReturnObject;
};

export { StartFunc };
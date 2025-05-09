import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnRootDir.js";

const CommonDataPath = "Data";

const StartFunc = ({ inKey, inValue, inFileName }) => {
  const LocalFileName = inFileName;
  const LocalDataPath = StartFuncCommonExpose();

  const filePath = `${LocalDataPath}/${CommonDataPath}/${LocalFileName}.json`;
  let LocalReturnObject = { KTF: false };

  try {
    if (!fs.existsSync(filePath)) {
      LocalReturnObject.KReason = `File ${LocalFileName}.json does not exist in ${CommonDataPath} folder.`;
      return LocalReturnObject;
    }

    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const LocalFind = data.find(obj => Object.values(obj).includes(inKey));

    if (!LocalFind) {
      LocalReturnObject.KReason = `Value '${inKey}' not found in any object to alter.`;
      return LocalReturnObject;
    }

    for (const prop in LocalFind) {
      if (LocalFind[prop] === inKey) {
        LocalFind[prop] = inValue;
        break;
      }
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

    LocalReturnObject.KTF = true;
    LocalReturnObject.JsonData = "Data altered successfully";
  } catch (err) {
    LocalReturnObject.KReason = `Error occurred: ${err.message}`;
    console.error("Error:", err);
  }

  return LocalReturnObject;
};

export { StartFunc };

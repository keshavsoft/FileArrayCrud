import fs from "fs";
const CommonDataPath = "Data";
const CommonFileName = "MastersItemTypes";

let StartFunc = () => {

    let LocalReturnData = { KTF: false };
    let filePath = `${CommonDataPath}/${CommonFileName}.json`;

    try {
        if (!fs.existsSync(filePath)) {
            LocalReturnData.KReason = `${CommonFileName}.json File does not exist in ${CommonDataPath} Folder.`;
            console.warn(LocalReturnData.KReason);
            return LocalReturnData;
        };

        const data = fs.readFileSync(`${CommonDataPath}/${CommonFileName}.json`, 'utf8');

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = JSON.parse(data);
    } catch (err) {
        LocalReturnData.KReason = `Error reading ${CommonFileName} file .`;
        console.warn(LocalReturnData.KReason);
        return LocalReturnData;
    };

    return LocalReturnData;
};

export { StartFunc };

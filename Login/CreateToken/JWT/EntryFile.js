import jwt from 'jsonwebtoken';

const StartFunc = ({ LocalCoumnSecret }) => {
  let LocalReturnObject = {};
  LocalReturnObject.KTF = false;

  if (LocalCoumnSecret !== 9848163021) {
    LocalReturnObject.KReason = `Secret Key does not match : ${LocalCoumnSecret}.`;

    return LocalReturnObject;
  };
  var token = jwt.sign(LocalCoumnSecret, 'KeshavSoft');
  LocalReturnObject.KTF = true;

  LocalReturnObject.SuccessText = token;
  return LocalReturnObject;

};

export { StartFunc };
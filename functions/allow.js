exports.handler = async (context, event, callback) => {
  const allowListMap = Runtime.getAssets()["/allowListMap.json"].open;
  const allowList = JSON.parse(allowListMap());

  const text = allowListMap();
  //console.log('Your file contents: ' + text);

  const { storeNumber } = event;
  // console.log(storeNumber);

  const matchNumber = allowList.find((s) => s.storeNumber == storeNumber);
  // console.log(matchNumber);
  if (matchNumber) {
    callback(null, { matched: true });
  } else {
    callback(null, { matched: false });
  }
};

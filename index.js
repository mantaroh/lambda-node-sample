var AWS = require("aws-sdk");
AWS.config.update({accessKeyId: 'accesskeyid', secretAccessKey: 'secretkey'});
const client = new AWS.Lambda({ region: "ap-northeast-1" });
(async () => {
    var params = {
        FunctionName: '<<関数名>>', /* required */
        InvocationType: "RequestResponse",
        LogType: "Tail",
        Payload: JSON.stringify({})
    };
    // async/await.
    try {
      console.log("before call");
      const data = await client.invoke(params).promise();
      console.log("log", data);
    } catch (error) {
      console.log(error);
    }
})();

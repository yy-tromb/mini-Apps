const fs=require("fs");
const playlistPath=process.argv[2];

const playlist=fs.readFileSync(playlistPath).toString();
let URI="abematv-license:\/\/"+playlist.split("URI=\"abematv-license:\/\/")[1].split("\",IV=")[0];

const fn=`
(function(){
   const xhr=new XMLHttpRequest();
   let key;
   xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200){
         key = new Uint8Array(xhr.response);
         const b=new Blob([key],{type:"application/octet-stream"});
         const a=document.createElement("a");
         a.download="key.key";
         a.href=URL.createObjectURL(b);
         a.click();
      }
   }
   xhr.onerror=e=>{
      console.error(e);
      alert(e);
   }
   xhr.open("GET","${URI}");
   xhr.send();
})();
`;
process.stdout.write(fn);

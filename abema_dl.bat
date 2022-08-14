if %1==help (
   echo "1:playlist Path , 2:output Path , 3:key Path , 4:segment url Head(require '/')"
   ) else (
   node C:\Users\tromb\Documents\prog\var\abema.key.js "%1" "%3" "%4"
   pause
   ffmpeg -allowed_extensions ALL  -protocol_whitelist file,http,https,tcp,tls,crypto -i "%1.m3u8" -c copy "%2"
   )

const fs = require('fs')
const request = require('request');

var formData = {
    my_field: 'my_value',
    file1:  fs.createReadStream(process.cwd() + '/file.jpeg'),
  };
  

request.post({ url: 'http://127.0.0.1:7001/upload', formData: formData }, function (err, httpResponse, body) {
    if (err) {
        return console.error('upload failed:', err);
    }
    console.log('Upload successful!  Server responded with:', body);
});
// function readJSON(filename){
//   return new Promise(function (fulfill, reject){
//     readFile(filename, 'utf8').done(function (res){
//       try {
//         fulfill(JSON.parse(res));
//       } catch (ex) {
//         reject(ex);
//       }
//     }, reject);
//   });
// }

var myText = 'this is false';

function checkText(text) {
  if (text === 'this is true') {
    console.log(text);
  } else {
    throw 'TEXT DOES NOT MATCH';
  }
}

function evalText(text){
  return new Promise(function(resolve, reject){
    try {
      fulfill(checkText(text));
    } catch (e) {
      reject(console.log(e));
    }
  });
}

evalText(myText);

// ---

// callback is a function here
function doSomething(callback) {
  var value = 42;
  callback(value);
}

function doSomething(){
  return {
    then: function(callback) {

    }
  }
}

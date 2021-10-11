var userName = document.querySelector("#username");
var btnPredict = document.querySelector("#btn-predict");
var output = document.querySelector("#output");

var serverUrl = 'https://api.genderize.io/';

function getGenderapiUrl(text) {
  return serverUrl + "?" + "name=" + text
}

function clickevent() {
  var inputTxt = userName.value;

  if(inputTxt===""){
    output.textContent="Please enter name";
  }
  else{

      if (inputTxt.includes(",")) {

    var namearray = inputTxt.split(",");
    var p=0;
    for (var i = 0; i<namearray.length; i++) {
      fetch(getGenderapiUrl(namearray[i]))
        .then(response => response.json())
        .then(json => {
          var x = json.gender;
          const para = document.createElement("td");
          console.log(namearray[p])
          para.innerText = namearray[p]+" : "+x;
          const element = document.getElementById("tablerow");
          element.appendChild(para);
          console.log(x);
          p++;
        })
      
    }

  } else {

    fetch(getGenderapiUrl(inputTxt))
      .then(response => response.json())
      .then(json => {
        var x = json.gender;
        console.log(x)
        output.textContent = x;
      })

  }

  }



}

btnPredict.addEventListener("click", clickevent);



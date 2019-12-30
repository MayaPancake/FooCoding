//repository lists
const dropdown = document.getElementById('locality-dropdown');
dropdown.length = 0;

const defaultOption = document.createElement('option');
defaultOption.text = '';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'https://api.github.com/orgs/foocoding/repos?per_page=100';

const request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function () {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].name;
      option.value = data[i].full_name;
      dropdown.add(option);
    }
  } else {
    // Reached the server, but it returned an error
  }
}

request.onerror = function () {
  console.error('An error occurred fetching the JSON from ' + url);
};

request.send();


//contributors Using XMLHttpRequest
function loadText() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.github.com/repos/foocoding/curriculum/contributors', true);

  xhr.onload = function () {
    if (this.status == 200) {
      const data = JSON.parse(this.responseText);

      let output = '';
      for (let i in data) {
        output +=
          '<div class="contributors-lists">' +
          '<img src = "' + data[i].avatar_url + '" width="70" height = "70">' +
          '<ul>' +
          '<li>ID: ' + data[i].login + '</li>' +
          '<li>Login: ' + data[i].contributions + '</li>' +
          '</ul>' +
          '</div>';
      }
      document.getElementById('contributors-lists').innerHTML = output;
    }
  }
  xhr.onerror = function () {
    console.log('Request Error...');
  }
  xhr.send();
}

loadText();



function contributorDetails() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.github.com/orgs/foocoding/repos?per_page=100', true);

  xhr.onload = function () {
    if (this.status == 200) {
      const data = JSON.parse(this.responseText);

      let output = '';
      for (let i in data) {
        output +=
          '<div class="contributor-details">' +
          '<ul>' +
          '<li>Repository: ' + data[i].repository + '</li>' +
          '<li>Description: ' + data[i].description + '</li>' +
          '<li>Forks: ' + data[i].forks_url + '</li>' +
          '<li>Updated: ' + data[i].updated_url + '</li>' +
          '</ul>' +
          '</div>';
      }
      document.getElementById('contributor-details').innerHTML = output;
    }
  }
  xhr.onerror = function () {
    console.log('Request Error...');
  }
  xhr.send();
}

contributorDetails()
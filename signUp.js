function signUp(){
    var username = document.getElementById("un").value;
    var password = document.getElementById("pw").value;
    var data = {
        username: username,
        password: password,
      };
    console.log("Hello")
    console.log(data);
    fetch("http://localhost:3000/api/signup", {
    headers: {
      Accept: "application/json, */*",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((data) => {
        document.location = "landing.html"
      console.log(data);
    });
    
}
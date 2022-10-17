const APIurl = "http://localhost:5000";
const endpoint = "Teacher";
console.log("Hii")
export default {
  getList: (resource, params) => {

    const url = `${APIurl}/${endpoint}`;

    return fetch(url, {
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    }).then(res => {
      console.log("Request Completed! Response", res);
    });
  },
  update: (resource, params) => {
    const data = {
      "IdentityDetails": {
        "fullName": "Savitribai Phule",
        "gender": "Female",
        "dob": "21-08-1923"
      },
      "contactDetails": {
        "email": "uyroqavdmgg@temporary-mail.net",
        "mobile": "2063700099"
      },
      "id": 6
    }
    const url = `${APIurl}/${endpoint}`;
    return fetch(url, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => {
      console.log("Request Completed! Response", res);
    });
  }
}
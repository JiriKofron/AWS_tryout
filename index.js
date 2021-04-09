const app = new Vue({
  el: '#app',
  data: {
    name: '',
    email: '',
    message: '',
  },
  methods: {
    sendForm: function () {
      let name = this.name;
      let email = this.email;
      let message = this.message;
      const endPoint =
        'https://4diw5umm89.execute-api.us-east-2.amazonaws.com/sendForm';
      console.log(name, email, message);
      const data = {
        senderName: name,
        senderEmail: email,
        message: message,
      };
      console.log(data);
      axios
        .post(endPoint, data)
        .then((response) => {
          console.log(response);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

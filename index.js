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
        'https://wsd9s169el.execute-api.us-east-2.amazonaws.com/First/sendForm/';
      console.log(name, email, message);

      axios({
        method: 'post',
        url: endPoint,
        data: {
          senderName: name,
          senderEmail: email,
          message: message,
        },
        statusText: 'OK',
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }).then(
        (response) => {
          console.log('odeslo');
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
});

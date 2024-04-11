const DaumPostcode = () => {
  new window.daum.Postcode({
    oncomplete: function (data) {
      console.log(data);
    },
  }).open();
};

export default DaumPostcode;

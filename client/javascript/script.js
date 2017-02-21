var app = new Vue({
  el: '#app',
  data: {
    houses:[],
    input_data:{
      house_id:'',
      name:'',
      image:'',
      location:'',
      price:'',
      description: ''
    }
  },
  methods:{
    get_house:function(){
      axios.get('http://localhost:3000/house')
      .then(function (response) {
      app.houses = response.data
  })
  .catch(function (error) {
    console.log(error);
  });
},
    delete_house:function(id){
        axios.delete(`http://localhost:3000/house/${id}`,{})
        .then(function (response) {
          console.log(response);
          document.getElementById(`${response.data._id}`).remove()
    })
    .catch(function (error) {
      console.log(error);
    });
  },
create_house:function(){
  axios.post('http://localhost:3000/house', {
    name:app.input_data.name,
    image:app.input_data.image,
    location:app.input_data.location,
    price:app.input_data.price,
    description:app.input_data.description
  })
  .then(function (response) {
    app.houses.push(response.data)

    app.input_data.name = ""
    app.input_data.image = ""
    app.input_data.location = ""
    app.input_data.price = ""
    app.input_data.description = ""
  })
  .catch(function (error) {
    console.log(error);
  });
}
  }
})
function showMaps(){
var map = new GMaps({
  el: '#map',
  lat: -12.043333,
  lng: -77.028333
});
}
// app.get_one_house()
app.get_house()

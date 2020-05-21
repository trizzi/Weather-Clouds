class Weather {
    constructor (city, state) {
        this.apiKey = '3a1e880f42d3482688b05738202005';
        this.city = city;
        this.state = state;
    }

//  Fetch weather from API
  async getWeather (){
      const response = await fetch (`https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city},${this.state}`);

      
      const responseData = await response.json();
      return responseData;
  }




//   Change weather location
 changeLocation(city, state){
     this.city = city;
     this.state = state;
 }
}
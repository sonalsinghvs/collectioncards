Vue.component('disney-movies', {
  template: `<div class="styledisney">
  <h3>{{movie}}</h3>
  <div>
  <img class="disney" v-bind:src="image" v-bind:alt="name"/>
  </div>
  <p>Movie Name: {{movie}} <br> Year Released: {{yrRlsd}}<br>IMDb Rating: {{imdb}}<br> Genre: {{genre}}
  <br>Duration: {{duration}}</p>
                    
  </div'>`,

  props: ['movie', 'yrRlsd', 'imdb', 'genre', 'duration', 'image']
});

var vm = new Vue({
  el: '#app',
  data: {

    consoles: [
      {
        movie: 'Mulan',
        yrRlsd: '1998',
        imdb: '7.6',
        genre: 'Drama/Fantasy',
        duration: '1h 28m',
        image: 'images/Mulan.png'
      },
      {
        movie: 'Beauty & the Beast',
        yrRlsd: '1991',
        imdb: '8',
        genre: 'Fantasy/Romance',
        duration: '1h 32m',
        image: 'images/beauty.png'
      },
      {
        movie: 'Aladdin',
        yrRlsd: '1992',
        imdb: '8',
        genre: 'Fantasy/Romance',
        duration: '1h 31m',
        image: 'images/aladdin.jpg'
      },
      {
        movie: 'The Lion King',
        yrRlsd: '1994',
        imdb: '8.5',
        genre: 'Drama/Music',
        duration: '1h 29m',
        image: 'images/lion.jpg'
      },
      {
        movie: 'The Little Mermaid',
        yrRlsd: '1989',
        imdb: '7.6',
        genre: 'Fantasy',
        duration: '1h 25m',
        image: 'images/mermaid.jpg'
      }
    ]
  }

});

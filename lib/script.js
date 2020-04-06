Vue.component('disney-movies', {
  template: `<tr class="styledisney">
                <td> {{movie}} </td>
                <td> {{yrRlsd}} </td>
                <td> {{imdb}} </td>
                <td> {{genre}} </td>
                <td> {{duration}} </td>
                <td class="disney"><img v-bind:src="image"> {{image}} </td>
 
                    
  </tr>`,

  props: ['movie', 'yrRlsd', 'imdb', 'genre', 'duration', 'image']
});

var vm = new Vue({
  el: '#app',
  data: {
    newConsoleObj: {
      movie: '',
      yrRlsd: '',
      imdb: '',
      genre: '',
      duration: ''
    },
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
  },
  methods: {
    submitHandler: () => {
      console.log('submitted');
      vm.consoles = vm.consoles.concat(vm.newConsoleObj);
      vm.resetForm();
    },
    resetForm: () => {
      vm.newConsoleObj = {
        movie: '',
        yrRlsd: '',
        imdb: '',
        genre: '',
        duration: ''
      }
    },
    deleteItem: item => {
      vm.consoles = vm.consoles.filter(console => {
        return console !== item;
      })
    }
  }

});

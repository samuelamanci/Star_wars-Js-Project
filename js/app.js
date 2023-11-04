

const LIST = [
    {
        id: 1,
        name: 'Mestre Yoda',
        avatar: 'images/yoda.png'
    },
    {
        id: 2,
        name: 'Luke Skywalker',
        avatar: 'images/luke.png'
    },
    {
        id: 3,
        name: 'Princesa Leia',
        avatar: 'images/leia.png'
    },
    {
        id: 4,
        name: 'Han Solo',
        avatar: 'images/hansolo.png'
    },
    {
        id: 5,
        name: '>Darth Vader',
        avatar: 'images/vader.png'
    },
    {
        id: 6,
        name: 'Chewbacca',
        avatar: 'images/chewbacca.png'
    },
    {
        id: 7,
        name: 'R2D2',
        avatar: 'images/r2d2.png'
    },
    {
        id: 8,
        name: 'c3pO',
        avatar: 'images/c3po.png'
    }
]


const App = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        userName: 'Olá Visitante Galático',
        characters: LIST,
        searchName: ''
    },
    methods: {
        like(userName) {
            alert(`O Personagem ${userName} recebeu um like!`)
        },
        //função remove simula a exclussão de um personagem, mas na verdade apenas esconde na exibição.
        remove(id) {
            const list = this.characters

            const result = list.filter(item => {
                return item.id !== id
            })

            this.characters = result
        },
        search() {


            if(this.searchName === ''){
                return alert('O Campo de Busca é Obrigatório')
            }
            const list = this.characters = LIST //carrega todos os personagens em list

            const result = list.filter(item => {
                return item.name === this.searchName
            })

            if(result.length <=0) {
                alert('Nenhum Registro encontrado')
            }else{
                this.characters = result
            }
        }
    }
})
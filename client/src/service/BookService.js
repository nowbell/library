import {makeAutoObservable} from "mobx";
import book1 from '../images/book1.png';
import dostoev from '../images/dostoev.png';

export default class BookService {
    constructor() {
        this._genres = []

        this._selectedGenre = {

        }

        this._books = [
            {
                id: 1,
                author: 'Федор Достоевский',
                name: 'Белые ночи',
                img: book1,
                img_author: dostoev,
                summary: '"Белые ночи" – одно из лучших произведений школы "сентиментального натурализма", по мнению критика Аполлона Григорьева. Это лирическая ' +
                    'исповедь героя-мечтателя, одинокого и робкого человека, в жизни которого на какое-то ' +
                    'время появляется девушка, а вместе с ней и надежда на более светлое будущее. В данном произведении (романе влюбленных) поднимается столь своевременная и сегодня проблема отчужденности ' +
                    'личности.',
                quote: 'Так, когда мы несчастны, мы сильнее чувствуем несчастие других; чувство не разбивается, а сосредоточивается…',
            },
            {
                id: 2,
                author: 'Федор Достоевский',
                name: 'Белые ночи',
                img: book1,
                img_author: dostoev,
                summary: '"Белые ночи" – одно из лучших произведений школы "сентиментального натурализма", по мнению критика Аполлона Григорьева. Это лирическая ' +
                    'исповедь героя-мечтателя, одинокого и робкого человека, в жизни которого на какое-то ' +
                    'время появляется девушка, а вместе с ней и надежда на более светлое будущее.',
                quote: 'Так, когда мы несчастны, мы сильнее чувствуем несчастие других; чувство не разбивается, а сосредоточивается…',
            }
        ]
        makeAutoObservable(this)
    }

    setGenres(genres) {
        this._genres = genres
    }

    setBooks(books) {
        this._books = books
    }

    setSelectedGenre(genre) {
        this._selectedGenre = genre
    }

    get genres() {
        return this._genres
    }

    get selectedGenre() {
        return this._selectedGenre
    }

    get books() {
        return this._books
    }
}
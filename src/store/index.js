import { defineStore } from 'pinia'
import axios from 'axios';

export const useStore = defineStore('store', {
    state: () => {
        return {
            movies: [],
            cart: new Map(),
        }
    },
    actions: {
        async getMovies(id) {
            let data = (
                await axios.get("https://api.themoviedb.org/3/discover/movie", {
                    params: {
                        api_key: "53df15a69c17485812f9134bcd4089b6",
                        with_genres: id,
                        include_adult: false,
                    }
                })).data.results;

            this.movies = data.map((movie) => {
                return {
                    id: movie.id,
                    poster: movie.poster_path,
                    overview: movie.overview,
                }
            });
        },
        addToCart(id, data) {
            this.cart.set(id, data);
        },
        removeFromCart(id) {
            this.cart.delete(id);
        }
    }
});
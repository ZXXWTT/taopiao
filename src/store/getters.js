export default {
    filmInfo: (state) => state.films.filmInfo,
    // 监听从哪来
    toCity: (state) => state.films.toCity,
    reCity: (state) => state.cinemas.reCity,
    getBrand: (state) => state.cinemas.getBrand,
    getCinema: (state) => state.cinemas.getCinema,
}

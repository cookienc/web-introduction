function submitWithAlert(form) {
    const selectedMovies = Array.from(form.movie).filter(movie => movie.checked);
    const matchCount = selectedMovies.length;

    alert(`${form.name.value}님, 저와 ${matchCount}개의 취향이 같으시네요!`);
}

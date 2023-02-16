function submitWithAlert(form) {
    var sum = 0;
    var count = form.movie.length;

    for(var i = 0; i < count; i++ ){
        if( form.movie[i].checked == true ){
            sum += 1;
        }
    }
    localStorage.setItem(name, JSON.stringify({name: name, match: sum}));
    alert(form.name.value + "님, 저와 " + sum + "개의 취향이 같으시네요!");
}

var longitude = document.querySelector('.longitude')
var latitude = document.querySelector('.latitude')
var date = document.querySelector('.date')
var zoom = document.querySelector('.zoom')

function searchTerra(){
    document.querySelector('.content').innerHTML = ''

    var text = document.createElement('div')
    text.innerHTML = '<p>latitude: '+ latitude.value +', longitude: '+ longitude.value +', date:' +date.value +'zoom' + (zoom.value*10) + '<p>'

    var image = document.createElement('img')
    image.setAttribute('width', '850px')
    image.setAttribute('height', '850px')
    image.setAttribute('z-index', '20000')
    image.src = `https://api.nasa.gov/planetary/earth/imagery?lon=${longitude.value}&latitude=${latitude.value}&date=${date.value}&dim=${zoom.value}&api_key=UMRk5fAxNmq8HlE9ezqkfGYznKkRR3WSFEAzIsMc`
    image.onerror = function(){
        this.src = 'https://static.s4be.cochrane.org/app/uploads/sites/3/2022/05/Design-sem-nome.png'
    }

    document.querySelector('.content').append(text, image);
}


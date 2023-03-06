fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => {
        json.forEach(element => {
            var _select=document.getElementById('select');
            var _opt=document.createElement('option');
            _opt.innerHTML=element.name.common;
            _select.appendChild(_opt)
        });
      })
      function info(){
     var _selected=document.getElementById('select').value;
     var _karim=document.getElementById('karim')
     _karim.innerHTML= ''
     fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => {
        json.forEach(element => {
            if(element.name.common==_selected){
                var content=`
                <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-title"><span><b>Capital : </b></span> ttle</p>
                  <p class="card-title"><span><b>Population : </b></span> pop</p>
                  <p class="card-title"><span><b>Area : </b></span> areas</p>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              `
              var _div=document.createElement('div');
              var boot =content.replace('...',element.flags.png)
              boot=boot.replace('ttle',element.capital)
              boot=boot.replace('pop',element.population)
              boot=boot.replace('areas',element.area)
              _div.innerHTML=boot
              _karim.appendChild(_div)
            }
        });
      })
     
    }
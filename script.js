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
                <img src="..." class="card-img-top" id="img1" alt="...">
                <div class="card-body" >
                  <p class="card-title"><span><b>Capital : </b></span> ttle</p>
                  <p class="card-title"><span><b>Population : </b></span> pop</p>
                  <p class="card-title"><span><b>Area : </b></span> areas</p>
                  <p class="card-title"><span><b>Continent : </b></span> cont</p>
                  <p class="card-title"><span><b>Languages : </b></span> lang</p>
                  <p class="card-title"><span><b>Currencies : </b></span> curr</p>
                  <button href="#" class="btn btn-dark" id="btn1">More details</button>
                </div>
              </div>
              `
              var _div=document.createElement('div');
              var boot =content.replace('...',element.flags.png)
              boot=boot.replace('ttle',element.capital)
              boot=boot.replace('pop',element.population)
              boot=boot.replace('areas',element.area)
              boot=boot.replace('cont',element.continents)
              boot=boot.replace('lang',element.languages)
              boot=boot.replace('curr',element.currencies)
              _div.innerHTML=boot
              _karim.appendChild(_div)
            }
        });
      })
     
    }
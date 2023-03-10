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
              // console.log(element)
                var content=`
                <div class="card" style="width: 18rem;">
                <img src="image" class="card-img-top" id="img1" alt="image">
                <div class="card-body" >
                  <p class="card-title"><span><b>Capital : </b></span> ttle</p>
                  <p class="card-title"><span><b>Population : </b></span> pop</p>
                  <p class="card-title"><span><b>Area : </b></span> areas</p>
                  <p class="card-title"><span><b>Continent : </b></span> cont</p>
                  <p class="card-title"><span><b>Currencies : </b></span>cur </p>
                  <p class="card-title"><span><b>Languages : </b></span>lan</p>
                  <p class="card-title"><span><b>Timezone : </b></span>tz</p>
                  <p class="card-title"><span><b>Borders : </b></span>..,..,..,..,..,..,..</p>
                  <button href="#" class="btn btn-dark" id="btn1" onclick="rate()" >Rate of exch </button>
                  <div id="karim"></div>
                </div>
              </div>
              `  
                
              let _div=document.createElement('div');
              let boot =content.replace('image',element.flags.png)
              boot=boot.replace('ttle',element.capital)
              boot=boot.replace('pop',element.population)
              boot=boot.replace('areas',element.area)
              boot=boot.replace('cont',element.continents)
              var curr=element.currencies
                  Object.values(curr).forEach(currency=>{
                     boot=boot.replace('cur',currency.name+'=> '+currency.symbol)
                  })
              var curr2=element.currencies
                  Object.keys(curr2).forEach(currency2=>{

                    var _curbtn=document.getElementById('curbtn')
                    var _btn=document.createElement('button')
                     _btn.innerHTML=currency2
                    _curbtn.appendChild(_btn)
                     _btn.addEventListener('click',rate)
                     boot=boot.replace('exch',currency2)

                  })
              var lang=element.languages
                  Object.values(lang).forEach(language=>{
                     boot=boot.replace('lan',language)
                  })
              var bor=element.borders
              if(bor!=null){
                bor.forEach(border=>{
                  boot=boot.replace('..',border)
               })
              }
              boot=boot.replace('tz',element.timezones[0])
              _div.innerHTML=boot
              _karim.appendChild(_div)
            }
        });
      })
    }
    function rate(){
      var _selected=document.getElementById('select').value;
      fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => {
       for (let i = 0; i < json.length; i++) {
         if(json[i].name.common==_selected){
          var currrate=json[i].currencies
          Object.keys(currrate).forEach(element2=>{
            console.log(element2)
            var url='https://api.fastforex.io/fetch-multi?from='+element2+'&to=USD&api_key=ce4406151c-9ae1624803-rr60fz'                    
                    
                    fetch(url)
                    .then(response=>response.json())
                    .then(r=>{
                        var _rateExchange=r.results.USD;
                        alert('the rate of 1 '+element2+' is : '+ _rateExchange + "$")
                    })
          })
         }
}      })
    }
  
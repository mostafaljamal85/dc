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
                  <div class="card-title"><span><b>Currencies : </b></span>cur</div>

                  <p class="card-title"><span><b>Languages : </b></span>lan</p>
                  <button href="#" class="btn btn-dark" id="btn1">More details</button>
                </div>
              </div>
              `
             
                  
                
              let _div=document.createElement('div');
              let boot =content.replace('...',element.flags.png)
              boot=boot.replace('ttle',element.capital)
              boot=boot.replace('pop',element.population)
              boot=boot.replace('areas',element.area)
              boot=boot.replace('cont',element.continents)
              // boot=boot.replace('lang',element.languages)
              var curr=element.currencies
                  Object.keys(curr).forEach(currency=>{
                     boot=boot.replace('cur',currency)
                  })
              var lang=element.languages
                  Object.keys(lang).forEach(language=>{
                     boot=boot.replace('lan',language)
                  })
              _div.innerHTML=boot
              _karim.appendChild(_div)

            
            }
        });
      })
   
     
    }
//     function currenc(){
//       var _curren=document.getElementById('curren')
//       var _selected=document.getElementById('select').value;
//       var _karim=document.getElementById('karim')

//       fetch('https://restcountries.com/v3.1/all')
//       .then(response => response.json())
//       .then(json => {
    
//              for (let i = 0; i < json.length; i++) {
//               if(json[i].name.common==_selected){
//                 var curr=json[i].currencies
//                 Object.keys(curr).forEach(currency=>{
//                   var curcontent=
//                   `                
//                   <div class="card-title" id="curren"><span><b>Currencies : </b></span>cur</div>
//                   `
//                   var _div2=document.createElement('div')
//                   var boot2=curcontent.replace('cur',currency)
//                   // var _curr=document.createElement('div')
//                   // _curr.innerHTML=currency;
//                   _div2.innerHTML=boot2
//                   _karim.appendChild(_div2)
//                 })
//               }
                  
// }
//       })
//     }
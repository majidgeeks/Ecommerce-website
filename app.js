
let items = document.getElementById("items");

function jewellery() {
  items.innerHTML = "";
    setTimeout(
        fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(function(res){
          return res.json()
        })
        .then(function(result){
            console.log(result)
            for(var i = 0; i < result.length; i++){
                console.log(result[i]);
                let result2 = result[i];
                
                
                    items.innerHTML += `<div class="card m-2" style="width: 18rem;">
            <img src="${result2.image} " class="card-img-top img-result" alt="...">
            <div class="card-body">
              <h5 class="card-title">${result2.title.slice(0,26)}</h5>
              <h4 class="card-text">Price: ${result2.price}$</h4>
              <p class="card-text">${result2.description.slice(0,20)}</p>
            
              <a href="#" class="btn btn-primary">add to cart</a>
            </div>
          </div>`
    }
        })
        .catch(function(error){
           console.log("error", error)
        })
    
    

),3000 };



function electronics() {
  items.innerHTML = "";
  setTimeout(
      fetch('https://fakestoreapi.com/products/category/electronics')
      .then(function(res){
        return res.json()
      })
      .then(function(result){
          console.log(result)
          for(var i = 0; i < result.length; i++){
              console.log(result[i]);
              let result2 = result[i];
              
              
                  items.innerHTML += `<div class="card m-2" style="width: 18rem;">
          <img src="${result2.image} " class="card-img-top img-result" alt="...">
          <div class="card-body">
            <h5 class="card-title">${result2.title.slice(0,26)}</h5>
            <h4 class="card-text">Price: ${result2.price}$</h4>
            <p class="card-text">${result2.description.slice(0,20)}</p>
          
            <a href="#" class="btn btn-primary">add to cart</a>
          </div>
        </div>`
  }
      })
      .catch(function(error){
         console.log("error", error)
      })
  
  

),3000 };




function mensClothing() {
  items.innerHTML = "";
  setTimeout(
      fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then(function(res){
        return res.json()
      })
      .then(function(result){
          console.log(result)
          for(var i = 0; i < result.length; i++){
              console.log(result[i]);
              let result2 = result[i];
              
              
                  items.innerHTML += `<div id='card-container' class="card m-2" style="width: 18rem;">
          <img src="${result2.image} " class="card-img-top img-result" alt="...">
          <div class="card-body">
            <h5 class="card-title">${result2.title.slice(0,26)}</h5>
            <h4 class="card-text">Price: ${result2.price}$</h4>
            <p class="card-text">${result2.description.slice(0,20)}</p>
          
            <a href="#" class="btn btn-primary card-btn">add to cart</a>
          </div>
        </div>`
  }
      })
      .catch(function(error){
         console.log("error", error)
      })
  
  

),3000 };





function womensClothing() {
  items.innerHTML = "";
  setTimeout(
      fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then(function(res){
        return res.json()
      })
      .then(function(result){
          console.log(result)
          for(var i = 0; i < result.length; i++){
              console.log(result[i]);
              let result2 = result[i];
              
              
                  items.innerHTML += `<div class="card m-2" style="width: 18rem;">
          <img src="${result2.image} " class="card-img-top img-result" alt="...">
          <div class="card-body">
            <h5 class="card-title">${result2.title.slice(0,26)}</h5>
            <h4 class="card-text">Price: ${result2.price}$</h4>
            <p class="card-text">${result2.description.slice(0,20)}</p>
            <a href="#" class="btn btn-primary">add to cart</a>
          </div>
        </div>`
  }
      })
      .catch(function(error){
         console.log("error", error)
      })
  
  

),3000 };

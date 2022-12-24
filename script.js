const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();

request.onload = ()=>{
    let data = JSON.parse(request.response);
    data.forEach((item) => {
        let container = document.createElement('div')
        container.setAttribute('class',"container")
        document.querySelector('body').append(container)

        let cards = document.createElement('div')
        cards.setAttribute('class',"cards")
        container.appendChild(cards)
        
        let countryname = document.createElement('h1')
        countryname.setAttribute('class',"countryname")
        countryname.innerHTML = `${item.name.common}`
        cards.append(countryname)
        
        let image = document.createElement('img')
        image.setAttribute('src',item.flags.png)
        cards.appendChild(image)

        let capital = document.createElement('h2')
        capital.setAttribute('class',"capital")
        capital.innerHTML = `Capital : ${item.capital}`
        cards.appendChild(capital)

        let region = document.createElement('h2')
        region.setAttribute('class',"region")
        region.innerHTML = `Region : ${item.region}`
        cards.appendChild(region)

        
        let latlng = document.createElement('h2')
        latlng.setAttribute('class',"latlng")
        latlng.innerHTML = `Latlng : ${item.latlng}`
        cards.appendChild(latlng)

        
        // let currencycode = document.createElement('h2')
        // currencycode.setAttribute('class',"currencycode")
        // currencycode.innerHTML = `Currency Code : ${item.currencies.}`

    
    });
}
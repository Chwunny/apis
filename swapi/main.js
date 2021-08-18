
const button = document.querySelector('button')


const buttonClicked = () => {
    button.style.display = 'none'
    axios.get('https://swapi.dev/api/planets/2')
    .then(res => { 
       let residents = res.data.residents
       for(let i = 0; i < residents.length; i++){
          axios.get(residents[i])
          .then(res => {
              const content = document.querySelector('content')
              let h2 = document.createElement('h2')
              h2.textContent = res.data.name
              content.appendChild(h2)
          })
       }
    })
}

button.addEventListener('click', buttonClicked)

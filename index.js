function loading() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector("#places-london")

        data.map(data => {
          const card = document.createElement("div")
          card.classList.add("card")

          const img = document.createElement("img")
          img.src = data.imagem
          img.alt = data.nome

          const titulo = document.createElement("h4")
          titulo.textContent = data.nome

          card.appendChild(img)
          card.appendChild(titulo)
          container.appendChild(card)
      })
})
}

loading()

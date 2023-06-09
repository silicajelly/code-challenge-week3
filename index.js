fetch("http://localhost:3001/films")
   .then (response => response.json())
   .then (data =>{

     for(let i=0;i<data.length;i++){
      let title = data[i].title;
      let poster = data[i].poster;
      let runtime = data[i].runtime;
      let showtime = data[i].showtime;
      let Availableticket = data[i].availableticket;
      document.querySelector(".Movielist").innerHTML+=`
          <p>${title}</p>
         <p>${runtime}</p>
         <p>${showtime}</p>
         <p>${Availableticket}</p>
         <img src="${poster}">
         `;
     }
        })
        .catch(error => console.error(error));
        // Populate UI with movie details
        function populateMovieDetails(index) {
            fetch("http://localhost:3001/films",{
                method:'POST',
                headers: {
                   "Content-Type": "application/json"
                },
                 body: JSON.stringify(index),
            })
            .then (response => response.json())
            .then (data => console.log(data))
          const movie = movies[index];
          const poster = document.getElementById('poster');
          const title = document.getElementById('title');
          const runtime = document.getElementById('runtime');
          const showtime = document.getElementById('showtime');
          const availableTickets = document.getElementById('available-tickets');
          poster.src = movie.poster;
          title.innerText = movie.title;
          runtime.innerText = `Runtime: ${movie.runtime} minutes`;
          showtime.innerText = `Showtime: ${movie.showtime}`;
          availableTickets.innerText = `Available Tickets: ${movie.capacity - movie.tickets_sold}`;
        }
        // Populate film list
        function populateFilmList() {
          const filmList = document.getElementById('films');
          fetch("http://localhost:3001/films" , {
                method:'POST',
                headers: {
                   "Content-Type": "application/json"
                },
                 body: JSON.stringify(index),
            })
            .then (response => response.json())
            .then (data => console.log(data))
          // Remove placeholder li element
          filmList.removeChild(filmList.firstElementChild);
          // Add each movie to film list
          movies.forEach((movie, index) => {
            const li = document.createElement('li');
            li.innerText = movie.title;
            li.classList.add('film', 'item');
            li.addEventListener('click', () => populateMovieDetails(index));
            filmList.appendChild(li);
            fetch("http://localhost:3001/films",{
                method:'POST',
                headers: {
                   "Content-Type": "application/json"
                },
                 body: JSON.stringify(index),
            })
            .then (response => response.json())
            .then (data => console.log(data))
          });
        }
        // Handle ticket purchase
        const buyTicketButton = document.getElementById('buy-ticket');
        buyTicketButton.addEventListener('click', () => {
          const availableTickets = document.getElementById('available-tickets');
          const numAvailableTickets = parseInt(availableTickets.innerText.split(':')[1]);
          if (numAvailableTickets > 0) {
            availableTickets.innerText = `Available Tickets: ${numAvailableTickets - 1}`;
          } else {
            alert('This showing is sold out.');
          }
        });
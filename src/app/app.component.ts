import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'icanhazdad';
  
  ngOnInit(): void {
    let getJokeBtn = document.getElementById('get_joke');
    let joke = document.getElementById('joke');
    let new_joke : string;

    getJokeBtn?.addEventListener('click', async () => {
        const dadJoke = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json"
            }
        });
        const dadJokeJSON = await dadJoke.json();
        if (dadJokeJSON.status === 200) {
          (async () => {
            new_joke = dadJokeJSON.joke;
            // console.log(new_joke);
            joke!.innerText = new_joke;
          })();
        } else {
           console.log("Error retrieving dad joke!");
        }
    })
  }
}

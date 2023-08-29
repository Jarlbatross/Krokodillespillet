      let app = document.getElementById('app');
      let numOne;
      let numTwo;
      let playerAnswer;

      let score = 0;

      updateView();
      function updateView() {
        app.innerHTML = /*html*/ `
        <div>poeng: ${score}</div> <br />
        <div>${numOne}</div>
      <br />
      <input
        type = "text"
        oninput = "playerAnswer = this.value"/>
      <br />
      <br />
      <div>${numTwo}</div>
      <br />
      <button onclick = "points()">Submit</button>
      <button onclick = "reset()">Reset</button>`
        rng();
      }

      function rng() {
        numOne = Math.floor(Math.random() * 10) + 1;
        numTwo = Math.floor(Math.random() * 10) + 1;
        updateView();
      }

      function points() {
        if (numOne === numTwo && playerAnswer === '=') {
          score++;
        } else if (numOne > numTwo && playerAnswer === '>') {
          score++;
        } else if (numOne < numTwo && playerAnswer === '<') {
          score++;
        } else {
          score--;
        }
        updateView();
      }

      function reset() {
        score = 0;
        rng();
        updateView();
      }

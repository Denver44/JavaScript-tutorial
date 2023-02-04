document.addEventListener("DOMContentLoaded", () => {
  // card Options
  const cardArray = [
    {
      name: "fires",
      img:
        "https://raw.githubusercontent.com/DurgeshRai04/Memory-game/master/Images/fries.png",
    },
    {
      name: "fires",
      img:
        "https://raw.githubusercontent.com/DurgeshRai04/Memory-game/master/Images/fries.png",
    },
    {
      name: "cheeseburger",
      img:
        "https://raw.githubusercontent.com/DurgeshRai04/Memory-game/master/Images/cheeseburger.png",
    },
    {
      name: "cheeseburger",
      img:
        "https://raw.githubusercontent.com/DurgeshRai04/Memory-game/master/Images/cheeseburger.png",
    },
    {
      name: "hotdog",
      img:
        "https://raw.githubusercontent.com/DurgeshRai04/Memory-game/master/Images/hotdog.png",
    },
    {
      name: "hotdog",
      img:
        "https://raw.githubusercontent.com/DurgeshRai04/Memory-game/master/Images/hotdog.png",
    },
    {
      name: "ice-cream",
      img:
        "https://raw.githubusercontent.com/DurgeshRai04/Memory-game/master/Images/ice-cream.png",
    },
    {
      name: "ice-cream",
      img:
        "https://raw.githubusercontent.com/DurgeshRai04/Memory-game/master/Images/ice-cream.png",
    },
    {
      name: "milkshake",
      img:
        "https://raw.githubusercontent.com/DurgeshRai04/Memory-game/master/Images/milkshake.png",
    },
    {
      name: "milkshake",
      img:
        "https://raw.githubusercontent.com/DurgeshRai04/Memory-game/master/Images/milkshake.png",
    },
    {
      name: "pizza",
      img:
        "https://raw.githubusercontent.com/DurgeshRai04/Memory-game/master/Images/pizza.png",
    },
    {
      name: "pizza",
      img:
        "https://raw.githubusercontent.com/DurgeshRai04/Memory-game/master/Images/pizza.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());
  console.log(cardArray);
  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardchoosen = [];
  let cardchoosenID = [];
  let cardWon = [];

  //1. create your board;
  function createboard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img"); // create and Img element
      card.setAttribute(
        "src",
        "https://raw.githubusercontent.com/DurgeshRai04/Memory-game/master/Images/blank.png"
      ); // added the blank image.
      card.setAttribute("data-id", i); // data-id given to every image.
      card.addEventListener("click", flipcard);
      grid.appendChild(card);
    }
  }

  //3. Check you Match
  function checkForMatch() {
    let msg = document.getElementById("message");
    var cards = document.querySelectorAll("img");
    const optionOneID = cardchoosenID[0];
    const optionTwoID = cardchoosenID[1];

    if (optionOneID === optionTwoID) {
      msg.innerHTML = ` <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong> Its Wrong! </strong> You Selected A Same card.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>`;
      cards[optionOneID].setAttribute(
        "src",
        "https://raw.githubusercontent.com/DurgeshRai04/Memory-game/master/Images/blank.png"
      );
      cards[optionTwoID].setAttribute(
        "src",
        "https://raw.githubusercontent.com/DurgeshRai04/Memory-game/master/Images/blank.png"
      );
      setTimeout(() => {
        msg.innerHTML = "";
      }, 1000);
    } else if (cardchoosen[0] === cardchoosen[1]) {
      // alert("You Find A match")

      msg.innerHTML = ` <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong> Good Luck! </strong> You Find A match.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>`;

      cards[optionOneID].setAttribute(
        "src",
        "https://raw.githubusercontent.com/DurgeshRai04/Memory-game/master/Images/white.png"
      );
      cards[optionTwoID].setAttribute(
        "src",
        "https://raw.githubusercontent.com/DurgeshRai04/Memory-game/master/Images/white.png"
      );
      cardWon.push(cardchoosen);
      setTimeout(() => {
        msg.innerHTML = "";
      }, 1000);
    } else {
      cards[optionOneID].setAttribute(
        "src",
        "https://raw.githubusercontent.com/DurgeshRai04/Memory-game/master/Images/blank.png"
      );
      cards[optionTwoID].setAttribute(
        "src",
        "https://raw.githubusercontent.com/DurgeshRai04/Memory-game/master/Images/blank.png"
      );
      // alert("Sorry Try Again")
      msg.innerHTML = ` <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong> Bad Luck! </strong>Sorry Try Again.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>`;

      setTimeout(() => {
        msg.innerHTML = "";
      }, 1000);
    }

    cardchoosen = [];
    cardchoosenID = [];
    resultDisplay.textContent = cardWon.length;
    if (cardWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congrtaulations You Found All Matches";
    }
  }

  //2. Flip you Card
  function flipcard() {
    let cardId = this.getAttribute("data-id");
    console.log(cardId);
    cardchoosen.push(cardArray[cardId].name);
    console.log(cardchoosen);
    cardchoosenID.push(cardId);
    console.log(cardchoosenID);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardchoosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createboard();
});

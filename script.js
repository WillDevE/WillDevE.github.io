var cards = document.getElementsByClassName('card');

for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', function() {
    this.classList.toggle('flipped');

    var cardFront = this.querySelector('.card-front');
    var cardBack = this.querySelector('.card-back');

    if (cardFront.classList.contains('hidden')) {
      cardFront.classList.remove('hidden');
      cardBack.classList.add('hidden');
    } else {
      cardFront.classList.add('hidden');
      cardBack.classList.remove('hidden');
    }
  });
}

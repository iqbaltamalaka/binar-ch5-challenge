function getPilihanComp() {
    var pilihanComp = ['batu', 'gunting', 'kertas']
    var comp = Math.floor(Math.random() * 3)
    return pilihanComp[comp]
  }
  
  function getHasil(pilihanComp, pilihanPlayer) {
    var elemCom = document.getElementById('text-vs-hasil')
    elemCom.classList.add('div-vs')
    if (pilihanComp == pilihanPlayer) {
      elemCom.innerHTML = '<h3 class="text-vs-draw">DRAW</h3>'
    } else {
      if (pilihanComp == 'gunting')
        if (pilihanPlayer == 'batu player-batu') {
          elemCom.innerHTML = '<h3 class="text-vs-lose">You Lose</h3>'
        } else {
          elemCom.innerHTML = '<h3 class="text-vs-win">Player 1 Win</h3>'
        }
      else {
        if (pilihanComp == 'batu')
          if (pilihanPlayer == 'kertas player-kertas') {
            elemCom.innerHTML = '<h3 class="text-vs-lose">You Lose</h3>'
          } else {
            elemCom.innerHTML = '<h3 class="text-vs-win">Player 1 Win</h3>'
          }
        else {
          if (pilihanComp == 'kertas')
            if (pilihanPlayer == 'gunting player-gunting') {
              elemCom.innerHTML = '<h3 class="text-vs-lose">You Lose</h3>'
            } else {
              elemCom.innerHTML = '<h3 class="text-vs-win">Player 1 Win</h3>'
            }
        }
      }
    }
  }
  var playerBatu = document.querySelector('.player-batu')
  playerBatu.addEventListener('click', function () {
    playerBatu.style.backgroundColor = 'lightblue'
    playerBatu.style.borderRadius = '10%'
    var pilihanComp = getPilihanComp()
    var pilihanPlayer = playerBatu.className
    hasil = getHasil(pilihanComp, pilihanPlayer)
    var imgComputer = document.querySelector(
      '.comp-gunting',
      +'.comp-batu',
      +'.comp-kertas',
    )
    imgComputer.style.backgroundColor = 'lightblue'
    imgComputer.style.borderRadius = '10%'
    console.log('pilhan player: ' + pilihanPlayer)
    console.log('pilhan comp: ' + pilihanComp)
  })
  
  var playerKertas = document.querySelector('.player-kertas')
  playerKertas.addEventListener('click', function () {
    playerKertas.style.backgroundColor = 'lightblue'
    playerKertas.style.borderRadius = '10%'
    var pilihanComp = getPilihanComp()
    var pilihanPlayer = playerKertas.className
    hasil = getHasil(pilihanComp, pilihanPlayer)
    var imgComputer = document.querySelector(
      '.comp-batu',
      +'.comp-gunting',
      +'.comp-kertas',
    )
    imgComputer.style.backgroundColor = 'lightblue'
    imgComputer.style.borderRadius = '10%'
    console.log('pilhan player: ' + pilihanPlayer)
    console.log('pilhan comp: ' + pilihanComp)
  })
  
  var playerGunting = document.querySelector('.player-gunting')
  playerGunting.addEventListener('click', function () {
    playerGunting.style.backgroundColor = 'lightblue'
    playerGunting.style.borderRadius = '10%'
    var pilihanComp = getPilihanComp()
    var pilihanPlayer = playerGunting.className
    hasil = getHasil(pilihanComp, pilihanPlayer)
    var imgComputer = document.querySelector(
      '.comp-batu',
      +'.comp-gunting',
      +'.comp-kertas',
    )
    imgComputer.style.backgroundColor = 'lightblue'
    imgComputer.style.borderRadius = '10%'
    console.log('pilhan player: ' + pilihanPlayer)
    console.log('pilhan comp: ' + pilihanComp)
  })
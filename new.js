var main = document.querySelector(".main");
var war = document.querySelector(".war");

// heroes

var heroes = document.querySelector(".heroes");
var hero = document.querySelectorAll(".hero");
var raiden = document.querySelector(".raiden");
var scorpion = document.querySelector(".scorpion");
var mileena = document.querySelector(".mileena");
var baraka = document.querySelector(".baraka");
var subZero = document.querySelector(".sub-zero");
var kungLao = document.querySelector(".kung-lao");

var chooseEnemy = document.querySelector(".choose-enemy");
var enemy = document.querySelector(".enemy");
var chooseEnemyh2 = document.querySelector(".chooseenemy-h2");
var enemyh2 = document.querySelector(".enemy-h2");
var aboutQehreman = document.querySelector(".about-qehreman");
var aboutDushmen = document.querySelector(".about-dushmen");
var fight = document.querySelector(".fight");
var enemies = document.querySelector(".enemies");
var heroName = document.querySelector(".heroName")
var heroHealth = document.querySelector(".heroHealth")
var heroPower = document.querySelector(".heroPower")
var enemyName = document.querySelector(".enemyName")
var enemyHealth = document.querySelector(".enemyHealth")
var enemyPower = document.querySelector(".enemyPower")
var heroLayout = document.querySelector(".herolayout")
var enemyLayout = document.querySelector(".enemylayout")
var popUp = document.querySelector(".pop-up")
var qehreman = false;
var dusmen = false;
var selectedEnemyName = ""
var selectedHeroName = ""

var qehremanlar = [raiden, scorpion, mileena, baraka, subZero, kungLao];

function startGame(){

    for (var i = 0; i < qehremanlar.length; i++) {
        qehremanlar[i].onclick = function () {
            if (!qehreman) {

                var ost = qehremanlar.filter(function (element) {
                    return element !== this;
                }, this);

                for (var j = 0; j < ost.length; j++) {
                    chooseEnemy.appendChild(ost[j]);
                }
                chooseEnemyh2.style.display = "block";
                qehreman = this;
                selectedHeroName = qehreman.dataset.name;

                if(qehreman === raiden|| qehreman === scorpion || qehreman === mileena){
                    qehreman.style.transform = "rotateY(180deg)"
                    aboutQehreman.style.transform = "rotateY(180deg)"
                }

                heroName.innerText = selectedHeroName
                heroPower.innerText = qehreman.dataset.power;
                heroHealth.innerText = qehreman.dataset.health;
                aboutQehreman.style.display = "block"
                qehreman.prepend(aboutQehreman);

            } else if (!dusmen && qehreman !== this) {
                enemy.append(this);
                dusmen = this;
                selectedEnemyName = dusmen.dataset.name;

                if(dusmen === baraka ||  dusmen === subZero || dusmen ===kungLao){
                    dusmen.style.transform = "rotateY(180deg)"
                    aboutDushmen.style.transform = "rotateY(180deg)"
                }
                fight.style.display = "block";
                enemyh2.style.display = "block";

                qehi.innerText =selectedHeroName
                dusu.innerText = selectedEnemyName
                
                enemyName.innerText = selectedEnemyName
                enemyPower.innerText = dusmen.dataset.power;
                enemyHealth.innerText = dusmen.dataset.health;
                aboutDushmen.style.display = "block"
                dusmen.prepend(aboutDushmen);
            }
        };

    }

    // start war

    var beatButton = document.querySelector('.beat');
    var qehi = document.querySelector(".qehName")
    var dusu = document.querySelector(".dusName")
    var startAgainButton = document.querySelector(".start-again")
    var result = document.querySelector(".win-lost-info")

    fight.onclick = function () {
        main.style.display = "none";
        war.style.display = "flex";
        aboutDushmen.style.display = "none"
        aboutQehreman.style.display = "none"
        enemies.append(qehreman, dusmen);
        for (var i of hero) {
            i.style.height = "350px";
            i.style.pointerEvents = "none";
        }
        
        var counter1 = 300;
        var counter2= 300;
        var numbers = [40, 50, 60, 70]
        for (var d =0; d<numbers.length; d++){
            var colorChangeHero = Math.floor(Math.random()*numbers[d]);
            var colorChangeEnemy = Math.floor(Math.random() *numbers[d]);    
            beatButton.onclick = function () {
                qehreman.style.transform = "rotateY(0deg)"
                qehreman.style.height = "420px"
                qehreman.style.width = "400px"
                dusmen.style.transform = "rotateY(180deg)"
                dusmen.style.height = "420px"
                dusmen.style.width = "400px"
                if(qehreman == baraka){
                    qehreman.style.backgroundImage = "url(https://static.wikia.nocookie.net/mortalkombat/images/8/81/Baraka_blade_toss_mk2.gif/revision/latest?cb=20081209061125&path-prefix=es)"
                } else if(qehreman === mileena){
                    qehreman.style.backgroundImage = "url(https://static.wikia.nocookie.net/mortalkombat/images/9/96/Animated_mileena_sai_throw_mk2.gif/revision/latest/smart/width/250/height/250?cb=20091214234811&path-prefix=es)"
                }else if(qehreman == scorpion){
                    qehreman.style.backgroundImage = "url(https://www.fightersgeneration.com/nf8/char6/scorpion-ultimate-mk3-axe-uppercut-fan-remake.GIF)"
                } else if(qehreman == raiden){
                    qehreman.style.backgroundImage = "url(https://static.wikia.nocookie.net/mortalkombatcenter/images/7/7f/Raid4.gif/revision/latest?cb=20110326233006)"
                } else if(qehreman == kungLao){
                    qehreman.style.backgroundImage = "url(https://www.fightersgeneration.com/np2/char1/gifs/kunglao-mk3-kick.gif)"
                    qehreman.style.height = "360px"
                } else if(qehreman == subZero){
                    qehreman.style.backgroundImage = "url(https://31.media.tumblr.com/tumblr_mdpl8lPhSd1r3ifxzo1_500.gif)"
                }

                if(dusmen == baraka){
                    dusmen.style.backgroundImage = "url(https://static.wikia.nocookie.net/mortalkombat/images/8/81/Baraka_blade_toss_mk2.gif/revision/latest?cb=20081209061125&path-prefix=es)"
                } else if(dusmen === mileena){
                    dusmen.style.backgroundImage = "url(https://static.wikia.nocookie.net/mortalkombat/images/9/96/Animated_mileena_sai_throw_mk2.gif/revision/latest/smart/width/250/height/250?cb=20091214234811&path-prefix=es)"
                }else if(dusmen == scorpion){
                    dusmen.style.backgroundImage = "url(https://www.fightersgeneration.com/nf8/char6/scorpion-ultimate-mk3-axe-uppercut-fan-remake.GIF)"
                } else if(dusmen == raiden){
                    dusmen.style.backgroundImage = "url(https://static.wikia.nocookie.net/mortalkombatcenter/images/7/7f/Raid4.gif/revision/latest?cb=20110326233006)"
                } else if(dusmen == kungLao){
                    dusmen.style.backgroundImage = "url(https://www.fightersgeneration.com/np2/char1/gifs/kunglao-mk3-kick.gif)"
                    dusmen.style.height = "360px"
                } else if(dusmen == subZero){
                    dusmen.style.backgroundImage = "url(https://31.media.tumblr.com/tumblr_mdpl8lPhSd1r3ifxzo1_500.gif)"
                }
                heroLayout.style.width = `${counter1}px`;
                enemyLayout.style.width = `${counter2}px`;
                counter1 = counter1 - colorChangeHero
                counter2 = counter2 - colorChangeEnemy
                console.log(counter1 + " " + counter2)
            if(counter1<=0){
                    heroLayout.style.width = "0"
                    popUp.style.visibility = "visible"
                    result.textContent = " You Lost :("
                    popUp.style.backgroundColor = "Red"
                    startAgainButton.onclick = resetGame;
                } else if(counter2<=0){
                    enemyLayout.style.width = `0`;
                    popUp.style.visibility = "visible"
                    result.textContent = " You Won!"
                    popUp.style.backgroundColor = "Green"
                    startAgainButton.onclick = resetGame;
                }
            }
        }
    };
}

// reset game

function resetGame() {
    qehreman = false;
    dusmen = false;
    selectedHeroName = "";
    selectedEnemyName = "";

    heroLayout.style.width = "300px"
    enemyLayout.style.width = "300px";

    popUp.style.visibility = "hidden";
    popUp.style.backgroundColor = "transparent";

    for (var i of hero) {
        i.style.height = "250px";
        i.style.pointerEvents = "auto";
        i.style.transform = "rotateY(0deg";
        i.style.width = "150px";
    }
    fight.style.display = "none";
    main.style.display = "block";
    war.style.display = "none";
    chooseEnemyh2.style.display = "none";
    enemyh2.style.display = "none";
    
    heroes.innerHTML = ""; 
    qehremanlar.forEach(function(hero) {
        heroes.appendChild(hero);
    });

    heroName.innerText = "";
    heroPower.innerText = "";
    heroHealth.innerText = "";
    enemyName.innerText = "";
    enemyPower.innerText = "";
    enemyHealth.innerText = "";

    // while (aboutQehreman.hasChildNodes()) {
    //     aboutQehreman.removeChild(aboutQehreman.firstChild);
    // }

    // while (aboutDushmen.hasChildNodes()) {
    //     aboutDushmen.removeChild(aboutDushmen.firstChild);
    // }
    aboutDushmen.style.display = "none"
    aboutQehreman.style.display = "none"
    aboutQehreman.style.transform = "rotateY(0deg)"
    aboutDushmen.style.transform = "rotateY(0deg)"

raiden.style.backgroundImage = "url(https://static.wikia.nocookie.net/fcoc-vs-battles/images/6/6d/Raiden1.png/revision/latest/scale-to-width-down/504?cb=20201025155232)" 
scorpion.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/en/4/45/Scorpiontobias.png)" 
mileena.style.backgroundImage = "url(mileena1.png)" 
baraka.style.backgroundImage = "url(Baraka_Art.webp)" 
subZero.style.backgroundImage = "url(sub_zero.png)" 
kungLao.style.backgroundImage = "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75cbde8a-db1c-4fe1-869e-8bb5be9a49b6/devfw3k-33cea0c2-6f43-43f3-9f50-0f007185e7fe.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc1Y2JkZThhLWRiMWMtNGZlMS04NjllLThiYjViZTlhNDliNlwvZGV2Znczay0zM2NlYTBjMi02ZjQzLTQzZjMtOWY1MC0wZjAwNzE4NWU3ZmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GR1zEjZqPJagyuA6pepi7qsnWgJaoJU41XJLv_es4g4)"

    startGame();
}

startGame();

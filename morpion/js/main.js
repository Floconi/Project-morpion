  
  var pions = document.querySelectorAll("#Jeu button");
  var joueurs = ["X", "O"];
  var tour = 0;
  var caseNumber = 0

  function rechercheid(){
    var cases
    if(caseNumber == 1){
      cases = document.getElementById("btn1")
    }
    if(caseNumber == 2){
      cases = document.getElementById("btn2")
    }
    if(caseNumber == 3){
      cases = document.getElementById("btn3")
    }
    if(caseNumber == 4){
      cases = document.getElementById("btn4")
    }
    if(caseNumber == 5){
      cases = document.getElementById("btn5")
    }
    if(caseNumber == 6){
      cases = document.getElementById("btn6")
    }
    if(caseNumber == 7){
      cases = document.getElementById("btn7")
    }
    if(caseNumber == 8){
      cases = document.getElementById("btn8")
    }
    if(caseNumber == 9){
      cases = document.getElementById("btn9")
    }
    return cases


  }
  //Fonction appelé lorsque l'un des 2 joueurs sélectionne une case
  function SetPion(caseNumber){
    console.log(caseNumber);
    var caseCliquer = rechercheid(caseNumber)
    affichage =  document.getElementById("StatutJeu");
    affichage.innerHTML =  "Joueur " +  joueurs[tour] +  " c'est votre tour.";
    
    if (tour == 1 ){
      caseCliquer = joueurs[tour]
    } else {
      caseCliquer.innerHTML = joueurs[tour]
    }

    tour++;
    if(rechercherVainqueur(pions) != false){
        affichage.innerHTML =  "Le jeu est terminé ! <br /> Joueur " +  rechercherVainqueur(pions) +  " a gagné";
    }

  }

  //Fonction pour vérifier le résultat après chaque coup, si retourne false
  // alors pas de gagnant sinon retourne le nom du gagant
  function rechercherVainqueur(pions){
        console.log(pions);
        return false;
  }
 
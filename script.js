let iconClicked = false; // Si l'icône "burger menu" n'est pas encore cliqué

let iconClicked_2 = false; // Si l'icône dark/white mode n'est pas encore cliqué
function togglefunction() {
    const toggler = document.getElementById('toggler'); // Obtenir l'élément span à partir de l'ID "toggler"
    if (iconClicked) { // Si l'icône est cliqué (à true)
        const span = document.createElement('span'); // Créer un élément span
        span.id ="toggler"; // Lui incorporer l'id "toggler"
        if(color_mode == 0) {
        span.className = "navbar-toggler-icon navbar-dark"; // Incorporer aussi les classes requises pour afficher le "burger menu"
        } 

        if(color_mode == 1) {
          span.className = "navbar-toggler-icon navbar-light"; // Incorporer aussi les classes requises pour afficher le "burger menu"
          } 
        span.style.color = '#d1d5db'; // Y ajouter une couleur spécifique
        toggler.replaceWith(span); // Et remplacer la balise <i> par le <span> et tout ses paramètres
    
    } else {
    
        const i = document.createElement('i'); // Créer l'élément <i>
        i.id ="toggler"; // Y ajouter l'id => "toggler"
        i.className = "fa-solid fa-xmark"; // Aussi les classes de font awesome pour afficher une croix
        i.style.color = '#d1d5db'; // Ainsi qu'une couleur
        toggler.replaceWith(i); // Remplacer l'élément <span> par <i>
    }
    iconClicked = !iconClicked; // Réinitialiser la variable "icône cliquée" qui correspond à la balise contenant le "burger menu" ou "la croix"
}

function togglefunction_2() {
  const toggler = document.getElementById('toggler_2'); // Obtenir l'élément span à partir de l'ID "toggler"
  if (iconClicked_2) { // Si l'icône est cliqué (à true)
      toggler.classList.remove('fa-sun'); // Enleve le symbole soleil
      toggler.classList.add('fa-moon'); // Le remplace par le symbole lune
      toggler.style.color = '#030712'; // Y ajouter une couleur spécifique
  
  } else {
    toggler.classList.remove('fa-moon'); // Enleve le symbole lune
    toggler.classList.add('fa-sun'); // Le remplace par le symbole du soleil
    toggler.style.color = '#d1d5db'; // Ainsi qu'une couleur
    
  }
  iconClicked_2 = !iconClicked_2; // Réinitialiser la variable "icône cliquée" qui correspond à la balise contenant le soleil ou la lune
}




function orderchanger(size) { // Cette function sert juste à réordonner l'ordre d'affichage d'une ou plusieurs cols dans X row si l'on passe 
  // dans un format mobile ou non


const row_1 = document.getElementById('row_1');
const row_2 = document.getElementById('row_2');
const row_3 = document.getElementById('row_3');
const row_4 = document.getElementById('row_4');
const row_5 = document.getElementById('row_5');
const row_6 = document.getElementById('row_6');

if(size.matches) { // Vérifie si la taille de la fenêtre est bien inférieure ou égale à celle mentionée plus bas.
    row_1.classList.add('order-2');
    row_2.classList.add('order-1');
    row_3.classList.add('order-2');
    row_4.classList.add('order-1');
    row_5.classList.add('order-2');
    row_6.classList.add('order-1');
} else {
    row_1.classList.remove('order-2');
    row_2.classList.remove('order-1');
    row_3.classList.remove('order-2');
    row_4.classList.remove('order-1');
    row_5.classList.remove('order-2');
    row_6.classList.remove('order-1');

}
}



var size = window.matchMedia("(max-width: 766px)"); // Cette variable va contenir quelle largeur de fenêtre sur laquelle nous souhaitons interagir 
orderchanger(size); // On la passe en paramètre de la fonction
size.addListener(orderchanger); // Déclenche l'appel de la fonction à chaque fois que la taille de la fenêtre change


function copy_button_one() {

    const email = document.getElementById('email');// On get la balise de l'élément contenant l'id "email"
    const email_text = email.innerHTML; // On accède et stocke le contenu html de la balise dans cette variable

    navigator.clipboard.writeText(email_text).then( // On accède et écrit dans le presse-papiers du navigateur client l'email en question (une fonction asynchrone)
        function () {
          /* le presse-papier est correctement lace par le symbole du soleil
    toggler.style.color = '#d1d5db'; // Ainsparamétré */
          alert('Texte copié dans le presse-papiers');
        },
        function () {
          /* l'écriture dans le presse-papier a échoué */
          console.error('Erreur lors de la copie dans le presse-papiers : ', err);
        },
      );
    }


    function copy_button_two() {

        const number = document.getElementById('number'); // On get la balise de l'élément contenant l'id "number"
        const number_text = number.innerHTML; // On accède et stocke le contenu html de la balise dans cette variable
    
        navigator.clipboard.writeText(number_text).then( // On accède et écrit dans le presse-papiers du navigateur client l'email en question (une fonction asynchrone)
            function () {
              /* le presse-papier est correctement paramétré */
              alert('Texte copié dans le presse-papiers');
            },
            function () {
              /* l'écriture dans le presse-papier a échoué */
              console.error('Erreur lors de la copie dans le presse-papiers : ', err);
            },
          );
        }

let color_mode =0; // A 0, cela signifie qu'on est en dark mode
function mode() {
  const toggler = document.getElementById('toggler_2'); // Obtenir l'élément span à partir de l'ID "toggler"
  if (iconClicked_2) { // Si l'icône est cliqué (à true)
      toggler.classList.remove('fa-moon'); // Enleve le symbole lune
      toggler.classList.add('fa-sun'); // Le remplace par le symbole soleil
      toggler.style.color = '#d1d5db'; // Y ajouter une couleur spécifique
      toggler.style.animation = 'roundo 45s infinite'; // Y ré-appliquer l'animation
  } if(!iconClicked_2) {
    toggler.classList.remove('fa-sun'); // Enleve le symbole soleil
    toggler.classList.add('fa-moon'); // Le remplace par le symbole lune
    toggler.style.color = '#030712'; // Ainsi qu'une couleur
    toggler.style.animation= 'wave 10s infinite'; // Y ré-appliquer l'animation
  }
  iconClicked_2 = !iconClicked_2; // Une fois cliquée, on change le status false ou true de iconClicked_2
  if(color_mode ==0) { // Donc si on est en dark mode, on change toutes les couleurs nécessaires du document HTML pour le passer en white mode
    
  const nav_color = document.querySelectorAll('.nav_brand'); // Selectionne toutes balises contenant la classe ".nav_brand" 
  const download = document.getElementById('download');
  const div_black = document.querySelectorAll('.div_color_1');
  const nav_back = document.querySelectorAll('.color_w');
  const flex_after_nav = document.querySelectorAll('.flex_after_navbar');
  const title_1st_container = document.querySelectorAll('.title_in_container');
  const p_1st_container = document.querySelectorAll('.p_in_container');

  const div_black_2 = document.querySelectorAll('.div_color_2');
  const container_2 = document.querySelectorAll('.container_2');
  const title_sub_2nd_container = document.querySelectorAll('.title_sub_container_2');
  const p_2nd_container = document.querySelectorAll('.p_container_2');

  const title_2nd_container = document.querySelectorAll('.title_in_container_2');

  const p_3rd_container = document.querySelectorAll('.p_container_3');


  const title_4th_container = document.querySelectorAll('.title_in_container_4');
  const list_4th_container = document.querySelectorAll('.list_in_container_4');
  const row_4th_container = document.querySelectorAll('.row_style_container_4');

  const col_5th_container_left = document.querySelectorAll('.col_design_container_5_left');
  const col_5th_container_right = document.querySelectorAll('.col_design_container_5_right');

  const color_prim = document.getElementById('color_prim');
  const p_last_container = document.querySelectorAll('.p_last_container');
  const color_1 = document.getElementById('last');
  const color_2 = document.getElementById('last_2');
  const color_3 = document.getElementById('last_3');
  const color_4 = document.getElementById('last_4');
  const color_burger = document.getElementById('toggler');
   nav_color.forEach((element) => { // L'applique à tout les éléments du document HTML contenant la classe ".nav_brand"
    element.style.color = '#030712';
  });

   download.classList.remove('btn-light');
   download.classList.add('btn-dark');

   color_burger.classList.remove('navbar-dark');
   color_burger.classList.add('navbar-light');

  div_black.forEach((elements) => {
    elements.style.backgroundColor = '#FFF';
  });
  
  nav_back.forEach((elements) => {
    elements.style.backgroundColor = '#FFF';
  });
  flex_after_nav.forEach((elements) => {
    elements.style.backgroundColor = '#FFF';
  });
  title_1st_container.forEach((elements) => {
    elements.style.color = '#111827';
  });
  p_1st_container.forEach((elements) => {
    elements.style.color = '#111827';
  });

  div_black_2.forEach((elements) => {
    elements.style.backgroundColor = '#F9FAFB';
  });
  container_2.forEach((elements) => {
    elements.style.backgroundColor = '#F9FAFB';
  });

  title_sub_2nd_container.forEach((elements) => {
    elements.style.color = '#111827';
    elements.style.backgroundColor = '#F9FAFB';
  });

  p_2nd_container.forEach((elements) => {
    elements.style.color = '#4B5563';
  });

  title_2nd_container.forEach((elements) => {
    elements.style.color = '#4B5563';
    elements.style.backgroundColor = '#E5E7EB';
  });
  p_3rd_container.forEach((elements) => {
    elements.style.color = '#4B5563';
    
  });

  title_4th_container.forEach((elements) => {
    elements.style.color = '#111827';
    
  });

  list_4th_container.forEach((elements) => {
    elements.style.color = '#4B5563';
    
  });

  row_4th_container.forEach((elements) => {
    elements.style.backgroundColor = '#FFF';
    
  });

  col_5th_container_left.forEach((elements) => {
    elements.style.backgroundColor = '#F9FAFB';
    
  });

  col_5th_container_right.forEach((elements) => {
    elements.style.backgroundColor = '#FFF';
    
  });


  color_prim.style.color = '#4B5563';
    
  p_last_container.forEach((elements) => {
    elements.style.color = '#4B5563';
    
  });

  
  color_1.style.color='#111827';
  color_2.style.color='#111827';
  color_3.style.color='#111827';
  color_4.style.color='#111827';

color_mode=1; // A 1, cela indique qu'on est en white mode
} else if(color_mode==1) { // Et si on est en white mode, on change toutes les couleurs nécessaires du document HTML pour le passer en dark mode

  const nav_color = document.querySelectorAll('.nav_brand'); // Selectionne toutes balises contenant la classe ".nav_brand" 
  const download = document.getElementById('download');
  const div_black = document.querySelectorAll('.div_color_1');
  const nav_back = document.querySelectorAll('.color_w');
  const flex_after_nav = document.querySelectorAll('.flex_after_navbar');
  const title_1st_container = document.querySelectorAll('.title_in_container');
  const p_1st_container = document.querySelectorAll('.p_in_container');

  const div_black_2 = document.querySelectorAll('.div_color_2');
  const container_2 = document.querySelectorAll('.container_2');
  const title_sub_2nd_container = document.querySelectorAll('.title_sub_container_2');
  const p_2nd_container = document.querySelectorAll('.p_container_2');

  const title_2nd_container = document.querySelectorAll('.title_in_container_2');

  const p_3rd_container = document.querySelectorAll('.p_container_3');


  const title_4th_container = document.querySelectorAll('.title_in_container_4');
  const list_4th_container = document.querySelectorAll('.list_in_container_4');
  const row_4th_container = document.querySelectorAll('.row_style_container_4');

  const col_5th_container_left = document.querySelectorAll('.col_design_container_5_left');
  const col_5th_container_right = document.querySelectorAll('.col_design_container_5_right');

  const color_prim = document.getElementById('color_prim');
  const p_last_container = document.querySelectorAll('.p_last_container');
  const color_1 = document.getElementById('last');
  const color_2 = document.getElementById('last_2');
  const color_3 = document.getElementById('last_3');
  const color_4 = document.getElementById('last_4');
  const color_burger = document.getElementById('toggler');
   nav_color.forEach((element) => { // L'applique à tout les éléments du document HTML contenant la classe ".nav_brand"
    element.style.color = '#F9FAFB';
  });

   download.classList.remove('btn-dark');
   download.classList.add('btn-light');

   color_burger.classList.remove('navbar-light');
   color_burger.classList.add('navbar-dark');
  div_black.forEach((elements) => {
    elements.style.backgroundColor = '#030712';
  });
  
  nav_back.forEach((elements) => {
    elements.style.backgroundColor = '#030712';
  });
  flex_after_nav.forEach((elements) => {
    elements.style.backgroundColor = '#030712';
  });
  title_1st_container.forEach((elements) => {
    elements.style.color = '#F9FAFB';
  });
  p_1st_container.forEach((elements) => {
    elements.style.color = '#D1D5DB';
  });

  div_black_2.forEach((elements) => {
    elements.style.backgroundColor = '#111827';
  });
  container_2.forEach((elements) => {
    elements.style.backgroundColor = '#111827';
  });

  title_sub_2nd_container.forEach((elements) => {
    elements.style.color = '#F9FAFB';
    elements.style.backgroundColor = '#111827';
  });

  p_2nd_container.forEach((elements) => {
    elements.style.color = '#D1D5DB';
  });

  title_2nd_container.forEach((elements) => {
    elements.style.color = '#D1D5DB';
    elements.style.backgroundColor = '#374151';
  });
  p_3rd_container.forEach((elements) => {
    elements.style.color = '#D1D5DB';
    
  });

  title_4th_container.forEach((elements) => {
    elements.style.color = '#F9FAFB';
    
  });

  list_4th_container.forEach((elements) => {
    elements.style.color = '#D1D5DB';
    
  });

  row_4th_container.forEach((elements) => {
    elements.style.backgroundColor = '#1F2937';
    
  });

  col_5th_container_left.forEach((elements) => {
    elements.style.backgroundColor = '#374151';
    
  });

  col_5th_container_right.forEach((elements) => {
    elements.style.backgroundColor = '#1F2937';
    
  });


  color_prim.style.color = '#D1D5DB';
    
  p_last_container.forEach((elements) => {
    elements.style.color = '#D1D5DB';
    
  });

  
  color_1.style.color='#D1D5DB';
  color_2.style.color='#D1D5DB';
  color_3.style.color='#D1D5DB';
  color_4.style.color='#D1D5DB';


color_mode=0; // Et on réinitialise à l'état initial si l'icône est cliquée une fois de plus pour ré-indiquer qu'on est repasser en dark mode
}
}








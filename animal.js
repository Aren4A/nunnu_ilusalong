var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsById("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }

function changeAnimal() {
    const elem = document.getElementById('animal').value;
    if (elem === "hiired") {
        Swal.fire({
            title: 'Hiired',
            text: 'Sulle meeldivad hiired!',
            imageUrl: 'https://www.woodlandtrust.org.uk/media/50820/house-mouse-wtml-1062551-amy-lewis.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
                  })
    } else if (elem === "jänesed" || elem === "Jänesed"){
        Swal.fire({
            title: 'Jänesed',
            text: 'Sulle meeldivad jänesed!',
            imageUrl: 'https://cdn.britannica.com/20/194520-050-DCAE62F1/New-World-Sylvilagus-cottontail-rabbits.jpg',
            imageWidth: 400,
            imageHeight: 500,
            imageAlt: 'Custom image',
                  })
    }else if (elem === "rotid" || elem === "Rotid"){
        Swal.fire({
            title: 'Rotid',
            text: 'Sulle meeldivad rotid!',
            imageUrl: 'https://www.pbs.org/wnet/nature/files/2021/05/rat-1280x720.png',
            imageWidth: 400,
            imageHeight: 500,
            imageAlt: 'Custom image',
                  })
    } else if (elem === "hamstrid" || elem === "Hamstrid"){
        Swal.fire({
            title: 'Hamstrid',
            text: 'Sulle meeldivad hamstrid!',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Hamster.jpg/1200px-Hamster.jpg',
            imageWidth: 400,
            imageHeight: 500,
            imageAlt: 'Custom image',
                  })
    } else if (elem === "kapibaarad" || elem === "Kapibaarad"){
        Swal.fire({
            title: 'Kapibaarad',
            text: 'Sulle meeldivad kapibaarad!',
            imageUrl: 'https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg',
            imageWidth: 400,
            imageHeight: 500,
            imageAlt: 'Custom image',
                  })
    } else if (elem === "koprad" || elem === "Koprad"){
        Swal.fire({
            title: 'Koprad',
            text: 'Sulle meeldivad koprad!',
            imageUrl: 'https://nationalzoo.si.edu/sites/default/files/animals/20181031-skipbrown152.jpg',
            imageWidth: 400,
            imageHeight: 500,
            imageAlt: 'Custom image',
                  })
    } else if (elem === "oravad" || elem === "Oravad"){
        Swal.fire({
            title: 'Oravad',
            text: 'Sulle meeldivad oravad!',
            imageUrl: 'https://www.perkypet.com/media/Articles/Perky-Pet/All-About-Squirrel-Nests.jpg',
            imageWidth: 400,
            imageHeight: 500,
            imageAlt: 'Custom image',
                  })
                         }
    else if (elem === "kaelkirjakud" || elem === "Kaelkirjakud"){
        Swal.fire({
            title: 'Kaelkirjakud',
            text: 'Sulle meeldivad kaelkirjakud!',
            imageUrl: 'https://images.pexels.com/photos/802112/pexels-photo-802112.jpeg?auto=compress&cs=tinysrgb&w=600',
            imageWidth: 400,
            imageHeight: 500,
            imageAlt: 'Custom image',
                  })
                         }
    else if (elem === "elevandid" || elem === "Elevandid"){
        Swal.fire({
            title: 'Elevandid',
            text: 'Sulle meeldivad elevandid!',
            imageUrl: 'https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?auto=compress&cs=tinysrgb&w=600',
            imageWidth: 400,
            imageHeight: 500,
            imageAlt: 'Custom image',
                  })
                         }
            else if (elem === "tiigrid" || elem === "Tiigrid"){
        Swal.fire({
            title: 'Tiigrid',
            text: 'Sulle meeldivad ttigrid!',
            imageUrl: 'https://images.pexels.com/photos/162203/panthera-tigris-altaica-tiger-siberian-amurtiger-162203.jpeg?auto=compress&cs=tinysrgb&w=600',
            imageWidth: 400,
            imageHeight: 500,
            imageAlt: 'Custom image',
                  })
                         }
            else if (elem === "hobused" || elem === "Hobused"){
        Swal.fire({
            title: 'Hobused',
            text: 'Sulle meeldivad hobused!',
            imageUrl: 'https://images.pexels.com/photos/633767/pexels-photo-633767.jpeg?auto=compress&cs=tinysrgb&w=600',
            imageWidth: 400,
            imageHeight: 500,
            imageAlt: 'Custom image',
                  })
                         }
            else if (elem === "kassid" || elem === "Kassid"){
        Swal.fire({
            title: 'Kassid',
            text: 'Sulle meeldivad kassid!',
            imageUrl: 'https://images.pexels.com/photos/804475/pexels-photo-804475.jpeg?auto=compress&cs=tinysrgb&w=600',
            imageWidth: 400,
            imageHeight: 500,
            imageAlt: 'Custom image',
                  })
                         }
            else if (elem === "koerad" || elem === "Koerad"){
        Swal.fire({
            title: 'Koerad',
            text: 'Sulle meeldivad koerad, oled hea inimene!',
            imageUrl: 'https://images.pexels.com/photos/2832119/pexels-photo-2832119.jpeg?auto=compress&cs=tinysrgb&w=600',
            imageWidth: 400,
            imageHeight: 500,
            imageAlt: 'Custom image',
                  })
                         }
            else if (elem === "lambad" || elem === "Lambad"){
        Swal.fire({
            title: 'Lambad',
            text: 'Sulle meeldivad lambad!',
            imageUrl: 'https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&w=600',
            imageWidth: 400,
            imageHeight: 500,
            imageAlt: 'Custom image',
                  })
                         }
            else if (elem === "leopardid" || elem === "Leopardid"){
        Swal.fire({
            title: 'Leopardid',
            text: 'Sulle meeldivad leopardid!',
            imageUrl: 'https://images.pexels.com/photos/2759315/pexels-photo-2759315.jpeg?auto=compress&cs=tinysrgb&w=600',
            imageWidth: 400,
            imageHeight: 500,
            imageAlt: 'Custom image',
                  })
                         }
            else if (elem === "kanad" || elem === "Kanad"){
        Swal.fire({
            title: 'Kanad',
            text: 'Sulle meeldivad kanad!',
            imageUrl: 'https://images.pexels.com/photos/1769279/pexels-photo-1769279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imageWidth: 400,
            imageHeight: 500,
            imageAlt: 'Custom image',
                  })
                         }
            else if (elem === "vaalad" || elem === "Vaalad"){
        Swal.fire({
            title: 'vaalad',
            text: 'Sulle meeldivad vaalad!',
            imageUrl: 'https://media.istockphoto.com/id/488546736/photo/humpback-whale.jpg?s=612x612&w=0&k=20&c=xvi9McAaywJglmUbYD2aVFAPm9acr1og74IuS4oJ3I0=',
            imageWidth: 400,
            imageHeight: 500,
            imageAlt: 'Custom image',
                  })
                         }
            else if (elem === "lehmad" || elem === "Lehmad"){
        Swal.fire({
            title: 'Lehmad',
            text: 'Sulle meeldivad lehmad!',
            imageUrl: 'https://images.pexels.com/photos/1449656/pexels-photo-1449656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imageWidth: 400,
            imageHeight: 500,
            imageAlt: 'Custom image',
                  })
                         }
            else if (elem === "sead" || elem === "Sead"){
        Swal.fire({
            title: 'Sead',
            text: 'Sulle meeldivad sead!',
            imageUrl: 'https://images.pexels.com/photos/63285/pig-alp-rona-furna-sow-63285.jpeg?auto=compress&cs=tinysrgb&w=600',
            imageWidth: 400,
            imageHeight: 500,
            imageAlt: 'Custom image',
                  })
                         }
            else if (elem === "nahkhiired" || elem === "Nahkhiired"){
        Swal.fire({
            title: 'nahkhiired',
            text: 'Sulle meeldivad nahkhiired!',
            imageUrl: 'https://images.pexels.com/photos/2587639/pexels-photo-2587639.jpeg?auto=compress&cs=tinysrgb&w=600',
            imageWidth: 400,
            imageHeight: 500,
            imageAlt: 'Custom image',
                  })
                         }
            else if (elem === "lambad" || elem === "Lambad"){
        Swal.fire({
            title: 'Lambad',
            text: 'Sulle meeldivad lambad!',
            imageUrl: 'https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&w=600',
            imageWidth: 400,
            imageHeight: 500,
            imageAlt: 'Custom image',
                  })
                         }
            else if (elem === "krokodillid" || elem === "Krokodillid"){
        Swal.fire({
            title: 'Krokodillid',
            text: 'Sulle meeldivad krokodillid!',
            imageUrl: 'https://images.pexels.com/photos/792358/pexels-photo-792358.jpeg?auto=compress&cs=tinysrgb&w=600',
            imageWidth: 400,
            imageHeight: 500,
            imageAlt: 'Custom image',
                  })
                         }
            else if (elem === "rebased" || elem === "Rebased"){
        Swal.fire({
            title: 'Rebased',
            text: 'Sulle meeldivad rebased, rebased on ilusad',
            imageUrl: 'https://images.pexels.com/photos/2121799/pexels-photo-2121799.jpeg?auto=compress&cs=tinysrgb&w=600',
            imageWidth: 400,
            imageHeight: 500,
            imageAlt: 'Custom image',
                  })
                         }
            else if (elem === "hundid" || elem === "Hundid"){
        Swal.fire({
            title: 'Hundid',
            text: 'Sulle meeldivad hundid!',
            imageUrl: 'https://images.pexels.com/photos/918596/pexels-photo-918596.jpeg?auto=compress&cs=tinysrgb&w=600',
            imageWidth: 400,
            imageHeight: 500,
            imageAlt: 'Custom image',
                  })
                         }

    else {
        alert("See loom ei ole kahjuks valikus")
    }
  }
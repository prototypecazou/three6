


 
var img = document.querySelectorAll(".imgPresta")




function mooving(e){

    


    if(window.location.hash == "#1"){
        img.forEach(element => {
  
            x = Math.max(
        Math.min(
            e.movementX, 100
    ), -50);
    y = Math.max(
        Math.min(
            e.movementY, 100
    ), -50);
    
    
    
    
    element.style.transform = "translate3d("+x+"px,"+y+"px,0)"
  
          
         
          
        });
    }
 



   
}






   var nomPage = document.querySelector(".nomPage")
var update = function(){

    var divId = document.querySelectorAll("#divId")


  
        for(var i = 0; i < divId.length; i++){
            divId[i].classList.toggle("divChargement"+i)
            
        }
   

}

var slideContainer = document.querySelector(".slideContainer1")
var slideContainer2 = document.querySelector(".slideContainer2")
var box = document.querySelectorAll(".box")
var tailleBox = box[0].clientHeight
var counter = [0,1,2,3,4,5,6,7]
var p = 2
var a = 5

function moveScroll(event){

    var n = parseInt(window.location.hash.charAt(1))
    
    window.onwheel = null
    window.ontouchmove = null
    slideContainer.style.transition = "-webkit-transform 0.5s linear"
    slideContainer2.style.transition = "-webkit-transform 0.5s linear"
    
           
       
        if(event > 1){
          
            n++
    
            if(n > 6){
                n = 1
            }
            window.location.hash = n
    
            if(p <= 1){
                
               p = 2
               a = 5
            }
            
           
            
            slideContainer.style.transform = "translate3d(0,"+(-tailleBox * counter[p] )+"px,0)"
            slideContainer2.style.transform = "translate3d(0,"+(-tailleBox * counter[a] )+"px,0)"
            slideContainer.ontransitionend = (e) => {
                
    
           
    
                if(e.srcElement.className !== "imgPresta"){
                    p++
                    a--
                   
              
                   
                    if(box[p-1].classList.contains("last")){
        
                        
                        slideContainer.style.transition = "none"
                        p -=7
                        slideContainer.style.transform = "translate3d(0,"+(-tailleBox * counter[p] )+"px,0)"
        
                        slideContainer2.style.transition = "none"
                        a +=7
                        slideContainer2.style.transform = "translate3d(0,"+(-tailleBox * counter[a] )+"px,0)"
        
                    
                }
    
               
                }
                
                this.onwheel = function(event){
                    moveScroll(event.deltaY)
                }

                
                };
                
              
    
        }
       
        if(event < 1){
        n--
        if(n < 1){
            n = 6
        }
        window.location.hash = n
         if(p == 1){
             p = 2
             a = 5
         }
              
                
    
            slideContainer.style.transform = "translate3d(0,"+(-tailleBox * counter[p-2] )+"px,0)"
            slideContainer2.style.transform = "translate3d(0,"+(-tailleBox * counter[a+2] )+"px,0)"
            slideContainer.ontransitionend = (e) => {
               
              
                if(e.srcElement.className !== "imgPresta"){
                p--
                a++
    
                if(box[p-1].classList.contains("first")){
                    slideContainer.style.transition = "none"
                    //p = box.length - 2
                    slideContainer.style.transform = "translate3d(0,"+(-tailleBox * counter[6] )+"px,0)"
                    p = 7
                    slideContainer2.style.transition = "none"
                    //a = box.length-5
                    a = 0
                    slideContainer2.style.transform = "translate3d(0,"+(-tailleBox * counter[1] )+"px,0)"
                }
    
            }
                this.onwheel = function(event){
                    moveScroll(event.deltaY)}
                   
               
                };
            }
          
           
            
            /*setTimeout(() => {
                    this.onwheel = function(event){
                        test(event)
                       
                    }
                }, 1000);*/
       
    }


function placement(){

    if(window.location.hash !== "" ){

     
        switch(true){
            case window.location.hash.charAt(1) == 2 : 
            slideContainer.style.transform = "translateY("+(-tailleBox * counter[2])+"px)"
            slideContainer2.style.transform = "translateY("+(-tailleBox * counter[5])+"px)"
            p = 3
            a = 4
            nomPage.textContent = "SITE VITRINE"
            break;
            case window.location.hash.charAt(1) == 3 : 
            slideContainer.style.transform = "translateY("+(-tailleBox * counter[3])+"px)"
            slideContainer2.style.transform = "translateY("+(-tailleBox * counter[4])+"px)"
            p = 4
            a = 3
            nomPage.textContent = "SITE E-COMMERCE"
            break;
            case window.location.hash.charAt(1) == 4 : 
            slideContainer.style.transform = "translateY("+(-tailleBox * counter[4])+"px)"
            slideContainer2.style.transform = "translateY("+(-tailleBox * counter[3])+"px)"
            p = 5
            a=2
            nomPage.textContent = "GRAPHISME"
            break;
            case window.location.hash.charAt(1) == 5 : 
            slideContainer.style.transform = "translateY("+(-tailleBox * counter[5])+"px)"
            slideContainer2.style.transform = "translateY("+(-tailleBox * counter[2])+"px)"
            p = 6
            a=1
            nomPage.textContent = "REFONTE"
            break;
            case window.location.hash.charAt(1) == 6 : 
            slideContainer.style.transform = "translateY("+(-tailleBox * counter[6])+"px)"
            slideContainer2.style.transform = "translateY("+(-tailleBox * counter[1])+"px)"
            p = 7
            a=0
            nomPage.textContent = "OPTIMISATION"
            break;
            default: slideContainer.style.transform = "translateY("+(-tailleBox * counter[1])+"px)"
            slideContainer2.style.transform = "translateY("+(-tailleBox * counter[6])+"px)"
            nomPage.textContent = "PRESTATIONS"
           
            break;
        }
    }else{
        window.location.hash = "0"
        slideContainer.style.transform = "translateY("+(-tailleBox * counter[1])+"px)"
        slideContainer2.style.transform = "translateY("+(-tailleBox * counter[6])+"px)"
        nomPage.textContent = "PRESTATIONS"
       

    }
}


window.onload = function(){

    
    

 
requestAnimationFrame(update)




window.onresize = function(){

    

    if(window.innerWidth < 595){
        window.location.hash = ""

       
    }
   
    tailleBox = box[0].clientHeight
    slideContainer.style.transition= "none"
    slideContainer2.style.transition = "none"
placement()
 
 }


placement()




window.onwheel = function(event){
    moveScroll(event.deltaY)
}



}



document.ontouchstart = function(e){
    startY = e.touches[0].clientY
}


document.ontouchmove = function(e){

    if(window.innerWidth > 1020){
    
    moveY = e.touches[0].clientY

    direction = startY - moveY


    moveScroll(direction)
}
    
    

}




var h = 0
	document.querySelector('.burger').addEventListener('click', function() {
		document.querySelector('#menuBurgerDesktop').style.zIndex = "2"
		this.classList.toggle('open');
		document.querySelector('#burgerSectionGauche').classList.toggle('open');
		document.querySelector('#burgerSectionDroite').classList.toggle('open');

		var unit = document.querySelectorAll(".unit")
		unit.forEach(element => {
			element.classList.toggle('apparition');
		});
		
		if(h%2 == 0){
			window.onwheel = null
            window.ontouchmove = null
         
		}else{
			setTimeout(() => {
				document.querySelector('#menuBurgerDesktop').style.zIndex = "-1"
                window.onwheel = function(event){
                    moveScroll(event.deltaY)
                }
                window.ontouchmove = function(event){
                    moveScroll(direction)
                }
			}, 1000);
			
			
               
            
		}
	
		h++	
	})

	var reseauxAccueil = document.querySelectorAll(".reseauAccueil")
var lienReseau = document.querySelectorAll(".lienReseau")

lienReseau.forEach(element => {

	element.onmousemove = function(e){
		var left = e.movementX*5
		var top = e.movementY*5
		element.children[0].style.transform = "translate3d("+left+"px,"+top+"px,0)"
		
	}

	element.onmouseout = function(){
		element.children[0].style.transform = "matrix(1,0,0,1,0,0)"
	}
});



 






var liensBurger = document.querySelectorAll(".lienBurger")
var divId = document.querySelectorAll(".divIdDepart")

function envoyageDiv(argument){
	argument.forEach(element => {
		element.onclick = function(){
            var nom = document.querySelector(".nom")
         
            if(this.textContent == "Contactez-nous"){
                nom.textContent = "contact".toUpperCase()
                console.log("ok")
            }else{
                nom.textContent = this.textContent.toUpperCase()
            }
			
			
           
			for(var i = 0; i < divId.length; i++){
				divId[i].classList.toggle("divChargementDepart"+i)
				
			}
		
			setTimeout(() => {
				window.location.href="./"+nom.textContent.toLowerCase()+".html"
			}, 900);
		}
	});
	
}


envoyageDiv(liensBurger)
envoyageDiv(document.querySelectorAll(".lienContact"))



document.body.addEventListener('mouseout', function(e) {
    if (!e.relatedTarget && !e.toElement) {
        img.forEach(element => {
  element.style.transform = "translate3d("+0+"px,"+0+"px,0)"
  });
    }
});


window.onmousemove = function(e){

    mooving(e)
}


var burgerPres = document.querySelector(".burger")

burgerPres.onclick = function(){

    if(window.innerWidth <= 991){
    if(p%2 == 0 ){
        //window.onwheel = null
        document.querySelectorAll(".steak").forEach(element => {
            element.style.backgroundColor = "white"
        });
        document.querySelector("body").style.overflow="hidden"

       

        if(p%2 == 0 && window.innerWidth <= 991){
            console.log("test")
            document.querySelectorAll(".steak").forEach(element => {
                element.style.backgroundColor = "black"
            });}
    }
    
    else{

       
        setTimeout(() => {
            document.querySelector('#menuBurgerDesktop').style.zIndex = "-1"
            document.querySelectorAll(".steak").forEach(element => {
                element.style.backgroundColor = "white"
            });
            document.querySelector("body").style.overflow=""
        }, 1000);
        
       
    }

    p++	
}
}



function convertPXToVW(px) {
	return px / (100 / document.documentElement.clientWidth);
}
var r 

r = convertPXToVW(10.4)
var plus = document.querySelectorAll(".plus")
/*let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  if(window.innerWidth < window.innerHeight){
    autre.style.transition = "none"
   
  }


});*/


var tou = document.querySelector("#teste")
var boxMobiles = document.querySelectorAll(".blockMob")





/*function tailleFenetre(){
    if(window.innerWidth <= 575.99 ){
    
    r = convertPXToVW(10.4)
}else if(window.innerWidth <= 991.98 ) {
    

    if(window.innerWidth > window.innerHeight){
      r = (document.documentElement.clientWidth / 21)
    }else{
        r = convertPXToVW(10.4)
    }
}
}


tailleFenetre()*/



var boxTailleMobile = boxMobiles[0].clientWidth + r
var startX 
var moveX
var endX = 0
var direction
var i = 0
var k = false
var autre = document.querySelector(".autre")
var ronds = document.querySelectorAll(".rond")
ronds[0].style.backgroundColor="#666666"

autre.addEventListener('touchstart',(e) => {
 startX = e.touches[0].clientX
 endX = -parseInt(autre.style.transform.replace("translateX(",""))

 console.log(r)
});


autre.addEventListener('touchend',(e) => {
   

    if(k){
        if( direction > 40){

if( i == 4){

}else{
i++

}



autre.style.transform = "translateX("+-(boxTailleMobile)* i+"px)"

} 

else if(direction < -40){

console.log(i)

if( i == 4){
i = 3

}else if(i == 0){

}else{
i--

}


autre.style.transform = "translateX("+-(boxTailleMobile)* i+"px)"
}else{
   /*tou.style.transform="translateX("+0+"px)"
   plus.forEach(element => {
       element.addEventListener('click',function(e){

        tou.style.transform = "translateX("+-(boxTailleMobile)* element.id+"px)"

        i = element.id
       }) 
   });*/
}




ronds.forEach(element => {
element.style.backgroundColor ="white"

ronds[i].style.backgroundColor="#666666"
});

k = false


}
    



    
})

function moveTou(e){
    e.preventDefault()
    moveX = e.touches[0].clientX

    direction = startX - moveX
    
    
    autre.style.transition = "transform 0.2s linear"
    autre.style.transform = "translateX("+-(endX + direction*2)+"px)"

   

    k = true
    
       
    
  
}




autre.ontouchmove = function (e){
moveTou(e)
    
  
}







var teste = document.querySelector("#teste")
var autre = document.querySelector(".autre")
var burger = document.querySelector(".burger")
var h = 0
plus.forEach(element => {
    element.onclick = function(){

        var contenu = this.parentElement.parentElement.parentElement

    
console.log("test")
        

  
      if(h%2 == 0){
        autre.style.transform = "translateX("+-(boxTailleMobile)* element.id+"px)"
        
i = element.id
        autre.ontouchmove = null
      this.style.lineHeight="initial"
      this.style.transform="rotate(45deg)"
      this.style.transition="transform 0.1s linear"
autre.ontouchmove = null
    
contenu.classList.toggle('contenu')
burger.style.opacity="0"
burger.style.pointerEvents="none"
teste.classList.toggle('parentContenu')
teste.classList.remove('contenuMarge')
this.parentElement.nextElementSibling.style.display="none"
this.parentElement.nextElementSibling.nextElementSibling.style.display="flex"

/*console.log(contenu)
contenu.style.position="static"


contenu.style.zIndex="4"

contenu.style.height ="100vh"
contenu.style.width ="101vw"
contenu.style.borderRadius="0"

teste.style.margin = "0"
teste.style.transition ="margin 0.1s linear"

contenu.style.transition = "all 0.1s linear"

console.log(contenu)*/


}else{
    burger.style.pointerEvents="auto"
    this.style.transform="rotate(180deg)"
    this.style.transition="transform 0.1s linear"
    this.style.lineHeight="80%"
    contenu.style.backgroundColor="green"
    contenu.classList.remove('contenu')
teste.classList.remove('parentContenu')
teste.classList.toggle('contenuMarge')
this.parentElement.nextElementSibling.style.display="flex"
this.parentElement.nextElementSibling.nextElementSibling.style.display="none"
burger.style.opacity="1"
setTimeout(() => {
    teste.classList.remove('contenuMarge')
    autre.ontouchmove = function(e){
        moveTou(e)
    }
}, 400);

}

h++

    }
});


    

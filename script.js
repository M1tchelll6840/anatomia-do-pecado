// Animações de entrada
(function(){
  var els=document.querySelectorAll(".reveal,.stagger");
  if(!("IntersectionObserver" in window)){els.forEach(function(e){e.classList.add("in")});return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
  els.forEach(function(e){io.observe(e)});

  // Barra fixa (celular): só aparece depois que o bloco de compra do topo sai da tela,
  // e some quando a oferta principal está visível — nunca cobre a manchete.
  var sticky=document.getElementById("sticky"),hero=document.getElementById("hero-buy"),offer=document.getElementById("oferta");
  if(sticky&&hero){
    var heroVisible=true,offerVisible=false;
    var update=function(){var show=!heroVisible&&!offerVisible;sticky.classList.toggle("show",show);sticky.setAttribute("aria-hidden",show?"false":"true");sticky.tabIndex=show?0:-1;};
    new IntersectionObserver(function(es){heroVisible=es[0].isIntersecting;update()}).observe(hero);
    if(offer)new IntersectionObserver(function(es){offerVisible=es[0].isIntersecting;update()},{threshold:.25}).observe(offer);
  }
})();

// Rastreamento de cliques nos botões de compra (só dispara se os pixels estiverem ativos)
document.querySelectorAll("[data-cta]").forEach(function(a){
  a.addEventListener("click",function(){
    var pos=a.getAttribute("data-cta");
    if(window.fbq)fbq("track","InitiateCheckout",{content_name:"A Anatomia do Pecado",value:24.90,currency:"BRL"});
    if(window.ttq)ttq.track("InitiateCheckout",{content_name:"A Anatomia do Pecado",value:24.90,currency:"BRL"});
  });
});

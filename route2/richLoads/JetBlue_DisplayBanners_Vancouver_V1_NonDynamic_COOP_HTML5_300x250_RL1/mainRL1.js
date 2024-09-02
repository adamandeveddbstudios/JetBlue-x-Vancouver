var tl;
var tl2;
var container = myFT.$("#main_container");
var default_exit = myFT.$("#default_exit");

// var myVid=myFT.$("#video1");
var clickTag1_url="";
// var vid_time_triggered=false;

//
default_exit.on('click',function(){
  myFT.clickTag(1,clickTag1_url)
})
// wait for instantads to load before initializing creative animation
myFT.on('instantads',function(){

  clickTag1_url=myFT.instantAds.clickTag1_url;

})

init()
function animate() {
  //make parent (base file) border black
  // window.parent.document.getElementById("border").style.borderColor="#000"

  tl.set(["#main_content"], { autoAlpha: 1, force3D: true });
  tl.set(["#photo, #photo2"], { rotationZ: 0.1, force3D:true});
  tl.set(["#photo2"], { x:300});

  tl.addLabel('frame_1', 0)

  .to('#photo', 4, { x:"-=60",  ease:"none" }, "frame_1")
  .to(['#h1'], 0.5, { top:12, autoAlpha: 1, ease: Power1.easeInOut }, "frame_1+=1")
  .to(['#h1'], 0.5, {  autoAlpha: 0, ease: Power1.easeInOut }, "frame_1+=3.3")


  tl.addLabel('frame_END', '+=4.5')    
  tl.addLabel('frame_2', 3.5)
  .to(['#photo, #photo2'], .5, {  x:"-=300", ease: Power1.easeInOut })
  .to(['#h1b, #h2'], 0.5, { top:12, autoAlpha: 1, ease: Power1.easeInOut }, "frame2")
  .to('#photo2', 5, { x:"-=60", ease:"none" }, "frame_2+=1")


}

function setRollover() {
  document.getElementById('default_exit').addEventListener('mouseover', defaultOver, false);
  document.getElementById('default_exit').addEventListener('mouseout', defaultOut, false);
}

function defaultOver() {
  TweenMax.to('#cta', 0.15, { scale: 1.1, ease: Power1.easeInOut })
}

function defaultOut() {
  TweenMax.to('#cta', 0.15, { scale: 1, ease: Power1.easeInOut })
}

function init() {

  tl = new TimelineMax();

  animate();
  setRollover();
		
}

const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
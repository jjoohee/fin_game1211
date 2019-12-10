var aa = "on";
var bb = "on";


//벚꽃 파트
var  astate = "off";
	flo2.onclick = function(){
		if (astate == "off") {
			textre1.style.display = "block";
			astate = "on";
			}else{
			astate = "off";
			};
		}
	RN1.onclick = function(){
				textre1.style.display = "none";
				aa = "off";
			if(aa == "off" && bb == "off"){
			end();
			}
				}

//과건물 파트
var  bstate = "off";

	win.onclick = function(){
		if (bstate == "off") {
			textre2.style.display = "block";
			bstate = "on";
			}else{ 
			bstate = "off";
			};
		}
		textre2.onclick = function(){
					textre2.style.display = "none";
				}

//소파1 파트
var  cstate = "off";
	sofa1.onclick = function(){
		if (cstate == "off") {
			textre3.style.display = "block";
			cstate = "on";
			}else{ 
			cstate = "off";
			};
		}
		textre3.onclick = function(){
					textre3.style.display = "none";
				}
//소파2 - 낮잠 파트
var  dstate = "off";
	sofa2.onclick = function(){
		if (dstate == "off") {
			textre4.style.display = "block";
			dstate = "on";
			}else{ 
			dstate = "off";
			};
		}
		textre4.onclick = function(){
			textre4.style.display = "none";
				}
		RY2.onclick = function(){
			heal.play();
			heal.currentTime = 0.5;
			nextRY2.style.display = "block";
			outRY2.style.display = "block";
		}
		outRY2.onclick = function(){
				nextRY2.style.display = "none";
			bb = "off"
			if(aa == "off" && bb == "off"){
			end();
			}
				}

//책상 - 낙서 파트
var  estate = "off";
	desk1.onclick = function(){
		if (estate == "off") {
			textre5.style.display = "block";
			estate = "on";
			}else{ 
			estate = "off";
			};
		}
	textre5.onclick = function(){
					textre5.style.display = "none";
				}

//책상2 파트
var  fstate = "off";
	desk2.onclick = function(){
		if (fstate == "off") {
			textre6.style.display = "block";
			fstate = "on";
			}else{ 
			fstate = "off";
			};
		}
		textre6.onclick = function(){
					textre6.style.display = "none";
				}
//컴퓨터실 컴퓨터 켜기 거절 버튼
CN2.onclick = function(){
	textcom1.style.display = "none";
}
//노멀엔딩버튼 나타나기
function end(){
	gohomeno.style.display = "block";
}
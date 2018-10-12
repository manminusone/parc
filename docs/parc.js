(function() {
	if (! window.parc)
		window.parc = {};

	window.parc.aspectKey    = window.parc.aspectKey || 'v';
	window.parc.translateKey = window.parc.translateKey || 'b';
	window.parc.invertKey    = window.parc.invertKey || 'x';
	window.parc.scaleX       = window.parc.scaleX || 1.0;
	window.parc.scaleY       = window.parc.scaleY || 1.0;
	window.parc.xlateX       = window.parc.xlateX || 0;
	window.parc.xlateY       = window.parc.xlateY || 0;
	window.parc.strokeColor  = window.parc.strokeColor || (document.body.style.backgroundColor == "" ? "#000" : "#fff");

	var b = document.getElementsByTagName('body')[0];

	function remove_svg() {
		if (window.parc.svg) {
			window.parc.svg.parentNode.removeChild(window.parc.svg);
			window.parc.svg = null;
			window.parc.showing = false;
		}
	}

	function svg() {
		window.parc.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		window.parc.txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
		window.parc.txt.setAttribute('x', 10);
		window.parc.txt.setAttribute('y', 250);
		window.parc.txt.setAttribute('fill', window.parc.strokeColor);
		window.parc.txt.style.fontSize = '75px';
		window.parc.txt.style.fontFamily = 'monospace';
		window.parc.txt.innerHTML = (window.parc.showing == 'scale' ? window.parc.scaleX.toFixed(2) + 'x'+ window.parc.scaleY.toFixed(2) :  window.parc.xlateX + ',' + window.parc.xlateY);
		window.parc.svg.appendChild(window.parc.txt);

		var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
		rect.setAttribute('x',0);
		rect.setAttribute('y',0);
		rect.setAttribute('width', 500);
		rect.setAttribute('height', 500);
		rect.setAttribute('stroke',window.parc.strokeColor);
		rect.setAttribute('stroke-width', 10);
		rect.setAttribute('fill-opacity', 0);
		rect.setAttribute('mix-blend-mode','');

		window.parc.svg.style.zIndex=10000;
		window.parc.svg.style.position = 'absolute';
		window.parc.svg.style.left = 100;
		window.parc.svg.style.top = 100;
		window.parc.svg.setAttribute('width', 500);
		window.parc.svg.setAttribute('height', 500);
		window.parc.svg.appendChild(rect);
		document.body.appendChild(window.parc.svg);
	}


	b.addEventListener('keydown', (evt) => {
		const keyName = evt.key;
		if (keyName.toLowerCase() == window.parc.aspectKey.toLowerCase()) {
			if (! window.parc.showing) {
				window.parc.showing = 'scale';
				svg();
			} else if (window.parc.showing == 'scale') {
				remove_svg();
			}
		} else if (keyName.toLowerCase() == window.parc.translateKey.toLowerCase()) {
			if (! window.parc.showing) {
				window.parc.showing = 'translate';
				svg();
			} else if (window.parc.showing == 'translate') {
				remove_svg();
			}
		} else if (window.parc.showing) {
			if (keyName == 'ArrowUp') {
				if (window.parc.showing == 'scale') {
					if (window.parc.scaleY < 1.0) window.parc.scaleY += 0.01;
				} else {
					if (window.parc.xlateY > 0) window.parc.xlateY -= 5;
				}
			} else if (keyName == 'ArrowDown') {
				if (window.parc.showing == 'scale') {
					if (window.parc.scaleY > 0.5) window.parc.scaleY -= 0.01;
				} else {
					if (window.parc.xlateY < 100) window.parc.xlateY += 5;
				}
			} else if (keyName == 'ArrowLeft') {
				if (window.parc.showing == 'scale') {
					if (window.parc.scaleX > 0.5) window.parc.scaleX -= 0.01;
				} else {
					if (window.parc.xlateX > 0) window.parc.xlateX -= 5;
				}
			} else if (keyName == 'ArrowRight') {
				if (window.parc.showing == 'scale') {
					if (window.parc.scaleX < 1.0) window.parc.scaleX += 0.01;						
				} else {
					if (window.parc.xlateX < 100) window.parc.xlateX += 5;
				}
			} else if (keyName.toLowerCase() == window.parc.invertKey.toLowerCase()) {
				console.log('invert');
				window.parc.strokeColor = (window.parc.strokeColor == '#fff' ? '#000' : '#fff');
				var tmp = window.parc.showing;
				remove_svg();
				window.parc.showing = tmp;
				svg();
			}

			window.parc.txt.innerHTML = (window.parc.showing == 'scale' ? window.parc.scaleX.toFixed(2) + 'x'+ window.parc.scaleY.toFixed(2) : window.parc.xlateX + ',' + window.parc.xlateY);
			b.style.transform  = 'scaleX('+window.parc.scaleX+') scaleY('+window.parc.scaleY+') translateX('+window.parc.xlateX+'px) translateY('+window.parc.xlateY+'px)';
		}
	}); // addEventListener

})();

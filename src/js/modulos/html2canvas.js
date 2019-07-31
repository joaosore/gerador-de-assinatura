import html2canvas from '../../../node_modules/html2canvas/dist/html2canvas.js';

var element = document.querySelector("#assinatura"); // global variable

$('.gerarImagem').click(function(){
	html2canvas(element, { letterRendering: 1, allowTaint : true, backgroundColor:null, useCORS: true}).then(canvas => {
		var imgageData = canvas.toDataURL("image/jpg");
		var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
		$("#btn-Convert-Html2Image").attr("download", "assinatura.png").attr("href", newData);
		$("#btn-Convert-Html2Image").css('display', 'flex');
	});
});
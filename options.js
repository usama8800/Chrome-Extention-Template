document.addEventListener("DOMContentLoaded", function(){	
	save.addEventListener("click", saveSettings);
	
	chrome.storage.sync.get(undefined, function(items){
		
	});
	
});

function saveSettings(){
	console.log("Saved");
	chrome.storage.sync.set({},
		function(){
			var status = document.getElementById('status');
			status.textContent = 'Options saved.';
			setTimeout(function() {
				status.textContent = '';
			}, 1750);
		}
	);	
}
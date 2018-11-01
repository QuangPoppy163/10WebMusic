var MY_API =  'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
var xmlHttpRequest = new xmlHttpRequest();
xmlHttpRequest.onreadystatechange = function (){
	if (this.readyState == 4 && this.status == 200){
		var listSong = JSON.parse(this.responseText);
		var content = '';
		for (var i =0; i<listSong.length; i++){
			content += '<div class="class-item">';
			content += '<div class="class-index">' + (i+1) + '</div>';
			content += '<div class="class-thumbnail">';
			content += '<img src="'+listSong[i].thumbnail +'" alt="">';
			content += '</div>';
			content += '<div class="song-infor">';
			content += '<div class="song-name">' + listSong[i].name + '</div>';
			content += '<div class="class-singer">' + listSong[i].singer + '</div>';
			content += '</div>';
			content += '<div class="song-control" onclick="playsong(\'' + listSong[i].link + '\', \'' + listSong[i].name + '\', \'' + listSong[i].singer + '\'">Play</div>'
		}
		document.getElementById('list-song').innerHTML = content;
	}
}
xmlHttpRequest.open('GET',MY_API,true);
xmlHttpRequest.send();
function playSong(link,name,singer){
	document.getElementById('my-mp3').scr=link;
	document.getElementById(current-play-title).innerHTML = 'Current playing:' + name+ "-"+ singer;
}
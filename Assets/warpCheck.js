var player : GameObject;

function Check () {
	var warpX = GetComponent(warpTo).warpPoint.transform.position.x;
	var warpY = GetComponent(warpTo).warpPoint.transform.position.y;
	var warpZ = GetComponent(warpTo).warpPoint.transform.position.z;
	if(GetComponent(warpTo).steppedOn == true){
		player.transform.position = Vector3(warpX+0.5,warpY,warpZ+0.5);
		Debug.Log(player.transform.position);
	}
	else {
		
	}
}
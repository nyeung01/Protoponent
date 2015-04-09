var warpPoint : GameObject;
var setDestination : GameObject;
var steppedOn : boolean;

/*function Warp(){
	GameObject.FindGameObjectsWithTag("player").transform.position = warpPoint.transform.position; 
}*/

function OnTriggerEnter(other : Collider){
	//var warpX = warpPoint.transform.position.x;
	//var warpY = warpPoint.transform.position.y;
	//var warpZ = warpPoint.transform.position.z;
	//other.transform.position = warpPoint.transform.position;
	//other.transform.position = setDestination.transform.position;
	GetComponent(warpCheck).Warp(other,warpPoint);
	steppedOn = true;
}

function OnTriggerStay(other) {
	//other.transform.position = Vector3.MoveTowards(other.transform.position, setDestination.transform.position, 10*Time.deltaTime);
	//other.transform.LookAt(setDestination.transform);
	GetComponent(warpCheck).WarpToDest(other,setDestination);
}

function OnTriggerExit(other){
	steppedOn = false;
}
function Warp(other : Collider, warpPoint : GameObject){
	GetComponent.<AudioSource>().Play();
	other.transform.position = warpPoint.transform.position;
	Input.ResetInputAxes();
}

function WarpToDest(other, setDestination){
	other.transform.position = Vector3.MoveTowards(other.transform.position, setDestination.transform.position, 10*Time.deltaTime);
	other.transform.LookAt(setDestination.transform.position);
}
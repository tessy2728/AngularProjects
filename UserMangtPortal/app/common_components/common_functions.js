function isUndefinedOrNull(value)
{ 
	return angular.isUndefined(value) || value === null;
}
function removeItem(obj, prop, val) {
    var c, found=false;
    for(c in obj) {
        if(obj[c][prop] == val) {
            found=true;
            break;
        }
    }
    if(found){
        //delete obj[c];
        obj.splice(c,1);
    }
}
export function Get() {
	var serverDateTime = new Date();
	var utcDateTime = new Date(serverDateTime.getUTCFullYear(), serverDateTime.getUTCMonth(), serverDateTime.getUTCDate(),  serverDateTime.getUTCHours(), serverDateTime.getUTCMinutes(), serverDateTime.getUTCSeconds());
	return utcDateTime;
}

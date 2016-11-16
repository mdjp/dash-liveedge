//You need to adjust the presentationTimeOffset. Adjust it by segment_length_in_seconds * timescale for each startNumber. Note the timescales are different for audio and video. Ideally you should also adjust the mediaPresentationDuration to stop the client playing off the end.

if(process.argv.length != 7){
	console.log("usage: node mpdtrim <offsetseconds> <startsegment> <presentationtimeoffset> <timescale> <duration>");
	return;
}

var secsoffset = process.argv[2];
var timescale = process.argv[5];
var duration = process.argv[6];

var startnumber = process.argv[3]
var presentationoffset = process.argv[4];


var segdur = duration / timescale;
console.log("offsetting by " + secsoffset + " seconds");
console.log("segment duration is " + segdur);
var numsegs = Math.round(secsoffset / segdur);
var actualoffset = (numsegs * segdur);
console.log("number of segs to move is " + numsegs);
console.log("actual time offset is " + actualoffset);

var newstart = parseInt(startnumber) + parseInt(numsegs);
var newpresoffset = parseInt(presentationoffset) + parseInt((numsegs * duration));

console.log("New presentationTimeOffset " + newpresoffset);
console.log("New segment start " + newstart);

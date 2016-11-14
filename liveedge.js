// This example assumes that the server current time is in the correct timezone
// in a real implementation you should provide a time service on the origin server or cdn
// eg http://time.akamai.com/?iso
var currenttime = (new Date).getTime();

// Availability start time parsed from the dash manifest
var availabilitystarttime = Date.parse('2016-06-29T12:00:00');

// Segment Duration parsed from the manifest
var segmentduration = 184320
// Timebase parsed from the manifest
var timebase = 48000
// Segment start number parsed from the manifest
var segmentstart = 382083657

// Calculate live edge
var liveedge = Math.floor(((currenttime - availabilitystarttime) / ((segmentduration / timebase) * 1000) + segmentstart));
console.log(liveedge);
var bio = {
	"name" : "Taras Kubrak",
	"role" : "Web Developer",
	"welcomeMessage" : "Experienced full-stack web developer.",
	"image" : "images/a.png",
	"contacts" : {
		"mobile" : "888-88-88",
		"skype" : "taras",
		"location" : "Ottawa",
		"email" : "tkubrak@gmail.com"
	},
	"skills" : ["Reliable","Patient","Truthfull","Honest"]
};

var work = {
	"jobs" : [
	{
		"employer" : "Elon Musk",
		"title" : "Lead full-stack engineer",
		"dates" : "2016-Present",
		"location" : "Seattle",
		"description" : "Awesome work."
	},
	{
		"employer" : "High Tech Industries",
		"title" : "Web Developer",
		"dates" : "2013 - 2016",
		"location" : "Vancouver",
		"description" : "Wonderful internship."
	}]
};

var projects = {
	"project" : [{
		"title" : "Best project",
		"dates" : "2015",
		"description" : "Probably, the best project I ever did.",
		"images" : ["images/1.jpg","images/2.jpg","images/3.jpg"]
	},
	{
		"title" : "Cool project",
		"dates" : "2014",
		"description" : "One of my favorite projects.",
		"images" : ["images/1.jpg","images/2.jpg","images/3.jpg"]
	}]
};

var education = {
	"schools" : [
	{
		"name" : "Algonquin College",
		"location" : "Ottawa, Canada",
		"degree" : "diploma",
		"majors" : "web development",
		"dates" : "2013- 2016",
		"url" : "algonquincollege.com"
	},
	{
		"name" : "National Aviation University",
		"location" : "Kyiv, Ukraine",
		"degree" : "bachelor's",
		"majors" : "Power Plant engineering",
		"dates" : "2009-2013",
		"url" : "nau.edu.ua"
	}],
	"online courses" : [{
		"title" : "JavaScript",
		"school" : "Udacity",
		"dates" : "2016",
		"url" : "https://www.udacity.com/"
	}]
};


bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.image);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};

		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedSkype = HTMLcontactGeneric.replace("%contact%","skype").replace("%data%",bio.contacts.skype);
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedSkype);

};

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}
};

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
	}
};

projects.display = function(){
	for(item in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);

		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		for (image in projects.project[item].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
			$(".project-entry:last").append(formattedImage);
		};



	}
};

function inName(name){
	console.log(name);
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();

	return newName;
};

work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

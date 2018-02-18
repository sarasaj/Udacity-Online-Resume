
var bio ={
	name : "Sara Alhasan",
	role : "Developer",
	contacts : {
		mobile :"0699590005709",
		email : "sara5alhasan" ,
		github : "sarasaj",
		twitter : "sara5alhasan",
		location: "Shuaa Al Maarifah Private Schools"
	} ,
	welcomeMessage : "HI welcome to my page",
	skills : ["leadership","teamwork","critical thinking","creative"],
	biopic : "http://via.placeholder.com/150x150",
	display : function(){
		var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
		var formattedTwitter = HTMLblog.replace("%data%",bio.contacts.twitter);
		var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.ocation);

		var formattedpic = HTMLbioPic.replace("%data%",bio.biopic);
		var formattedwelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

		$("#topContacts").append(formattedmobile);
		$("#topContacts").append(formattedemail);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedlocation);
		$("#topContacts").append("<br>");

		$("#footerContacts").append(formattedmobile);
		$("#footerContacts").append(formattedemail);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedlocation);
		$("#footerContacts").append("<br>");
		
		$("#header").append(formattedpic);
		$("#header").append(formattedwelcome);
		if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);

		for (var i = 0; i < bio.skills.length; i++) {
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkills);
		}

	}
	
	}
};
var education = {

	schools : [
		{
			name : "Umm Al Qura University",
			location : "Umm Al Qura University",
			degree : "BA",
			majors: ["CS"],
			dates : "2012-2017",
			url : "",
		},
		{
			name : "1st developed School",
			location : "49 high school girls",
			degree : "High School",
			majors: ["science"],
			dates : "2009-2012",
			//url : "",
		}
	],
	onlineCourses : [
		{
			title :"FEND",
			school:"Udacity" ,
			dates:"2017",
			url:"https://sa.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			title :"introduction to CS",
			school:"Harvard-EDX" ,
			dates:"2014",
			url:"https://www.edx.org/"
		}
	],
	display : function(){
		
		for (var i = 0; i < education.schools.length; i++) {
			$("#education").append(HTMLschoolStart);
			var fomattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var fomattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var join = fomattedName+fomattedDegree;
			var fomattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var fomattedmMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
			

			$(".education-entry:last").append(join);
			$(".education-entry:last").append(fomattedDates);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(fomattedmMajor);
			
			
		}


		$(".education-entry:last").append(HTMLonlineClasses);
		$("h3").css("padding-left","0");
		for (var a = 0; a < education.onlineCourses.length; a++) {

			var fomattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[a].title);
			var fomattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[a].school);
			var fomattedTitleSchool = fomattedTitle+fomattedSchool;
			fomattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[a].dates);
			var fomattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[a].url);

			$(".education-entry:last").append(fomattedTitleSchool);
			$(".education-entry:last").append(fomattedDates);
			$(".education-entry:last").append(fomattedUrl);
			$(".education-entry:last").append("<br>");
		}

	}
};

var work = {
	jobs :[
	{
		employer :"Mawhiba",
		title :"Instructor assistant",
		location:"Umm Al Qura University" ,
		dates:"July 2017 – August 2017",
		description:"Worked with 17 Student for "+
		"cryptography/security course in encryption "+
		"and decryption techniques. Done activities, "+
		"worksheet, learning materials and reports"
	},
	{
		employer :"Wadi Makkah | makkah valley",
		title :"Intern programmer",
		location:"wadi makkah" ,
		dates:"July 2016 – August 2016",
		description: "•	Created Happy Animals Application (an Augmented Reality app that displays a 3D animal and how it acts).Worked with Unity3D , Xcode, Vuforia library, 3D Objects and Animation"
	}
	],
	display: function(){
		for (var i = 0; i < work.jobs.length; i++) {
			$("#workExperience").append(HTMLworkStart);

			var fomattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var fomattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
			var formattedEmployerTitle = fomattedEmployer + fomattedTitle ;
			$(".work-entry:last").append(formattedEmployerTitle);


			var fomattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			$(".work-entry:last").append(fomattedDates);

			var fomattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			$(".work-entry:last").append(fomattedDescription);

			var fomattedlocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			$(".work-entry:last").append(fomattedlocation);
	}
	}
};
var projects = {
	projects: [
		{
			title:"Alive Math" ,
			dates: "2017",
			description:"AR ios app that introduces math in an entrtaining way" ,
			images: ["http://via.placeholder.com/100x100","http://via.placeholder.com/100x100","http://via.placeholder.com/100x100"]
		}
		,{
			title:"Happy Animals" ,
			dates: "2016",
			description:"AR ios app that diplays animal in 3D form and show its movements" ,
			images: ["http://via.placeholder.com/100x100","http://via.placeholder.com/100x100","http://via.placeholder.com/100x100"]
		}
	],
	display: function(){
		for (var i = 0; i < projects.projects.length; i++){
			$("#projects").append(HTMLprojectStart);
			console.log(projects.projects[i].title);
			var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDes = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
			$(".project-entry:last").append(formattedDes);

			if(projects.projects[i].images.length > 0){
				for(var j=0; j< projects.projects[i].images.length ; j++){
					var formattedimg = HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
					$(".project-entry:last").append(formattedimg);
				}
			}

		}
	}
};
function locationMap(){
	$("#mapDiv").append(googleMap);
}

bio.display();
work.display();
projects.display();
education.display();
locationMap();


$(document).click(function(loc){
	var x = loc.pageX ;
	var y = loc.pageY ;
	logClicks(x,y);
});





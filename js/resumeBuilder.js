var name = "Wei Han";

var bio = {
	"names": name,
	"role": "Web Developer",
	"contacts": {
		"mobile": "515-509-6577",
		"email": "hanweihw@gmail.com",
		"location": "San Jose",
		"github": "Github",
		"twitter": "Twitter"
	},
	"welcomeMessage": "Welcome to Victor's Page.",
	"skills": ["Programming", "HTML5", "Nodejs", "Backbone"],
	"biopic": "images/fry.jpg",
	"display": function() {


		var formattedRole = HTMLheaderRole.replace("%data%", this.role);
		$("#header").prepend (formattedRole)

		var formattedName = HTMLheaderName.replace("%data%", this.names);
		$("#header").prepend(formattedName)
		


		var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
		$("#topContacts").append (formattedMobile);
		$("#footerContacts").append (formattedMobile);

		var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
		$("#topContacts").append (formattedEmail);
		$("#footerContacts").append (formattedEmail);

		var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
		$("#topContacts").append (formattedTwitter);
		$("#footerContacts").append (formattedTwitter);

		var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
		$("#topContacts").append (formattedGithub);
		$("#footerContacts").append (formattedGithub);

		var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
		$("#topContacts").append (formattedLocation);
		$("#footerContacts").append (formattedLocation);


		var formattedBioPic = HTMLbioPic.replace("%data%", this.biopic);
		$("#header").append (formattedBioPic)

		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", this.welcomeMessage);
		$("#header").append (formattedWelcomeMsg)

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (skill in bio.skills) {
				var formattedSkill = HTMLskills.replace("%data%", this.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}

	}
}


var education = {
	"schools": [
		{
			"name": "Georgia Institute of Technology",
			"location": "Atlanta",
			"degree": "PhD",
			"majors": ["Material Science & Engineering"],
			"dates": "2011-2012",
			"url": "www.gatech.edu"
		},
		{
			"name": "Iowa State University",
			"location": "Ames",
			"degree": "PhD",
			"majors": ["Material Science & Engineering"],
			"dates": "2009-2011",
			"url": "www.isu.edu"
		}
	],
	"onlineCourses": [
	{
		"title": "JavaScript",
		"school": "udacity",
		"dates": 2014,
		"url": "http://www.udacity.com"
	}
	],
	"display": function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedNames = HTMLschoolName.replace("%data%", this.schools[school].name);
			$(".education-entry:last").append(formattedNames);

			var formattedDegrees = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
			$(".education-entry:last").append(formattedDegrees);

			var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
			$(".education-entry:last").append(formattedDates);

			var formattedLocations = HTMLschoolLocation.replace("%data%", this.schools[school].location);
			$(".education-entry:last").append(formattedLocations);



			for (major in this.schools[school].majors) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[school].majors[major]);
				$(".education-entry:last").append(formattedMajor);
			}
		}

		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);
		if (this.onlineCourses.length > 0) {
			for (onlineCourse in this.onlineCourses) {
				var formattedTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[onlineCourse].title);
				$(".education-entry:last").append(formattedTitle);
				var formattedSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[onlineCourse].school);
				$("a:last").append(formattedSchool);
				var formattedDates = HTMLonlineDates.replace("%data%", this.onlineCourses[onlineCourse].dates);
				$(".education-entry:last").append(formattedDates);
				var formattedURL = HTMLonlineURL.replace("%data%", this.onlineCourses[onlineCourse].url);
				$(".education-entry:last").append(formattedURL);
			}
		}
	}
}







var work = {
	"jobs": [
	{
		"employer": "IBM",
		"title": "Postdoc",
		"location": "San Jose",
		"dates": "April 2013 - present",
		"description": " Major research thrusts in this area include materials for energy conversion and energy storage; wholly-soft polymeric materials synthesis for novel nanocomposites design; wholly-hard inorganic materials synthesis for novel nanocomposites design; novel hybrid (hard/soft) nanocomposite materials design and synthesis; materials characterization; and nanoscale assembly."
	},
	{
		"employer": "Gatech",
		"title": "Postdoc",
		"location": "Atlanta",
		"dates": "April 2012 - April 2013",
		"description": " Major research thrusts in this area include materials for energy conversion and energy storage; wholly-soft polymeric materials synthesis for novel nanocomposites design; wholly-hard inorganic materials synthesis for novel nanocomposites design; novel hybrid (hard/soft) nanocomposite materials design and synthesis; materials characterization; and nanoscale assembly."
	}
	],
	"display": function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);


			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}

var projects = {
	"projects": [
	{
		"title": "Materials for Thermoelectrics",
		"dates": "April 2013",
		"description": "Thermoelectric materials have garnered considerable attention due to their unique ability to directly convert heat to electricity and vice versa. Polymers carry many intrinsic advantages such as low thermal conductivity, solution processability, and roll-to-roll production for fabricating high-performance, lightweight, and flexible thermoelectric modules. In this project, we have been working on the preparation, modification and optimization of polymer-based thermoelectric materials, focusing especially on the facile strategies to minimize the thermal conductivity and maximize the power factor.",
		"images": ["images/project1.jpg", "images/project2.jpg"]
	},
	{
		"title": "Learning from 'Coffee Ring'",
		"dates": "April 2014",
		"description": "Quantum dot-sensitized solar cells (QDSSCs) have emerged as a promising solar architecture for next-generation solar cells. The QDSSCs exhibit a remarkably fast electron transfer from the quantum dot (QD) donor to the TiO2 acceptor with size quantization properties of QDs that allows for the modulation of band energies to control photoresponse and photoconversion efficiency of solar cells. To understand the mechanisms that underpin this rapid charge transfer, the electronic properties of CdSe and PbSe QDs with different sizes on the TiO2 substrate are simulated using a rigorous ab initio density functional method. This method capitalizes on localized orbital basis set, which is computationally less intensive. Quite intriguingly, a remarkable set of electron bridging states between QDs and TiO 2 occurring via the strong bonding between the conduction bands of QDs and TiO2 is revealed. Such bridging states account for the fast adiabatic charge transfer from the QD donor to the TiO2 acceptor, and may be a general feature for strongly coupled donor/acceptor systems. All the QDs/TiO2 systems exhibit type II band alignments, with conduction band offsets that increase with the decrease in QD size. This facilitates the charge transfer from QDs donors to TiO2 acceptors and explains the dependence of the increased charge transfer rate with the decreased QD size.",
		"images": ["images/project1-2.jpg", "images/project2-2.jpg"]
	}
	],

	"display": function() {
		for (project in projects.projects) {

			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);

			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}

		}
	}
}

function inName(name) {
  name = name.trim().split(" ");
  name[1] = name [1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}


bio.display();
education.display();
work.display();
projects.display();



$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
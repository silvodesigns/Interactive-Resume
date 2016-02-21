/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {

    name: "Kevin Silvestre",
    role: "Front End Web Developver",
    contacts: {
        mobile: "781-952-4449",
        email: "ksilvest01@northshore.edu",
        github: "silvodesigns",
        twitter: "I dont have twitter",
        location: "Boston, MA"
    },
    WelcomeMessage: "Welcome To My Resume Page!",
    skills: [
        "Responsive Web Design ",
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "Mobile Web Design",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe InDesign",
        "Digital Photography",
        "Spanish",
        "Graphic Design"



    ],
    bioPic: "images/fry.jpg",

};




bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", "Kevin Silvestre");
    var formattedRole = HTMLheaderRole.replace("%data%", "Front end Web Developer");



    $("#header").append(formattedRole);
    $("#header").append(formattedName);




    var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#contacts").prepend(HTMLcontactStart);
    $("#topContacts").prepend(formattedHTMLmobile);
    $("#topContacts").prepend(formattedHTMLemail);
    $("#topContacts").prepend(formattedHTMLgithub);
    $("#topContacts").prepend(formattedHTMLtwitter);
    $("#topContacts").prepend(formattedHTMLlocation);




    var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage);



    $("#abilities").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        if (bio.skills.length > 0) {
            $("#skills").append(formattedSkills);


        }



    }


    $("#header").prepend(formattedbioPic);
    $("#header").prepend(formattedWelcome);




    $("#footerContacts").prepend(formattedHTMLmobile);
    $("#footerContacts").prepend(formattedHTMLemail);
    $("#footerContacts").prepend(formattedHTMLgithub);
    $("#footerContacts").prepend(formattedHTMLtwitter);
    $("#footerContacts").prepend(formattedHTMLlocation);




};


bio.display();


var work = {

     jobs: [{
    
        employer: "Kevin Silvestre",
        title: "Front End Web Developver",
        location: "Lynn, MA",
        dates: "MAY 2015 - AUG 2015",
        description: "Created graphic elements for Web Sites.<br> Designed logos for clients.<br> Met with clients to understand and satidfy their needs.<br> Interpreted the client's business needs and developed concepts to suit their purpose.<br> Estimated the time required to complete work.<br> Developed design briefs.<br> Proofread designs to produce high-quality work.<br> Created Graphics to be used in multiple medias. <br>Used Applications such as Adobe Photoshop, Adobe Dreamweaver, Adobe Illustrator, Adobe Indesign , Adobe Bridge and Microsoft Word in order to excute designs.<br> Worked As part of a team with other designers and artits.<br> Developed high-quality sketches for the Art Director in order to better visualize conceps before bringing them to life."
	 }]
    


};
/*
var work = {
    jobs: [{
        employer: string 
        title: string 
        location: string 
        dates: string (works with a hyphen between them)
        description: string
        },{
        ...
        }
    ]
};

*/

work.display = function() {




    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[0].title);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[0].location);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[0].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[0].description);



    $("#workExperience").append(HTMLworkStart);
    $(".work-entry").append(formattedEmployer);
    $(".work-entry").append(formattedTitle);
    $(".work-entry").append(formattedLocation);
    $(".work-entry").append(formattedDates);
    $(".work-entry").append(formattedDescription);




};


work.display();



var projects = {
	
    Projects:[{
        "title": "My Online Web Site",
        "dates": 2015,
        "imageP": ["images/197x148.jpg"],
        "description": "I created a website from scratch using my knowledge of CSS and HTML in order to display some of my graphic design work."
    }]

};


/*

var projects = {
    projects: [{
        title: string 
        dates: string 
        description: string 
        images: array with string urls
        },{
        ...
        }
    ]
};

*/



projects.display = function() {


    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.Projects[0].title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.Projects[0].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.Projects[0].description);
    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.Projects[0].imageP[0]);




    $("#projects").append(HTMLprojectStart);
    $(".project-entry").append(formattedProjectTitle);
    $(".project-entry").append(formattedProjectDates);
    $(".project-entry").append(formattedProjectDescription);
    $(".project-entry").append(formattedProjectImage);
    $(".project-entry").append(formattedProjectImage);




};



projects.display();




var education = {
	
	
	schools: [ {

    
        "name": "North Shore Community College",
        "location": "LYNN, MA",
        "degree": "Graphic Design",
        "majors": "Graphic Design Print",
        "date": 2016,
        "url": "www.northshore.edu" }
		],
		
		
   onlineCourses: [
        {
            "title": "Nanodegree Front End Web Developer",
            "school": "Udacity",
            "date": 2015,
            "url": "www.udacity.com"
        }]

    }
;

/*
schools: array of objects with
     name: string
     location: string
     degree: string
     majors: array of strings
     dates: integer (graduation date)
     url: string
onlineCourses: array of objects with
     title: string
     school: string
     date: integer (date finished)
     url: string
display: function

*/


education.display = function() {

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[0].name);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[0].location);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[0].majors);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[0].date);

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[0].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[0].school);
    var formattedOnlineDate = HTMLonlineSchool.replace("%data%", education.onlineCourses[0].date);
    var formattedOnlineUrl = HTMLonlineSchool.replace("%data%", education.onlineCourses[0].url);


    $("#education").append(HTMLschoolStart);
    $(".education-entry").append(formattedSchoolName);
    $(".education-entry").append(formattedSchoolLocation);
    $(".education-entry").append(formattedSchoolMajor);
    $(".education-entry").append(formattedSchoolDates);
    $(".education-entry").append(HTMLonlineClasses);
    $(".education-entry").append(formattedOnlineTitle);
    $(".education-entry").append(formattedOnlineSchool);
    $(".education-entry").append(formattedOnlineDate);
    $(".education-entry").append(formattedOnlineUrl);




};


education.display();

$("#mapDiv").append(googleMap);
$("#mapDiv").append(map);



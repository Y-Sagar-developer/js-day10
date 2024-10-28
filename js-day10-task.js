// Question 1: Voting Eligibility

var age = 17;
var citizenship = true;

if (age>=18 && citizenship ){
    console.log("canVote")
}else{
    console.log("can not vote")
}

// ---------------------------------------------------------------------------------- 

// Question 2: Admission to a Club

var age = 20;
var hasInvitation = true;

if(age>20 || hasInvitation){
    console.log("canEnterClub")
}else{
    console.log("canNotEnterClub")
}
// ---------------------------------------------------------------------------------- 

// Question 3: Discount Eligibility

var age = 70;
var isMember = true

if(age<=65 || isMember) {
    console.log("isElegibleForDiscount")
}else{
    console.log("isNotEligibleForDiscount")
}

// ------------------------------------------------------------------------------------------- 

// Question 4: Scholarship Eligibility

var gpa =3.6;
var extracurriculars = true;
var recommendation = false;

if(gpa>=3.5 && extracurriculars || recommendation){
    console.log("isEligibleForScholarship")
}else{
    console.log("isNotEligibleForScholarship")
}


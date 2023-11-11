const wrapper=document.querySelector(".wrapper");
const container=document.querySelector(".container");
const title=document.querySelector(".title");
const search_bar=document.querySelector(".search_bar");
const details=document.querySelector(".details");
const inputdata=document.querySelector(".input");
const photo =document.querySelector(".photo");
const text_details =document.querySelector(".text_details");
const detail1 =document.querySelector(".detail1");
const name_joining =document.querySelector(".name_joining");
const nameuser =document.querySelector(".name");
const join_date =document.querySelector(".join_date");
const username =document.querySelector(".username");
const description =document.querySelector(".description");
const github_repos =document.querySelector(".github_repos");
const Repos =document.querySelector(".Repos");
const Followers =document.querySelector(".Followers");
const Following =document.querySelector(".Following");
const links =document.querySelector(".links");
const twitter =document.querySelector(".twitter");
const github =document.querySelector(".github");
const location_text =document.querySelector(".location_text");
const twitter_username =document.querySelector(".twitter_username");
const dark_btn =document.querySelector(".dark_btn");
const darkmode =document.querySelector(".darkmode");
const light_btn =document.querySelector(".light_btn");
const Khoji_text =document.querySelector(".Khoji_text");
const githubicon =document.querySelector(".githubicon");
const locationicon =document.querySelector("#locationicon");
const search_icon_btn =document.querySelector(".search_icon_btn");
const error_msg =document.querySelector(".error_msg");
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var githubpage;
var twitterid;
var newuser;

const options = {
	method: 'GET',
	headers: {
		'Authorization': '[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]'
	}
};

async function find_user(search){
   try{
      const user=await fetch(`https://api.github.com/users/${search}`, options);
      newuser=await user.json();
      console.log(newuser);
      if(newuser.message==="Not Found"){
         throw "404 not found";
      }
      nameuser.textContent=newuser.name;
      photo.src=`${newuser.avatar_url}`;
      let d=new Date(newuser.created_at);
      let month=months[d.getMonth()];
      let Year=d.getFullYear();
      let  date=d.getDate();
      let fulldate=`${date} ${month} ${Year}`;
      join_date.innerHTML=`Joined ${fulldate}`;
      username.innerHTML=`@${newuser.login}`;
      username.href=`${newuser.html_url}`;
      description.innerHTML=newuser.bio;
      Repos.innerHTML=newuser.public_repos;
      Followers.innerHTML=newuser.followers;
      Following.innerHTML=newuser.following;
      location_text.innerText=newuser.location;
      twitter_username.innerText=newuser.twitter_username;
      twitterid=newuser.twitter_username;
      githubpage=newuser.html_url;
      if(newuser.twitter_username===null){
         twitter_username.innerText=`Not found`;
         twitterid=null;
      }
      details.style.display="flex";
      error_msg.style.display="none";
   }
   catch(error){
     details.style.display="none";
     error_msg.style.display="flex";
   }
};


light_btn.addEventListener("click",()=>{
   wrapper.classList.add("lightwrapper");
   title.classList.add("light_title");
   darkmode.style.display="block";
   Khoji_text.classList.add("light_khoji_text");
   light_btn.style.display="none";
   details.classList.add("details_light");
   description.style.color="rgb(6, 19, 40)";
   nameuser.style.color="rgb(6, 19, 40)";
   join_date.style.color="rgb(6, 19, 40)";
   githubicon.style.fill="black";
   locationicon.style.fill="black";
   location_text.style.color="rgb(6, 19, 40)";
   twitter_username.style.color="rgb(6, 19, 40)";
   github_repos.style.background="white";
   github_repos.style.color="rgb(6, 19, 40)";
   error_msg.classList.add("error_in_light");
});

dark_btn.addEventListener("click",()=>{
   wrapper.classList.remove("lightwrapper");
   title.classList.remove("light_title");
   darkmode.style.display="none";
   Khoji_text.classList.remove("light_khoji_text");
   light_btn.style.display="block";
   details.classList.remove("details_light");
   description.style.color="white";
   nameuser.style.color="white";
   join_date.style.color="white";
   githubicon.style.fill="white";
   locationicon.style.fill="white";
   location_text.style.color="white";
   twitter_username.style.color="white";
   github_repos.style.background="rgb(6, 19, 40)";
   github_repos.style.color="white";
   error_msg.classList.remove("error_in_light");
});


search_icon_btn.addEventListener("click",(e)=>{
   let searchvalue=inputdata.value;
   find_user(searchvalue);
   inputdata.value="";
});

inputdata.addEventListener("keypress",function(event){
   if(event.key === "Enter"){
      event.preventDefault();
      let searchvalue=inputdata.value;
      find_user(searchvalue);
      inputdata.value="";
   }
});

github.addEventListener("click",()=>{
   window.open(githubpage, 'blank');
});

twitter.addEventListener("click",()=>{
   if(twitterid===null){
      return;
   }
   window.open(`https://twitter.com/${twitterid}`);
});

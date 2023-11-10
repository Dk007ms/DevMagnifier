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
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


async function find_user(){
   const user=await fetch(`https://api.github.com/users/Dk007ms`);
   let newuser=await user.json();
   console.log(newuser);
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
}

find_user();

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
});
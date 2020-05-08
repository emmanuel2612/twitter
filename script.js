window.onload = () => {

 



   




    var nightToggle = document.getElementById("toggle");
    var pageText = document.getElementsByClassName("text");


    var toolbar = document.getElementById("toolbar");
    var search = document.getElementById("search");
    var background = document.getElementById("content");
    var userBar = document.getElementById("user-bar");
    var leftAside = document.getElementById("left-aside");
    var rightAside = document.getElementById("right-aside");
    var scrollable = document.getElementById("scrollable");



    nightToggle.onclick = () => {

        toolbar.classList.toggle("elements");
        background.classList.toggle("background");

        userBar.classList.toggle("elements");
        leftAside.classList.toggle("elements");
        rightAside.classList.toggle("elements");
        scrollable.classList.toggle("elements");


        search.classList.toggle("search");

        function changeText() {
            var pageText = document.getElementsByClassName("text");
            for (var i = 0; i < pageText.length; i++) {
                pageText[i].classList.toggle("dark");
            }
        }


        changeText();



        function changeBorder() {
            var border = document.getElementsByClassName("border");
            for (var i = 0; i < border.length; i++) {
                border[i].classList.toggle("border-dark");
            }
        }

        changeBorder();





    }








    var tweetsButton = document.getElementById("tweets");
    var tweetsRepliesButton = document.getElementById("tweetsreplies");

    var tweetsSection = document.getElementById("article-container");
    var tweetsRepliesSection = document.getElementById("article-container-replies");

    function hideTweets(){

        tweetsSection.style.display = "none";
        tweetsSection.style.transform = "translate(-100%)";

    }

   

    function showTweets(){
        tweetsSection.style.display = "block";
        
        setTimeout(function(){
            tweetsSection.style.transform = "translate(0%)";
            },50);

        tweetsRepliesSection.style.display = "none";
        tweetsRepliesSection.style.transform = "translate(-100%)";
    }





    function showTweetsReplies(){

        hideTweets();

        tweetsRepliesSection.style.display = "block";

        setTimeout(function(){
        tweetsRepliesSection.style.transform = "translate(0%)";
        },50);


    }












    tweetsButton.onclick = () =>{
        showTweets();
    }

    tweetsRepliesButton.onclick = () =>{
        showTweetsReplies();

    }


































}
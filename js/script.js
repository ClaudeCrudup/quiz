/* global $ */
$(".picAnswer").hide();
$(document).ready(function() {
    $("button").click(function() {
        $(".picAnswer").show();
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val().toLowerCase();
        var q2Result = $("#question2").val().toLowerCase();
        var totalScore;
        $(".inside").html(name + ", inside you lives one");
        if (q1Result === "flying" && q2Result === "mountaintop") {
            $(".answer").html("Flying Eagle");
            $(".picAnswer").attr("src", "http://www.animatedimages.org/data/media/238/animated-eagle-image-0036.gif");
        }
        else if(q1Result === "flying" && q2Result === "beach") {
           $(".answer").html("Pelican");
            $(".picAnswer").attr("src", "https://media.giphy.com/media/F0tjtaRiAEZW0/giphy.gif"); 
    }
     else if(q1Result === "flying" && q2Result === "jungle") {
           $(".answer").html("Aricari");
            $(".picAnswer").attr("src", "https://lh3.googleusercontent.com/-wnff-WlRxVs/WdhpMVry0II/AAAAAAAENGk/O1sHKs1HOHsg0834ONzzjcuoDKbShf4WQCJoC/w530-h365-n/Chestnut%2Beared%2BAracari.gif"); 
    }
    
    else if(q1Result === "flying" && q2Result === "desert") {
           $(".answer").html("Red Tailed Hawk");
            $(".picAnswer").attr("src", "https://i.pinimg.com/originals/1e/98/68/1e98684d740140bca5890217b8a89a6a.gif"); 
    }
    else if(q1Result === "swimming" && q2Result === "mountaintop") {
           $(".answer").html("Large Mouthed Bass");
            $(".picAnswer").attr("src", "https://media.giphy.com/media/37Bukdbb26MXC/giphy.gif"); 
    }
    else if(q1Result === "swimming" && q2Result === "beach") {
           $(".answer").html("Vaquita");
            $(".picAnswer").attr("src", "http://www.netanimations.net/dolphin-leaping-out-of-water-doing-an-aerial-loop.gif"); 
    }
    else if(q1Result === "swimming" && q2Result === "jungle") {
           $(".answer").html("Red Bellied Vegan Pirahna");
            $(".picAnswer").attr("src", "http://www.piranhazone.com/graphics/piranha.gif"); 
    }
    else if(q1Result === "swimming" && q2Result === "desert") {
           $(".answer").html("Lungfish");
            $(".picAnswer").attr("src", "https://i.gifer.com/DwE7.gif"); 
    }
    else if(q1Result === "digging" && q2Result === "mountaintop") {
           $(".answer").html("Pika");
            $(".picAnswer").attr("src", "https://media.giphy.com/media/1mSgo4VCvOcow/giphy.gif"); 
    }
    else if(q1Result === "digging" && q2Result === "beach") {
           $(".answer").html("Otter");
            $(".picAnswer").attr("src", "https://i.gifer.com/28gG.gif"); 
    }
    else if(q1Result === "digging" && q2Result === "jungle") {
           $(".answer").html("Daceton");
            $(".picAnswer").attr("src", "http://itsnature.org/wp-content/uploads/2008/03/daceton-armigerum.jpg"); 
    }
    else if(q1Result === "digging" && q2Result === "desert") {
           $(".answer").html("Meerkat");
            $(".picAnswer").attr("src", "https://media.giphy.com/media/xROhmCWydakF2/giphy.gif"); 
    }
    else if(q1Result === "climbing" && q2Result === "mountaintop") {
           $(".answer").html("Alpine Ibex");
            $(".picAnswer").attr("src", "https://thumbs.gfycat.com/SmallCleverAmethystgemclam-size_restricted.gif"); 
    }
    else if(q1Result === "climbing" && q2Result === "beach") {
           $(".answer").html("Climbing Coconut Crab");
            $(".picAnswer").attr("src", "http://ryanstaffanthropoda.weebly.com/uploads/2/6/1/3/26136358/359146015.jpg?354"); 
    }
    else if(q1Result === "climbing" && q2Result === "jungle") {
           $(".answer").html("Gibbon");
            $(".picAnswer").attr("src", "https://i.gifer.com/7Zm5.gif"); 
    }
    else if(q1Result === "climbing" && q2Result === "desert") {
           $(".answer").html("Camel Spider");
            $(".picAnswer").attr("src", "https://media1.tenor.com/images/08b39daf1f160339a74d76aec6391954/tenor.gif?itemid=7249037"); 
    }
    });

});

var names_of_people=[];

function submit(){
    var display_guest_name=[];
    for(var i=0; i<=1; i++){
        var guest_name= document.getElementById("name1"+i).value;
        names_of_people.push(guest_name); 
    }

    console.log(names_of_people);
    var length_people_array = names_of_people.length;
    console.log(length_people_array);

    for(var j=0; j<length_people_array; j++){
        display_guest_name.push("<h4>Name-"+names_of_people[j]+"</h4>");
        console.log(display_guest_array);
    }

    document.getElementById("display_name_with_commas").innerHTML=display_guest_array;
    
    var remove_comma=display_guest_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}


function sorting(){
    names_of_people.sort();
    var display_guest_name_sorting=[];
    var length_people_array = names_of_people.length;

    for(var k=0;k<length_guests_array;k++){
        display_guests_array_sorting.push("<h4>Name-"+ names_of_people[k]+"</h4>");
    }

    var remove_comma=display_guest_name_sorting.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;
}

function search(){
    var s=document.getElementById("s1").value;
    var found=0;
    var j;
    for(var j=0; j<names_of_people; j++){

        if(s==names_of_people[j]){

            found=found+1
        }
    }

    document.getElementById("p2").innerHTML= "name found"+found+"time/s";
    console.log("found name"+found+"time/s");
}
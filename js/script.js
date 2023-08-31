$(document).ready(function(){
    $("#formGroup").submit(function(event){
        event.preventDefault()
       const firstName = $("input#firstN").val();
       const secondName = $("input#lastN").val();
       const favoriteSport = $("input#sport").val();
       const favoriteFood = $("input#food").val();
       const favoriteCar = $("input#car").val();
       const favoriteColor = $("input#color").val();

        const preference = [firstName, secondName, favoriteSport, favoriteFood, favoriteCar, favoriteColor]
        let firstElement = preference[0]
        let secondElement = preference[1]
        let thirdElement = preference[2]

        let newPreference = ["My name is :"] 
        newPreference.push( firstElement, secondElement, "and my favorite is ", thirdElement);
        
         
        let combineWord = "";
        newPreference.forEach(function(newPreferences){
            combineWord += "<li>" + newPreferences + "</li>"
            console.log(combineWord);
        });

        
        $("#info").html(combineWord);
    });
});
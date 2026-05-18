function promotion(année){ 
    var Image;
    if(année==2023){ 
        Image = "promotion2023.jpg" } 
        else if (année == 2022){ 
            Image = "promotion2022.jpg" } 
            else { 
                Image = "promotion2021.jpg" 
            }
            document.getElementById('MonImage'). src =Image;
        }
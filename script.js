console.log("Melissa Ginoza - EME6208 Project 2");

//number of questions
var total=9
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

// Answers when correct
var correctmoreInfo = new Array()
correctmoreInfo[1]="Correct! Dogs can only see blue and yellow"
correctmoreInfo[2]="Correct! This is helpful because many flowers have patterns visible only in ultraviolet"
correctmoreInfo[3]="Correct! This allows them to see ultraviolet, infrared, and polarized light."
correctmoreInfo[4]="Correct! He created the color wheel after discovering the visible spectrum of light"
correctmoreInfo[5]="Correct! Blue is unlike any other color in nature because they are rarely pigments but rather distortions of light."
correctmoreInfo[6]="Correct! Red light does not reach the deep-sea depths and appears black."
correctmoreInfo[7]="Correct! A baby sees black and white at birth and starts to see red after 2 weeks old."
correctmoreInfo[8]="Correct! Of all colors, humans are most sensitive to the green color palette."
correctmoreInfo[9]="Correct! Complementary colors tend to look bold and are common in sports teams."

/*** Below lists the questions, its choices, and finally, the solution to each question. 
Folow the exact format below when editing the questions. 
You may have as many questions as needed. 
Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info ***/

question[1]="Humans typically have 3 color-receptor cones that allow us to see red, green, and blue. How many colors can dogs see?"
choice1[1]="1"
choice1[2]="2"
choice1[3]="3"
choice1[4]="4"

question[2]="Bees and butterflies have 4 color-receptor cones, which allow them to see:"
choice2[1]="radio waves"
choice2[2]="radiation"
choice2[3]="ultraviolet"
choice2[4]="infrared"

question[3]="Mantis Shrimps can see the most color of any animal on the planet! How many color-receptor cones do they have?"
choice3[1]="6"
choice3[2]="10"
choice3[3]="12"
choice3[4]="16"

question[4]="Who invented the color wheel?"
choice4[1]="Isaac Newton"
choice4[2]="Thomas Edison"
choice4[3]="Michelangelo"
choice4[4]="Leonardo da Vinci"

question[5]="What color is rarely found in plants and animals?"
choice5[1]="Pink"
choice5[2]="Blue"
choice5[3]="Green"
choice5[4]="Yellow"

question[6]="Many deep sea creatures are this color because it appears black:"
choice6[1]="White"
choice6[2]="Blue"
choice6[3]="Red"
choice6[4]="Pink"

question[7]="What is the first color a baby often sees?"
choice7[1]="Red"
choice7[2]="Yellow"
choice7[3]="Blue"
choice7[4]="Green"

question[8]="Night vision goggles use this color because humans can see its shades better:"
choice8[1]="Red"
choice8[2]="Yellow"
choice8[3]="Blue"
choice8[4]="Green"

question[9]="What type of color scheme are the UF brand colors, orange and blue?"
choice9[1]="Analogous"
choice9[2]="Complementary"
choice9[3]="Monochromatic"
choice9[4]="Triad"

solution[1]="b"
solution[2]="c"
solution[3]="d"
solution[4]="a"
solution[5]="b"
solution[6]="c"
solution[7]="a"
solution[8]="d"
solution[9]="b"

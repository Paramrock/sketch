random_no = Math.floor((Math.random()*array_1.length)+1)
console.log("quick_draw_data_set ")
Element_of_array = array_1[random_no]

function updateCanvas()
{
    Math.floor()
    console.log("random_number")
    canvas = createCanvas(white)
}

function setup()
{
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
}


 
function check_sketch()
{
    timer_counter_1
}


function preload()
{
    classifier = ml5.imageClassifier('DoodleNet');
}

function draw()
{
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed)
    {
        line(pmouseX, pmouseY,mouseX,mouseY)
    }
}

function classifyCanvas()
{
    classifier.classify(canvas,gotResult);
}

function gotResult()
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById('label').innerHTML = "Label : " + results[0].label;
        document.getElementById("confidence").innerHTML = "Confidence : " + Math.round(results[0].confidence * 100) + "%";
        utterThis = new SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterThis);
    }
}
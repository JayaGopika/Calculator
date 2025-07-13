    const inp = document.getElementById("innput");

    function display(input){
        console.log("Pressed:", input);
        inp.value += input;
    }

    function clearinput(){
        inp.value="" ;
    }
    function delchar(){
        inp.value=inp.value.slice(0,-1)
    }

    function calculate(){
        try{
            inp.value = eval(inp.value)
        }
        catch(error){
            inp.value="Error"
        }
    }
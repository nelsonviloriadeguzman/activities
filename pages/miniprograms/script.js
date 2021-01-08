function goBack() {
    window.location.href = '../../index.html'
}

function changeProgram(programId,programTitle){
    /*FOR SIDE BAR*/
    const ul = document.getElementById("programlist");
    const items = ul.getElementsByTagName("li");
    for (let i = 0; i < items.length; ++i) {
        items[i].getElementsByTagName("a")[0].classList.remove('active')
    }
    document.getElementById(programId).classList.add('active');
    document.getElementById("programtitle").innerHTML = programTitle
    
    document.getElementById('input').value = ''
    document.getElementById('output').value = ''
  
}

function showResult(){
    document.getElementById('output').value = ''
    const programTitle = document.getElementById("programtitle").innerHTML;
    let input = document.getElementById('input').value;
    // let output = document.getElementById('output').value; NOT WORKING
    if (programTitle==='Spell Backwards')
    {
        for (let x=0; x< input.length; x++){
            document.getElementById('output').value += input.charAt((input.length-1)-x)
        }
    }
    else if (programTitle==='Palindrome')
    {
        let output = 'Palindrome'
        for (let x=0; x< input.length; x++){
            if (input.charAt(x) !== input.charAt((input.length-1)-x))
            {
                output = 'Not Palindrome'
            }
        }
        document.getElementById('output').value = output
    }
    else if (programTitle==='Fibonacci')
    {
        let past = 0
        let present = 1
        let future = 0
        let output = ''

        output = output + past
        output = output + ', '+ present
        
        for (let x=0; x<input ;x++){
          future = past + present
          output = output + ', '+future
          past = present
          present = future
        }

        document.getElementById('output').value = output
    }
    
}
function changeaboutme()
{
    const aboutMeText = ["Techy","Fullstack Developer","Human"];
    const typingSpeed = 100;
    const eraseSpeed = 70;
    const pauseTime = 1500;
    const aboutMeElement = document.querySelector('.about-me');

    let textIndex=0;
    let charIndex=0;
    let isDeleting = false;

    function type() 
    {
           const currentText = aboutMeText[textIndex];
           //typing
           if(!isDeleting && charIndex < currentText.length)
           {
                aboutMeElement.textContent = currentText.substring(0, charIndex+1);
                charIndex++;
                setTimeout(type, typingSpeed);
           }
           else if(isDeleting && charIndex > 0)
           {
                aboutMeElement.textContent = currentText.substring(0, charIndex-1);
                charIndex--;
                setTimeout(type, eraseSpeed);
           }
           else
           {
                isDeleting = !isDeleting;
                if (!isDeleting) 
                {
                    textIndex = (textIndex + 1) % aboutMeText.length
                }
                setTimeout(type , pauseTime);
           }
    }

    type();
}

changeaboutme();
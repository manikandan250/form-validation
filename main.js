var btn=document.getElementById("btn");
	btn.addEventListener("click",myFunction);
	
	 function myFunction(){
            let name=document.getElementById("name").value
            let mail=document.getElementById("email").value
            let pass1=document.getElementById("pass1").value
            let pass2=document.getElementById("pass2").value
            
            if(name==""){
                alert("Enter User Name")
                return false
            }
            else if(mail==""){
                alert("Enter Mail ID")
                return false
            }
            else if(pass1==""){
                alert("Enter Password")
                return false
            }
            else if(pass2==""){
                alert("Enter Confirm Password")
                return false
            }

            if(pass1!=pass2){
                alert("Enter Correct Password")
                return false
            }

        }
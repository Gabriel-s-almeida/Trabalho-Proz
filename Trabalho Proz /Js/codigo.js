

function testa_form(){

    var paciente = document.forms["nutriplus"]["paciente"].value;
    
    var cpf = document.forms["nutriplus"]["cpf"].value;

    var telefone= document.forms["nutriplus"]["telefone"].value;



    if (paciente == ""){

        alert("Nome do paciente precisa ser informado.");
        
        document.forms["nutriplus"]["paciente"].focus();

        return false;
    
    }

    if (cpf == ""){

        alert("Cpf do paciente precisa ser informado.");
        
        document.forms["nutriplus"]["cpf"].focus();

        return false;

    }

    if (telefone == ""){

        alert("O Telefone do paciente precisa ser informado")

        document.forms["nutriplus"]["telefone"].focus();

        return false;
    }



    return true;

}
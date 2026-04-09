function boasvindas (nome,horario){
    if (horario >= 6 && horario < 12){
        console.log("Bom Dia" + nome);
    } else if (horario >= 12 && horario < 18){
        console.log("Boa Tarde" + nome);
    } else if (horario >= 0 && horario < 6 || horario >= 18 && horario <= 23){
        console.log("Boa Noite" + nome);
    } else {
        console.log("Não existe");
    }
}

boasvindas (" Bruno",27);
var database = require("../database/config");

function lugaresFavoritos() {

    instrucaoSql = `select count(lugarPreferido) as marcoZero,
    (select count(lugarPreferido) as caisDoSertao from lugares where lugarPreferido = "caisDoSertao") as caisDoSertao ,
    (select count(lugarPreferido) as sitioTrindade from lugares where lugarPreferido = "sitioTrindade") as sitioTrindade,
    (select count(lugarPreferido) as coroaDoAviao from lugares where lugarPreferido = "coroaDoAviao") as coroaDoAviao,
    (select count(lugarPreferido) as capelaDourada from lugares where lugarPreferido = "capelaDourada") as capelaDourada,
    (select count(lugarPreferido) as museuRecife from lugares where lugarPreferido = "museuDoRecife") as museuDoRecife,
    (select count(lugarPreferido) as praiaBoaViagem from lugares where lugarPreferido = "praiaBoaViagem") as praiaBoaViagem,
    (select count(lugarPreferido) as passeioCatamara from lugares where lugarPreferido = "passeioCatamara") as passeioCatamara,
    (select count(lugarPreferido) as centroHistorico from lugares where lugarPreferido = "centroHistorico") as centroHistorico,
    (select count(lugarPreferido) as piscinasNatuarais from lugares where lugarPreferido = "centroHistorico") as centroHistorico
     from lugares where lugarPreferido = "marcoZero";`



    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    lugaresFavoritos,
  
}

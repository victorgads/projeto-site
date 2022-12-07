create database sprint3;
drop database sprint3;
use sprint3;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45));

select * from usuario;

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);

create table lugares (
idLugares int primary key auto_increment,
lugarPreferido varchar(50),
gastronomiaPreferida varchar(50),
praiaCurtida varchar(50),
fk_usuario INT,
FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
    );
    
    select * from lugares;
select count(lugarPreferido) from lugares;

select count(gastronomiaPreferida) from lugares;



select count(lugarPreferido) as marcoZero,
(select count(lugarPreferido) as caisDoSertao from lugares where lugarPreferido = "caisDoSertao") as caisDoSertao ,
(select count(lugarPreferido) as sitioTrindade from lugares where lugarPreferido = "sitioTrindade") as sitioTrindade,
(select count(lugarPreferido) as coroaDoAviao from lugares where lugarPreferido = "coroaDoAviao") as coroaDoAviao,
(select count(lugarPreferido) as capelaDourada from lugares where lugarPreferido = "capelaDourada") as capelaDourada,
(select count(lugarPreferido) as museuRecife from lugares where lugarPreferido = "museuDoRecife") as museuDoRecife,
(select count(lugarPreferido) as praiaBoaViagem from lugares where lugarPreferido = "praiaBoaViagem") as praiaBoaViagem,
(select count(lugarPreferido) as passeioCatamara from lugares where lugarPreferido = "passeioCatamara") as passeioCatamara,
(select count(lugarPreferido) as centroHistorico from lugares where lugarPreferido = "centroHistorico") as centroHistorico,
(select count(lugarPreferido) as piscinasNatuarais from lugares where lugarPreferido = "praiasNaturais") as piscinasNaturais
 from lugares where lugarPreferido = "marcoZero";
 
 
 select count(gastronomiaPreferida) as marcoZero,
(select count(gastronomiaPreferida) as caisDoSertao from lugares where gastronomiaPreferida = "caisDoSertao") as caisDoSertao ,
(select count(gastronomiaPreferida) as sitioTrindade from lugares where gastronomiaPreferida = "sitioTrindade") as sitioTrindade,
(select count(gastronomiaPreferida) as coroaDoAviao from lugares where gastronomiaPreferida = "coroaDoAviao") as coroaDoAviao,
(select count(gastronomiaPreferida) as capelaDourada from lugares where gastronomiaPreferida = "capelaDourada") as capelaDourada,
(select count(gastronomiaPreferida) as museuRecife from lugares where gastronomiaPreferida = "museuDoRecife") as museuDoRecife,
(select count(gastronomiaPreferida) as praiaBoaViagem from lugares where gastronomiaPreferida = "praiaBoaViagem") as praiaBoaViagem,
(select count(gastronomiaPreferida) as passeioCatamara from lugares where gastronomiaPreferida = "passeioCatamara") as passeioCatamara,
(select count(gastronomiaPreferida) as centroHistorico from lugares where gastronomiaPreferida = "centroHistorico") as centroHistorico,
(select count(gastronomiaPreferida) as piscinasNatuarais from lugares where gastronomiaPreferida = "centroHistorico") as centroHistorico
 from lugares where gastronomiaPreferida = "marcoZero";
 
 









;



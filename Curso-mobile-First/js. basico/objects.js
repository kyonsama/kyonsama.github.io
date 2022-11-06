var tradeMark = [
    "Audi", "Subaru", "Lexus", 
    "Porsche", "BMW", "Mazda", 
    "Buick", "Toyota", "Kia",
    "Honda", "Hyundai", "Volvo",
    "Mini", "Mercedes-Benz", "Volkswagen",
    "Ford", "Lincoln", "Scion",
    "Acura", "Chevrolet", "Nissan",
    "Infiniti", "GMC", "Cadillac",
    "Dodge", "LandRover", "Mitsubishi",
    "Jeep", "Fiat",]

var model = [
    "Mazda CX-5", "Mazda CX-9", "Mazda CX-30",
    "Audi Q7", "Audi A3", "Audi A1",
    "Porsche 911", "Porsche Carrera GT", "Porsche 918 Spyder",
    "mercedes-benz GLC", "mercedes-benz claseC", "mercedes-benz claseA",
    "Lincoln Mark VII", "Lincoln Continental", "Lincoln MKZ",
    "GRAND I10 HB", "ELANTRA", "CRETA GRAND",
    "fordEcoSport", "fordExplorer", "fordB-Max",
    "VolkswagenTiguanComfortline", "Tiguan Trendline Plus", "Polo Starline",
    "Dodge Challenger", "Dodge Journey", "Dodge Durango",
    "Cadillac Calais", "Cadillac Cimarron", "Cadillac CTS"
]

var year = [
    1986, 1987, 1988, 1989, 1990, 1991, 
    1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 
    2010, 2010, 2010, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 

]

function auto(tradeMark, model, year){
        this.tradeMark = tradeMark;
        this.model = model;
        this.year = year;
}

for(var i = 0; tradeMark.length > i && model.length > i && year.length > i; i++){
    var nuevoAuto = new auto(tradeMark[i], model[i], year[i]);
    console.log(nuevoAuto)
}
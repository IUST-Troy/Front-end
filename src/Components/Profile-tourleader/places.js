const places = [
    {
        Name: "Iran,Islamic Republic of",
        Cities: ['Alborz', 'Ardabil', 'Bushehr', 'Chaharmahal and Bakhtiari', 'East Azerbaijan', 'Isfahan', 'Fars', 'Gilan', 'Golestan', 'Hamedan', 'Hormozgan', 'Ilam', 'Kerman', 'Kermanshah', 'Khuzestan', 'Kohgiluyeh and Boyer-Ahmad', 'Kurdistan', 'Lorestan', 'Markazi', 'Mazandaran', 'North Khorasan', 'Qazvin', 'Qom', 'Razavi Khorasan', 'Semnan', 'Sistan and Baluchestan', 'South Khorasan', 'Tehran', 'West Azerbaijan', 'Yazd', 'Zanjan']
    },
    {
        Name: "China",
        Cities: ['Beijing (Peking)', 'Shanghai (Shangai)', 'Guangzhou (Canton)', 'Shenzhen (Shenzen)', 'Tianjin']
    },
    {
        Name: "India",
        Cities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Surat', 'Pune', 'Jaipur']
    },
    {
        Name: "Taiwan",
        Cities: ['Taipei', 'Kaohsiung', 'Taichung', 'Tainan', 'Banqiao']
    },
    {
        Name: "Saudi Arabia",
        Cities: ['Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Dammam']
    },
    {
        Name: "Czech Republic",
        Cities: ['Prague (Praha)', 'Brno (Brno-město)', 'Ostrava (Ostrava-město)', 'Plzeň (Plzeň-město)', 'Liberec (Liberec)']
    },
    {
        Name: "Netherlands",
        Cities: ['Amsterdam', 'Rotterdam', 'The Hague (Den Haag)', 'Utrecht (Utrecht)', 'Eindhoven']
    },
    {
        Name: "Thailand",
        Cities: ['Bangkok', 'Phuket City (Phuket)', 'Pattaya City (Pattaya)', 'Chiang Mai (Mueang Chiang Mai District)', 'Hua Hin District']
    },
    {
        Name: "Greece",
        Cities: ['Athens (Athina)', 'Thessaloniki (Thessaloniki)', 'Patras (Patra)', 'Heraklion (Iraklio)', 'Larissa']
    },
    {
        Name: "Denmark",
        Cities: ['Copenhagen (København)', 'Aarhus (Aarhus Kommune)', 'Odense (Odense Kommune)', 'Aalborg (Aalborg Kommune)', 'Esbjerg']
    },
    {
        Name: "Singapore",
        Cities: ['Singapore']
    },
    {
        Name: "France",
        Cities: ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice']
    },
    {
        Name: "Germany",
        Cities: ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt']
    },
    {
        Name: "Italy",
        Cities: ['Rome (Roma)', 'Milan (Milano)', 'Naples (Napoli)', 'Turin (Torino)', 'Palermo']
    },
    {
        Name: "Spain",
        Cities: ['Madrid', 'Barcelona', 'Valencia', 'Seville (Sevilla)', 'Zaragoza']
    },
    {
        Name: "United Kingdom",
        Cities: ['London', 'Birmingham', 'Glasgow', 'Liverpool', 'Bristol']
    },
    {
        Name: "Russia",
        Cities: ['Moscow (Moskva)', 'Saint Petersburg (Sankt-Peterburg)', 'Novosibirsk', 'Yekaterinburg (Sverdlovsk)', 'Nizhny Novgorod']
    },
    {
        Name: "Turkey",
        Cities: ['Istanbul (İstanbul)', 'Ankara (Ankara)', 'Izmir (İzmir)', 'Bursa (Bursa)', 'Adana']
    },
    {
        Name: "Poland",
        Cities: ['Warsaw (Warszawa)', 'Kraków (Cracow)', 'Łódź (Lodz)', 'Wrocław (Breslau)', 'Poznań']
    },
    {
        Name: "Ukraine",
        Cities: ['Kyiv (Kiev)', 'Kharkiv (Kharkov)', 'Odessa (Odesa)', 'Dnipro (Dnipropetrovsk)', 'Donetsk']
    },
    {
        Name: "Sweden",
        Cities: ['Stockholm', 'Gothenburg (Göteborg)', 'Malmö', 'Uppsala', 'Västerås']
    },
    {
        Name: "United States",
        Cities: ['New York City', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']
    },
    {
        Name: "Canada",
        Cities: ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Ottawa']
    },
    {
        Name: "Brazil",
        Cities: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza']
    },
    {
        Name: "Argentina",
        Cities: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'La Plata']
    },
    {
        Name: "Mexico",
        Cities: ['Mexico City (Ciudad de México)', 'Guadalajara (Jalisco)', 'Monterrey (Nuevo León)', 'Puebla (Puebla)', 'Tijuana (Baja California)']
    },
    {
        Name: "Colombia",
        Cities: ['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena']
    },
    {
        Name: "Peru",
        Cities: ['Lima (Lima)', 'Arequipa (Arequipa)', 'Trujillo (La Libertad)', 'Chiclayo (Lambayeque)', 'Piura (Piura)']
    }
].sort((country)=> country.Name)

export default places
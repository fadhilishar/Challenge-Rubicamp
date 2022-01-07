class Tyre {
  constructor(size, brand) {
    this.size = size;
    this.brand = brand;
  }
}

class Car {
  constructor(ban, pintu, kursi, variant, years, warranty) {
    this.pintu = pintu;
    this.ban = ban;
    this.kursi = kursi;
    this.variant = variant;
    this.years = years;
    this.engineNumber = CarFactory.generateNumber();
    this.warranty = warranty;
  }

  calculateGuarantee(simulationYear) {
    if (simulationYear - this.years > this.warranty) {
      return "expired";
    } else {
      return "active";
    }
  }
}

class Agya extends Car {
  constructor(years) {
    super(new Tyre("15inch", "Dunlop"), 4, 5, "Agya", years, 1);
  }
}

class Rush extends Car {
  constructor(years) {
    super(new Tyre("17inch", "Bridgestone"), 5, 7, "Rush", years, 3);
  }
}

class CarFactory {
  constructor() {
    this.jars = [];
  }

  static jumlahProduksi() {
    return Math.floor(Math.random() * 10) + 1;
  }

  static generateNumber() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  produce(years) {
    // produksi Agya
    for (let index = 0; index < CarFactory.jumlahProduksi(); index++) {
      this.jars.push(new Agya(years));
    }
    // produksi Rush
    for (let index = 0; index < CarFactory.jumlahProduksi(); index++) {
      this.jars.push(new Rush(years));
    }
  }

  simulasiGaransi(tahunSimulasi) {
    console.log(
      `Hasil Simulasi untuk semua mobil di tahun ${tahunSimulasi} yakni: `
    );
    this.jars.forEach((item, index) => {
      console.log(`
      No.             : ${index + 1}
      Engine Number   : ${item.engineNumber}
      variant         : ${item.variant}
      Tyre            : ${item.ban.brand} - ${item.ban.size}
      Seat            : ${item.kursi} seater
      Door            : ${item.pintu} doors
      Year Assembly   : ${item.years}
      Warranty        : ${item.warranty} years
      Status Warranty : ${item.calculateGuarantee(tahunSimulasi)}
      `);
    });
  }

  result() {
    console.log(`Hasil Produksi ini sebanyak ${this.jars.length}, yakni: `);
    this.jars.forEach((item, index) => {
      console.log(`
      No.             : ${index + 1}
      Engine Number   : ${item.engineNumber}
      variant         : ${item.variant}
      Year Assembly   : ${item.years}
      Tyre            : ${item.ban.brand} - ${item.ban.size}
      Seat            : ${item.kursi} seater
      Door            : ${item.pintu} doors
      
      `);
    });
  }
}

const Toyota = new CarFactory();
Toyota.produce(2021);
Toyota.produce(2022);
Toyota.result();

Toyota.simulasiGaransi(2024);

interface Printer {
    print(document: string): void;
}

interface Scanner {
    scan(document: string): void;
}

interface Fax {
    fax(document: string): void;
}

class SimplePrinter implements Printer {
    print(document: string): void {
        console.log(`SimplePrinter imprimiendo: ${document}`);
    }
}

class MultifunctionPrinter implements Printer, Scanner, Fax {
    print(document: string): void {
        console.log(`MultifunctionPrinter imprimiendo: ${document}`);
    }

    scan(document: string): void {
        console.log(`MultifunctionPrinter escaneando: ${document}`);
    }

    fax(document: string): void {
        console.log(`MultifunctionPrinter enviando fax: ${document}`);
    }
}

const simplePrinter = new SimplePrinter();
simplePrinter.print("contrato.pdf");

const multifunctionPrinter = new MultifunctionPrinter();
multifunctionPrinter.print("informe.pdf");
multifunctionPrinter.scan("informe.pdf");
multifunctionPrinter.fax("informe.pdf");

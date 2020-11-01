function customPrint(n, message) {
    if (n > 0) {
        console.log(message);
        // document.writeln(message);

        let nextNumber = n - 1;

        if (nextNumber > 0) {
            customPrint(nextNumber, message);
        }
    }
    else {
        return 0;
    }
}
customPrint(5, "Hello, World!");
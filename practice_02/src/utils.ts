const heros = [
    { fname: "Dwayne", lname: "Johnson", earning: "$89.4m" },
    { fname: "Chris", lname:  "Hemsworth", earning: "$76.4m" },
    { fname: "Robert", lname:  "Downey Jr", earning: "$66m" },
    { fname: "Akshay", lname:  "Kumar", earning: "$65m" },
    { fname: "Jackie", lname:  "Chan", earning: "$58m" },
    { fname: "Bradley", lname:  "Cooper", earning: "$57m" },
    { fname: "Adam", lname:  "Sandler", earning: "$57m" },
    { fname: "Chris", lname:  "Evans", earning: "$57m" }
];
var interval = 3000;

export function setInterval(int: number) {
    interval = int;
}
export function getFirstName(name: string, callback: any) {
    setTimeout(() => {
        const found = heros.find(x => x.fname == name);

        if(found) {
            callback(found.fname)
        } else {
            callback("Joker");
        }
    }, interval)
};

export function getLastName(name: string, callback: any) {
    setTimeout(() => {
        const found = heros.find(x => x.fname == name);
        if(found) {
            callback(found.lname)
        } else {
            callback("Joker");
        }
    }, interval)
};

export function getEarning(fname: string, lname: string, callback: any) {
    setTimeout(() => {
        const found = heros.find(x => x.fname == fname && x.lname == lname);
        if(found) {
            callback(found.earning);
        } else {
            callback("Loser");
        }
    }, interval)
};

export function getFirstNameAsPromise(name: string) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const found = heros.find(x => x.fname == name);
            if(found) {
                resolve(found.fname);
            } else {
                reject("Joker");
            }
        }, interval)    
    })
};

export function getLastNameAsPromise(name: string) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const found = heros.find(x => x.fname == name);
            if(found) {
                resolve(found.lname)
            } else {
                reject("Joker");
            }
        }, interval)    
    })
};

export function getEarningsAsPromise(fname: string, lname: string) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const found = heros.find(x => x.fname == fname && x.lname == lname);
            if(found) {
                resolve(found.earning);
            } else {
                reject("Loser");
            }
        }, interval)    
    })
};

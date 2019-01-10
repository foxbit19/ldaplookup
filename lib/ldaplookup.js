var exec = require('child_process').exec;

function ldaplookup(domain) {
    return new Promise(function (resolve, reject) {
        const command = 'nslookup -type=all _ldap._tcp.' + domain;

        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(`Got error code ${error} executing command: ` + command);
            } else {
                const addressRows = stdout.toString().match(/.*internet address.*/g);
                const addresses = [];

                addressRows.forEach((row) => {
                    const splittedRow = row.split('address =');
                    if (splittedRow.length === 2) {
                        addresses.push(splittedRow[1].trim());
                    }
                });

                resolve(addresses);
            }
        });
    });
}

exports = module.exports = ldaplookup;
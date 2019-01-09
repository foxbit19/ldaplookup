const ldaplookup = require('..');
const chai = require('chai');
const assert = chai.assert;
chai.use(require('chai-string'));

var stubSpawnOnce = require('stub-spawn-once').stubSpawnOnce;

describe('ldaplookup', async () => {

    it('should return address array is command is executed correctly', async () => {

        stubSpawnOnce('nslookup -type=srv _ldap._tcp.dom.local', 0, require('./correct_output'), null);

        const addresses = await ldaplookup('dom.local');

        assert.deepEqual(addresses, ['192.168.190.1', '192.168.190.2', '192.168.121.10', '192.168.121.1']);

    });

    it('should throw an error if there\'s something in stderr', async () => {

        stubSpawnOnce('nslookup -type=srv _ldap._tcp.wrong-domain', 0, null, 'Something bad happened!');

        let caughtError = null;
        try {
            await ldaplookup('wrong-domain');
        } catch (error) {
            caughtError = error;
        }

        assert.equal(caughtError, 'Something bad happened!');

    });

    it('should throw an error if exit code is not 0', async () => {

        stubSpawnOnce('nslookup -type=srv _ldap._tcp.another-domain', 1, null, null);

        let caughtError = null;
        try {
            await ldaplookup('another-domain');
        } catch (error) {
            caughtError = error;
        }

        assert.startsWith(caughtError, 'Got error code 1 executing command:');

    });

});
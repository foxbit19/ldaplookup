const ldaplookup = require('..');
const chai = require('chai');
const assert = chai.assert;
chai.use(require('chai-string'));

var stubSpawnOnce = require('stub-spawn-once').stubSpawnOnce;

describe('ldaplookup', async () => {

    it('should return address array is command is executed correctly', async () => {

        stubSpawnOnce('nslookup -type=all _ldap._tcp.dom.local', null, require('./correct_output'), null);

        const addresses = await ldaplookup('dom.local');

        assert.deepEqual(addresses, ['192.168.190.1', '192.168.190.2', '192.168.121.10', '192.168.121.1']);

    });

    it('should return address array even if there\'s something in stderr but error code is null', async () => {

        stubSpawnOnce('nslookup -type=all _ldap._tcp.wrong-domain', null, require('./correct_output'), 'Non-authoritative answer:');

        let caughtError = null;
        let addresses = null;
        try {
            addresses = await ldaplookup('wrong-domain');
        } catch (error) {
            caughtError = error;
        }

        assert.isNull(caughtError);
        assert.deepEqual(addresses, ['192.168.190.1', '192.168.190.2', '192.168.121.10', '192.168.121.1']);

    });

    it('should throw an error if exit code is not 0', async () => {

        stubSpawnOnce('nslookup -type=all _ldap._tcp.another-domain', 1, null, null);

        let caughtError = null;
        try {
            await ldaplookup('another-domain');
        } catch (error) {
            caughtError = error;
        }

        assert.startsWith(caughtError, 'Got error code 1 executing command:');

    });

});
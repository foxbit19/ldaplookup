var output = 'Server:  trb-dc2.trueblue.local\nAddress:  192.168.101.1\n\nNon-authoritative answer:\n_ldap._tcp.dom.local    SRV service location:\n          priority       = 0\n          weight         = 100\n          port           = 389\n          svr hostname   = dom-mi-dc1.dom.local\n_ldap._tcp.dom.local    SRV service location:\n          priority       = 0\n          weight         = 100\n          port           = 389\n          svr hostname   = dom-mi-dc2.dom.local\n_ldap._tcp.dom.local    SRV service location:\n          priority       = 0\n          weight         = 100\n          port           = 389\n          svr hostname   = dom-dc2.dom.local\n_ldap._tcp.dom.local    SRV service location:\n          priority       = 0\n          weight         = 100\n          port           = 389\n          svr hostname   = dom-dc1.dom.local\n\ndom-mi-dc1.dom.local\tinternet address = 192.168.190.1\ndom-mi-dc2.dom.local\tinternet address = 192.168.190.2\ndom-dc2.dom.local\tinternet address = 192.168.121.10\ndom-dc1.dom.local\tinternet address = 192.168.121.1';

module.exports = output;
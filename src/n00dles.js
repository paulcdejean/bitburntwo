var reverse = require('reverse-string');

export async function main(ns) {
	ns.tprint(reverse("Hello world"));
}

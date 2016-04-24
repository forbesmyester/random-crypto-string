/// <reference path="../typings/main.d.ts" />
import generateRandomString from '../index';
import {expect} from 'chai';

describe('generateRandomString says...',function() {
	it('will generate strings of different lengths',function(done: any) {
		generateRandomString(8,function(err,ap) {
			expect(ap.length).to.equal(8);
			expect(ap).to.match(/^[A-Za-z0-9]+$/);
			generateRandomString(16,function(err,ap) {
				expect(ap.length).to.equal(16);
				expect(ap).to.match(/^[A-Za-z0-9]+$/);
				generateRandomString(22,function(err,ap) {
					expect(ap.length).to.equal(22);
					expect(ap).to.match(/^[A-Za-z0-9]+$/);
					done();
				});
			});
		});
	});
});

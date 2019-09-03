import generateRandomString from '../src/index';
import test from 'tape';

test('generateRandomString says...', function(assert) {
    generateRandomString(8, function(_err, ap) {
        assert.is((<string>ap).length, 8);
        assert.true((<string>ap).match(/^[A-Za-z0-9]+$/));
        generateRandomString(16, function(_err, ap) {
            assert.is((<string>ap).length, 16);
            assert.true((<string>ap).match(/^[A-Za-z0-9]+$/));
            generateRandomString(22, function(_err,ap) {
                assert.is((<string>ap).length, 22);
                assert.true((<string>ap).match(/^[A-Za-z0-9]+$/));
                assert.end();
            });
        });
    });
});


test('generateRandomString promise...', function(assert) {
    generateRandomString(22)
        .then(function(s) {
            assert.is(s.length, 22);
            assert.end();
        })
        .catch(function(_e) {
            assert.fail()
        });
});

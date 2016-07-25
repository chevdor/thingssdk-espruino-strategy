/* Build file */
'use strict';

const rollup = require('rollup').rollup;
const babel = require('rollup-plugin-babel');

module.exports = function build(entry) {
    return done => {
        console.log("Treeshaking ES2015");
        rollup({
            entry,
            plugins: [
                babel({
                    presets: ['es2015-rollup']
                })
            ]
        }).then(bundle => {
            let result = bundle.generate({
                format: 'cjs'
            });
            done(null, result.code);
        }).catch(done);
    };
};
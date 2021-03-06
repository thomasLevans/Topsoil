/*
* Copyright 2015 CIRDLES.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

"use strict";

describe("NewtonMethod", function() {
    it("should verify a self-determined oracle", function() {
        expect(newtonMethod(wetherill.x, 0)).toEqual(newtonMethod(wetherill.x, 0));
    });
    describe("execution time", function() {
        beforeEach(function() {
            var startT = new Date().getTime();
            if (newtonMethod(wetherill.x, 1)) {
                this.t = (new Date().getTime()) - startT;
            }
        });
        it("should complete execution in less than 100 milliseconds", function() {
            expect(this.t).toBeLessThan(100);
        });
    });
    describe("root accuracy", function() {
        beforeEach(function() {
            this.f = function (x) {
                return Math.pow(x, 7) - 1000;
            };
            this.f.prime = function (x) {
                return 7 * Math.pow(x, 6);
            };
        });
        it("should return the root of the given function within two decimal point precision", function() {
            expect(newtonMethod(this.f)).toBeCloseTo(2.69008741, 1);
        });
    });
});

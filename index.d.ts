// Type definitions for keypair 1.0
// Project: https://www.npmjs.com/package/keypair
// Definitions by: eskelter <https://github.com/eskelter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2
declare namespace keypair {
    export interface KeypairOptions {
        bits?: number;
        e?: number;
    }
    export interface KeypairResults {
        public: string;
        private: string;
    }
}

/**
 * Get an RSA PEM key pair.
 * @param opts
 */
declare function keypair(opts?: keypair.KeypairOptions): keypair.KeypairResults;
export = keypair;

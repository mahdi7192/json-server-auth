// tslint:disable:no-implicit-dependencies ban-types no-namespace

declare type ArgumentType<F extends Function> = F extends (arg: infer Arg) => any ? Arg : never

declare namespace Express {
	export interface Application {
		/**
		 * @see https://github.com/typicode/lowdb
		 * TODO: better typings
		 */
		db?: {
			_: import('lodash').LoDashStatic
			getState: () => any
			setState: (state: any) => any
			get: (path: string) => any
			set: (path: string, value?: any) => any
			unset: (path: string) => any
			has: (path: string) => any
			defaults: (collections: object) => any
			read: () => any
			write: () => any
		}
	}

	export interface Request {
		// claims?: ReturnType<typeof import('jsonwebtoken').decode>
		claims?: { email: string; iat: number; exp: number; sub: string }
	}
}

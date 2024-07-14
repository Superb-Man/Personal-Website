export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","icons/angular.svg","icons/aws.svg","icons/bash.svg","icons/bitbucket.svg","icons/bootstrap.svg","icons/c.svg","icons/chrome.svg","icons/cpp.svg","icons/creart.svg","icons/css.svg","icons/css3.svg","icons/debug.svg","icons/devops.svg","icons/docker.svg","icons/dragon.png","icons/dragon2.png","icons/express.svg","icons/git.svg","icons/gitlab.svg","icons/html.svg","icons/java.svg","icons/jira.svg","icons/js.svg","icons/json.svg","icons/material.svg","icons/mongodb.svg","icons/nextjs.svg","icons/nginx.svg","icons/nodejs.svg","icons/openGL.svg","icons/postgresql.svg","icons/postman.svg","icons/python.svg","icons/python3.svg","icons/react.svg","icons/redux.svg","icons/scss.svg","icons/seaflux.svg","icons/storybook.svg","icons/svelte.svg","icons/tailwindcss.svg","icons/ts.svg","icons/vite.svg","icons/vscode.svg","mylogo.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.2019b41e.js","app":"_app/immutable/entry/app.36fce024.js","imports":["_app/immutable/entry/start.2019b41e.js","_app/immutable/chunks/scheduler.84683fb4.js","_app/immutable/chunks/singletons.6b6e18f3.js","_app/immutable/entry/app.36fce024.js","_app/immutable/chunks/scheduler.84683fb4.js","_app/immutable/chunks/index.9a359735.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/arts",
				pattern: /^\/arts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

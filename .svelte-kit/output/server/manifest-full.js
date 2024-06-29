export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["icons/angular.svg","icons/aws.svg","icons/bitbucket.svg","icons/bootstrap.svg","icons/chrome.svg","icons/creart.svg","icons/css3.svg","icons/debug.svg","icons/devops.svg","icons/docker.svg","icons/dragon.png","icons/dragon2.png","icons/express.svg","icons/git.svg","icons/gitlab.svg","icons/html.svg","icons/jira.svg","icons/js.svg","icons/json.svg","icons/material.svg","icons/mongodb.svg","icons/nextjs.svg","icons/nginx.svg","icons/nodejs.svg","icons/postman.svg","icons/react.svg","icons/redux.svg","icons/scss.svg","icons/seaflux.svg","icons/storybook.svg","icons/svelte.svg","icons/tailwindcss.svg","icons/ts.svg","icons/vscode.svg","mylogo.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.5dc89471.js","app":"_app/immutable/entry/app.b04d5ebe.js","imports":["_app/immutable/entry/start.5dc89471.js","_app/immutable/chunks/scheduler.e3b60afe.js","_app/immutable/chunks/singletons.dca128a4.js","_app/immutable/entry/app.b04d5ebe.js","_app/immutable/chunks/scheduler.e3b60afe.js","_app/immutable/chunks/index.264fd9a2.js"],"stylesheets":[],"fonts":[]},
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

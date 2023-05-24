module.exports = {
  apps : [{
    name   : "api",
    script : "./api.tawan475.dev.js",
	cwd: "./api.tawan475.dev",
	"watch": true,
    "ignore_watch": [
      "node_modules",
      "*.log"
    ],
	env_production: {
       NODE_ENV: "production"
    },
    env_development: {
       NODE_ENV: "development"
    }
  },
  {
    name   : "go",
    script : "./go.tawan475.dev.js",
	cwd: "./go.tawan475.dev",
	"watch": true,
    "ignore_watch": [
      "node_modules",
      "*.log"
    ],
	env_production: {
       NODE_ENV: "production"
    },
    env_development: {
       NODE_ENV: "development"
    }
  },
  {
    name   : "webserver",
    script : "./tawan475.dev.js",
	cwd: "./tawan475.dev-webserver",
	"watch": true,
    "ignore_watch": [
      "node_modules",
      "*.log"
    ],
	env_production: {
       NODE_ENV: "production"
    },
    env_development: {
       NODE_ENV: "development"
    }
  },
  {
    name   : "portfolio",
    script : "./portfolio.tawan475.dev.js",
	cwd: "./portfolio.tawan475.dev",
	"watch": true,
    "ignore_watch": [
      "node_modules",
      "*.log"
    ],
	env_production: {
       NODE_ENV: "production"
    },
    env_development: {
       NODE_ENV: "development"
    }
  }]
}

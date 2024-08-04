module.exports = {
    apps: [{
        name : "restaurant",
        cwd : "./",
        script : "./dist/server.js",
        watch : false,
        env_production: {
            NODE_ENV : "production"
        },
        env_development : {
            NODE_ENV : "development"
        },
        instances: 1,
        exec_mode: "cluster"
        // FORK AND CLUSTER MODE = difference in fork CPU uses only one yadro and CLUSTER uses every four yadros
    }]
}
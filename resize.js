const datadog = require('datadog-js');

const graph = datadog.graph.create({
    container: document.getElementById('graph-container'),
    url: 'https://datadoghq.com/graph/embed/public/12345',
    autoResize: true,
});

graph.render();
